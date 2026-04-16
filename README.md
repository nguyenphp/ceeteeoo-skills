# Cê Tê Ô Skills

Bộ công cụ roleplay và training giúp dev luyện kỹ năng phản biện trước stakeholder khó tính — tích hợp vào Claude Code hoặc Cursor.

---

## Có gì trong này?

| File | Loại | Mô tả |
|---|---|---|
| `cto` | Agent | Roleplay Cê Tê Ô trong cuộc họp — dev practice phản biện |
| `cto-quotes` | Reference | Kho câu mẫu và pattern — cộng đồng cùng đóng góp |
| `/cto-debate` | Command | Tạo báo cáo phản biện hoặc roleplay theo Jira ticket / tình huống cụ thể |
| `/cto-roast` | Command | Phân tích rủi ro ticket + CTO simulation |

---

## Cài đặt

### Claude Code

**Cài global** (dùng được trong mọi project):

```bash
# Tạo thư mục nếu chưa có
mkdir -p ~/.claude/agents ~/.claude/commands

# Copy files
curl -o ~/.claude/agents/cto.md https://raw.githubusercontent.com/nguyenphp/ceeteeoo-skills/main/.claude/agents/cto.md
curl -o ~/.claude/agents/cto-quotes.md https://raw.githubusercontent.com/nguyenphp/ceeteeoo-skills/main/.claude/agents/cto-quotes.md
curl -o ~/.claude/commands/cto-debate.md https://raw.githubusercontent.com/nguyenphp/ceeteeoo-skills/main/.claude/commands/cto-debate.md
curl -o ~/.claude/commands/cto-roast.md https://raw.githubusercontent.com/nguyenphp/ceeteeoo-skills/main/.claude/commands/cto-roast.md
```

**Cài cho 1 project cụ thể** (clone repo vào project):

```bash
# Trong thư mục project của bạn
mkdir -p .claude/agents .claude/commands

curl -o .claude/agents/cto.md https://raw.githubusercontent.com/nguyenphp/ceeteeoo-skills/main/.claude/agents/cto.md
curl -o .claude/agents/cto-quotes.md https://raw.githubusercontent.com/nguyenphp/ceeteeoo-skills/main/.claude/agents/cto-quotes.md
curl -o .claude/commands/cto-debate.md https://raw.githubusercontent.com/nguyenphp/ceeteeoo-skills/main/.claude/commands/cto-debate.md
curl -o .claude/commands/cto-roast.md https://raw.githubusercontent.com/nguyenphp/ceeteeoo-skills/main/.claude/commands/cto-roast.md
```

---

### Cursor

```bash
mkdir -p .cursor/rules
curl -o .cursor/rules/cto.mdc https://raw.githubusercontent.com/nguyenphp/ceeteeoo-skills/main/.cursor/rules/cto.mdc
```

Sau đó mở Cursor Settings > Rules > bật rule `cto`.

---

## Cách dùng

### Claude Code

**Dùng agent (roleplay trực tiếp):**
```
> use cto

Tình huống hôm nay là gì? Bug? Deadline? Incident?
```

**Dùng command `/cto-debate`:**
```
/cto-debate US-1156
/cto-debate tại sao cần thêm 3 ngày cho premium flow
```
Chọn **[1] Roleplay** để luyện phản biện, hoặc **[2] Report** để tạo báo cáo HTML mang vào meeting.

**Dùng command `/cto-roast`:**
```
/cto-roast US-1065
/cto-roast US-1065 --challenge
```

### Cursor

Mở chat, tag rule `@cto`, rồi mô tả tình huống:
```
@cto CTO nói bug này không nghiêm trọng, lên được
```

---

## Cấu hình Jira (tuỳ chọn)

Để `/cto-debate` và `/cto-roast` tự fetch ticket từ Jira, set env vars:

```bash
# Thêm vào ~/.zshrc hoặc ~/.bashrc
export JIRA_TOKEN="your_token_here"
export JIRA_BASE_URL="https://your-company.atlassian.net"
```

Không có Jira thì bỏ qua — describe tình huống bằng text cũng được.

---

## Đóng góp mẫu câu mới

Kho câu mẫu nằm ở `.claude/agents/cto-quotes.md`. Để thêm pattern mới:

### Bước 1: Fork repo này

### Bước 2: Thêm vào `cto-quotes.md` theo template

```markdown
### [CATEGORY] — <context ngắn mô tả tình huống>
> "câu nói nguyên văn của CTO"

**Hidden move:** <ý đồ thật phía sau câu nói>
**Kĩ thuật dùng:** <tên kĩ thuật>
**Phản biện:** <câu phản biện cụ thể>
```

Ví dụ:
```markdown
### [COMPLEXITY_MINIMIZATION] — Dismiss estimate của dev
> "Cái này nhìn đơn giản mà, sao mất 3 ngày?"

**Hidden move:** Pressure dev tự cắt estimate mà không có basis
**Kĩ thuật dùng:** Complexity minimization
**Phản biện:** "Anh có thể list đầy đủ edge case không? Nếu không, 'đơn giản' là assumption — em có thể walk through từng bước để anh verify estimate."
```

### Bước 3: Tạo Pull Request

PR title: `[CATEGORY] thêm pattern: <mô tả ngắn>`

---

## Pattern Categories

| Category | Mô tả |
|---|---|
| `BLAME_ABSENT` | Gọi tên người vắng mặt để né trách nhiệm |
| `BLAME_NAMED` | Gọi tên cụ thể để pin blame |
| `REVERSE_BLAME` | Đổ ngược lại cho người report |
| `OFFICIAL_BLAME` | Ghi biên bản đổ thừa |
| `DOWNPLAY_BUG` | Dismiss bug trước khi investigate |
| `DOWNPLAY_TRAFFIC` | Dùng traffic thấp để bypass bug |
| `TAUTOLOGY` | Logic vòng tròn |
| `ATTACK_OVERTHINKER` | Làm người phản biện tự nghi ngờ |
| `YES_BUT` | Khen rồi invalidate |
| `OPINION_AS_FACT` | Cảm giác thay cho data |
| `INVISIBLE_DELEGATE` | Assign việc giữa cuộc họp |
| `SCOPE_BLAME` | Blame dev vì làm đúng spec |
| `URGENCY_OVERRIDE` | Dùng deadline để bypass process |
| `ACCOUNTABILITY_SHIFT` | Đẩy trách nhiệm xuống người implement |
| `COMPLEXITY_MINIMIZATION` | Nhìn từ xa rồi kết luận "dễ" |
| `CULTURE_ABUSE` | Dùng văn hóa startup để bypass process |
| `NODOC_SHORTCUT` | Không có thời gian document |
| `REDIRECT_QUESTION` | Trả lời lạc câu hỏi |
| `LABEL_SILENCING` | Dán nhãn để loại người phản biện |
| `SQUAD_COMPARE_ABSOLUTE` | So sánh bug count không cùng baseline |
| `SQUAD_COMPARE_NARRATIVE` | Dùng squad khác để dismiss |
| `WORKLOAD_IGNORE` | Giao nhiều nhất rồi blame bug nhiều nhất |
