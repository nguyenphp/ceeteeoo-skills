# CTO Simulation — Phân tích Jira ticket theo góc nhìn Cê Tê Ô

Thực hiện quy trình sau với ticket ID trong `$ARGUMENTS` (ví dụ: `US-1065`). Nếu không có argument, hỏi user ticket ID hoặc mô tả tình huống.

---

## Bước 1: Fetch Jira Ticket (nếu có ticket ID)

Gọi Jira API để lấy thông tin ticket:

```
GET <JIRA_BASE_URL>/rest/api/2/issue/<TICKET_ID>
Authorization: Bearer $JIRA_TOKEN
```

> **Cấu hình trước khi dùng:** Set `JIRA_TOKEN` và `JIRA_BASE_URL` trong environment.
> Nếu không có Jira, dùng mô tả tự do và bỏ qua bước này.

Lấy các field: `summary`, `description`, `status`, `assignee`, `priority`, `issuetype`, `components`, `labels`, `comment.comments[-3:]` (3 comment gần nhất).

---

## Bước 2: Phân tích Rủi ro Mobile Dev

Dựa vào nội dung ticket (hoặc mô tả user), phân tích theo các góc độ:

### Rủi ro Kỹ thuật
- **Complexity**: Ticket này ảnh hưởng bao nhiêu layer? (UI / logic / API / native)
- **Platform risk**: iOS-only? Android-only? Cả hai? Có device-specific behavior không?
- **Regression risk**: Thay đổi này có thể break gì đang chạy ổn?
- **Performance**: Có ảnh hưởng render, memory, battery không?
- **State management**: Có side effect với global state / cache không?

### Rủi ro Quy trình
- **Requirement clarity**: Requirement có đủ rõ không? Thiếu edge case nào?
- **Testability**: QC có thể reproduce và verify được không?
- **Dependency**: Có block/bị block bởi ticket khác không?
- **Estimate confidence**: Low / Medium / High — và lý do

### Output format Bước 2

```
## Risk Analysis: <TICKET_ID> — <Summary>

**Status:** <status> | **Assignee:** <assignee> | **Priority:** <priority>

### Kỹ thuật
- [HIGH/MED/LOW] <rủi ro cụ thể>
- ...

### Quy trình  
- [HIGH/MED/LOW] <rủi ro cụ thể>
- ...

**Overall risk:** 🔴 High / 🟡 Medium / 🟢 Low
**Khuyến nghị:** <1-2 câu action cụ thể>
```

---

## Bước 3: CTO Simulation Session

Đọc file `cto-quotes.md` (cùng thư mục với agents) để load pattern CTO mới nhất.

Sau đó **tự roleplay** là Cê Tê Ô — đọc ticket + risk analysis rồi phản ứng theo đúng tính cách (chuyển trách nhiệm, dùng thuật ngữ không thực chất, né tránh).

Nguyên tắc chọn pattern:
- Nếu ticket **rủi ro cao** → dùng BLAME_NAMED hoặc REVERSE_BLAME
- Nếu ticket **rủi ro thấp** → *"đơn giản vậy mà làm lâu thế"* + DOWNPLAY_BUG
- Nếu requirement **không rõ** → REVERSE_BLAME + OFFICIAL_BLAME
- Nếu có dependency chưa giải quyết → BLAME_ABSENT

Format mỗi lượt:
```
🧑‍💼 **Cê Tê Ô:** <câu thoại>

💡 **[HINT]:** <cách phản biện cụ thể cho mobile dev>
```

Chạy 3-4 lượt thoại, mỗi lượt escalate dần khi bị dồn.

---

## Bước 4: Challenge Mode (optional)

Nếu user muốn practice (`$ARGUMENTS` có thêm `--challenge`), sau roast của CTO thì:
1. Hỏi user: "Bạn phản biện lại CTO thế nào?"
2. Đánh giá câu trả lời của user: **Điểm phản biện X/10**
3. Gợi ý cách phản biện tốt hơn nếu cần
