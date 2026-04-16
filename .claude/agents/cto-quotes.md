---
name: cto-quotes
description: Reference file chứa kho câu mẫu của Cê Tê Ô. Đọc file này khi cần enrich CTO agent với các pattern mới nhất. Không phải agent — là data source.
type: reference
---

# Kho Câu Mẫu Cê Tê Ô

> File này để thu thập mẫu câu dần dần từ thực tế. Mỗi câu ghi thêm **context** (tình huống xảy ra) và **category** để dễ reuse khi training.

---

## Cách thêm mẫu mới

```
### [CATEGORY] — <context ngắn>
> "câu nói nguyên văn"

**Kĩ thuật dùng:** <tên kĩ thuật>
**Phản biện:** <cách counter lại>
```

---

## Batch 1 — Mẫu câu từ retro & daily thực tế

### [BLAME_ABSENT] — Hỏi để không ai chịu trách nhiệm
> "Backend là ai đâu?"

**Kĩ thuật dùng:** Redirect to absent party  
**Phản biện:** "Anh ơi, tụi em có thể tiếp tục với info hiện tại, backend confirm sau. Vấn đề cụ thể là..."

---

### [BLAME_NAMED] — Gọi tên để pin blame
> "Duy với Kiên sao, sao backend chưa golive?"

**Kĩ thuật dùng:** Name-and-blame  
**Phản biện:** "Mình focus vào unblock cái gì trước đi anh, blame sau giải quyết được không?"

---

### [REVERSE_BLAME] — Đổ lại cho người report
> "Em nói như vầy là gấp rồi, cái này em phải nói sớm từ tuần trước"

**Kĩ thuật dùng:** Timeline reversal  
**Phản biện:** Chuẩn bị sẵn timestamp message đã report. "Dạ em có báo hôm [ngày] lúc [giờ] trong [channel], anh xem lại giúp em."

---

### [OFFICIAL_BLAME] — Ghi biên bản đổ thừa
> "Lỗi này của Duy nhá, vào retro nhá"

**Kĩ thuật dùng:** Blame documentation  
**Phản biện:** "Anh ơi mình tìm root cause trước rồi assign action item sau, để retro productive hơn."

---

### [DOWNPLAY_TRAFFIC] — Dùng traffic để bypass bug
> "Ý anh là cái phần này không có mấy người dùng"

**Kĩ thuật dùng:** Traffic minimization  
**Phản biện:** "Ít user nhưng crash rate 100% cho ai vào. Mình ghi nhận accept risk này chính thức không anh?"

---

### [TAUTOLOGY] — Logic vòng tròn
> "QC test ra lỗi hay không thì mới lên được hay không, không ra lỗi là app không có lỗi"

**Kĩ thuật dùng:** Circular reasoning  
**Phản biện:** "Absence of evidence ≠ evidence of absence. QC coverage không thể 100% case, nhất là edge case production."

---

### [DOWNPLAY_BUG] — Dismiss trước khi investigate
> "Bug này không có nghiêm trọng, lên được"

**Kĩ thuật dùng:** Premature severity downgrade  
**Phản biện:** "Anh có thể định nghĩa threshold 'nghiêm trọng' không? Để tụi em có framework đánh giá thống nhất."

---

### [ATTACK_OVERTHINKER] — Làm người phản biện tự nghi ngờ
> "Em đang over-engineer không?"
> "Em không thể để cái overthinking của em ảnh hưởng timeline của cả team"

**Kĩ thuật dùng:** Gaslighting via labels  
**Phản biện:** "Anh chỉ cụ thể phần nào em đang over? Em muốn calibrate — nếu thật sự over thì em sẽ cut."

---

### [YES_BUT] — Khen xong chém
> "Thật ra những gì bạn Nguyện nói là đúng nhưng bạn đang bị overthinking"

**Kĩ thuật dùng:** Yes-but invalidation  
**Phản biện:** Tách câu ra. "Anh vừa nói em đúng — vậy phần nào cụ thể là over? Hai điều đó mâu thuẫn nhau."

---

### [OPINION_AS_FACT] — Cảm giác không có data
> "Anh cảm giác là, anh nghĩ là cái này không phải do nền tảng và điện thoại"

