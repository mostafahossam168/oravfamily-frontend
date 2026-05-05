function toggleMenu() {
  const m = document.querySelector(".nav-menu");
  if (m) m.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", () => {
  const m = document.querySelector(".nav-menu");
  if (m) {
    m.addEventListener("click", (e) => {
      if (e.target.tagName === "A") m.classList.remove("active");
    });
    window.addEventListener("scroll", () => {
      if (m.classList.contains("active")) m.classList.remove("active");
    });
  }
});

let cur = 0;
const total = 3;
const wrap = document.getElementById("slidesWrap");
const allSlides = document.querySelectorAll(".slide");
const allDots = document.querySelectorAll(".dot");
let timer;

function setHeight() {
  let maxH = 0;
  allSlides.forEach((s) => {
    s.style.position = "relative";
    s.style.opacity = "1";
    let h = s.offsetHeight;
    if (h > maxH) maxH = h;
    s.style.position = "";
    s.style.opacity = "";
  });
  wrap.style.minHeight = maxH + "px";
}

function goTo(n) {
  allSlides[cur].classList.remove("active");
  allDots[cur].classList.remove("on");
  cur = (n + total) % total;
  allSlides[cur].classList.add("active");
  allDots[cur].classList.add("on");
  clearInterval(timer);
  timer = setInterval(() => goTo(cur + 1), 5500);
}

document.getElementById("arrNext").onclick = () => goTo(cur + 1);
document.getElementById("arrPrev").onclick = () => goTo(cur - 1);

allSlides.forEach((s, i) => {
  if (i !== 0) {
    s.style.position = "absolute";
  }
});
setHeight();
timer = setInterval(() => goTo(cur + 1), 5500);
window.addEventListener("resize", setHeight);

function toggleFaq(el) {
  const item = el.closest(".faq-item");
  const isOpen = item.classList.contains("open");
  document
    .querySelectorAll(".faq-item")
    .forEach((i) => i.classList.remove("open"));
  if (!isOpen) item.classList.add("open");
}

