---
name: cto-counter
description: Paste a real conversation where the CTO is deflecting or blame-shifting, get an instant counter-argument toolkit with specific rebuttals, engineering principles, and closing statements. Invoke when user has a real chat/Slack/meeting excerpt to analyze.
version: 1.0.0
tags: [training, counter, evidence, vietnamese, soft-skills]
---

Nhận đoạn hội thoại từ user (chat, Slack, meeting transcript...).
Nếu không có input → hỏi: "Paste đoạn hội thoại vào đây."

---

## Bước 1: Đọc pattern database

Đọc `cto-quotes.md` (cùng thư mục với skills).

---

## Bước 2: Phân tích từng câu CTO

Với mỗi câu/đoạn của CTO:
1. **Identify pattern** — map vào pattern trong database
2. **Decode hidden move** — ý đồ thật phía sau
3. **Đánh giá mức độ** — 🟢 Common / 🟡 Advanced / 🔴 Nguy hiểm

---

## Bước 3: Tạo bộ counter-argument

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

### Kỹ thuật / Engineering
- **Bus Factor** — nếu chỉ 1 người biết hệ thống, risk khi họ nghỉ. Ref: [Wikipedia](https://en.wikipedia.org/wiki/Bus_factor)
- **Absence of evidence ≠ Evidence of absence** — không tìm ra bug ≠ không có bug
- **Context switching cost** — chuyển task mất 23 phút để focus lại. Ref: [Gloria Mark / UC Irvine](https://ics.uci.edu/~gmark/chi08-mark.pdf)
- **Technical debt** — shortcuts hôm nay = cost gấp nhiều lần sau. Ref: [Martin Fowler](https://martinfowler.com/bliki/TechnicalDebt.html)

### Process / Agile
- **Definition of Done** — team cần thống nhất "xong" nghĩa là gì trước khi ship
- **Blameless Postmortem** — Google SRE: focus root cause, không blame người. Ref: [Google SRE Book](https://sre.google/sre-book/postmortem-culture/)
- **Scrum Guide** — planning, acceptance criteria, sprint goals. Ref: [scrumguides.org](https://scrumguides.org/scrum-guide.html)

### Tâm lý / Workplace
- **Psychological Safety** — Google Project Aristotle: team an toàn tâm lý perform tốt hơn. Ref: [re:Work Google](https://rework.withgoogle.com/guides/understanding-team-effectiveness)
- **Survivorship bias** — "squad kia không bug" có thể vì họ làm feature ít risk hơn

### Logic / Argumentation
- **Ad hominem** — attack người nói thay vì address argument = logical fallacy
- **False equivalence** — so sánh hai thứ không cùng baseline
- **Appeal to authority** — "mình làm CTO 10 năm" không phải argument kỹ thuật
- **Circular reasoning** — dùng kết luận để chứng minh kết luận

---

## Bước 4: Tóm tắt chiến lược

```
═══════════════════════════════════════
📋 TỔNG KẾT CHIẾN LƯỢC

Patterns đang dùng: [liệt kê]
Điểm yếu nhất của lập luận CTO: [1-2 câu]

🎯 Nếu chỉ được nói 1 câu trong cuộc họp:
"[câu duy nhất — counter pattern chính + anchor accountability]"

📌 Không nhượng bộ điểm này:
[điều tuyệt đối không được accept — vì sao]
═══════════════════════════════════════
```
