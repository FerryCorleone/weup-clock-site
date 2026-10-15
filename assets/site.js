(function () {
  var cfg = window.WEUP_CONFIG || {};
  var FALLBACK = "https://www.apple.com/app-store/";
  var url = cfg.APP_STORE_URL || (cfg.APP_STORE_ID ? "https://apps.apple.com/app/id" + String(cfg.APP_STORE_ID).replace(/\D/g, "") : "");
  document.querySelectorAll("[data-appstore]").forEach(function (a) {
    a.href = url || FALLBACK;
    a.target = "_blank";
    a.rel = "noopener";
  });
  if (cfg.APP_STORE_ID) {
    var m = document.createElement("meta");
    m.name = "apple-itunes-app";
    m.content = "app-id=" + String(cfg.APP_STORE_ID).replace(/\D/g, "");
    document.head.appendChild(m);
  }

  // Old support deep links (/#support, /#zh) now live on support.html
  if (location.hash === "#support" || location.hash === "#zh") {
    location.replace("support.html" + location.hash);
    return;
  }

  // ---------- pose glyphs ----------
  var POSES = window.WEUP_POSES || {};
  document.querySelectorAll("[data-pose]").forEach(function (el) {
    var p = POSES[el.getAttribute("data-pose")];
    if (!p) return;
    var svg = '<svg viewBox="' + p.vb + '" aria-hidden="true">';
    p.d.forEach(function (d) { svg += '<path d="' + d + '"/>'; });
    el.innerHTML = svg + "</svg>";
  });

  // ---------- i18n (English in HTML, Chinese here) ----------
  var ZH = {
    "meta.title": "WeUp Clock — 一起起床的多人动作闹钟",
    "nav.how": "玩法", "nav.poses": "动作", "nav.privacy": "隐私", "nav.support": "帮助", "nav.download": "下载",
    "hero.eyebrow": "iPhone 多人动作闹钟",
    "hero.title": "一起<em>起床。</em>",
    "hero.sub": "一个闹钟，叫醒 2–4 个人。大家站到同一台 iPhone 前，一起摆出各自的目标动作并保持住，完成起床任务。",
    "cta.badgeSmall": "在", "cta.badgeBig": "App Store 下载",
    "hero.secondary": "看看怎么玩",
    "hero.req": "适用于 iPhone · 需要 iOS 26.1 或更高版本",
    "screen.sub": "两人 · 一起投降", "screen.frame": "两人已入镜", "screen.hold": "一起保持住…", "screen.done": "全员对准",
    "snooze.word": "再睡会儿",
    "problem.title": "是不是很熟悉？",
    "problem.body": "一个人的闹钟，很容易被一个人按掉。WeUp Clock 把起床变成一件大家一起做的事。",
    "how.eyebrow": "玩法", "how.title": "三步，一起醒来。",
    "how.1.t": "设一个闹钟", "how.1.b": "选择时间、重复日期、2–4 人、动作和铃声。可以同时设置多个闹钟。",
    "how.2.t": "一起摆动作", "how.2.b": "把手机放稳，大家入镜，对准目标动作。虚线会跟着身体引导，全员同时保持 1.25 秒即可完成。",
    "how.3.t": "留住这一刻", "how.3.b": "看看你们用了几秒一起完成，想留念就保存合影。不会自动保存任何照片。",
    "card.sub1": "一起投降 · 两人 · 工作日", "card.sub2": "准备起飞 · 三人 · 周六",
    "card.float": "一起投降 · 两人", "card.up": "一起醒了", "card.secs": "秒一起完成", "card.save": "保存图片",
    "poses.eyebrow": "动作", "poses.title": "9 个内置动作，<em>也能自己摆。</em>",
    "poses.body": "两人、三人、四人各有三个动作，按人数自动匹配。",
    "p.1": "一起投降", "p.2": "双人展翅", "p.3": "早安搭档", "p.4": "三人投降", "p.5": "三人山峰", "p.6": "准备起飞", "p.7": "全员投降", "p.8": "早安波浪", "p.9": "高低接力",
    "n.2": "两人", "n.3": "三人", "n.4": "四人",
    "custom.t": "自己摆一个", "custom.b": "用 5 秒倒计时拍摄，或从合影里提取。支持半身和全身，保存到“我的动作”。",
    "privacy.eyebrow": "隐私", "privacy.title": "只有你们，<em>和一台 iPhone。</em>",
    "privacy.1": "不用注册", "privacy.2": "不连服务器", "privacy.3": "不传云端", "privacy.4": "没有广告和追踪",
    "privacy.body": "动作识别通过 Apple Vision 只在本机进行，不识别人脸，也不录制视频。自定义动作只保存动作线框，原照片提取后即释放。",
    "privacy.link": "阅读隐私政策 →",
    "lang.title": "支持 10 种语言",
    "faq.title": "常见问题",
    "faq.1.q": "需要几个人？", "faq.1.a": "2–4 人，在同一个房间里，共用一台 iPhone。",
    "faq.2.q": "还能直接关掉闹钟吗？", "faq.2.a": "可以。锁屏上的“停止”按钮由 iOS 提供，App 无法移除。未完成的任务可以安排再次提醒。重要行程请再准备一个备用闹钟。",
    "faq.3.q": "需要联网或注册账号吗？", "faq.3.a": "不需要。没有账号、没有服务器、没有云端，所有识别都在你的 iPhone 上完成。",
    "faq.4.q": "摄像头画面会被录下来吗？", "faq.4.a": "不会。摄像头只在前台任务中使用，不录制视频。只有你主动点“保存图片”时，合影才会写入相册。",
    "faq.5.q": "支持哪些设备？", "faq.5.a": "运行 iOS 26.1 或更高版本的 iPhone。",
    "final.title": "明天早上，<em>一起起床。</em>",
    "footer.support": "帮助与支持", "footer.privacy": "隐私政策", "footer.contact": "联系我们"
  };
  var nodes = document.querySelectorAll("[data-i18n]");
  var EN = {};
  nodes.forEach(function (el) { EN[el.getAttribute("data-i18n")] = el.innerHTML; });
  EN["meta.title"] = document.title;

  function apply(lang) {
    var dict = lang === "zh" ? ZH : EN;
    nodes.forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (dict[k] != null) el.innerHTML = dict[k];
    });
    document.title = dict["meta.title"];
    document.documentElement.lang = lang === "zh" ? "zh-Hans" : "en";
    document.querySelectorAll("[data-setlang]").forEach(function (b) {
      b.setAttribute("aria-pressed", b.getAttribute("data-setlang") === lang ? "true" : "false");
    });
    try { localStorage.setItem("weup-lang", lang); } catch (e) {}
  }
  var q = new URLSearchParams(location.search).get("lang");
  var saved = null;
  try { saved = localStorage.getItem("weup-lang"); } catch (e) {}
  var initial = q || saved || ((navigator.language || "").toLowerCase().indexOf("zh") === 0 ? "zh" : "en");
  if (initial === "zh") apply("zh");
  document.querySelectorAll("[data-setlang]").forEach(function (b) {
    b.addEventListener("click", function () { apply(b.getAttribute("data-setlang")); });
  });

  // ---------- reveal on scroll ----------
  var io = "IntersectionObserver" in window ? new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, {threshold: 0.15}) : null;
  document.querySelectorAll(".reveal").forEach(function (el) { io ? io.observe(el) : el.classList.add("in"); });

  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
