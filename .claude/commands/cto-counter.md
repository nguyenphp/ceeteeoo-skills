# CTO Counter — Phân tích hội thoại thật + tạo bộ phản biện có dẫn chứng

Nhận đoạn hội thoại từ `$ARGUMENTS` hoặc từ user paste vào.

Nếu không có input → hỏi: "Paste đoạn hội thoại vào đây (chat, Slack, meeting transcript...)."

---

## Bước 1: Đọc pattern database

Đọc `cto-quotes.md` (cùng thư mục với agents) để load toàn bộ pattern.

---

## Bước 2: Phân tích hội thoại

Với mỗi câu/đoạn của CTO trong hội thoại:

1. **Identify pattern** — map vào pattern nào trong database
2. **Decode hidden move** — ý đồ thật phía sau câu nói
3. **Đánh giá mức độ** — 🟢 Common / 🟡 Advanced / 🔴 Nguy hiểm

---

## Bước 3: Tạo bộ counter-argument

Với mỗi câu CTO, output theo format sau:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🧑‍💼 CTO nói: "[câu nguyên văn]"

🎯 Pattern: [TÊN_PATTERN] — [mức độ 🟢/🟡/🔴]
🎭 Hidden move: [ý đồ thật]

💬 Phản biện ngay lập tức:
"[câu phản biện — ngắn, dùng được ngay trong cuộc họp]"

📚 Dẫn chứng để backup:
• [nguyên tắc / khái niệm kỹ thuật + giải thích ngắn]
• [nếu có link uy tín: tên + URL]

🔒 Câu chốt — nếu ổng vẫn tiếp tục né:
"[câu anchor accountability, buộc phải trả lời trực tiếp]"
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Nguồn dẫn chứng theo pattern

Khi tạo dẫn chứng, ưu tiên theo thứ tự:

### Kỹ thuật / Engineering
- **Bus Factor** — nếu chỉ 1 người biết 1 hệ thống, risk khi người đó nghỉ. Ref: [Wikipedia](https://en.wikipedia.org/wiki/Bus_factor)
- **Absence of evidence ≠ Evidence of absence** — không tìm ra bug ≠ không có bug. Ref: Carl Sagan / logic cơ bản
- **Regression risk** — thay đổi có thể break tính năng đang chạy ổn
- **Context switching cost** — chuyển task mất 23 phút để focus lại. Ref: [Gloria Mark / UC Irvine study](https://ics.uci.edu/~gmark/chi08-mark.pdf)
- **Technical debt** — shortcuts hôm nay = cost gấp nhiều lần sau. Ref: [Martin Fowler](https://martinfowler.com/bliki/TechnicalDebt.html)

### Process / Agile
- **Definition of Done** — team cần thống nhất "xong" nghĩa là gì trước khi ship
- **Acceptance Criteria** — requirement không có AC = không thể verify được
- **Sprint Planning best practices** — Scrum Guide: [scrumguides.org](https://scrumguides.org/scrum-guide.html)
- **Blameless Postmortem** — Google SRE culture: focus root cause, không blame người. Ref: [Google SRE Book](https://sre.google/sre-book/postmortem-culture/)

### Tâm lý / Workplace
- **Psychological Safety** — Amy Edmondson / Google Project Aristotle: team an toàn tâm lý perform tốt hơn. Ref: [re:Work Google](https://rework.withgoogle.com/guides/understanding-team-effectiveness/steps/identify-dynamics-of-effective-teams/)
- **Gaslighting in workplace** — dán nhãn "overthinking" để dismiss concern hợp lệ
- **Survivorship bias** — "squad kia không bug" có thể vì họ làm feature ít risk hơn, không phải giỏi hơn

### Logic / Argumentation
- **Ad hominem** — attack người nói thay vì address argument = fallacy
- **False equivalence** — so sánh hai thứ không cùng baseline
- **Appeal to authority** — "mình làm CTO 10 năm" không phải argument kỹ thuật
- **Circular reasoning / Tautology** — dùng kết luận để chứng minh kết luận

---

## Bước 4: Tóm tắt chiến lược

Sau khi phân tích tất cả câu, output thêm:

```
═══════════════════════════════════════
📋 TỔNG KẾT CHIẾN LƯỢC

Patterns đang dùng: [liệt kê]
Điểm yếu nhất của lập luận CTO: [1-2 câu]

🎯 Nếu chỉ được nói 1 câu trong cuộc họp:
"[câu duy nhất — vừa counter pattern chính, vừa anchor accountability]"

📌 Không nhượng bộ điểm này:
[điều tuyệt đối không được accept — vì sao]
═══════════════════════════════════════
```