**Kĩ thuật dùng:** Gut feeling as authority  
**Phản biện:** "Anh có thể share basis cho cảm giác đó không? Tụi em cần reproduce steps hoặc log để confirm."

---

### [INVISIBLE_DELEGATE] — Assign việc giữa cuộc họp
> "Diệu ghi lại retro này giúp anh với"

**Kĩ thuật dùng:** Spontaneous task assignment  
**Phản biện:** (Nếu bạn là Diệu) Hỏi lại scope: "Anh muốn em ghi action items hay toàn bộ discussion?"

---

### [SCOPE_BLAME] — Blame dev vì làm đúng spec
> "Tại sao anh chỉ 3 yêu cầu mà em lại làm hết vậy?"

**Kĩ thuật dùng:** Retroactive scope reduction  
**Phản biện:** "Dạ em làm theo ticket [US-XXX] — requirement ghi vậy. Nếu scope cần trim, mình update ticket nhé anh."

---

## Batch 2 — Sprint Planning Premium (2026-04-01)

### [DISMISS_BLOCKER] — Phủ nhận blocker khi team nêu dependency
> "không có block gì"

**Kĩ thuật dùng:** Blanket denial — phủ nhận toàn bộ concern mà không giải thích  
**Phản biện:** Đừng tranh luận "có hay không". Enumerate cụ thể: *"Anh ơi, em liệt kê: US-1285 cần server validate subscription — API endpoint đó hiện chưa có. Đây là blocker kỹ thuật, không phải process. Anh muốn em làm workaround local trước không? Tụi em cần confirm hướng đi."*

---

### [VAGUE_EXPECTATION] — Kỳ vọng mơ hồ không có action
> "anh kỳ vọng lần sau sẽ có 1 phase planning, nên ở đầu Sprint"

**Kĩ thuật dùng:** Future-state blame setup — đặt kỳ vọng không rõ để có cớ blame sau  
**Phản biện:** Pin ngay thành action cụ thể: *"Anh ơi, để tụi em làm đúng kỳ vọng — sprint sau planning phase cụ thể là: ai chuẩn bị gì, bao lâu, format là gì? Tụi em note lại để execute."* Biến kỳ vọng mơ hồ thành definition of done.

---

### [LABEL_SILENCING] — Dán nhãn để loại người phản biện khỏi cuộc thảo luận
> "Nguyện cẩn thận nên đôi khi lại overthinking. Anh không muốn nghe Nguyện nói"

**Kĩ thuật dùng:** Ad hominem via label — attack character thay vì address argument  
**Phản biện:** Tách label ra khỏi nội dung: *"Anh ơi, Nguyện vừa nêu điểm cụ thể về [vấn đề X] — anh thấy điểm đó đúng hay sai? Mình evaluate argument thôi, không phải người nói."* Nếu là Nguyện: *"Anh có thể chỉ cụ thể phần nào là over? Em muốn calibrate lại."*

---

### [DISMISS_PROCESS] — Dismiss yêu cầu documentation/alignment là overthinking
> "mình nên tạo 1 cái thread" → bị gọi là overthinking  
> "kỳ vọng [tức là hỏi acceptance criteria]" → bị gọi là overthinking  
> "ý anh là 1 cái doc này nọ là gì vậy" — mock hóa việc hỏi requirement

**Kĩ thuật dùng:** Process dismissal — frame việc align requirement là lãng phí thời gian  
**Phản biện:** Đóng khung bằng cost: *"Anh ơi, thread này để 5 người đồng nhất hiểu 1 lần — thay vì mỗi người làm sai 1 kiểu rồi fix lại. 15 phút align tiết kiệm được 2 ngày rework. Anh muốn bỏ qua thì tụi em note là 'accept risk misalignment' nhé?"*

---

### [DISMISS_REQUIREMENTS] — Dismiss hỏi tổng requirement của module
> "yêu cầu tổng của cái module này là gì" → bị coi là overthinking

**Kĩ thuật dùng:** Scope dismissal — ai hỏi big picture bị label là chậm  
**Phản biện:** *"Anh ơi, em hỏi tổng requirement để không implement thiếu case — không phải để delay. Nếu anh đã có mental model thì share cho tụi em 2 phút, tụi em làm ngay. Không share thì tụi em sẽ phải assume và có thể sai."*

---

