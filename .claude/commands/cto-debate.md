# CTO Debate — Roleplay hoặc Report phản biện

Nhận input từ `$ARGUMENTS`:
- Jira ticket ID (VD: `US-1156`)
- Mô tả vấn đề tự do (VD: "tại sao cần thêm 3 ngày cho premium flow")
- Tình huống cụ thể (VD: "CTO muốn release dù còn 4 bug high")

Nếu là ticket ID → fetch Jira trước (dùng `$JIRA_TOKEN` từ env, hoặc hỏi user cung cấp token nếu chưa có).
Nếu không có argument → hỏi user mô tả vấn đề.

---

## Bước 1: Đọc context

Đọc file:
1. `cto-quotes.md` (cùng thư mục với agents) — pattern CTO
2. Nếu có ticket ID → fetch Jira API

> Nếu không có `$JIRA_TOKEN`, bỏ qua phần Jira và dùng mô tả tự do từ user.

---

## Bước 2: Hỏi chọn mode

Sau khi đọc xong context, hỏi user:

> **Bạn muốn dùng mode nào?**
>
> **[1] Roleplay** — Mình sẽ đóng vai CTO hỏi dồn, bạn phản biện lại. Kết thúc có chấm điểm.
>
> **[2] Report** — Mình tạo báo cáo đầy đủ: tất cả câu hỏi CTO có thể hỏi, câu trả lời phản biện kèm dẫn chứng, estimate theo từng role. Dùng để chuẩn bị trước meeting.

---

## MODE 1: Roleplay

Roleplay như Cê Tê Ô đang trong meeting. Detect pattern từ `cto-quotes.md` rồi attack đúng điểm yếu của vấn đề.

**Luật roleplay:**
- Mỗi lượt CTO nói 1-2 câu, không nói dài
- Bắt đầu từ pattern 🟢, escalate lên 🟡 → 🔴 nếu dev phản biện tốt
- Nếu dev không phản biện được → CTO tiếp tục né tránh và thắng
- Có pause/recover tự nhiên khi bị dồn

**Format:**
```
🧑‍💼 **Cê Tê Ô:** [câu thoại]

💡 **[HINT]:** [Pattern: TÊN] — [gợi ý phản biện theo 4 bước]
```

**Kết thúc session:**
- **Điểm phản biện:** X/10
- **Nhận xét:** [điểm tốt và cần cải thiện]
- **Top 2 kỹ thuật** nên dùng lần sau

---

## MODE 2: Report (HTML)

Sau khi phân tích xong, **tạo file HTML** tại đường dẫn:
`.claude/reports/cto-debate-<TICKET_ID_hoặc_slug>-<YYYYMMDD>.html`

Tạo thư mục nếu chưa có: `mkdir -p .claude/reports`

File HTML phải dùng inline CSS, không dùng external library, mở được bằng browser bình thường. Dùng design system sau:

```
Font: system-ui, -apple-system, sans-serif
Background: #f8f9fa
Card: white, border-radius: 12px, box-shadow nhẹ
Primary color: #2563eb (xanh)
Danger: #dc2626 (đỏ)
Warning: #d97706 (vàng)
Success: #16a34a (xanh lá)
Header: gradient #1e3a5f → #2563eb
```

**Cấu trúc HTML gồm các section:**

**Header:**
- Logo/title "CTO Debate Report"
- Tên vấn đề / ticket ID
- Ngày tạo

**Section 1 — Tóm tắt** (card xanh nhạt)
- Vấn đề, ai liên quan, conflict point

**Section 2 — Câu hỏi CTO có thể hỏi** (accordion hoặc card list)
- Mỗi câu là 1 card với badge mức độ 🟢🟡🔴
- Pattern name, câu CTO sẽ nói, hidden move
- Click để expand/collapse (dùng `<details><summary>`)

**Section 3 — Phản biện + Dẫn chứng**
- Mỗi item map 1-1 với Section 2
- 4 bước Clarify → Assumption → Risk → Accountability
- Dẫn chứng highlight màu vàng nhạt
- Badge ticket number link được (nếu có)

