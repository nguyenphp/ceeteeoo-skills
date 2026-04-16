# Cê Tê Ô Skills

Roleplay training giúp dev luyện kỹ năng phản biện trước stakeholder khó tính.

Tích hợp vào **Claude Code**, **Cursor**, hoặc **Antigravity**.

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
ceeteeoo init --ai claude --global
ceeteeoo init --ai all --global
```

---

## Cách dùng sau khi cài

### Claude Code

**Roleplay trực tiếp với agent:**

Gõ trong Claude Code chat:
```
use cto
```

Claude sẽ hỏi tình huống rồi bắt đầu đóng vai CTO.

---

**Chuẩn bị phản biện trước meeting (`/cto-debate`):**

```
/cto-debate tại sao cần thêm 3 ngày cho premium flow
/cto-debate US-1156
```

Chọn:
- **[1] Roleplay** — luyện phản biện theo tình huống, có chấm điểm
- **[2] Report** — tạo file HTML với toàn bộ câu hỏi CTO có thể hỏi + cách counter, mang vào họp

---

**Phân tích rủi ro ticket (`/cto-roast`):**

```
/cto-roast US-1065
/cto-roast US-1065 --challenge
```

Phân tích rủi ro kỹ thuật của ticket, sau đó simulate CTO attack đúng điểm yếu.

---

### Cursor

Mở chat, tag `@cto` rồi mô tả tình huống:

```
@cto CTO nói bug này không nghiêm trọng, lên được
```

---

### Antigravity

Mở chat, gọi:

```
@cto deadline gấp nên phải đổi squad, không có thời gian handover
```

---

## Cài thủ công (không dùng script)

<details>
<summary>Claude Code</summary>

**Global** (dùng được trong mọi project):
```bash
mkdir -p ~/.claude/agents ~/.claude/commands
curl -o ~/.claude/agents/cto.md           https://raw.githubusercontent.com/nguyenphp/ceeteeoo-skills/main/.claude/agents/cto.md
curl -o ~/.claude/agents/cto-quotes.md    https://raw.githubusercontent.com/nguyenphp/ceeteeoo-skills/main/.claude/agents/cto-quotes.md
curl -o ~/.claude/commands/cto-debate.md  https://raw.githubusercontent.com/nguyenphp/ceeteeoo-skills/main/.claude/commands/cto-debate.md
curl -o ~/.claude/commands/cto-roast.md   https://raw.githubusercontent.com/nguyenphp/ceeteeoo-skills/main/.claude/commands/cto-roast.md
```

**Project-local** (chỉ project hiện tại):
```bash
mkdir -p .claude/agents .claude/commands
curl -o .claude/agents/cto.md           https://raw.githubusercontent.com/nguyenphp/ceeteeoo-skills/main/.claude/agents/cto.md
curl -o .claude/agents/cto-quotes.md    https://raw.githubusercontent.com/nguyenphp/ceeteeoo-skills/main/.claude/agents/cto-quotes.md
curl -o .claude/commands/cto-debate.md  https://raw.githubusercontent.com/nguyenphp/ceeteeoo-skills/main/.claude/commands/cto-debate.md
curl -o .claude/commands/cto-roast.md   https://raw.githubusercontent.com/nguyenphp/ceeteeoo-skills/main/.claude/commands/cto-roast.md
```

</details>

<details>
<summary>Cursor</summary>

```bash
mkdir -p .cursor/rules
curl -o .cursor/rules/cto.mdc https://raw.githubusercontent.com/nguyenphp/ceeteeoo-skills/main/.cursor/rules/cto.mdc
```

Sau đó: Cursor Settings → Rules → bật rule `cto`.

</details>

<details>
<summary>Antigravity</summary>

**Global:**
```bash
mkdir -p ~/.gemini/antigravity/skills
curl -o ~/.gemini/antigravity/skills/cto.md https://raw.githubusercontent.com/nguyenphp/ceeteeoo-skills/main/.antigravity/skills/cto.md
```

**Project-local:**
```bash
mkdir -p .antigravity/skills
curl -o .antigravity/skills/cto.md https://raw.githubusercontent.com/nguyenphp/ceeteeoo-skills/main/.antigravity/skills/cto.md
```

</details>

---

## Cấu hình Jira (tuỳ chọn)

`/cto-debate` và `/cto-roast` có thể tự fetch ticket từ Jira nếu set env:

```bash
# Thêm vào ~/.zshrc hoặc ~/.bashrc
export JIRA_TOKEN="your_personal_token"
export JIRA_BASE_URL="https://your-company.atlassian.net"
```

Không có Jira thì bỏ qua — mô tả bằng text vẫn chạy được.

---

## Đóng góp câu mẫu mới

Kho câu mẫu nằm ở [`.claude/agents/cto-quotes.md`](.claude/agents/cto-quotes.md).

**Cách thêm:**

1. Fork repo này
2. Thêm vào `cto-quotes.md` theo format:

```markdown
### [CATEGORY] — <context ngắn>
> "câu nói nguyên văn"

**Hidden move:** <ý đồ thật>
**Kĩ thuật dùng:** <tên kĩ thuật>
**Phản biện:** <cách counter cụ thể>
```

3. Tạo PR với title: `[CATEGORY] thêm pattern: <mô tả ngắn>`

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