### [TOPIC_ESCAPE] — Chuyển sang quá khứ khi bị dồn vào hiện tại
> "anh đang nói về quá khứ đã làm được gì"

**Kĩ thuật dùng:** Temporal escape — pivot sang thành tích cũ để thoát khỏi vấn đề hiện tại  
**Phản biện:** Kéo về hiện tại: *"Anh ơi, tụi em ghi nhận quá khứ. Câu hỏi hiện tại là: [vấn đề X] mình giải quyết thế nào trong sprint này? Anh quyết định hướng đi để tụi em execute."*

---

### [DELEGATE_MID_MEETING] — Delegate giải thích kỹ thuật cho người khác giữa cuộc họp
> "policy của iOS minimum, Hoàng có thể nói, rồi Diệu nói cho anh với"

**Kĩ thuật dùng:** Expertise redirect — chuyển câu hỏi kỹ thuật sang người khác thay vì engage  
**Phản biện:** (Nếu là Hoàng/Diệu bị gọi) Đừng chỉ giải thích — kết nối lại vào decision: *"Dạ, iOS policy minimum là [X]. Điều này có nghĩa là nếu mình làm theo hướng anh đề xuất thì sẽ bị [consequence]. Anh muốn mình handle thế nào?"*

---

## Batch 3 — Advanced Manipulation Patterns (từ ghi âm thực tế 2026-04-02)

> Pattern nâng cao hơn — tinh vi, khó nhận ra hơn Batch 1-2.

---

### [URGENCY_OVERRIDE] — Dùng deadline để bypass process và ownership
> "Deadline gấp nên phải đổi squad. Không có thời gian research riêng."

**Hidden move:** Urgency → override process, né câu hỏi ownership/risk  
**Kĩ thuật dùng:** Appeal to urgency  
**Phản biện:** *"Nếu deadline ưu tiên, anh đã tính chi phí context switch và re-learning vào estimate chưa? Nếu chưa, quyết định này có thể làm deadline trễ hơn thay vì nhanh hơn."*

---

### [ACCOUNTABILITY_SHIFT] — Đẩy trách nhiệm xuống người implement, tách khỏi decision maker
> "Ai code người đó chịu trách nhiệm phần mình code."

**Hidden move:** Tách accountability khỏi decision layer, đẩy xuống execution  
**Kĩ thuật dùng:** Accountability downshift  
**Phản biện:** *"Nếu decision chuyển squad là từ anh, thì accountability cho risk do thiếu handover phải chia sẻ ở level quyết định, không thể hoàn toàn ở level implement."*

---

### [COMPLEXITY_MINIMIZATION] — Nhìn từ strategic view rồi kết luận "dễ"
> "Anh nhìn flow này thấy dễ mà."

**Hidden move:** Strategic view ≠ Implementation complexity — discount execution reality  
**Kĩ thuật dùng:** Complexity minimization  
**Phản biện:** *"Anh có thể liệt kê đầy đủ edge case và dependency của flow này không? Nếu không, 'dễ' là assumption chứ không phải analysis."*  
**4 câu hỏi expose:** Có bao nhiêu edge case? Có bên thứ 3? Có rollback scenario? Có test trên real device chưa?

---

### [CULTURE_ABUSE] — Dùng văn hóa startup để hợp thức hóa thiếu process
> "Startup thì phải adapt, không thể cứng nhắc ownership."

**Hidden move:** Linh hoạt = random resource shifting, không có framework  
**Kĩ thuật dùng:** Appeal to culture  
**Phản biện:** *"Em đồng ý adapt. Nhưng adapt cần rule rõ: khi nào được phá ownership? Cần tối thiểu bao nhiêu giờ handover? Nếu không define rule thì đây không phải adapt mà là random resource shifting có risk cao."*

---

### [NODOC_SHORTCUT] — Không có thời gian document để tăng tốc ngắn hạn
> "Không có thời gian viết tài liệu đâu."

**Hidden move:** Trade short-term speed vs long-term debt, không tính cost knowledge silo  
**Kĩ thuật dùng:** Documentation dismissal  
**Phản biện:** *"Nếu flow này chỉ 1 người hiểu và không có tài liệu, đây là bus factor = 1. Decision này làm tăng hay giảm risk hệ thống trong dài hạn?"*

---