**Section 4 — Estimate theo role** (table đẹp)
- Striped rows, có tổng ở cuối
- Highlight dependency bằng màu cam nhạt

**Section 5 — Câu chốt meeting** (3 card Level 1/2/3)
- Level 1: viền xanh
- Level 2: viền vàng
- Level 3: viền đỏ
- Copy button cho mỗi câu (dùng JS inline)

**Section 6 — Proceed / Block / Document** (3 cột)
- ✅ Proceed: nền xanh lá nhạt
- 🚫 Block: nền đỏ nhạt
- 📝 Document: nền vàng nhạt

**Section 7 — Prep Card** (sticky card hoặc nổi bật)
- Background tối #1e3a5f, text trắng
- 4 dòng to rõ: VẤN ĐỀ / SỐ LIỆU KEY / CÂU CHỐT / KHÔNG NHƯỢNG BỘ
- Nút "Print" để in ra giấy mang vào họp

Sau khi tạo file xong, in ra đường dẫn để user mở:
> ✅ Report đã tạo: `.claude/reports/<filename>.html`
> Mở bằng: `open <path>`

---

**Nội dung report** (điền vào HTML):

---

### PHẦN 1: Tóm tắt vấn đề

- Vấn đề/task là gì
- Ai liên quan
- Tại sao đang có conflict với CTO

---

### PHẦN 2: Tất cả câu hỏi CTO có thể hỏi

Dựa vào pattern trong `cto-quotes.md` + context vấn đề, liệt kê **toàn bộ** câu hỏi/lý lẽ CTO khả năng sẽ dùng:

```
🎯 [TÊN PATTERN] — Mức độ: 🟢/🟡/🔴
❓ CTO sẽ hỏi/nói: "..."
🎭 Hidden move: [ý đồ thật phía sau]
```

Không bỏ sót — kể cả câu hỏi nhỏ, câu so sánh squad, câu đổ trách nhiệm.

---

### PHẦN 3: Câu trả lời phản biện + Dẫn chứng

Với **mỗi câu** ở Phần 2, trả lời theo 4 bước:

```
❓ CTO: "..."

1. CLARIFY:      "Anh ơi, [làm rõ scope/định nghĩa]..."
2. ASSUMPTION:   "Assumption ở đây là [X] — không đúng vì [dẫn chứng cụ thể]..."
3. RISK:         "Nếu đi theo hướng đó, risk là: [con số / hệ quả thực tế]..."
4. ACCOUNTABILITY: "Ai confirm quyết định này nếu risk xảy ra?"

✅ Dẫn chứng: [ticket number / data / quote / nguyên tắc kỹ thuật]
```

---

### PHẦN 4: Estimate theo role

| Role | Người | Việc cụ thể | Estimate | Ghi chú |
|---|---|---|---|---|
| Mobile | | [task] | X ngày | |
| Backend | | [task] | X ngày | Cần xong trước Mobile nếu có dependency |
| QC | | [test case cụ thể] | X ngày | Sau khi dev xong |
| BA | | [clarify / AC] | X giờ | Cần làm trước sprint |

**Tổng sequential:** X ngày
**Parallel thực tế:** Y ngày

---

### PHẦN 5: Câu chốt trong meeting — 3 level

**Level 1 — Mở đầu nhẹ, hỏi confirm:**
> "..."

**Level 2 — Có data, đẩy decision về CTO:**
> "..."

**Level 3 — Anchor accountability, không thể né:**
> "..."

---

### PHẦN 6: Proceed / Block / Document

```
✅ CÓ THỂ PROCEED nếu:
- [điều kiện cụ thể]

🚫 PHẢI BLOCK nếu:
- [điều kiện cụ thể]

📝 PHẢI DOCUMENT trước khi làm:
- [ai confirm gì, ở đâu, format nào]
```

---

### PHẦN 7: Prep card — mang vào meeting

```
VẤN ĐỀ: [1 câu]
SỐ LIỆU KEY: [2-3 con số mạnh nhất]
CÂU CHỐT: [1 câu duy nhất nếu chỉ được nói 1 câu]
KHÔNG NHƯỢNG BỘ: [điều tuyệt đối không được accept]
```
