# Cê Tê Ô Skills

Roleplay training giúp dev luyện kỹ năng phản biện trước stakeholder khó tính.

Tích hợp vào **Claude Code**, **Cursor**, **Antigravity**, **Windsurf**, **Copilot**.

---

## Ví dụ output

<details>
<summary><b>/cto-counter</b> — paste hội thoại thật, nhận counter-argument ngay</summary>

**Input:** Paste đoạn này vào sau khi gõ `/cto-counter`

```
CTO: "cảm giác như tính năng live activity này em code lỗi á"
```

---

**Output:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🧑‍💼 CTO nói: "cảm giác như tính năng live activity này em code lỗi á"

🎯 Pattern: OPINION_AS_FACT — 🟡 Advanced
🎭 Hidden move: Dùng "cảm giác" để đặt verdict mà không cần evidence —
   buộc dev phải defensive và chứng minh mình vô tội thay vì yêu cầu
   data. Nếu dev không phản biện, assumption "em code lỗi" mặc định thành sự thật.

💬 Phản biện ngay lập tức:
"Anh có reproduce steps cụ thể không? Device nào, iOS version nào,
 flow nào? Tụi em cần basis để investigate — không thì không biết
 fix chỗ nào."

📚 Dẫn chứng để backup:
• Absence of evidence ≠ evidence of absence — "cảm giác có lỗi"
  không phải bug report. Cần: reproduce steps + device + log.
• Live Activity chạy trên ActivityKit (iOS 16.1+) — behavior
  thay đổi theo iOS version, lock screen policy, và notification
  permission. "Lỗi" có thể là platform behavior, không phải code.
• Burden of proof thuộc về người claim — người nói "có lỗi"
  cần cung cấp evidence, không phải dev phải chứng minh ngược.

🔒 Câu chốt — nếu ổng vẫn tiếp tục né:
"Anh share log hoặc mô tả reproduce steps thì tụi em investigate
 ngay. Nếu không có steps cụ thể thì đây là assumption, không phải
 bug — tụi em không thể fix assumption."
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

═══════════════════════════════════════
📋 TỔNG KẾT CHIẾN LƯỢC

Pattern đang dùng: OPINION_AS_FACT
Điểm yếu của lập luận: Không có evidence — toàn bộ claim dựa
trên "cảm giác", không có reproduce steps, không có log, không
có device cụ thể.

🎯 Nếu chỉ được nói 1 câu:
"Anh có reproduce steps không? Không có steps thì tụi em
 không investigate được."

📌 Không nhượng bộ điểm này:
Không nhận "lỗi" khi chưa có evidence. Nhận investigate thì được,
nhận "em code lỗi" thì không — vì nếu nhận, assumption đó sẽ
được ghi nhận và dùng lại sau.
═══════════════════════════════════════
```

</details>

---

## Đóng góp câu mẫu

Nghe được câu hay từ CTO? Thêm vào kho để mọi người cùng luyện.

**Cách dễ nhất — không cần biết git:**

👉 [Tạo Issue mới](../../issues/new?template=new-quote.yml) → điền form → submit

**Cách đầy đủ hơn — tự merge:**

1. Fork repo này
2. Thêm vào [`.claude/agents/cto-quotes.md`](.claude/agents/cto-quotes.md) theo format:

```markdown
### [CATEGORY] — <context ngắn>
> "câu nói nguyên văn"

