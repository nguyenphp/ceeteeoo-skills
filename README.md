# Cê Tê Ô Skills

Roleplay training giúp dev luyện kỹ năng phản biện trước stakeholder khó tính.

Tích hợp vào **Claude Code**, **Cursor**, **Antigravity**, **Windsurf**, **Copilot**.

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