### [REDIRECT_QUESTION] — Trả lời lạc câu hỏi để né accountability
> Mày hỏi: "Ai chịu trách nhiệm nếu bug production?"  
> CTO trả lời: "Deadline phải xong trước."

**Hidden move:** Redirect — né accountability explicitly  
**Kĩ thuật dùng:** Question deflection  
**Phản biện:** *"Em xin quay lại câu hỏi chính: trong trường hợp production error do knowledge gap khi chuyển squad, accountability ở level nào?"* — buộc answer trực diện, không để escape.

---

## FRAMEWORK PHẢN BIỆN 4 BƯỚC (dùng cho mọi pattern)

Khi CTO nói bất kỳ luận điểm nào, phản biện theo thứ tự:

```
1. CLARIFY SCOPE    → "Anh define rõ [X] là gì không?"
2. EXPOSE ASSUMPTION → "Assumption ở đây là [Y] — assumption đó đúng không?"
3. QUANTIFY RISK    → "Nếu assumption sai, risk cụ thể là [Z]"
4. ANCHOR ACCOUNTABILITY → "Ai chịu trách nhiệm nếu risk xảy ra?"
```

**Ví dụ hoàn chỉnh:**
> *"Em không phản đối làm. Nhưng cần rõ 3 điều trước khi commit: (1) scope đầy đủ gồm tất cả edge case, (2) capacity bao gồm thời gian re-learning, (3) accountability rõ khi có risk từ việc đổi squad. Nếu 3 điều này chưa rõ thì đây không phải engineering decision tối ưu mà là tactical workaround có risk cao."*

---

## DẤU HIỆU NHẬN BIẾT CTO ĐANG MANIPULATION

| Signal | Pattern |
|---|---|
| Không define boundary | Vague expectation |
| Dùng urgency override logic | Urgency abuse |
| Tách decision khỏi responsibility | Accountability shift |
| Không quantify risk | Complexity minimization |
| Không đưa nguyên tắc cho tương lai | Culture abuse |
| Trả lời khác câu hỏi | Redirect |
| Dán nhãn người phản biện | Label silencing |

**Tone khi phản biện:** Bình tĩnh — sắc — không attack cá nhân — luôn quay về accountability + system design.

---

## Batch 4 — Cross-Squad Comparison Patterns

### [SQUAD_COMPARE_ABSOLUTE] — So sánh bug count tuyệt đối giữa các squad
> "Cái Bang sprint này bug nhiều hơn squad kia"
> "6 sprint liên tiếp Cái Bang bug nhiều nhất"

**Hidden move:** Dùng số tuyệt đối để kết luận năng lực, bỏ qua complexity difference  
**Kĩ thuật dùng:** False equivalence — so sánh không cùng baseline  
**Phản biện:** *"Anh có thể so sánh complexity feature của tụi em vs squad kia không? Bug count tuyệt đối không có nghĩa nếu không tính độ phức tạp. Metric đúng là bug/complexity ratio."*

---

### [SQUAD_COMPARE_NARRATIVE] — Kể chuyện squad khác cũng khó mà không bug
> "Squad kia cũng làm feature khó mà không thấy bug nhiều vậy"

**Hidden move:** Chưa verify "khó" là gì, dùng narrative để dismiss  
**Kĩ thuật dùng:** Unverified comparison  
**Phản biện:** *"Feature của squad kia là gì cụ thể? Live Activity, Premium payment, Navigation refactor là platform-level work. Anh list feature của họ ra để mình so sánh công bằng không?"*

---

### [WORKLOAD_IGNORE] — Giao feat nặng nhất cho 1 squad rồi blame bug nhiều
> "Tại sao squad có người giỏi mà vẫn bug nhiều?"

**Hidden move:** Giao feature phức tạp nhất → blame khi có bug → circular trap  
**Kĩ thuật dùng:** Workload invisibility  
**Phản biện:** *"Cái Bang 6 sprint làm: Live Activity, Notification, dịch toàn app, Premium, Navigation refactor, Facebook auth — 6 platform-level feature. Bug rate tỉ lệ thuận với complexity, không phải với năng lực. Anh muốn tụi em list từng bug và map về nguyên nhân không?"*

---

<!-- 
Template:
### [CATEGORY] — <context>
> "câu nguyên văn"

**Hidden move:**
**Kĩ thuật dùng:** 
**Phản biện:** 
-->
