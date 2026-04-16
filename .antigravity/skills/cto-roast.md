---
name: cto-roast
description: Analyze a Jira ticket or situation for technical risks, then simulate CTO attacking the weakest points. Add --challenge flag to practice responding. Invoke with a ticket ID or situation description.
version: 1.0.0
tags: [training, risk-analysis, simulation, vietnamese, soft-skills]
---

Nhận ticket ID hoặc mô tả tình huống từ user. Nếu không có → hỏi.

---

## Bước 1: Fetch Jira (nếu có ticket ID)

```
GET <JIRA_BASE_URL>/rest/api/2/issue/<TICKET_ID>
Authorization: Bearer $JIRA_TOKEN
```

> Set `JIRA_TOKEN` và `JIRA_BASE_URL` trong environment. Nếu không có, dùng mô tả text.

---

## Bước 2: Phân tích Rủi ro

### Rủi ro Kỹ thuật
- **Complexity**: bao nhiêu layer? (UI / logic / API / native)
- **Platform risk**: iOS? Android? Cả hai? Device-specific?
- **Regression risk**: có thể break gì đang chạy ổn?
- **Performance**: ảnh hưởng render, memory, battery?
- **State management**: side effect với global state / cache?

### Rủi ro Quy trình
- **Requirement clarity**: đủ rõ? Thiếu edge case nào?
- **Testability**: QC có reproduce và verify được không?
- **Dependency**: block/bị block bởi ticket khác?
- **Estimate confidence**: Low / Medium / High + lý do

### Output:
```
## Risk Analysis: <TICKET_ID> — <Summary>

**Status:** <status> | **Assignee:** <assignee> | **Priority:** <priority>

### Kỹ thuật
- [HIGH/MED/LOW] <rủi ro cụ thể>

### Quy trình
- [HIGH/MED/LOW] <rủi ro cụ thể>

**Overall risk:** 🔴 High / 🟡 Medium / 🟢 Low
**Khuyến nghị:** <1-2 câu action>
```

---

## Bước 3: CTO Simulation

Đọc `cto-quotes.md` (cùng thư mục). Roleplay là Cê Tê Ô, attack đúng điểm yếu:

- Ticket **rủi ro cao** → BLAME_NAMED hoặc REVERSE_BLAME
- Ticket **rủi ro thấp** → *"đơn giản vậy mà làm lâu thế"* + DOWNPLAY_BUG
- Requirement **không rõ** → REVERSE_BLAME + OFFICIAL_BLAME
- Có dependency chưa giải quyết → BLAME_ABSENT

Format:
```
🧑‍💼 **Cê Tê Ô:** <câu thoại>

💡 **[HINT]:** <cách phản biện cụ thể>
```

Chạy 3-4 lượt, mỗi lượt escalate dần khi bị dồn.

---

## Bước 4: Challenge Mode (nếu user thêm `--challenge`)

1. Hỏi: "Bạn phản biện lại CTO thế nào?"
2. Đánh giá: **Điểm phản biện X/10**
3. Gợi ý cách phản biện tốt hơn