const pages = {
  "الإرشاد الأسري": `<div class="sec-label">خدماتنا</div><h2 class="sec-title" style="margin-bottom:20px;">الإرشاد الأسري</h2><p class="sec-desc" style="margin-bottom:18px;">نقدم جلسات إرشادية فردية وجماعية مع مختصين معتمدين، تهدف إلى تعزيز التواصل بين أفراد الأسرة وحل الخلافات بأسلوب علمي يحترم خصوصية كل أسرة وثقافتها.</p><p class="sec-desc" style="margin-bottom:18px;">تغطي جلساتنا طيفاً واسعاً من المواضيع: العلاقة الزوجية، التربية والأبناء، التعامل مع المراهقين، الخلافات المالية، والعلاقة مع الأهل والأقارب.</p><div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:28px;"><div style="background:var(--teal-light);border-radius:14px;padding:20px;"><div style="font-size:13px;font-weight:700;color:var(--teal-dark);margin-bottom:6px;">جلسات فردية</div><div style="font-size:12px;color:var(--text-mid);">للأزواج أو لأي فرد من الأسرة يحتاج دعماً شخصياً متخصصاً.</div></div><div style="background:var(--bronze-light);border-radius:14px;padding:20px;"><div style="font-size:13px;font-weight:700;color:var(--bronze-dark);margin-bottom:6px;">جلسات جماعية</div><div style="font-size:12px;color:var(--text-mid);">للأسرة بالكامل في جلسة واحدة تجمع كل الأطراف بإشراف مختص.</div></div><div style="background:var(--teal-light);border-radius:14px;padding:20px;"><div style="font-size:13px;font-weight:700;color:var(--teal-dark);margin-bottom:6px;">عن بُعد أو حضوري</div><div style="font-size:12px;color:var(--text-mid);">كل الجلسات متاحة عبر مكالمات الفيديو أو في مراكزنا المعتمدة.</div></div><div style="background:var(--bronze-light);border-radius:14px;padding:20px;"><div style="font-size:13px;font-weight:700;color:var(--bronze-dark);margin-bottom:6px;">سرية تامة</div><div style="font-size:12px;color:var(--text-mid);">ما يُقال في الجلسة يبقى بين الأسرة والمستشار فقط.</div></div></div>`,

  "خطط التنمية": `<div class="sec-label">خدماتنا</div><h2 class="sec-title" style="margin-bottom:20px;">خطط التنمية الأسرية</h2><p class="sec-desc" style="margin-bottom:18px;">نبدأ بتقييم شامل لوضع أسرتك، ثم نبني خطة تنمية واقعية ومخصصة تماماً لاحتياجاتكم — ليست قالباً جاهزاً بل حلاً مبنياً على واقعكم الفعلي.</p><p class="sec-desc">الخطة تشمل أهدافاً واضحة وجدولاً زمنياً ومؤشرات قياس حقيقية، مع متابعة شهرية من مختصنا المعتمد لضمان السير في المسار الصحيح.</p>`,

  "الاستشارات الفورية": `<div class="sec-label">خدماتنا</div><h2 class="sec-title" style="margin-bottom:20px;">الاستشارات الفورية</h2><p class="sec-desc" style="margin-bottom:18px;">في اللحظات الصعبة لا وقت لانتظار موعد. مستشارك الأسري متاح للرد على استفساراتك العاجلة عبر الرسائل أو المكالمة الصوتية.</p><p class="sec-desc">متاح أيام السبت إلى الخميس من ٩ صباحاً حتى ١٠ مساءً. الرد المضمون خلال ٣٠ دقيقة خلال ساعات العمل.</p>`,

  "أكاديمية الأسرة": `<div class="sec-label">خدماتنا</div><h2 class="sec-title" style="margin-bottom:20px;">أكاديمية الأسرة</h2><p class="sec-desc" style="margin-bottom:18px;">مكتبة محتوى متخصصة تضم أكثر من ٢٠٠ مقال ودورة وندوة مسجلة — كلها بالعربية وكلها قابلة للتطبيق في حياتك اليومية.</p><p class="sec-desc">المحتوى مصنف حسب الاحتياج: الزواج، التربية، المراهقة، التواصل، إدارة الخلافات، والتخطيط الأسري.</p>`,

  "من نحن": `<div class="sec-label">الشركة</div><h2 class="sec-title" style="margin-bottom:20px;">من نحن</h2><p class="sec-desc" style="margin-bottom:18px;">أوراف شركة سعودية تأسست عام ٢٠١٩ بهدف واحد واضح: أن تكون الأسرة العربية قادرة على بناء علاقاتها بوعي وعلم. بدأنا بفريق صغير من المتحمسين والمختصين، واليوم نخدم أكثر من ٢,٤٠٠ أسرة في ٨ دول عربية.</p><p class="sec-desc" style="margin-bottom:18px;">نجمع بين أحدث أدوات التقنية وعمق الإرشاد المتخصص لنقدم منصة شاملة تخدم كل فرد في الأسرة — من الزوجين إلى الأبناء — في رحلة واحدة متكاملة نحو حياة أسرية أفضل.</p><div style="background:var(--teal-dark);border-radius:16px;padding:24px;color:white;margin-top:24px;"><div style="font-size:12px;color:rgba(255,255,255,.5);margin-bottom:8px;letter-spacing:.05em;">رسالتنا</div><div style="font-family:'Amiri',serif;font-size:18px;line-height:1.75;color:rgba(255,255,255,.9);">كل أسرة سعيدة تبني مجتمعاً أفضل. مهمتنا أن نجعل السعادة الأسرية علماً يُمارَس، لا حظاً ينتظر.</div></div>`,

  فريقنا: `<div class="sec-label">الشركة</div><h2 class="sec-title" style="margin-bottom:20px;">فريقنا</h2><p class="sec-desc" style="margin-bottom:18px;">يضم فريق أوراف أكثر من ٥٠ مستشاراً أسرياً معتمداً، جميعهم حاصلون على شهادات أكاديمية معترف بها في الإرشاد الأسري أو النفسي، ولديهم خبرة عملية لا تقل عن ٥ سنوات.</p><p class="sec-desc">نتحقق من مؤهلات فريقنا بشكل دوري ونوفر لهم تدريباً مستمراً لضمان أعلى جودة في الخدمة المقدمة لكل أسرة.</p>`,

  "كيف نعمل": `<div class="sec-label">الشركة</div><h2 class="sec-title" style="margin-bottom:20px;">كيف نعمل</h2><p class="sec-desc" style="margin-bottom:24px;">رحلتك مع أوراف بسيطة ومنظمة. لا تعقيد ولا إجراءات طويلة.</p><div style="display:flex;flex-direction:column;gap:0;"><div style="display:flex;gap:16px;padding:20px 0;border-bottom:0.5px solid rgba(45,95,94,.1);"><div style="width:36px;height:36px;border-radius:50%;background:var(--teal);color:white;font-size:14px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;">١</div><div><div style="font-size:15px;font-weight:700;color:var(--teal-dark);margin-bottom:4px;">تواصل معنا</div><div style="font-size:13px;color:var(--text-mid);">أرسل لنا رسالة أو اتصل بنا مباشرة. سيرد عليك فريقنا خلال ٢٤ ساعة لتحديد موعد جلسة تقييم مجانية.</div></div></div><div style="display:flex;gap:16px;padding:20px 0;border-bottom:0.5px solid rgba(45,95,94,.1);"><div style="width:36px;height:36px;border-radius:50%;background:var(--teal-light);color:var(--teal);font-size:14px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;">٢</div><div><div style="font-size:15px;font-weight:700;color:var(--teal-dark);margin-bottom:4px;">جلسة التقييم</div><div style="font-size:13px;color:var(--text-mid);">نجلس معك لنفهم وضع أسرتك ونحدد الأولويات — جلسة مجانية لا التزام فيها.</div></div></div><div style="display:flex;gap:16px;padding:20px 0;border-bottom:0.5px solid rgba(45,95,94,.1);"><div style="width:36px;height:36px;border-radius:50%;background:var(--teal-light);color:var(--teal);font-size:14px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;">٣</div><div><div style="font-size:15px;font-weight:700;color:var(--teal-dark);margin-bottom:4px;">خطتك الخاصة</div><div style="font-size:13px;color:var(--text-mid);">نصمم لك خطة تنمية أسرية واقعية ومقيّسة مبنية على واقعك الفعلي.</div></div></div><div style="display:flex;gap:16px;padding:20px 0;"><div style="width:36px;height:36px;border-radius:50%;background:var(--teal-light);color:var(--teal);font-size:14px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;">٤</div><div><div style="font-size:15px;font-weight:700;color:var(--teal-dark);margin-bottom:4px;">ابدأ وشوف الفرق</div><div style="font-size:13px;color:var(--text-mid);">ابدأ رحلتك وتابع تطور أسرتك بمؤشرات حقيقية. معظم الأسر تلاحظ فرقاً واضحاً خلال شهر.</div></div></div></div>`,

  "آراء العملاء": `<div class="sec-label">الشركة</div><h2 class="sec-title" style="margin-bottom:32px;">ماذا قالت الأسر عن أوراف</h2><div style="display:flex;flex-direction:column;gap:16px;"><div style="background:var(--white);border-radius:16px;padding:24px;border:0.5px solid rgba(45,95,94,.1);"><div style="display:flex;gap:3px;margin-bottom:12px;">★★★★★</div><p style="font-size:14px;color:var(--text-mid);line-height:1.8;margin-bottom:16px;font-style:italic;">"قبل أوراف كنا نختلف على أبسط الأشياء. بعد ٣ أشهر من الجلسات، تغيّر كل شيء. الآن نتكلم بهدوء ونحل مشاكلنا بسرعة."</p><div style="font-size:13px;font-weight:700;color:var(--teal-dark);">سارة المطيري — الرياض</div></div><div style="background:var(--white);border-radius:16px;padding:24px;border:0.5px solid rgba(45,95,94,.1);"><div style="display:flex;gap:3px;margin-bottom:12px;">★★★★★</div><p style="font-size:14px;color:var(--text-mid);line-height:1.8;margin-bottom:16px;font-style:italic;">"لوحة التحليل بيّنت لنا أن أسلوب تواصلنا كوالدين هو الأصل. كانت لحظة وعي حقيقية. فريق أوراف محترف ومتفهم."</p><div style="font-size:13px;font-weight:700;color:var(--teal-dark);">أحمد الحربي — جدة</div></div><div style="background:var(--white);border-radius:16px;padding:24px;border:0.5px solid rgba(45,95,94,.1);"><div style="display:flex;gap:3px;margin-bottom:12px;">★★★★★</div><p style="font-size:14px;color:var(--text-mid);line-height:1.8;margin-bottom:16px;font-style:italic;">"في شهر واحد تحسنت علاقتي بأولادي بشكل ملحوظ. المستشارة فهمت وضعنا من اللقاء الأول."</p><div style="font-size:13px;font-weight:700;color:var(--teal-dark);">نورة العتيبي — الكويت</div></div></div>`,

  شركاؤنا: `<div class="sec-label">الشركة</div><h2 class="sec-title" style="margin-bottom:20px;">شركاؤنا</h2><p class="sec-desc" style="margin-bottom:28px;">نفخر بشراكاتنا مع مجموعة من المؤسسات والجهات الموثوقة التي تشاركنا رؤيتنا في تنمية الأسرة العربية. هذه الشراكات تُمكّننا من تقديم خدمات أشمل وأعمق لأسرتك.</p><div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;"><div style="background:var(--teal-light);border-radius:14px;padding:20px;"><div style="font-size:13px;font-weight:700;color:var(--teal-dark);margin-bottom:4px;">مركز الأسرة</div><div style="font-size:12px;color:var(--text-mid);">إرشاد أسري متخصص</div></div><div style="background:var(--bronze-light);border-radius:14px;padding:20px;"><div style="font-size:13px;font-weight:700;color:var(--bronze-dark);margin-bottom:4px;">أكاديمية النمو</div><div style="font-size:12px;color:var(--text-mid);">تعليم وتطوير</div></div><div style="background:var(--teal-light);border-radius:14px;padding:20px;"><div style="font-size:13px;font-weight:700;color:var(--teal-dark);margin-bottom:4px;">تقنية المستقبل</div><div style="font-size:12px;color:var(--text-mid);">شريك تقني</div></div><div style="background:var(--bronze-light);border-radius:14px;padding:20px;"><div style="font-size:13px;font-weight:700;color:var(--bronze-dark);margin-bottom:4px;">جمعية الأسرة</div><div style="font-size:12px;color:var(--text-mid);">شراكة مجتمعية</div></div><div style="background:var(--teal-light);border-radius:14px;padding:20px;"><div style="font-size:13px;font-weight:700;color:var(--teal-dark);margin-bottom:4px;">مبادرة الرعاية</div><div style="font-size:12px;color:var(--text-mid);">دعم اجتماعي</div></div><div style="background:var(--bronze-light);border-radius:14px;padding:20px;"><div style="font-size:13px;font-weight:700;color:var(--bronze-dark);margin-bottom:4px;">معهد البحوث</div><div style="font-size:12px;color:var(--text-mid);">أبحاث وتطوير</div></div></div>`,

  "اتصل بنا": `<div class="sec-label">تواصل</div><h2 class="sec-title" style="margin-bottom:20px;">اتصل بنا</h2><p class="sec-desc" style="margin-bottom:24px;">فريقنا مستعد لمساعدتك. تواصل معنا عبر الطريقة الأنسب لك.</p><div style="display:flex;flex-direction:column;gap:14px;"><div style="display:flex;gap:13px;padding:18px;background:var(--cream);border-radius:14px;"><div style="width:40px;height:40px;border-radius:11px;background:var(--teal-light);display:flex;align-items:center;justify-content:center;flex-shrink:0;"><svg viewBox="0 0 24 24" fill="none" stroke="#2d5f5e" stroke-width="1.8" stroke-linecap="round" width="18" height="18"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.64 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.53 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.54a16 16 0 0 0 5.55 5.55l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg></div><div><div style="font-size:12px;font-weight:700;color:var(--teal-dark);margin-bottom:2px;">هاتف</div><div style="font-size:14px;color:var(--text-mid);">+966 50 000 0000</div></div></div><div style="display:flex;gap:13px;padding:18px;background:var(--cream);border-radius:14px;"><div style="width:40px;height:40px;border-radius:11px;background:var(--teal-light);display:flex;align-items:center;justify-content:center;flex-shrink:0;"><svg viewBox="0 0 24 24" fill="none" stroke="#2d5f5e" stroke-width="1.8" stroke-linecap="round" width="18" height="18"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div><div><div style="font-size:12px;font-weight:700;color:var(--teal-dark);margin-bottom:2px;">بريد إلكتروني</div><div style="font-size:14px;color:var(--text-mid);">info@orav.com</div></div></div><div style="display:flex;gap:13px;padding:18px;background:var(--cream);border-radius:14px;"><div style="width:40px;height:40px;border-radius:11px;background:var(--teal-light);display:flex;align-items:center;justify-content:center;flex-shrink:0;"><svg viewBox="0 0 24 24" fill="none" stroke="#2d5f5e" stroke-width="1.8" stroke-linecap="round" width="18" height="18"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg></div><div><div style="font-size:12px;font-weight:700;color:var(--teal-dark);margin-bottom:2px;">ساعات العمل</div><div style="font-size:14px;color:var(--text-mid);">السبت – الخميس: ٩ص – ١٠م</div></div></div></div>`,

  "أرسل رسالة": `<div class="sec-label">تواصل</div><h2 class="sec-title" style="margin-bottom:6px;">أرسل لنا رسالة</h2><p class="sec-desc" style="margin-bottom:24px;">سنرد عليك خلال ٢٤ ساعة كحد أقصى.</p><div style="background:var(--cream);border-radius:18px;padding:28px;"><div style="display:grid;grid-template-columns:1fr 1fr;gap:11px;margin-bottom:11px;"><div style="display:flex;flex-direction:column;gap:5px;"><label style="font-size:12px;font-weight:500;color:var(--text-mid);">الاسم الأول</label><input type="text" placeholder="محمد" style="padding:10px 13px;border:0.5px solid rgba(45,95,94,.2);border-radius:9px;font-family:'Tajawal',sans-serif;font-size:14px;outline:none;background:white;"></div><div style="display:flex;flex-direction:column;gap:5px;"><label style="font-size:12px;font-weight:500;color:var(--text-mid);">اسم العائلة</label><input type="text" placeholder="الأحمد" style="padding:10px 13px;border:0.5px solid rgba(45,95,94,.2);border-radius:9px;font-family:'Tajawal',sans-serif;font-size:14px;outline:none;background:white;"></div></div><div style="display:flex;flex-direction:column;gap:5px;margin-bottom:11px;"><label style="font-size:12px;font-weight:500;color:var(--text-mid);">البريد الإلكتروني</label><input type="email" placeholder="example@email.com" style="padding:10px 13px;border:0.5px solid rgba(45,95,94,.2);border-radius:9px;font-family:'Tajawal',sans-serif;font-size:14px;outline:none;background:white;width:100%;"></div><div style="display:flex;flex-direction:column;gap:5px;margin-bottom:11px;"><label style="font-size:12px;font-weight:500;color:var(--text-mid);">رسالتك</label><textarea rows="5" placeholder="اكتب رسالتك هنا..." style="padding:10px 13px;border:0.5px solid rgba(45,95,94,.2);border-radius:9px;font-family:'Tajawal',sans-serif;font-size:14px;outline:none;background:white;width:100%;resize:none;"></textarea></div><button style="width:100%;padding:12px;background:var(--teal);color:white;border:none;border-radius:10px;font-family:'Tajawal',sans-serif;font-size:15px;font-weight:500;cursor:pointer;">إرسال الرسالة</button></div>`,

  "الأسئلة الشائعة": `<div class="sec-label">تواصل</div><h2 class="sec-title" style="margin-bottom:28px;">الأسئلة الشائعة</h2><div style="display:flex;flex-direction:column;gap:10px;"><div style="background:white;border-radius:13px;padding:20px;border:0.5px solid rgba(45,95,94,.1);"><div style="font-size:14px;font-weight:700;color:var(--teal-dark);margin-bottom:8px;">ما هي أوراف وماذا تقدم؟</div><div style="font-size:13px;color:var(--text-mid);line-height:1.8;">أوراف منصة متكاملة لتنمية العمل الأسري تقدم إرشاداً أسرياً متخصصاً وخطط تنمية مخصصة ولوحة تحليل ذكية لمتابعة تطور أسرتك.</div></div><div style="background:white;border-radius:13px;padding:20px;border:0.5px solid rgba(45,95,94,.1);"><div style="font-size:14px;font-weight:700;color:var(--teal-dark);margin-bottom:8px;">كيف أبدأ مع أوراف؟</div><div style="font-size:13px;color:var(--text-mid);line-height:1.8;">تواصل معنا وسيرد عليك فريقنا خلال ٢٤ ساعة لتحديد موعد جلسة تقييم مجانية، وبعدها تبدأ رحلتك فوراً.</div></div><div style="background:white;border-radius:13px;padding:20px;border:0.5px solid rgba(45,95,94,.1);"><div style="font-size:14px;font-weight:700;color:var(--teal-dark);margin-bottom:8px;">هل المستشارون معتمدون؟</div><div style="font-size:13px;color:var(--text-mid);line-height:1.8;">نعم، جميع مستشارينا حاصلون على شهادات معتمدة وخبرة لا تقل عن ٥ سنوات في الإرشاد الأسري.</div></div><div style="background:white;border-radius:13px;padding:20px;border:0.5px solid rgba(45,95,94,.1);"><div style="font-size:14px;font-weight:700;color:var(--teal-dark);margin-bottom:8px;">هل بياناتنا آمنة؟</div><div style="font-size:13px;color:var(--text-mid);line-height:1.8;">الخصوصية أولويتنا. جميع بياناتك مشفرة ولا تُشارك مع أي طرف ثالث. الجلسات سرية تماماً.</div></div><div style="background:white;border-radius:13px;padding:20px;border:0.5px solid rgba(45,95,94,.1);"><div style="font-size:14px;font-weight:700;color:var(--teal-dark);margin-bottom:8px;">ما الدول التي تخدمها أوراف؟</div><div style="font-size:13px;color:var(--text-mid);line-height:1.8;">نخدم ٨ دول عربية: السعودية والإمارات والكويت وقطر والبحرين وعُمان ومصر والأردن. جميع الجلسات متاحة عن بُعد.</div></div></div>`,

  "سياسة الخصوصية": `<div class="sec-label">قانوني</div><h2 class="sec-title" style="margin-bottom:20px;">سياسة الخصوصية</h2><p class="sec-desc" style="margin-bottom:18px;">تلتزم أوراف بحماية خصوصية مستخدميها وتأمين بياناتهم بأعلى المعايير التقنية والأخلاقية.</p><p class="sec-desc" style="margin-bottom:18px;"><strong>البيانات التي نجمعها:</strong> الاسم، البريد الإلكتروني، رقم الهاتف، ومعلومات الجلسات الإرشادية — ولا شيء غير ذلك دون إذنك الصريح.</p><p class="sec-desc" style="margin-bottom:18px;"><strong>كيف نستخدم بياناتك:</strong> فقط لتقديم خدماتنا وتحسينها. لا نبيعها ولا نشاركها مع أطراف ثالثة.</p><p class="sec-desc" style="margin-bottom:18px;"><strong>الأمان:</strong> جميع البيانات مشفرة بتقنية SSL وتُخزَّن على خوادم آمنة وفق أعلى معايير الأمن السيبراني.</p><p class="sec-desc"><strong>حقوقك:</strong> يمكنك طلب حذف بياناتك أو تعديلها أو الاطلاع عليها في أي وقت عبر التواصل معنا على info@orav.com</p>`,

  "الشروط والأحكام": `<div class="sec-label">قانوني</div><h2 class="sec-title" style="margin-bottom:20px;">الشروط والأحكام</h2><p class="sec-desc" style="margin-bottom:18px;">باستخدامك لمنصة أوراف فأنت توافق على الشروط والأحكام التالية. يُرجى قراءتها بعناية قبل الاستخدام.</p><p class="sec-desc" style="margin-bottom:18px;"><strong>١. الخدمات:</strong> تقدم أوراف خدمات إرشاد أسري واستشارات متخصصة عبر منصتها الإلكترونية. الخدمات مخصصة للأسر العربية وتعمل وفق معايير مهنية معتمدة.</p><p class="sec-desc" style="margin-bottom:18px;"><strong>٢. الاستخدام المقبول:</strong> تلتزم باستخدام المنصة لأغراض مشروعة فقط ووفق الغرض المخصص لها.</p><p class="sec-desc" style="margin-bottom:18px;"><strong>٣. السرية:</strong> جميع المعلومات المتبادلة في الجلسات الإرشادية سرية ومحمية بالكامل.</p><p class="sec-desc"><strong>٤. التواصل:</strong> لأي استفسارات قانونية تواصل معنا على info@orav.com</p>`,
};