**Hidden move:** <ý đồ thật>
**Kĩ thuật dùng:** <tên kĩ thuật>
**Phản biện:** <câu counter dùng được ngay trong họp>
```

3. Tạo PR — CI sẽ tự check format

---

## Cài đặt

**Cài npm CLI một lần:**

```bash
npm install -g ceeteeoo
```

**Sau đó, trong project muốn dùng:**

```bash
ceeteeoo init --ai claude      # Claude Code
ceeteeoo init --ai cursor      # Cursor
ceeteeoo init --ai antigravity # Antigravity
ceeteeoo init --ai windsurf    # Windsurf
ceeteeoo init --ai copilot     # GitHub Copilot
ceeteeoo init --ai all         # Tất cả
```

**Cài global** (dùng được trong mọi project, không cần chạy lại mỗi project):

```bash
ceeteeoo init --ai all --global
```

<details>
<summary>Cài thủ công không qua npm</summary>

**Claude Code — Global:**
```bash
mkdir -p ~/.claude/agents ~/.claude/commands
curl -o ~/.claude/agents/cto.md           https://raw.githubusercontent.com/nguyenphp/ceeteeoo-skills/main/.claude/agents/cto.md
curl -o ~/.claude/agents/cto-quotes.md    https://raw.githubusercontent.com/nguyenphp/ceeteeoo-skills/main/.claude/agents/cto-quotes.md
curl -o ~/.claude/commands/cto-debate.md  https://raw.githubusercontent.com/nguyenphp/ceeteeoo-skills/main/.claude/commands/cto-debate.md
curl -o ~/.claude/commands/cto-roast.md   https://raw.githubusercontent.com/nguyenphp/ceeteeoo-skills/main/.claude/commands/cto-roast.md
curl -o ~/.claude/commands/cto-counter.md https://raw.githubusercontent.com/nguyenphp/ceeteeoo-skills/main/.claude/commands/cto-counter.md
```

**Cursor / Windsurf — Project-local:**
```bash
mkdir -p .cursor/rules
curl -o .cursor/rules/cto.mdc         https://raw.githubusercontent.com/nguyenphp/ceeteeoo-skills/main/.cursor/rules/cto.mdc
curl -o .cursor/rules/cto-debate.mdc  https://raw.githubusercontent.com/nguyenphp/ceeteeoo-skills/main/.cursor/rules/cto-debate.mdc
curl -o .cursor/rules/cto-roast.mdc   https://raw.githubusercontent.com/nguyenphp/ceeteeoo-skills/main/.cursor/rules/cto-roast.mdc
curl -o .cursor/rules/cto-counter.mdc https://raw.githubusercontent.com/nguyenphp/ceeteeoo-skills/main/.cursor/rules/cto-counter.mdc
```

**Antigravity — Project-local:**
```bash
mkdir -p .antigravity/skills
curl -o .antigravity/skills/cto.md         https://raw.githubusercontent.com/nguyenphp/ceeteeoo-skills/main/.antigravity/skills/cto.md
curl -o .antigravity/skills/cto-debate.md  https://raw.githubusercontent.com/nguyenphp/ceeteeoo-skills/main/.antigravity/skills/cto-debate.md
curl -o .antigravity/skills/cto-roast.md   https://raw.githubusercontent.com/nguyenphp/ceeteeoo-skills/main/.antigravity/skills/cto-roast.md
curl -o .antigravity/skills/cto-counter.md https://raw.githubusercontent.com/nguyenphp/ceeteeoo-skills/main/.antigravity/skills/cto-counter.md
```

</details>

---

## Cách dùng

### Claude Code

| Command | Dùng khi nào |
|---|---|
| `use cto` | Roleplay trực tiếp — luyện phản biện |
| `/cto-debate` | Chuẩn bị trước meeting — roleplay hoặc tạo report HTML |
| `/cto-roast` | Phân tích rủi ro ticket + simulate CTO attack |
| `/cto-counter` | Paste hội thoại thật → nhận counter-argument + dẫn chứng |

**Ví dụ:**
```
use cto

/cto-debate US-1156
/cto-debate tại sao cần thêm 3 ngày cho premium flow

/cto-roast US-1065 --challenge

/cto-counter
[paste đoạn chat vào]
```

### Cursor / Windsurf

```
@cto CTO nói bug này không nghiêm trọng, lên được
@cto-debate tại sao cần thêm 3 ngày
@cto-counter [paste đoạn chat]
```

### Antigravity

```
@cto deadline gấp nên phải đổi squad
@cto-debate US-1156
@cto-counter [paste đoạn chat]
```

---

## Cấu hình Jira (tuỳ chọn)

`/cto-debate` và `/cto-roast` tự fetch ticket nếu set env:

```bash
export JIRA_TOKEN="your_personal_token"
export JIRA_BASE_URL="https://your-company.atlassian.net"
```

Không có Jira thì mô tả bằng text cũng được.

---

## Pattern hiện có

| Category | Mô tả |
|---|---|
| `BLAME_ABSENT` | Gọi tên người vắng mặt để né trách nhiệm |
| `BLAME_NAMED` | Pin blame bằng tên cụ thể |
| `REVERSE_BLAME` | Đổ ngược lại cho người report |
| `OFFICIAL_BLAME` | Ghi biên bản đổ thừa |
| `DOWNPLAY_BUG` | Dismiss bug trước khi investigate |
| `DOWNPLAY_TRAFFIC` | Dùng traffic thấp để bypass bug |
| `TAUTOLOGY` | Logic vòng tròn |
| `ATTACK_OVERTHINKER` | Làm người phản biện tự nghi ngờ |
| `YES_BUT` | Khen rồi invalidate |
| `OPINION_AS_FACT` | Cảm giác thay cho data |
| `INVISIBLE_DELEGATE` | Assign việc giữa cuộc họp không báo |
| `SCOPE_BLAME` | Blame dev vì làm đúng spec |
| `URGENCY_OVERRIDE` | Dùng deadline để bypass process |
| `ACCOUNTABILITY_SHIFT` | Đẩy trách nhiệm xuống người implement |
| `COMPLEXITY_MINIMIZATION` | Nhìn từ xa rồi kết luận "dễ" |
| `CULTURE_ABUSE` | Dùng văn hóa startup để bypass process |
| `NODOC_SHORTCUT` | "Không có thời gian document" |
| `REDIRECT_QUESTION` | Trả lời lạc câu hỏi để né accountability |
| `LABEL_SILENCING` | Dán nhãn để loại người phản biện |
| `SQUAD_COMPARE_ABSOLUTE` | So sánh bug count không cùng baseline |
| `SQUAD_COMPARE_NARRATIVE` | Dùng squad khác để dismiss |
| `WORKLOAD_IGNORE` | Giao nhiều nhất rồi blame bug nhiều nhất |
