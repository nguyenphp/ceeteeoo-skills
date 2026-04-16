# Cê Tê Ô Skills

Roleplay training giúp dev luyện kỹ năng phản biện trước stakeholder khó tính.

Tích hợp vào **Claude Code**, **Cursor**, **Antigravity**, **Windsurf**, **Copilot**.

---

## Ví dụ

Gõ `/cto-counter` rồi paste đoạn hội thoại vào:

```
CTO: "cái bug premium này là do Duy với Kiên chứ ai, backend chưa
      golive mà tụi em đã release là sao?"
Dev: "Dạ backend đã golive từ thứ 3, em có link deploy đây anh."
CTO: "ừ thì... nhưng mà lần sau tụi em phải nói sớm hơn,
      anh không biết backend golive lúc nào đâu"
```

**Output:**

---

**━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━**

🧑‍💼 **CTO nói:** *"cái bug premium này là do Duy với Kiên chứ ai, backend chưa golive mà tụi em đã release là sao?"*

🎯 **Pattern:** `BLAME_NAMED` + `BLAME_ABSENT` — 🟢 Common  
🎭 **Hidden move:** Gọi tên cụ thể 2 người vắng mặt để pin blame trước khi có bất kỳ investigation nào — tạo "tội nhân" ngay trong cuộc họp, người còn lại không dám bênh vực.

💬 **Phản biện ngay:**  
*"Anh ơi mình tìm root cause trước — backend golive chưa, log lỗi cụ thể là gì, rồi assign action item sau. Blame trước investigate sau thì sẽ fix sai chỗ."*

📚 **Dẫn chứng:**
- **Blameless Postmortem** (Google SRE) — tìm root cause trước, không blame người — vì lỗi hệ thống thường do nhiều yếu tố, không phải 1 người. [sre.google/sre-book/postmortem-culture](https://sre.google/sre-book/postmortem-culture/)
- Blame sớm làm team sợ report lỗi → bug bị giấu lâu hơn → thiệt hại lớn hơn.

🔒 **Câu chốt nếu ổng tiếp tục:**  
*"Anh có thể confirm backend golive hay chưa trước không? Em có link deploy ở đây. Nếu đã golive thì root cause không phải backend — mình cần điều tra tiếp."*

**━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━**

🧑‍💼 **CTO nói:** *"ừ thì... nhưng mà lần sau tụi em phải nói sớm hơn, anh không biết backend golive lúc nào đâu"*

🎯 **Pattern:** `REVERSE_BLAME` — 🟢 Common  
🎭 **Hidden move:** Acknowledge thua điểm trước (backend đã golive) nhưng ngay lập tức pivot sang blame dev vì "không communicate sớm" — thoát khỏi blame mà không cần nhận sai.

💬 **Phản biện ngay:**  
*"Dạ em có post link deploy lên channel #releases lúc 10:23 sáng thứ 3. Anh muốn tụi em notify thêm ở đâu nữa không? Tụi em làm ngay."*

📚 **Dẫn chứng:**
- Luôn document mọi thứ có timestamp — link deploy, message Slack, ticket update. Khi bị `REVERSE_BLAME`, đưa timestamp ra là kết thúc ngay.
- Nếu chưa có record: *"Dạ lần sau em sẽ tag anh trực tiếp — anh muốn notify qua Slack hay email?"* — biến thành action item, không nhận blame.

🔒 **Câu chốt:**  
*"Anh ơi em có notify rồi — [link message]. Nếu format chưa đúng kỳ vọng thì mình define lại process để lần sau tụi em làm đúng ngay."*

**━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━**

> **═══════════════════════════════════════**  
> 📋 **TỔNG KẾT CHIẾN LƯỢC**
>
> **Patterns đang dùng:** `BLAME_NAMED` → `BLAME_ABSENT` → `REVERSE_BLAME`  
> **Điểm yếu:** Cả 3 câu đều không có evidence — chỉ có assumption và cảm giác. Câu 2 tự mâu thuẫn với câu 1.
>
> 🎯 **Nếu chỉ được nói 1 câu:**  
> *"Anh ơi backend đã golive thứ 3, em có link — mình investigate log lỗi cụ thể trước nhé?"*
>
> 📌 **Không nhượng bộ:**  
> Không nhận "do tụi em không nói sớm" khi đã có evidence đã notify đúng channel. Nhận action item cải thiện process thì được — nhận blame thì không.  
> **═══════════════════════════════════════**

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