function openPage(name) {
  const content = pages[name];
  if (!content) return;
  document.getElementById("pageContent").innerHTML = content;
  document.getElementById("pageOverlay").style.display = "block";
  document.body.style.overflow = "hidden";
  window.scrollTo(0, 0);
}

function closePage() {
  document.getElementById("pageOverlay").style.display = "none";
  document.body.style.overflow = "";
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closePage();
});

(function () {
  const wrap = document.getElementById("testWrap");
  const track = document.getElementById("testTrack");
  const dotsEl = document.getElementById("testDots");
  if (!wrap || !track || !dotsEl) return;

  const cards = [...track.querySelectorAll(".test-card")];
  let cur = 0;
  let autoTimer;

  function vis() {
    return window.innerWidth <= 768 ? 1 : 3;
  }

  function pages() {
    return Math.ceil(cards.length / vis());
  }

  function setWidths() {
    const v = vis();
    const gap = 16;
    const w = (wrap.offsetWidth - (v - 1) * gap) / v;
    cards.forEach((c) => {
      c.style.width = w + "px";
    });
  }

  function buildDots() {
    dotsEl.innerHTML = "";
    for (let i = 0; i < pages(); i++) {
      const d = document.createElement("button");
      d.className = "dot" + (i === cur ? " on" : "");
      d.onclick = () => goT(i);
      dotsEl.appendChild(d);
    }
  }

  function goT(page) {
    const tot = pages();
    cur = ((page % tot) + tot) % tot;
    const v = vis();
    const gap = 16;
    const w = (wrap.offsetWidth - (v - 1) * gap) / v;
    track.style.transform = `translateX(-${cur * v * (w + gap)}px)`;
    dotsEl.querySelectorAll(".dot").forEach((d, i) =>
      d.classList.toggle("on", i === cur)
    );
  }

  function startAuto() {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => goT(cur + 1), 5500);
  }

  function init() {
    cur = 0;
    setWidths();
    buildDots();
    goT(0);
  }

  document.getElementById("testPrev").onclick = () => {
    clearInterval(autoTimer);
    goT(cur - 1);
    startAuto();
  };
  document.getElementById("testNext").onclick = () => {
    clearInterval(autoTimer);
    goT(cur + 1);
    startAuto();
  };

  init();
  startAuto();
  window.addEventListener("resize", init);
})();
