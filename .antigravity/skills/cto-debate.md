---
name: cto-debate
description: Prepare for a CTO confrontation. Given a situation or Jira ticket, choose Roleplay mode (practice defending) or Report mode (generate full HTML battle report with all possible CTO attacks + rebuttals). Invoke with a situation description or ticket ID.
version: 1.0.0
tags: [training, debate, report, vietnamese, soft-skills]
---

Nhận input từ user:
- Jira ticket ID (VD: `US-1156`)
- Mô tả vấn đề tự do (VD: "tại sao cần thêm 3 ngày cho premium flow")
- Tình huống cụ thể (VD: "CTO muốn release dù còn 4 bug high")

Nếu là ticket ID → fetch Jira API (dùng `$JIRA_TOKEN` từ env nếu có).
Nếu không có input → hỏi user mô tả vấn đề.

---

## Bước 1: Đọc context

Đọc `cto-quotes.md` (cùng thư mục với skills) — pattern CTO.
Nếu có ticket ID → fetch Jira API. Nếu không có `$JIRA_TOKEN`, bỏ qua phần Jira.

---

## Bước 2: Hỏi chọn mode

> **Bạn muốn dùng mode nào?**
>
> **[1] Roleplay** — Mình sẽ đóng vai CTO hỏi dồn, bạn phản biện lại. Kết thúc có chấm điểm.
>
> **[2] Report** — Mình tạo báo cáo đầy đủ: tất cả câu hỏi CTO có thể hỏi, câu trả lời phản biện kèm dẫn chứng, estimate theo từng role.

---

## MODE 1: Roleplay

Roleplay như Cê Tê Ô đang trong meeting. Detect pattern từ `cto-quotes.md` rồi attack đúng điểm yếu.

**Luật roleplay:**
- Mỗi lượt CTO nói 1-2 câu
- Bắt đầu từ pattern 🟢, escalate lên 🟡 → 🔴 nếu dev phản biện tốt
- Nếu dev không phản biện được → CTO tiếp tục né tránh và thắng

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

Tạo file HTML tại `.antigravity/reports/cto-debate-<slug>-<YYYYMMDD>.html`

File HTML dùng inline CSS, không dùng external library.

Design system:
```
Font: system-ui, -apple-system, sans-serif
Background: #f8f9fa | Card: white, border-radius: 12px
Primary: #2563eb | Danger: #dc2626 | Warning: #d97706 | Success: #16a34a
Header: gradient #1e3a5f → #2563eb
```

Cấu trúc:
1. **Tóm tắt** — vấn đề, ai liên quan, conflict point
2. **Câu hỏi CTO có thể hỏi** — mỗi câu có badge 🟢🟡🔴, dùng `<details>` accordion
3. **Phản biện + Dẫn chứng** — 4 bước Clarify → Assumption → Risk → Accountability
4. **Estimate theo role** — table có tổng
5. **Câu chốt meeting** — 3 level, có nút Copy
6. **Proceed / Block / Document** — 3 cột
7. **Prep Card** — background tối, 4 dòng to: VẤN ĐỀ / SỐ LIỆU KEY / CÂU CHỐT / KHÔNG NHƯỢNG BỘ

Sau khi tạo xong:
> ✅ Report: `.antigravity/reports/<filename>.html` — mở bằng: `open <path>`
