/**
 * NISM Series V-D: macOS Design System & Apple Spring Animation Engine
 * Features:
 * 1. macOS Spotlight Search (Cmd+K / Ctrl+K) with instant fuzzy search across all 22 chapters.
 * 2. macOS Window Chrome with authentic Traffic Lights (Red, Yellow, Green) for quizzes & tools.
 * 3. macOS Floating Dock with Apple spring physics & magnification.
 * 4. Independent Sidebar Scrolling with 5px slim WebKit scrollbars.
 * 5. Top real-time reading progress bar.
 * 6. Active Section ScrollSpy for "On This Page" TOC.
 * 7. Liquid Glassmorphism & Apple Human Interface Guidelines (HIG) aesthetics.
 */

(function () {
  // ==========================================
  // 0. macOS Dark & Light Theme Controller
  // ==========================================
  function isDarkModeActive() {
    return document.documentElement.classList.contains("dark");
  }

  function applyTheme(isDark) {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    updateThemeButtons();
  }

  function initTheme() {
    const saved = localStorage.getItem("nism-theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
    } else if (saved === "light") {
      document.documentElement.classList.remove("dark");
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
    }

    if (window.matchMedia) {
      window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
        if (!localStorage.getItem("nism-theme")) {
          applyTheme(e.matches);
        }
      });
    }
  }

  window.toggleDarkMode = function () {
    const nextDark = !isDarkModeActive();
    applyTheme(nextDark);
    localStorage.setItem("nism-theme", nextDark ? "dark" : "light");
  };

  function updateThemeButtons() {
    const isDark = isDarkModeActive();

    // Header toggle button
    const headerBtn = document.getElementById("nism-header-theme-btn");
    if (headerBtn) {
      headerBtn.innerHTML = isDark
        ? `<i data-lucide="sun" class="w-4 h-4 text-amber-400"></i>`
        : `<i data-lucide="moon" class="w-4 h-4 text-indigo-600"></i>`;
      headerBtn.title = isDark ? "Switch to Light Mode (⌘D)" : "Switch to Dark Mode (⌘D)";
    }

    // Dock toggle button
    const dockBtn = document.getElementById("nism-dock-theme-btn");
    if (dockBtn) {
      dockBtn.innerHTML = `
        <i data-lucide="${isDark ? "sun" : "moon"}" class="w-4 h-4 ${isDark ? "text-amber-400" : ""}"></i>
        <span class="macos-dock-tooltip">${isDark ? "Light Mode (⌘D)" : "Dark Mode (⌘D)"}</span>
      `;
    }

    if (window.lucide && typeof window.lucide.createIcons === "function") {
      window.lucide.createIcons();
    }
  }

  // Immediate Zero-FOUC Theme Invocation
  initTheme();

  const NISM_DATA = [
    {
      id: "module1",
      title: "Module 1: Mutual Funds",
      subtitle: "Mutual Fund Foundation, Products & Advisory",
      marks: "70 Marks",
      themeColor: "blue",
      accentBg: "bg-blue-50/80",
      accentBorder: "border-blue-200",
      accentText: "text-blue-700",
      dotBg: "bg-blue-600",
      activeBg: "bg-blue-100 text-blue-900 border border-blue-300 font-bold dark:bg-blue-950/70 dark:text-blue-200 dark:border-blue-500/60",
      chapters: [
        { num: 1, title: "Investment Landscape", marks: "3 M", url: "module1-ch1.html", tags: "financial goals inflation asset classes equity debt gold real estate risk profiling behavioral biases" },
        { num: 2, title: "Concept & Role of a Mutual Fund", marks: "4 M", url: "module1-ch2.html", tags: "pass-through vehicle trust capital formation SIF specialized investment fund 10 lakhs mf lite" },
        { num: 3, title: "Legal Structure of Mutual Funds in India", marks: "4 M", url: "module1-ch3.html", tags: "trustee sponsor amc rta custodian depository board of trustees net worth" },
        { num: 4, title: "Legal & Regulatory Framework", marks: "7 M", url: "module1-ch4.html", tags: "sebi regulations 1996 categorization 11 equity 16 debt 6 hybrid advertising code insider trading" },
        { num: 5, title: "Scheme Related Information", marks: "7 M", url: "module1-ch5.html", tags: "sid statement of additional information sai kim key information memorandum risk-o-meter prc matrix" },
        { num: 6, title: "Fund Distribution & Channel Management", marks: "4 M", url: "module1-ch6.html", tags: "arn euin kyd trail commission ban on upfront mfd ria due diligence cooling-off" },
        { num: 7, title: "NAV, TER & Pricing of Units", marks: "5 M", url: "module1-ch7.html", tags: "seventh schedule marked to market valuation cut-off timing ter slab regulation 52 at-1 perpetual bonds" },
        { num: 8, title: "Taxation of Mutual Funds", marks: "3 M", url: "module1-ch8.html", tags: "budget 2024 ltcg 12.5% stcg 20% specified mutual funds sec 50aa slab rate idcw 10% tds stt bonus stripping" },
        { num: 9, title: "Investor Services", marks: "10 M ⭐", url: "module1-ch9.html", tags: "nfo 15 days uniform realization cut-off 1:30pm 3:00pm sip stp swp scores 2.0 minor account mam cooling-off" },
        { num: 10, title: "Risk, Return & Performance of Funds", marks: "5 M", url: "module1-ch10.html", tags: "systematic unsystematic cagr xirr prc matrix 3x3 redemption gating 10 days 2 lakhs side-pocketing" },
        { num: 11, title: "Mutual Fund Scheme Performance", marks: "5 M", url: "module1-ch11.html", tags: "tri total return index sharpe treynor sortino jensen alpha information ratio tracking error tier-1 tier-2" },
        { num: 12, title: "Mutual Fund Scheme Selection", marks: "10 M ⭐", url: "module1-ch12.html", tags: "asset allocation saa taa core satellite portfolio turnover ratio macaulay duration code of conduct" }
      ]
    },
    {
      id: "module2",
      title: "Module 2: Equity Derivatives",
      subtitle: "Derivatives, Index, Futures, Options & Strategies",
      marks: "50 Marks",
      themeColor: "emerald",
      accentBg: "bg-emerald-50/80",
      accentBorder: "border-emerald-200",
      accentText: "text-emerald-700",
      dotBg: "bg-emerald-600",
      activeBg: "bg-emerald-100 text-emerald-900 border border-emerald-300 font-bold dark:bg-emerald-950/70 dark:text-emerald-200 dark:border-emerald-500/60",
      chapters: [
        { num: 13, title: "Basics of Derivatives", marks: "10 M ⭐", url: "module2-ch13.html", tags: "scra 2(ac) lc gupta jr varma forwards futures options swaps hedgers speculators arbitrageurs mwpl 95% ban" },
        { num: 14, title: "Understanding the Index", marks: "5 M", url: "module2-ch14.html", tags: "free-float market cap iwf divisor corporate actions impact cost liquidity 33% 62% index eligibility" },
        { num: 15, title: "Introduction to Forwards & Futures", marks: "15 M ⭐", url: "module2-ch15.html", tags: "cost of carry continuous compounding discrete basis contango backwardation span elm mtm cash and carry" },
        { num: 16, title: "Introduction to Options", marks: "13 M ⭐", url: "module2-ch16.html", tags: "call put european style moneyness itm atm otm intrinsic time value delta gamma theta vega rho put-call parity" },
        { num: 17, title: "Strategies using Equity F&O", marks: "9 M", url: "module2-ch17.html", tags: "portfolio beta hedging covered call protective put bull call spread bear put straddle strangle collar pcr" }
      ]
    },
    {
      id: "module3",
      title: "Module 3: IR Derivatives",
      subtitle: "Fixed Income, IRF, Options & Hedging Strategies",
      marks: "30 Marks",
      themeColor: "purple",
      accentBg: "bg-purple-50/80",
      accentBorder: "border-purple-200",
      accentText: "text-purple-700",
      dotBg: "bg-purple-600",
      activeBg: "bg-purple-100 text-purple-900 border border-purple-300 font-bold dark:bg-purple-950/70 dark:text-purple-200 dark:border-purple-500/60",
      chapters: [
        { num: 18, title: "Intro to IR & Fixed Income Market", marks: "6 M", url: "module3-ch18.html", tags: "g-sec sdl t-bills nds-om ccil clean dirty price accrued interest ytm macaulay modified duration pv01 convexity" },
        { num: 19, title: "Interest Rate Derivatives", marks: "2 M", url: "module3-ch19.html", tags: "alm fra forward rate agreement irs interest rate swap mibor ois caps floors collars otc vs etird" },
        { num: 20, title: "Exchange Traded IRF", marks: "10 M ⭐", url: "module3-ch20.html", tags: "10-year goi bond futures lot 2000 tick 0.0025 tick value 5 rupees 91-dtb 100-yield fsp vwap 3pm-5pm span elm" },
        { num: 21, title: "Exchange Traded IR Options", marks: "6 M", url: "module3-ch21.html", tags: "etiro black 1976 yield delta call negative put positive asymmetric hedging floor upside participation" },
        { num: 22, title: "Strategies using ETIRD", marks: "6 M", url: "module3-ch22.html", tags: "duration hedge ratio short hedge long hedge synthetic money market basis trading calendar spreads basis risk" }
      ]
    }
  ];

  // Helper: Detect Current File Name
  function getCurrentPageName() {
    const path = window.location.pathname;
    const parts = path.split("/");
    return parts[parts.length - 1] || "index.html";
  }

  // Inject Modern Docs Theme Stylesheet
  function injectModernDocsTheme() {
    if (!document.getElementById("nism-modern-docs-link")) {
      const link = document.createElement("link");
      link.id = "nism-modern-docs-link";
      link.rel = "stylesheet";
      link.href = "modern-docs.css";
      document.head.appendChild(link);
    }
  }

  // ==========================================
  // 1. macOS Study Progress Tracking Engine
  // ==========================================
  function getCompletedChapters() {
    try {
      const raw = localStorage.getItem("nism_completed_chapters");
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  function isChapterCompleted(num) {
    return getCompletedChapters().includes(num);
  }

  window.toggleChapterCompleted = function (chNum) {
    let completed = getCompletedChapters();
    if (completed.includes(chNum)) {
      completed = completed.filter((c) => c !== chNum);
    } else {
      completed.push(chNum);
    }
    localStorage.setItem("nism_completed_chapters", JSON.stringify(completed));
    updateAllProgressUI();
  };

  function updateAllProgressUI() {
    const completed = getCompletedChapters();
    const count = completed.length;
    const total = 22;
    const percent = Math.round((count / total) * 100);

    // Update sidebar progress stats & bar
    document.querySelectorAll(".nism-progress-stats").forEach((el) => {
      el.textContent = `${count}/${total} (${percent}%)`;
    });
    document.querySelectorAll(".nism-progress-bar").forEach((el) => {
      el.style.width = `${percent}%`;
    });

    // Update home page tracker if on index.html
    const homeCount = document.getElementById("home-progress-count");
    if (homeCount) homeCount.textContent = `${count} of ${total} Chapters`;
    const homePercent = document.getElementById("home-progress-percent");
    if (homePercent) homePercent.textContent = `${percent}%`;
    const homeBar = document.getElementById("home-progress-bar");
    if (homeBar) homeBar.style.width = `${percent}%`;

    // Update sidebar checkmark buttons
    document.querySelectorAll(".chapter-check-btn").forEach((btn) => {
      const num = parseInt(btn.getAttribute("data-ch-check"), 10);
      const isDone = completed.includes(num);
      if (isDone) {
        btn.classList.add("completed");
        btn.innerHTML = `<i data-lucide="check" class="w-2.5 h-2.5"></i>`;
        btn.title = "Mark as Incomplete";
      } else {
        btn.classList.remove("completed");
        btn.innerHTML = `<i data-lucide="circle" class="w-2.5 h-2.5"></i>`;
        btn.title = "Mark as Completed";
      }
    });

    // Update bottom chapter completion card if on chapter page
    const page = getCurrentPageName();
    const match = page.match(/module\d+-ch(\d+)\.html/);
    if (match) {
      const currentCh = parseInt(match[1], 10);
      const isCurrentDone = completed.includes(currentCh);
      const desc = document.getElementById("ch-completion-desc");
      const btn = document.getElementById("ch-completion-btn");
      const iconBox = document.querySelector("#chapter-completion-box .rounded-xl");

      if (desc) {
        desc.textContent = isCurrentDone
          ? "Great job! This chapter is marked as complete in your progress dashboard."
          : "Done reviewing all theory and formulas? Mark this chapter completed to update your progress.";
      }
      if (btn) {
        if (isCurrentDone) {
          btn.className = "px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 bg-emerald-100 text-emerald-800 hover:bg-emerald-200 border border-emerald-300 dark:bg-emerald-950 dark:text-emerald-300";
          btn.innerHTML = `<i data-lucide="check-circle" class="w-4 h-4"></i><span>Completed (Click to Reset)</span>`;
        } else {
          btn.className = "px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-200";
          btn.innerHTML = `<i data-lucide="check" class="w-4 h-4"></i><span>Mark Chapter as Completed</span>`;
        }
      }
      if (iconBox) {
        if (isCurrentDone) {
          iconBox.className = "w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-sm transition-colors duration-200";
          iconBox.innerHTML = `<i data-lucide="award" class="w-5 h-5"></i>`;
        } else {
          iconBox.className = "w-10 h-10 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center shrink-0 shadow-sm transition-colors duration-200";
          iconBox.innerHTML = `<i data-lucide="book-open" class="w-5 h-5"></i>`;
        }
      }
    }

    if (window.lucide && typeof window.lucide.createIcons === "function") {
      window.lucide.createIcons();
    }
  }

  function injectChapterCompletionCard() {
    const page = getCurrentPageName();
    const match = page.match(/module\d+-ch(\d+)\.html/);
    if (!match) return;

    const chNum = parseInt(match[1], 10);
    const quiz = document.getElementById("interactive-quiz");
    if (!quiz || document.getElementById("chapter-completion-box")) return;

    const isDone = isChapterCompleted(chNum);
    const card = document.createElement("div");
    card.id = "chapter-completion-box";
    card.className = "chapter-completion-card";
    card.innerHTML = `
      <div class="flex items-center gap-3 text-left">
        <div class="w-10 h-10 rounded-xl ${isDone ? "bg-emerald-500 text-white" : "bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300"} flex items-center justify-center shrink-0 shadow-sm transition-colors duration-200">
          <i data-lucide="${isDone ? "award" : "book-open"}" class="w-5 h-5"></i>
        </div>
        <div>
          <h4 class="font-bold text-slate-900 dark:text-white text-sm">Chapter ${chNum} Study Completion</h4>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5" id="ch-completion-desc">
            ${isDone ? "Great job! This chapter is marked as complete in your progress dashboard." : "Done reviewing all theory and formulas? Mark this chapter completed to update your progress."}
          </p>
        </div>
      </div>
      <button 
        type="button"
        onclick="window.toggleChapterCompleted(${chNum})"
        id="ch-completion-btn"
        class="px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-2 shadow-sm shrink-0 ${
          isDone 
            ? "bg-emerald-100 text-emerald-800 hover:bg-emerald-200 border border-emerald-300 dark:bg-emerald-950 dark:text-emerald-300"
            : "bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-200"
        }"
      >
        <i data-lucide="${isDone ? "check-circle" : "check"}" class="w-4 h-4"></i>
        <span>${isDone ? "Completed (Click to Reset)" : "Mark Chapter as Completed"}</span>
      </button>
    `;

    quiz.parentNode.insertBefore(card, quiz);
    if (window.lucide && typeof window.lucide.createIcons === "function") {
      window.lucide.createIcons();
    }
  }

  // ==========================================
  // 2. Spotlight 2.0 Quick Actions & Search Engine
  // ==========================================
  const NISM_QUICK_ACTIONS = [
    {
      type: "action",
      title: "Master NISM Portal (All Certifications)",
      sub: "Unified Directory for Series V-D, V-A, VIII, XV, X-A/B & XXI-A",
      badge: "Master Portal",
      icon: "compass",
      keywords: "master portal home certifications nism directory exams all series va vd viii xv xa xb xxia",
      action: () => { window.location.href = "index.html"; }
    },
    {
      type: "action",
      title: "Series V-D Study Hub (Mutual Fund & SIF)",
      sub: "All 22 Chapters, Weightage Breakdown & Flagship Curriculum",
      badge: "Series V-D",
      icon: "book-open",
      keywords: "series vd 5d mutual fund sif specialized investment fund dashboard chapters",
      action: () => { window.location.href = "nism-5d.html"; }
    },
    {
      type: "action",
      title: "Mock Test Center (10 Exams • 1,000 Questions)",
      sub: "5 Full-Length Exams (150Q • 3h) & 5 Rapid Mini Mocks (50Q • 1h)",
      badge: "Mock Exams",
      icon: "award",
      keywords: "mock test exam 150 questions 50 questions test center practice simulation quiz mini mock",
      action: () => { window.location.href = "mock-tests.html"; }
    },
    {
      type: "action",
      title: "Mini Mock Series (50-Question Speed Drills)",
      sub: "5 Rapid 50-Question Timed Drills (60 Mins Each • 50 Marks)",
      badge: "Mini Mocks",
      icon: "zap",
      keywords: "mini mock 50 questions speed drill practice test rapid fire",
      action: () => { window.location.href = "mock-tests.html"; }
    },
    {
      type: "action",
      title: "Mock Test 1: SIF & Mutual Fund Comprehensive (150Q)",
      sub: "SIF, Categorization, Distribution & Valuation Full 150-Question Exam",
      badge: "Mock 1",
      icon: "award",
      keywords: "mock test 1 sif mutual fund 150 questions exam",
      action: () => { window.location.href = "mock-tests.html?test=mock1"; }
    },
    {
      type: "action",
      title: "Mock Test 2: Standard Practice Exam (150Q)",
      sub: "NAV, TER, Taxes, Investor Services Standard 150-Question Exam",
      badge: "Mock 2",
      icon: "award",
      keywords: "mock test 2 standard practice 150 questions exam",
      action: () => { window.location.href = "mock-tests.html?test=mock2"; }
    },
    {
      type: "action",
      title: "Mock Test 3: Numerical & Derivatives Heavy Exam (150Q)",
      sub: "Yield Curves, Cost of Carry, Option Greeks & Payoffs 150-Question Exam",
      badge: "Mock 3",
      icon: "award",
      keywords: "mock test 3 derivatives numerical futures options 150 questions exam",
      action: () => { window.location.href = "mock-tests.html?test=mock3"; }
    },
    {
      type: "action",
      title: "Mock Test 4: Regulatory & Operational Mastery (150Q)",
      sub: "KYC, Uniform Realization Cut-Offs, Code of Conduct 150-Question Exam",
      badge: "Mock 4",
      icon: "award",
      keywords: "mock test 4 regulatory operational kyc sebi amfi 150 questions exam",
      action: () => { window.location.href = "mock-tests.html?test=mock4"; }
    },
    {
      type: "action",
      title: "Mock Test 5: Final Comprehensive All-Module Exam (150Q)",
      sub: "Grand Simulation Covering All 3 Modules with 150 Questions",
      badge: "Mock 5",
      icon: "award",
      keywords: "mock test 5 final grand exam all modules 150 questions",
      action: () => { window.location.href = "mock-tests.html?test=mock5"; }
    },
    {
      type: "action",
      title: "Interactive Formula Lab (⌘M)",
      sub: "All 5 Live Calculation Engines (NAV, Futures, Options, Bonds, Beta)",
      badge: "⌘M",
      icon: "calculator",
      keywords: "formula lab calculator math nav options bond duration beta arbitrage carry",
      action: () => { window.closeSpotlightModal(); window.openFormulaLabModal(); }
    },
    {
      type: "action",
      title: "NAV & Unit Pricing Calculator",
      sub: "Net Asset Value, Sale Price, Repurchase Price & Exit Load credit",
      badge: "Formula",
      icon: "calculator",
      keywords: "nav pricing expense ratio ter exit load units formula calculation",
      action: () => { window.closeSpotlightModal(); window.openFormulaLabModal(); window.switchFormulaTab('nav'); }
    },
    {
      type: "action",
      title: "Futures Cost of Carry & Arbitrage Engine",
      sub: "Fair Futures Price, Cost of Carry, Basis & Arbitrage Profit Execution",
      badge: "Formula",
      icon: "trending-up",
      keywords: "futures cost of carry arbitrage basis contango backwardation fair price",
      action: () => { window.closeSpotlightModal(); window.openFormulaLabModal(); window.switchFormulaTab('futures'); }
    },
    {
      type: "action",
      title: "Options Moneyness & Greeks Calculator",
      sub: "Intrinsic & Time Value, Delta, Gamma, Theta, Vega sensitivity",
      badge: "Formula",
      icon: "activity",
      keywords: "options greeks delta gamma theta vega moneyness itm atm otm call put",
      action: () => { window.closeSpotlightModal(); window.openFormulaLabModal(); window.switchFormulaTab('options'); }
    },
    {
      type: "action",
      title: "Bond Clean / Dirty Price & Duration Engine",
      sub: "Accrued Interest, Dirty Price, Macaulay Duration, Modified Duration & PV01",
      badge: "Formula",
      icon: "percent",
      keywords: "bond dirty price clean price accrued interest duration modified macaulay pv01 ytm yield",
      action: () => { window.closeSpotlightModal(); window.openFormulaLabModal(); window.switchFormulaTab('bonds'); }
    },
    {
      type: "action",
      title: "Portfolio Beta Hedging Calculator",
      sub: "Exact Number of Index Futures Contracts to Alter Portfolio Beta",
      badge: "Formula",
      icon: "shield-check",
      keywords: "beta hedging hedge ratio portfolio risk target contracts",
      action: () => { window.closeSpotlightModal(); window.openFormulaLabModal(); window.switchFormulaTab('beta'); }
    },
    {
      type: "action",
      title: "Exam Quick-Cram Sheet",
      sub: "SEBI Categorization Slabs, Uniform Cut-Offs, Budget 2024 Tax, F&O Margins",
      badge: "Cram Sheet",
      icon: "file-text",
      keywords: "cram sheet cheatsheet cut-off tax budget sebi slabs mwpl span elm margins",
      action: () => { window.closeSpotlightModal(); window.openCheatSheetModal(); }
    },
    {
      type: "action",
      title: "SEBI Categorization Slabs",
      sub: "Multi Cap 25/25/25, Large Cap 80%, Focused 30 stocks, SIF ₹10L",
      badge: "Cram Sheet",
      icon: "layers",
      keywords: "sebi categorization multi cap large cap small cap focused elss sif mf lite",
      action: () => { window.closeSpotlightModal(); window.openCheatSheetModal('sebi'); }
    },
    {
      type: "action",
      title: "Uniform Cut-Off Timings",
      sub: "Liquid Funds 1:30 PM, Equity/Debt 3:00 PM & Uniform Realization Rule",
      badge: "Cram Sheet",
      icon: "clock",
      keywords: "cut-off cutoff timings uniform realization 1:30 3:00 nav timing",
      action: () => { window.closeSpotlightModal(); window.openCheatSheetModal('cutoff'); }
    },
    {
      type: "action",
      title: "Post-Budget 2024 Capital Gains Tax Rules",
      sub: "Equity LTCG 12.5% (₹1.25L exemption), STCG 20%, Sec 50AA slab rate",
      badge: "Cram Sheet",
      icon: "award",
      keywords: "taxation budget 2024 ltcg stcg 12.5% 20% specified mutual funds sec 50aa tds 194k",
      action: () => { window.closeSpotlightModal(); window.openCheatSheetModal('tax'); }
    },
    {
      type: "action",
      title: "F&O Ban & Margining Norms",
      sub: "MWPL 95% ban trigger, 80% exit, 10-Yr IRF ₹5.00 tick value",
      badge: "Cram Sheet",
      icon: "shield-alert",
      keywords: "mwpl f&o ban span elm initial margin tick value tick size 0.0025",
      action: () => { window.closeSpotlightModal(); window.openCheatSheetModal('fno'); }
    },
    {
      type: "action",
      title: "Keyboard Shortcuts Guide",
      sub: "macOS Power Navigation: ⌘K, ⌘M, ⌘D, ?, ESC",
      badge: "?",
      icon: "command",
      keywords: "shortcuts hotkeys keyboard macos help keys",
      action: () => { window.closeSpotlightModal(); window.openShortcutsModal(); }
    },
    {
      type: "action",
      title: "Toggle Dark / Light Theme",
      sub: "Switch Between macOS Mojave Dark & Cupertino Light Modes",
      badge: "⌘D",
      icon: "moon",
      keywords: "dark light theme mode appearance color",
      action: () => { window.toggleDarkMode(); }
    }
  ];

  let spotlightActiveIndex = 0;
  let spotlightFilteredItems = [];

  function createSpotlightModal() {
    if (document.getElementById("nism-spotlight-backdrop")) return;

    const backdrop = document.createElement("div");
    backdrop.id = "nism-spotlight-backdrop";
    backdrop.className = "macos-spotlight-backdrop";
    backdrop.onclick = function (e) {
      if (e.target === backdrop) closeSpotlightModal();
    };

    backdrop.innerHTML = `
      <div class="macos-spotlight-modal" onclick="event.stopPropagation()">
        <!-- Spotlight Search Bar -->
        <div class="spotlight-search-header">
          <i data-lucide="search" class="w-5 h-5 text-slate-400 shrink-0"></i>
          <input 
            type="text" 
            id="spotlight-input" 
            class="spotlight-search-input" 
            placeholder="Spotlight: Search Chapters, Formulas, Cut-offs, Tax..." 
            autocomplete="off"
            spellcheck="false"
          />
          <span class="spotlight-kbd text-slate-400 text-xs">ESC</span>
        </div>

        <!-- Spotlight Results List -->
        <div id="spotlight-results" class="spotlight-results nism-custom-scroll">
          <!-- Dynamically populated -->
        </div>

        <!-- macOS Spotlight Footer -->
        <div class="spotlight-footer">
          <div class="flex items-center gap-3">
            <span><kbd class="spotlight-kbd">↑</kbd> <kbd class="spotlight-kbd">↓</kbd> Navigate</span>
            <span><kbd class="spotlight-kbd">↵</kbd> Open</span>
            <span><kbd class="spotlight-kbd">ESC</kbd> Close</span>
          </div>
          <span class="font-semibold text-slate-500">NISM Series V-D Master Spotlight</span>
        </div>
      </div>
    `;

    document.body.appendChild(backdrop);

    const input = document.getElementById("spotlight-input");
    input.addEventListener("input", handleSpotlightInput);
    input.addEventListener("keydown", handleSpotlightKeydown);
  }

  window.openSpotlightModal = function () {
    createSpotlightModal();
    const backdrop = document.getElementById("nism-spotlight-backdrop");
    const input = document.getElementById("spotlight-input");
    if (!backdrop || !input) return;

    backdrop.classList.add("open");
    input.value = "";
    spotlightActiveIndex = 0;
    renderSpotlightResults("");
    setTimeout(() => input.focus(), 50);

    if (window.lucide && typeof window.lucide.createIcons === "function") {
      window.lucide.createIcons();
    }
  };

  window.closeSpotlightModal = function () {
    const backdrop = document.getElementById("nism-spotlight-backdrop");
    if (backdrop) {
      backdrop.classList.remove("open");
    }
  };

  function handleSpotlightInput(e) {
    const query = e.target.value.toLowerCase().trim();
    spotlightActiveIndex = 0;
    renderSpotlightResults(query);
  }

  window.triggerSpotlightItem = function (index) {
    if (spotlightFilteredItems[index]) {
      const item = spotlightFilteredItems[index];
      if (item.type === "action") {
        item.action();
      } else if (item.url) {
        window.location.href = item.url;
      }
    }
  };

  function handleSpotlightKeydown(e) {
    if (e.key === "Escape") {
      closeSpotlightModal();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (spotlightFilteredItems.length > 0) {
        spotlightActiveIndex = (spotlightActiveIndex + 1) % spotlightFilteredItems.length;
        updateSpotlightSelection();
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (spotlightFilteredItems.length > 0) {
        spotlightActiveIndex = (spotlightActiveIndex - 1 + spotlightFilteredItems.length) % spotlightFilteredItems.length;
        updateSpotlightSelection();
      }
    } else if (e.key === "Enter") {
      e.preventDefault();
      window.triggerSpotlightItem(spotlightActiveIndex);
    }
  }

  function renderSpotlightResults(query) {
    const container = document.getElementById("spotlight-results");
    if (!container) return;

    spotlightFilteredItems = [];
    const actions = [];
    const chapters = [];

    if (query === "") {
      NISM_QUICK_ACTIONS.slice(0, 4).forEach((act) => actions.push(act));
      NISM_DATA.forEach((mod) => {
        mod.chapters.forEach((ch) => {
          chapters.push({
            type: "chapter",
            ...ch,
            moduleTitle: mod.title,
            dotBg: mod.dotBg
          });
        });
      });
    } else {
      NISM_QUICK_ACTIONS.forEach((act) => {
        const text = `${act.title} ${act.sub} ${act.keywords}`.toLowerCase();
        if (text.includes(query)) actions.push(act);
      });

      NISM_DATA.forEach((mod) => {
        mod.chapters.forEach((ch) => {
          const text = `${mod.title} chapter ${ch.num} ${ch.title} ${ch.marks} ${ch.tags || ""}`.toLowerCase();
          if (text.includes(query)) {
            chapters.push({
              type: "chapter",
              ...ch,
              moduleTitle: mod.title,
              dotBg: mod.dotBg
            });
          }
        });
      });
    }

    spotlightFilteredItems = [...actions, ...chapters];

    if (spotlightFilteredItems.length === 0) {
      container.innerHTML = `
        <div class="py-10 text-center text-slate-400 text-xs">
          <i data-lucide="help-circle" class="w-8 h-8 mx-auto mb-2 text-slate-300 stroke-1"></i>
          <p class="font-medium text-slate-600">No matching chapters or formulas found for "${query}"</p>
          <p class="text-[11px] mt-1">Try searching for "nav", "duration", "delta", "cram", or "tax"</p>
        </div>
      `;
      if (window.lucide && typeof window.lucide.createIcons === "function") window.lucide.createIcons();
      return;
    }

    let html = "";
    let globalIndex = 0;

    if (actions.length > 0) {
      html += `<div class="spotlight-group-title">Exam Calculators & Tools</div>`;
      actions.forEach((act) => {
        const isActive = globalIndex === spotlightActiveIndex;
        html += `
          <div class="spotlight-item ${isActive ? "active" : ""}" data-spotlight-idx="${globalIndex}" onclick="window.triggerSpotlightItem(${globalIndex})">
            <div class="flex items-center gap-3 min-w-0">
              <span class="w-6 h-6 rounded-lg bg-indigo-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                <i data-lucide="${act.icon}" class="w-3.5 h-3.5"></i>
              </span>
              <div class="min-w-0">
                <div class="font-bold text-xs text-slate-900 dark:text-white truncate spotlight-title">${act.title}</div>
                <div class="text-[10px] text-slate-400 truncate spotlight-sub">${act.sub}</div>
              </div>
            </div>
            <div class="flex items-center gap-2 shrink-0 ml-2">
              <span class="text-[10px] px-2 py-0.5 rounded-full font-bold bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 border border-indigo-200">
                ${act.badge}
              </span>
              <i data-lucide="arrow-up-right" class="w-3.5 h-3.5 text-slate-400"></i>
            </div>
          </div>
        `;
        globalIndex++;
      });
    }

    if (chapters.length > 0) {
      html += `<div class="spotlight-group-title">Curriculum Chapters</div>`;
      chapters.forEach((ch) => {
        const isActive = globalIndex === spotlightActiveIndex;
        html += `
          <div class="spotlight-item ${isActive ? "active" : ""}" data-spotlight-idx="${globalIndex}" onclick="window.triggerSpotlightItem(${globalIndex})">
            <div class="flex items-center gap-3 min-w-0">
              <span class="w-6 h-6 rounded-lg ${ch.dotBg} text-white font-bold text-[11px] flex items-center justify-center shrink-0 shadow-xs">
                ${ch.num}
              </span>
              <div class="min-w-0">
                <div class="font-bold text-xs text-slate-900 dark:text-white truncate spotlight-title">${ch.title}</div>
                <div class="text-[10px] text-slate-400 truncate spotlight-sub">${ch.moduleTitle}</div>
              </div>
            </div>
            <div class="flex items-center gap-2 shrink-0 ml-2">
              <span class="text-[10px] px-2 py-0.5 rounded-full font-bold bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700">
                ${ch.marks}
              </span>
              <i data-lucide="chevron-right" class="w-3.5 h-3.5 text-slate-300"></i>
            </div>
          </div>
        `;
        globalIndex++;
      });
    }

    container.innerHTML = html;
    if (window.lucide && typeof window.lucide.createIcons === "function") {
      window.lucide.createIcons();
    }
  }

  function updateSpotlightSelection() {
    const items = document.querySelectorAll(".spotlight-item");
    items.forEach((item, idx) => {
      if (idx === spotlightActiveIndex) {
        item.classList.add("active");
        item.scrollIntoView({ block: "nearest", behavior: "smooth" });
      } else {
        item.classList.remove("active");
      }
    });
  }

  // Setup Global Keyboard Listener for Cmd+K / Ctrl+K / Cmd+D / Cmd+M / '?' / '/'
  function setupSpotlightKeyboardListener() {
    document.addEventListener("keydown", function (e) {
      // Cmd+D or Ctrl+D for Dark / Light Mode Toggle
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "d") {
        e.preventDefault();
        window.toggleDarkMode();
        return;
      }

      // Cmd+M or Ctrl+M for macOS Formula Lab
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "m") {
        e.preventDefault();
        window.toggleFormulaLab();
        return;
      }

      // Cmd+K or Ctrl+K for Spotlight Search
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        const backdrop = document.getElementById("nism-spotlight-backdrop");
        if (backdrop && backdrop.classList.contains("open")) {
          closeSpotlightModal();
        } else {
          openSpotlightModal();
        }
        return;
      }

      // '?' for Shortcuts Helper
      if (e.key === "?" && !["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName)) {
        e.preventDefault();
        window.toggleShortcutsModal();
        return;
      }

      // '/' for Spotlight Search
      if (e.key === "/" && !["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName)) {
        e.preventDefault();
        openSpotlightModal();
        return;
      }

      // Escape to close all overlays
      if (e.key === "Escape") {
        closeSpotlightModal();
        window.toggleMobileChapterDrawer(false);
        if (window.closeFormulaLab) window.closeFormulaLab();
        if (window.closeCheatSheet) window.closeCheatSheet();
        if (window.closeShortcutsModal) window.closeShortcutsModal();
      }
    });
  }

  // ==========================================
  // 2. macOS Window Chrome & Traffic Lights
  // ==========================================
  function injectMacOSTrafficLights() {
    // 1. Interactive Quiz container
    const quizSection = document.getElementById("interactive-quiz");
    if (quizSection && !quizSection.querySelector(".macos-window-header")) {
      quizSection.classList.add("macos-window");
      const title = quizSection.querySelector("h2") ? quizSection.querySelector("h2").innerText : "Practice Examination Terminal";
      const header = document.createElement("div");
      header.className = "macos-window-header";
      header.innerHTML = `
        <div class="macos-traffic-lights">
          <span class="traffic-light close" title="Close / Reset Quiz"></span>
          <span class="traffic-light minimize" title="Minimize Window"></span>
          <span class="traffic-light maximize" title="Toggle Fullscreen Focus"></span>
        </div>
        <div class="macos-window-title flex items-center gap-1.5">
          <i data-lucide="terminal" class="w-3.5 h-3.5 text-indigo-500"></i>
          <span>${title}</span>
        </div>
        <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
          macOS Terminal
        </span>
      `;
      quizSection.insertBefore(header, quizSection.firstChild);

      // Wire interactive traffic lights
      const minBtn = header.querySelector(".traffic-light.minimize");
      const maxBtn = header.querySelector(".traffic-light.maximize");
      const closeBtn = header.querySelector(".traffic-light.close");

      if (minBtn) {
        minBtn.onclick = function (e) {
          e.stopPropagation();
          const children = Array.from(quizSection.children).slice(1);
          children.forEach(el => el.classList.toggle("hidden"));
        };
      }

      if (maxBtn) {
        maxBtn.onclick = function (e) {
          e.stopPropagation();
          quizSection.classList.toggle("fixed");
          quizSection.classList.toggle("inset-4");
          quizSection.classList.toggle("z-50");
          quizSection.classList.toggle("overflow-y-auto");
          quizSection.classList.toggle("shadow-2xl");
          quizSection.classList.toggle("p-8");
        };
      }

      if (closeBtn) {
        closeBtn.onclick = function (e) {
          e.stopPropagation();
          if (confirm("Reset current quiz inputs?")) {
            const inputs = quizSection.querySelectorAll("input[type='radio'], input[type='checkbox']");
            inputs.forEach(inp => inp.checked = false);
            const scoreCard = quizSection.querySelector("#quiz-result, #score-card");
            if (scoreCard) scoreCard.classList.add("hidden");
          }
        };
      }
    }

    // 2. Chapter Switcher Card (Sidebar)
    const switcherCard = document.querySelector("#sidebar-chapter-switcher > div");
    if (switcherCard && !switcherCard.querySelector(".macos-traffic-lights")) {
      switcherCard.classList.add("macos-window");
      const topBar = switcherCard.querySelector(".p-3\\.5");
      if (topBar) {
        topBar.classList.remove("bg-gradient-to-r", "from-slate-900", "via-slate-800", "to-indigo-950");
        topBar.classList.add("macos-window-header");
        topBar.innerHTML = `
          <div class="macos-traffic-lights">
            <span class="traffic-light close" onclick="window.toggleMobileChapterDrawer(false)"></span>
            <span class="traffic-light minimize" onclick="const p = this.closest('.macos-window').querySelector('.space-y-2'); if(p) p.classList.toggle('hidden');"></span>
            <span class="traffic-light maximize" onclick="window.openSpotlightModal()"></span>
          </div>
          <div class="macos-window-title flex items-center gap-1.5 font-bold text-slate-800">
            <i data-lucide="layers" class="w-3.5 h-3.5 text-indigo-600"></i>
            <span>Course Navigator</span>
          </div>
          <span class="px-1.5 py-0.5 rounded text-[9px] font-bold bg-slate-200 text-slate-700">
            22 Chs
          </span>
        `;
      }
    }
  }

  // ==========================================
  // 3. Desktop Chapter Switcher Generator
  // ==========================================
  function generateChapterSwitcherHtml(isMobile) {
    const currentPage = getCurrentPageName();
    const prefix = isMobile ? "mob-" : "desk-";

    let html = `
      <div class="rounded-2xl bg-white border border-slate-200/90 shadow-sm overflow-hidden text-xs transition-all">
        <!-- Header -->
        <div class="p-3.5 bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 text-white flex items-center justify-between">
          <div class="flex items-center gap-2">
            <div class="w-6 h-6 rounded-lg bg-indigo-500/30 border border-indigo-400/40 flex items-center justify-center text-indigo-200 shadow-inner">
              <i data-lucide="layers" class="w-3.5 h-3.5"></i>
            </div>
            <div>
              <span class="font-display font-bold text-xs uppercase tracking-wider block text-white">All Chapters</span>
              <span class="text-[10px] text-slate-400 block -mt-0.5">3 Modules &bull; 22 Units</span>
            </div>
          </div>
          <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-white/10 text-indigo-200 border border-white/10">
            NISM V-D
          </span>
        </div>

        <!-- Quick Spotlight Search Launcher Button -->
        <div class="p-2.5 border-b border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/50">
          <button 
            type="button"
            onclick="window.openSpotlightModal()"
            class="w-full flex items-center justify-between px-3 py-1.5 text-[11px] rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-indigo-400 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-all shadow-2xs group"
          >
            <div class="flex items-center gap-2">
              <i data-lucide="search" class="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600 transition-colors"></i>
              <span>Spotlight Search...</span>
            </div>
            <kbd class="spotlight-kbd text-[10px] text-slate-500">⌘K</kbd>
          </button>
        </div>

        <!-- Study Progress Header in Sidebar -->
        <div class="sidebar-progress-container">
          <div class="flex items-center justify-between text-[11px] font-bold text-slate-600 dark:text-slate-300 mb-1">
            <span class="flex items-center gap-1.5">
              <i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-emerald-500"></i>
              Study Progress
            </span>
            <span class="nism-progress-stats text-[10px] font-mono font-semibold text-slate-500">0/22 (0%)</span>
          </div>
          <div class="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
            <div class="nism-progress-bar h-full bg-emerald-500 rounded-full transition-all duration-300" style="width: 0%"></div>
          </div>
        </div>

        <!-- Dropdowns Container -->
        <div class="p-2.5 space-y-2">
    `;

    NISM_DATA.forEach((mod) => {
      const isCurrentModule = mod.chapters.some((ch) => ch.url === currentPage);
      const isOpenAttr = isCurrentModule ? "open" : "";

      html += `
        <!-- ${mod.title} Dropdown -->
        <details id="${prefix}${mod.id}-details" class="group rounded-xl border ${mod.accentBorder} ${mod.accentBg} overflow-hidden transition-all duration-150" ${isOpenAttr}>
          <summary class="flex items-center justify-between p-2.5 cursor-pointer select-none hover:bg-white/80 dark:hover:bg-slate-800/60 transition-colors">
            <div class="flex items-center gap-2 min-w-0">
              <span class="w-2 h-2 rounded-full ${mod.dotBg} shrink-0 shadow-xs"></span>
              <div class="min-w-0">
                <span class="font-bold text-slate-900 dark:text-slate-100 truncate block text-[11.5px]">${mod.title}</span>
                <span class="text-[10px] text-slate-500 dark:text-slate-400 block truncate">${mod.marks} &bull; ${mod.chapters.length} Chapters</span>
              </div>
            </div>
            <div class="flex items-center gap-1.5 shrink-0 ml-1">
              <i data-lucide="chevron-down" class="w-3.5 h-3.5 text-slate-400 transition-transform duration-200 group-open:rotate-180"></i>
            </div>
          </summary>

          <!-- Chapter List Inside Module -->
          <div class="p-1.5 space-y-1 bg-white dark:bg-slate-900/90 border-t ${mod.accentBorder}">
      `;

      mod.chapters.forEach((ch) => {
        const isCurrent = ch.url === currentPage;
        const isDone = isChapterCompleted(ch.num);
        const activeClass = isCurrent
          ? `${mod.activeBg} shadow-xs`
          : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:text-slate-900 dark:hover:text-white transition-colors";

        let badgeHtml = "";
        if (isCurrent) {
          badgeHtml = `<span class="px-1.5 py-0.5 rounded text-[9px] font-extrabold uppercase tracking-wide bg-white dark:bg-slate-800 ${mod.accentText} border border-current shadow-2xs">Reading</span>`;
        } else if (ch.marks.includes("⭐")) {
          badgeHtml = `<span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-100/90 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-600/60 flex items-center gap-0.5 shadow-2xs">${ch.marks}</span>`;
        } else {
          badgeHtml = `<span class="text-[10px] text-slate-500 dark:text-slate-400 font-medium px-1 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200/50 dark:border-slate-700/50">${ch.marks}</span>`;
        }

        html += `
          <div class="flex items-center gap-1.5 group/row">
            <button 
              type="button" 
              class="chapter-check-btn ${isDone ? "completed" : ""}" 
              data-ch-check="${ch.num}"
              onclick="event.preventDefault(); event.stopPropagation(); window.toggleChapterCompleted(${ch.num});"
              title="${isDone ? "Mark as Incomplete" : "Mark as Completed"}"
            >
              <i data-lucide="${isDone ? "check" : "circle"}" class="w-2.5 h-2.5"></i>
            </button>
            <a 
              href="${ch.url}" 
              ${isMobile ? 'onclick="window.toggleMobileChapterDrawer(false)"' : ''}
              data-chapter-item="${mod.id}" 
              data-chapter-text="chapter ${ch.num} ${ch.title.toLowerCase()}"
              class="flex-grow flex items-center justify-between gap-2 px-2.5 py-1.5 rounded-lg text-[11px] leading-tight ${activeClass} group/item transition-colors"
            >
              <div class="flex items-center gap-2 min-w-0">
                <span class="w-4 h-4 rounded flex items-center justify-center text-[10px] font-bold ${
                  isCurrent ? mod.dotBg + " text-white shadow-2xs" : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover/item:bg-slate-200 dark:group-hover/item:bg-slate-700"
                } shrink-0">
                  ${ch.num}
                </span>
                <span class="truncate ${isCurrent ? "font-bold" : "font-medium"}">
                  ${ch.title}
                </span>
              </div>
              <div class="flex items-center gap-1 shrink-0">
                ${badgeHtml}
              </div>
            </a>
          </div>
        `;
      });

      html += `
          </div>
        </details>
      `;
    });

    html += `
        </div>

        <!-- Quick Footer Link -->
        <div class="p-2.5 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500">
          <a href="index.html" class="flex items-center gap-1 hover:text-indigo-600 font-semibold transition-colors" title="Master NISM Portal">
            <i data-lucide="compass" class="w-3.5 h-3.5"></i> All Exams
          </a>
          <a href="nism-5d.html" class="flex items-center gap-1 hover:text-indigo-600 font-semibold transition-colors" title="Series V-D Study Hub">
            <i data-lucide="book-open" class="w-3.5 h-3.5"></i> V-D Hub
          </a>
          <a href="mock-tests.html" class="flex items-center gap-1 text-indigo-600 hover:text-indigo-800 font-bold transition-colors">
            <i data-lucide="award" class="w-3.5 h-3.5"></i> 10 Mocks
          </a>
        </div>
      </div>
    `;

    return html;
  }

  // ==========================================
  // 4. macOS Floating Dock
  // ==========================================
  function injectMacOSDock() {
    if (document.getElementById("nism-macos-dock")) return;
    const isDark = isDarkModeActive();
    const dock = document.createElement("div");
    dock.id = "nism-macos-dock";
    dock.className = "macos-dock";
    dock.innerHTML = `
      <!-- Master Portal Home -->
      <a href="index.html" class="macos-dock-item" aria-label="Master NISM Portal">
        <i data-lucide="compass" class="w-4 h-4 text-indigo-500"></i>
        <span class="macos-dock-tooltip">All Certifications</span>
      </a>

      <!-- Series V-D Hub -->
      <a href="nism-5d.html" class="macos-dock-item" aria-label="Series V-D Hub">
        <i data-lucide="book-open" class="w-4 h-4 text-blue-600"></i>
        <span class="macos-dock-tooltip">Series V-D Hub</span>
      </a>

      <!-- Spotlight Search -->
      <button onclick="window.openSpotlightModal()" class="macos-dock-item primary" aria-label="Spotlight Search">
        <i data-lucide="search" class="w-4 h-4"></i>
        <span class="macos-dock-tooltip">Spotlight (⌘K)</span>
      </button>

      <!-- Theme Switcher (Dark/Light) -->
      <button id="nism-dock-theme-btn" onclick="window.toggleDarkMode()" class="macos-dock-item" aria-label="Toggle Dark/Light Mode">
        <i data-lucide="${isDark ? "sun" : "moon"}" class="w-4 h-4 ${isDark ? "text-amber-400" : ""}"></i>
        <span class="macos-dock-tooltip">${isDark ? "Light Mode (⌘D)" : "Dark Mode (⌘D)"}</span>
      </button>

      <!-- macOS Interactive Formula Lab -->
      <button onclick="window.openFormulaLab()" class="macos-dock-item" aria-label="Formula Lab">
        <i data-lucide="calculator" class="w-4 h-4 text-emerald-600"></i>
        <span class="macos-dock-tooltip">Formula Lab (⌘M)</span>
      </button>

      <!-- Quick Revision Cheat Sheet -->
      <button onclick="window.openCheatSheet()" class="macos-dock-item" aria-label="Exam Cram Sheet">
        <i data-lucide="file-text" class="w-4 h-4 text-blue-600"></i>
        <span class="macos-dock-tooltip">Exam Cram Sheet</span>
      </button>

      <!-- 10-Mock Exam Center -->
      <a href="mock-tests.html" class="macos-dock-item" aria-label="Mock Test Center">
        <i data-lucide="award" class="w-4 h-4 text-amber-500"></i>
        <span class="macos-dock-tooltip">10 Mocks (1,000Q)</span>
      </a>

      <!-- Chapters Drawer -->
      <button onclick="window.toggleMobileChapterDrawer(true)" class="macos-dock-item chapters-btn" aria-label="Open Chapters">
        <i data-lucide="layers" class="w-4 h-4"></i>
        <span class="macos-dock-tooltip">All Chapters (22)</span>
      </button>

      <!-- On This Page Sections -->
      <button onclick="window.scrollToQuickSections()" class="macos-dock-item" aria-label="Jump to Sections">
        <i data-lucide="bookmark" class="w-4 h-4"></i>
        <span class="macos-dock-tooltip">On This Page</span>
      </button>

      <!-- Practice Quiz Jump -->
      <button onclick="window.scrollToQuiz()" class="macos-dock-item" aria-label="Practice Quiz">
        <i data-lucide="award" class="w-4 h-4"></i>
        <span class="macos-dock-tooltip">Practice Quiz</span>
      </button>

      <!-- Keyboard Shortcuts -->
      <button onclick="window.openShortcutsModal()" class="macos-dock-item" aria-label="Shortcuts">
        <i data-lucide="help-circle" class="w-4 h-4 text-indigo-500"></i>
        <span class="macos-dock-tooltip">Shortcuts (?)</span>
      </button>

      <!-- Back to Top -->
      <button onclick="window.scrollTo({top: 0, behavior: 'smooth'})" class="macos-dock-item" aria-label="Scroll to Top">
        <i data-lucide="arrow-up" class="w-4 h-4"></i>
        <span class="macos-dock-tooltip">Back to Top</span>
      </button>
    `;
    document.body.appendChild(dock);
  }

  window.scrollToQuiz = function () {
    const quiz = document.getElementById("interactive-quiz");
    if (quiz) {
      quiz.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  window.scrollToQuickSections = function () {
    const tocDetails = document.querySelector("aside details");
    if (tocDetails && window.innerWidth >= 1024) {
      tocDetails.open = true;
      tocDetails.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    const firstSection = document.querySelector("main section, [id^='section-']");
    if (firstSection) {
      firstSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // ==========================================
  // 5. Header Controls (Theme Toggle & Spotlight)
  // ==========================================
  function injectHeaderControls() {
    const headerRight = document.querySelector("header .max-w-7xl > div:last-child");
    if (!headerRight) return;

    // Theme Switcher Button
    if (!document.getElementById("nism-header-theme-btn")) {
      const isDark = isDarkModeActive();
      const themeBtn = document.createElement("button");
      themeBtn.id = "nism-header-theme-btn";
      themeBtn.className = "theme-toggle-btn active:scale-95";
      themeBtn.setAttribute("aria-label", "Toggle Dark/Light Theme");
      themeBtn.title = isDark ? "Switch to Light Mode (⌘D)" : "Switch to Dark Mode (⌘D)";
      themeBtn.onclick = () => window.toggleDarkMode();
      themeBtn.innerHTML = isDark
        ? `<i data-lucide="sun" class="w-4 h-4 text-amber-400"></i>`
        : `<i data-lucide="moon" class="w-4 h-4 text-indigo-600"></i>`;
      headerRight.insertBefore(themeBtn, headerRight.firstChild);
    }

    // Quick Spotlight Search Button
    if (!document.getElementById("nism-header-spotlight-btn")) {
      const btn = document.createElement("button");
      btn.id = "nism-header-spotlight-btn";
      btn.onclick = () => window.openSpotlightModal();
      btn.className = "hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100/90 hover:bg-slate-200/90 text-slate-700 border border-slate-200/80 transition-all shadow-2xs active:scale-95";
      btn.setAttribute("aria-label", "Search chapters");
      btn.innerHTML = `
        <i data-lucide="search" class="w-3.5 h-3.5 text-indigo-600"></i>
        <span>Search...</span>
        <kbd class="spotlight-kbd text-[10px] text-slate-500 ml-1">⌘K</kbd>
      `;
      headerRight.insertBefore(btn, headerRight.firstChild);
    }
  }

  // ==========================================
  // 6. Mobile Drawer & Active ScrollSpy
  // ==========================================
  window.toggleMobileChapterDrawer = function (open) {
    const drawer = document.getElementById("nism-mobile-drawer");
    const overlay = document.getElementById("nism-mobile-overlay");
    if (!drawer || !overlay) return;

    if (open === undefined) {
      open = drawer.classList.contains("-translate-x-full");
    }

    if (open) {
      overlay.classList.remove("hidden");
      setTimeout(() => overlay.classList.remove("opacity-0"), 10);
      drawer.classList.remove("-translate-x-full");
      document.body.classList.add("overflow-hidden");
    } else {
      overlay.classList.add("opacity-0");
      drawer.classList.add("-translate-x-full");
      setTimeout(() => overlay.classList.add("hidden"), 300);
      document.body.classList.remove("overflow-hidden");
    }
  };

  function createMobileDrawer() {
    if (window.location.pathname.includes("mock-tests") || document.getElementById("exam-view")) return;
    if (document.getElementById("nism-mobile-drawer")) return;

    const overlay = document.createElement("div");
    overlay.id = "nism-mobile-overlay";
    overlay.className = "fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-50 transition-opacity duration-300 opacity-0 hidden";
    overlay.onclick = () => window.toggleMobileChapterDrawer(false);
    document.body.appendChild(overlay);

    const drawer = document.createElement("div");
    drawer.id = "nism-mobile-drawer";
    drawer.className = "fixed top-0 bottom-0 left-0 w-84 max-w-[85vw] bg-white z-50 shadow-2xl transition-transform duration-300 -translate-x-full flex flex-col";
    drawer.innerHTML = `
      <div class="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-600 text-white flex items-center justify-center font-bold text-xs shadow-sm">
            VD
          </div>
          <div>
            <h3 class="font-display font-bold text-sm text-slate-900">All Modules & Chapters</h3>
            <span class="text-[10px] text-slate-500">22 Comprehensive Units</span>
          </div>
        </div>
        <button onclick="window.toggleMobileChapterDrawer(false)" class="w-8 h-8 rounded-lg bg-slate-200/80 hover:bg-slate-300 text-slate-700 flex items-center justify-center text-sm font-bold transition-colors">
          &times;
        </button>
      </div>
      <div class="p-3 overflow-y-auto flex-1 nism-custom-scroll">
        ${generateChapterSwitcherHtml(true)}
      </div>
    `;
    document.body.appendChild(drawer);
  }

  function injectReadingProgressBar() {
    if (window.location.pathname.includes("mock-tests") || document.getElementById("exam-view")) return;
    if (document.getElementById("nism-reading-progress")) return;
    const bar = document.createElement("div");
    bar.id = "nism-reading-progress";
    document.body.appendChild(bar);

    window.addEventListener("scroll", () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / docHeight) * 100));
        bar.style.width = progress + "%";
      }
    }, { passive: true });
  }

  function setupScrollSpy() {
    const sections = document.querySelectorAll("section[id], div[id^='section-'], #interactive-quiz");
    const navLinks = document.querySelectorAll("aside nav a[href^='#']");
    if (!sections.length || !navLinks.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            navLinks.forEach((link) => {
              if (link.getAttribute("href") === `#${id}`) {
                link.classList.add("toc-active");
              } else {
                link.classList.remove("toc-active");
              }
            });
          }
        });
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );

    sections.forEach((sec) => observer.observe(sec));
  }

  function mountDesktopSidebar() {
    // Strictly exclude Mock Test pages and Exam views from chapter navigation injection
    if (window.location.pathname.includes("mock-tests") || document.getElementById("exam-view") || document.getElementById("exam-palette-aside")) {
      return;
    }
    let target = document.getElementById("sidebar-chapter-switcher");
    const aside = document.querySelector("aside:not(#exam-palette-aside)");

    if (aside) {
      aside.classList.add("nism-docs-sidebar");
      const stickyDiv = aside.querySelector(".sticky") || aside;
      stickyDiv.classList.add("nism-sidebar-sticky");

      if (!target) {
        target = document.createElement("div");
        target.id = "sidebar-chapter-switcher";
        stickyDiv.insertBefore(target, stickyDiv.firstChild);
      }

      const tocCard = stickyDiv.querySelector("details");
      if (tocCard) {
        const tocNav = tocCard.querySelector("nav");
        if (tocNav) {
          tocNav.classList.remove("max-h-56");
          tocNav.classList.add("nism-custom-scroll");
        }
      }
    }

    if (target) {
      target.innerHTML = generateChapterSwitcherHtml(false);
    }
  }

  // ==========================================
  // 6.5. macOS Interactive Formula Lab Suite
  // ==========================================
  function createFormulaLabModal() {
    if (document.getElementById("nism-formula-backdrop")) return;

    const backdrop = document.createElement("div");
    backdrop.id = "nism-formula-backdrop";
    backdrop.className = "macos-formula-backdrop";
    backdrop.onclick = (e) => {
      if (e.target === backdrop) closeFormulaLab();
    };

    backdrop.innerHTML = `
      <div class="macos-formula-modal" onclick="event.stopPropagation()">
        <!-- Window Chrome -->
        <div class="macos-window-header">
          <div class="macos-traffic-lights">
            <span class="traffic-light close" onclick="closeFormulaLab()" title="Close Formula Lab"></span>
            <span class="traffic-light minimize" onclick="resetActiveCalculator()" title="Reset to Defaults"></span>
            <span class="traffic-light maximize" onclick="closeFormulaLab()" title="Dismiss"></span>
          </div>
          <div class="macos-window-title flex items-center gap-1.5 font-bold text-slate-800">
            <i data-lucide="calculator" class="w-3.5 h-3.5 text-indigo-600"></i>
            <span>macOS Interactive Financial Formula Lab</span>
          </div>
          <span class="px-2 py-0.5 rounded text-[9px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
            Series V-D Math Suite
          </span>
        </div>

        <!-- Segmented Tab Navigation -->
        <div class="formula-lab-tabs">
          <button class="formula-lab-tab active" onclick="switchFormulaTab('nav')">NAV & Pricing (Ch 7)</button>
          <button class="formula-lab-tab" onclick="switchFormulaTab('futures')">Futures & Basis (Ch 15)</button>
          <button class="formula-lab-tab" onclick="switchFormulaTab('options')">Options & Greeks (Ch 16)</button>
          <button class="formula-lab-tab" onclick="switchFormulaTab('bonds')">Bonds & Duration (Ch 18/20)</button>
          <button class="formula-lab-tab" onclick="switchFormulaTab('beta')">Beta Hedging (Ch 17/22)</button>
        </div>

        <!-- Calculator Body Panels -->
        <div class="p-4 sm:p-6 overflow-y-auto flex-1 nism-custom-scroll space-y-4">
          
          <!-- TAB 1: NAV & Unit Pricing -->
          <div id="panel-nav" class="formula-panel space-y-4">
            <div class="flex items-center justify-between pb-2 border-b border-slate-100">
              <div>
                <h4 class="font-bold text-sm text-slate-900">NAV, Net Assets & Unit Repurchase Pricing</h4>
                <p class="text-[11px] text-slate-500">Seventh Schedule marked-to-market valuation formula</p>
              </div>
              <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-blue-800">Ch 7 &bull; 5 Marks</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label class="block text-[11px] font-bold text-slate-600 mb-1">Investments Value (₹ Cr)</label>
                <input id="nav-investments" type="number" step="any" value="500.00" class="calc-input" oninput="calculateNAV()" />
              </div>
              <div>
                <label class="block text-[11px] font-bold text-slate-600 mb-1">Receivables/Cash (₹ Cr)</label>
                <input id="nav-receivables" type="number" step="any" value="12.50" class="calc-input" oninput="calculateNAV()" />
              </div>
              <div>
                <label class="block text-[11px] font-bold text-slate-600 mb-1">Total Liabilities (₹ Cr)</label>
                <input id="nav-liabilities" type="number" step="any" value="8.25" class="calc-input" oninput="calculateNAV()" />
              </div>
              <div>
                <label class="block text-[11px] font-bold text-slate-600 mb-1">Outstanding Units (Cr)</label>
                <input id="nav-units" type="number" step="any" value="25.00" class="calc-input" oninput="calculateNAV()" />
              </div>
              <div>
                <label class="block text-[11px] font-bold text-slate-600 mb-1">Exit Load (%)</label>
                <input id="nav-exit-load" type="number" step="any" value="1.00" class="calc-input" oninput="calculateNAV()" />
              </div>
              <div>
                <label class="block text-[11px] font-bold text-slate-600 mb-1">Investment Class</label>
                <select id="nav-type" class="calc-input" onchange="calculateNAV()">
                  <option value="equity">Equity (2 Decimals)</option>
                  <option value="debt">Debt/Liquid (4 Decimals)</option>
                </select>
              </div>
            </div>

            <!-- Output Display -->
            <div class="calc-result-box space-y-3">
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div class="p-2.5 rounded-xl bg-white/80 shadow-xs border border-indigo-100">
                  <div class="text-[10px] font-bold uppercase text-slate-400">Total Net Assets (AUM)</div>
                  <div id="res-nav-aum" class="text-base font-extrabold text-slate-900 mt-0.5">₹504.25 Cr</div>
                </div>
                <div class="p-2.5 rounded-xl bg-indigo-600 text-white shadow-xs">
                  <div class="text-[10px] font-bold uppercase text-indigo-200">Scheme NAV / Unit</div>
                  <div id="res-nav-per-unit" class="text-base font-extrabold mt-0.5">₹20.1700</div>
                </div>
                <div class="p-2.5 rounded-xl bg-white/80 shadow-xs border border-emerald-100">
                  <div class="text-[10px] font-bold uppercase text-slate-400">Sale Price (Purchase)</div>
                  <div id="res-nav-sale" class="text-base font-extrabold text-emerald-700 mt-0.5">₹20.1700</div>
                </div>
                <div class="p-2.5 rounded-xl bg-white/80 shadow-xs border border-amber-100">
                  <div class="text-[10px] font-bold uppercase text-slate-400">Repurchase (Redeem)</div>
                  <div id="res-nav-repurchase" class="text-base font-extrabold text-amber-700 mt-0.5">₹19.9683</div>
                </div>
              </div>
              <div class="text-[11px] text-slate-600 leading-relaxed bg-white/60 p-2.5 rounded-xl border border-indigo-100/60">
                💡 <strong>Exam Formula Note:</strong> $\text{NAV} = \frac{\text{Investments} + \text{Receivables} - \text{Liabilities}}{\text{Units}}$. Sale price equals NAV (entry load is permanently 0%). Repurchase price deducts 100% exit load, which is credited back to the scheme.
              </div>
            </div>
          </div>

          <!-- TAB 2: Futures Pricing & Basis -->
          <div id="panel-futures" class="formula-panel space-y-4 hidden">
            <div class="flex items-center justify-between pb-2 border-b border-slate-100">
              <div>
                <h4 class="font-bold text-sm text-slate-900">Futures Cost of Carry & Arbitrage Detector</h4>
                <p class="text-[11px] text-slate-500">Continuous/discrete compounding fair pricing model</p>
              </div>
              <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">Ch 15 &bull; 15 Marks</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label class="block text-[11px] font-bold text-slate-600 mb-1">Cash Spot Price ($S$ ₹)</label>
                <input id="fut-spot" type="number" step="any" value="24500" class="calc-input" oninput="calculateFutures()" />
              </div>
              <div>
                <label class="block text-[11px] font-bold text-slate-600 mb-1">Risk-Free Rate ($r$ % p.a.)</label>
                <input id="fut-rate" type="number" step="any" value="6.50" class="calc-input" oninput="calculateFutures()" />
              </div>
              <div>
                <label class="block text-[11px] font-bold text-slate-600 mb-1">Days to Expiration ($T$)</label>
                <input id="fut-days" type="number" step="1" value="45" class="calc-input" oninput="calculateFutures()" />
              </div>
              <div>
                <label class="block text-[11px] font-bold text-slate-600 mb-1">Expected Dividend ($D$ ₹)</label>
                <input id="fut-div" type="number" step="any" value="25.00" class="calc-input" oninput="calculateFutures()" />
              </div>
              <div>
                <label class="block text-[11px] font-bold text-slate-600 mb-1">Actual Traded Future ($F$ ₹)</label>
                <input id="fut-actual" type="number" step="any" value="24720" class="calc-input" oninput="calculateFutures()" />
              </div>
              <div>
                <label class="block text-[11px] font-bold text-slate-600 mb-1">Model Type</label>
                <select id="fut-model" class="calc-input" onchange="calculateFutures()">
                  <option value="discrete">Discrete: S*(1+r*T) - D</option>
                  <option value="continuous">Continuous: S*e^((r-q)*T)</option>
                </select>
              </div>
            </div>

            <div class="calc-result-box space-y-3">
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div class="p-2.5 rounded-xl bg-white/80 shadow-xs border border-emerald-100">
                  <div class="text-[10px] font-bold uppercase text-slate-400">Cost of Carry</div>
                  <div id="res-fut-carry" class="text-base font-extrabold text-slate-900 mt-0.5">₹196.34</div>
                </div>
                <div class="p-2.5 rounded-xl bg-emerald-600 text-white shadow-xs">
                  <div class="text-[10px] font-bold uppercase text-emerald-200">Fair Future Price</div>
                  <div id="res-fut-fair" class="text-base font-extrabold mt-0.5">₹24,671.34</div>
                </div>
                <div class="p-2.5 rounded-xl bg-white/80 shadow-xs border border-slate-100">
                  <div class="text-[10px] font-bold uppercase text-slate-400">Basis (Spot - Future)</div>
                  <div id="res-fut-basis" class="text-base font-extrabold text-slate-900 mt-0.5">-₹220.00</div>
                </div>
                <div class="p-2.5 rounded-xl bg-white/80 shadow-xs border border-indigo-100">
                  <div class="text-[10px] font-bold uppercase text-slate-400">Market Structure</div>
                  <div id="res-fut-market" class="text-base font-extrabold text-indigo-700 mt-0.5">Contango</div>
                </div>
              </div>
              <div id="res-fut-arbitrage" class="p-3 rounded-xl bg-emerald-50 text-emerald-900 border border-emerald-300 text-xs font-semibold leading-relaxed">
                ⚡ <strong>Arbitrage Signal:</strong> Cash-and-Carry Arbitrage available! (Actual Future is overpriced relative to fair value. Buy Spot, Sell Futures to lock in riskless profit).
              </div>
            </div>
          </div>

          <!-- TAB 3: Options Intrinsic & Moneyness -->
          <div id="panel-options" class="formula-panel space-y-4 hidden">
            <div class="flex items-center justify-between pb-2 border-b border-slate-100">
              <div>
                <h4 class="font-bold text-sm text-slate-900">Option Moneyness & Intrinsic/Time Value Explorer</h4>
                <p class="text-[11px] text-slate-500">Decomposition of European Call and Put premiums</p>
              </div>
              <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-teal-100 text-teal-800">Ch 16 &bull; 13 Marks</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-4 gap-3">
              <div>
                <label class="block text-[11px] font-bold text-slate-600 mb-1">Spot Price ($S$ ₹)</label>
                <input id="opt-spot" type="number" step="any" value="24500" class="calc-input" oninput="calculateOptions()" />
              </div>
              <div>
                <label class="block text-[11px] font-bold text-slate-600 mb-1">Strike Price ($X$ ₹)</label>
                <input id="opt-strike" type="number" step="any" value="24400" class="calc-input" oninput="calculateOptions()" />
              </div>
              <div>
                <label class="block text-[11px] font-bold text-slate-600 mb-1">Option Type</label>
                <select id="opt-type" class="calc-input" onchange="calculateOptions()">
                  <option value="call">Call Option (CE)</option>
                  <option value="put">Put Option (PE)</option>
                </select>
              </div>
              <div>
                <label class="block text-[11px] font-bold text-slate-600 mb-1">Option Premium (₹)</label>
                <input id="opt-premium" type="number" step="any" value="220" class="calc-input" oninput="calculateOptions()" />
              </div>
            </div>

            <div class="calc-result-box space-y-3">
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div class="p-2.5 rounded-xl bg-white/80 shadow-xs border border-teal-100">
                  <div class="text-[10px] font-bold uppercase text-slate-400">Moneyness Status</div>
                  <div id="res-opt-moneyness" class="text-base font-extrabold text-teal-700 mt-0.5">In-The-Money (ITM)</div>
                </div>
                <div class="p-2.5 rounded-xl bg-teal-600 text-white shadow-xs">
                  <div class="text-[10px] font-bold uppercase text-teal-200">Intrinsic Value</div>
                  <div id="res-opt-intrinsic" class="text-base font-extrabold mt-0.5">₹100.00</div>
                </div>
                <div class="p-2.5 rounded-xl bg-white/80 shadow-xs border border-indigo-100">
                  <div class="text-[10px] font-bold uppercase text-slate-400">Time Value (Decay)</div>
                  <div id="res-opt-time" class="text-base font-extrabold text-indigo-700 mt-0.5">₹120.00</div>
                </div>
                <div class="p-2.5 rounded-xl bg-white/80 shadow-xs border border-slate-100">
                  <div class="text-[10px] font-bold uppercase text-slate-400">Expiry Breakeven</div>
                  <div id="res-opt-breakeven" class="text-base font-extrabold text-slate-900 mt-0.5">₹24,620.00</div>
                </div>
              </div>
              <div class="text-[11px] text-slate-600 leading-relaxed bg-white/60 p-2.5 rounded-xl border border-teal-100/60">
                💡 <strong>Exam Greek Rule:</strong> Intrinsic value is never negative: $\text{Call} = \max(0, S - X)$ and $\text{Put} = \max(0, X - S)$. At expiration, time value collapses to ₹0 (theta decay).
              </div>
            </div>
          </div>

          <!-- TAB 4: Bond Clean/Dirty Price & Duration -->
          <div id="panel-bonds" class="formula-panel space-y-4 hidden">
            <div class="flex items-center justify-between pb-2 border-b border-slate-100">
              <div>
                <h4 class="font-bold text-sm text-slate-900">Bond Dirty Price & Duration Price Sensitivity</h4>
                <p class="text-[11px] text-slate-500">Accrued interest, Modified Duration & PV01 computation</p>
              </div>
              <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-purple-100 text-purple-800">Ch 18/20 &bull; 16 Marks</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-4 gap-3">
              <div>
                <label class="block text-[11px] font-bold text-slate-600 mb-1">Clean Price (₹)</label>
                <input id="bond-clean" type="number" step="any" value="98.50" class="calc-input" oninput="calculateBonds()" />
              </div>
              <div>
                <label class="block text-[11px] font-bold text-slate-600 mb-1">Coupon Rate (% p.a.)</label>
                <input id="bond-coupon" type="number" step="any" value="7.26" class="calc-input" oninput="calculateBonds()" />
              </div>
              <div>
                <label class="block text-[11px] font-bold text-slate-600 mb-1">Days Accrued</label>
                <input id="bond-days" type="number" step="1" value="120" class="calc-input" oninput="calculateBonds()" />
              </div>
              <div>
                <label class="block text-[11px] font-bold text-slate-600 mb-1">Modified Duration (yrs)</label>
                <input id="bond-md" type="number" step="any" value="6.80" class="calc-input" oninput="calculateBonds()" />
              </div>
              <div>
                <label class="block text-[11px] font-bold text-slate-600 mb-1">Yield Shift (&Delta;y in bps)</label>
                <input id="bond-shift" type="number" step="any" value="25" class="calc-input" oninput="calculateBonds()" />
              </div>
              <div>
                <label class="block text-[11px] font-bold text-slate-600 mb-1">Day Convention</label>
                <select id="bond-convention" class="calc-input" onchange="calculateBonds()">
                  <option value="360">30/360 (Corporate Bonds)</option>
                  <option value="365">Actual/Actual (G-Secs)</option>
                </select>
              </div>
              <div>
                <label class="block text-[11px] font-bold text-slate-600 mb-1">Face Value (₹)</label>
                <input id="bond-face" type="number" step="any" value="100.00" class="calc-input" oninput="calculateBonds()" />
              </div>
            </div>

            <div class="calc-result-box space-y-3">
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div class="p-2.5 rounded-xl bg-white/80 shadow-xs border border-purple-100">
                  <div class="text-[10px] font-bold uppercase text-slate-400">Accrued Interest</div>
                  <div id="res-bond-accrued" class="text-base font-extrabold text-slate-900 mt-0.5">₹2.4200</div>
                </div>
                <div class="p-2.5 rounded-xl bg-purple-600 text-white shadow-xs">
                  <div class="text-[10px] font-bold uppercase text-purple-200">Dirty Settlement Price</div>
                  <div id="res-bond-dirty" class="text-base font-extrabold mt-0.5">₹100.9200</div>
                </div>
                <div class="p-2.5 rounded-xl bg-white/80 shadow-xs border border-rose-100">
                  <div class="text-[10px] font-bold uppercase text-slate-400">Price &Delta; for +25 bps</div>
                  <div id="res-bond-delta-price" class="text-base font-extrabold text-rose-700 mt-0.5">-₹1.67 (-1.70%)</div>
                </div>
                <div class="p-2.5 rounded-xl bg-white/80 shadow-xs border border-emerald-100">
                  <div class="text-[10px] font-bold uppercase text-slate-400">10Y IRF Lot PV01</div>
                  <div id="res-bond-pv01" class="text-base font-extrabold text-emerald-700 mt-0.5">₹133.96 / lot</div>
                </div>
              </div>
              <div class="text-[11px] text-slate-600 leading-relaxed bg-white/60 p-2.5 rounded-xl border border-purple-100/60">
                💡 <strong>Exam Formula Note:</strong> $\text{Dirty Price} = \text{Clean Price} + \text{Accrued Interest}$. Bond futures are traded in clean prices and settled in cash against 2-hour VWAP on NDS-OM. Lot size is 2,000 bonds (₹2L face value), tick size ₹0.0025, and tick value is exactly ₹5.00.
              </div>
            </div>
          </div>

          <!-- TAB 5: Beta Hedging -->
          <div id="panel-beta" class="formula-panel space-y-4 hidden">
            <div class="flex items-center justify-between pb-2 border-b border-slate-100">
              <div>
                <h4 class="font-bold text-sm text-slate-900">Portfolio Beta Hedging & Contract Sizing</h4>
                <p class="text-[11px] text-slate-500">Calculate exact futures contracts to neutralize market risk</p>
              </div>
              <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800">Ch 17/22 &bull; 15 Marks</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label class="block text-[11px] font-bold text-slate-600 mb-1">Portfolio Value ($V_p$ ₹)</label>
                <input id="beta-val" type="number" step="any" value="10000000" class="calc-input" oninput="calculateBeta()" />
              </div>
              <div>
                <label class="block text-[11px] font-bold text-slate-600 mb-1">Current Beta ($\beta_p$)</label>
                <input id="beta-curr" type="number" step="any" value="1.25" class="calc-input" oninput="calculateBeta()" />
              </div>
              <div>
                <label class="block text-[11px] font-bold text-slate-600 mb-1">Target Beta ($\beta_t$)</label>
                <input id="beta-target" type="number" step="any" value="0.00" class="calc-input" oninput="calculateBeta()" />
              </div>
              <div>
                <label class="block text-[11px] font-bold text-slate-600 mb-1">Index Futures Price (₹)</label>
                <input id="beta-fut-price" type="number" step="any" value="24600" class="calc-input" oninput="calculateBeta()" />
              </div>
              <div>
                <label class="block text-[11px] font-bold text-slate-600 mb-1">Contract Lot Size</label>
                <input id="beta-lot" type="number" step="1" value="25" class="calc-input" oninput="calculateBeta()" />
              </div>
            </div>

            <div class="calc-result-box space-y-3">
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
                <div class="p-2.5 rounded-xl bg-white/80 shadow-xs border border-slate-100">
                  <div class="text-[10px] font-bold uppercase text-slate-400">Single Contract Value</div>
                  <div id="res-beta-contract-val" class="text-base font-extrabold text-slate-900 mt-0.5">₹6,15,000.00</div>
                </div>
                <div class="p-2.5 rounded-xl bg-amber-500 text-slate-950 shadow-xs">
                  <div class="text-[10px] font-bold uppercase text-slate-800">Exact Contracts ($N$)</div>
                  <div id="res-beta-n" class="text-base font-extrabold mt-0.5">-20.33 Contracts</div>
                </div>
                <div class="p-2.5 rounded-xl bg-white/80 shadow-xs border border-amber-200">
                  <div class="text-[10px] font-bold uppercase text-slate-400">Recommended Execution</div>
                  <div id="res-beta-action" class="text-base font-extrabold text-rose-700 mt-0.5">SELL (Short) 20 Contracts</div>
                </div>
              </div>
              <div class="text-[11px] text-slate-600 leading-relaxed bg-white/60 p-2.5 rounded-xl border border-amber-100/60">
                💡 <strong>Exam Hedging Formula:</strong> $N = \frac{(\beta_t - \beta_p) \times V_p}{F \times \text{Lot Size}}$. When reducing portfolio beta, $N$ is negative, which commands **selling (shorting)** futures contracts.
              </div>
            </div>
          </div>

        </div>

        <!-- Footer -->
        <div class="spotlight-footer">
          <span>Press <kbd class="spotlight-kbd">⌘M</kbd> to toggle &bull; <kbd class="spotlight-kbd">ESC</kbd> to close</span>
          <span class="font-bold text-indigo-600 cursor-pointer" onclick="closeFormulaLab()">Close Window</span>
        </div>
      </div>
    `;

    document.body.appendChild(backdrop);
    calculateNAV();
    calculateFutures();
    calculateOptions();
    calculateBonds();
    calculateBeta();
  }

  // Live Formula Calculation Routines
  window.calculateNAV = function () {
    const inv = parseFloat(document.getElementById("nav-investments")?.value) || 0;
    const rec = parseFloat(document.getElementById("nav-receivables")?.value) || 0;
    const liab = parseFloat(document.getElementById("nav-liabilities")?.value) || 0;
    const units = parseFloat(document.getElementById("nav-units")?.value) || 1;
    const exitLoad = parseFloat(document.getElementById("nav-exit-load")?.value) || 0;
    const type = document.getElementById("nav-type")?.value || "equity";
    const decimals = type === "debt" ? 4 : 2;

    const aum = inv + rec - liab;
    const nav = units > 0 ? aum / units : 0;
    const sale = nav;
    const repurchase = nav * (1 - exitLoad / 100);

    const aumEl = document.getElementById("res-nav-aum");
    const navEl = document.getElementById("res-nav-per-unit");
    const saleEl = document.getElementById("res-nav-sale");
    const repEl = document.getElementById("res-nav-repurchase");

    if (aumEl) aumEl.innerText = `₹${aum.toFixed(2)} Cr`;
    if (navEl) navEl.innerText = `₹${nav.toFixed(decimals)}`;
    if (saleEl) saleEl.innerText = `₹${sale.toFixed(decimals)}`;
    if (repEl) repEl.innerText = `₹${repurchase.toFixed(decimals)}`;
  };

  window.calculateFutures = function () {
    const spot = parseFloat(document.getElementById("fut-spot")?.value) || 0;
    const rate = parseFloat(document.getElementById("fut-rate")?.value) || 0;
    const days = parseFloat(document.getElementById("fut-days")?.value) || 0;
    const div = parseFloat(document.getElementById("fut-div")?.value) || 0;
    const actual = parseFloat(document.getElementById("fut-actual")?.value) || 0;
    const model = document.getElementById("fut-model")?.value || "discrete";

    const T = days / 365;
    const r = rate / 100;
    let fair = 0;
    let carry = 0;

    if (model === "discrete") {
      carry = spot * r * T;
      fair = spot + carry - div;
    } else {
      fair = spot * Math.exp(r * T) - div;
      carry = fair - spot + div;
    }

    const basis = spot - actual;
    const isContango = actual > spot;

    const carryEl = document.getElementById("res-fut-carry");
    const fairEl = document.getElementById("res-fut-fair");
    const basisEl = document.getElementById("res-fut-basis");
    const marketEl = document.getElementById("res-fut-market");
    const arbEl = document.getElementById("res-fut-arbitrage");

    if (carryEl) carryEl.innerText = `₹${carry.toFixed(2)}`;
    if (fairEl) fairEl.innerText = `₹${fair.toFixed(2)}`;
    if (basisEl) basisEl.innerText = `${basis >= 0 ? "+" : ""}₹${basis.toFixed(2)}`;
    if (marketEl) {
      marketEl.innerText = isContango ? "Contango" : "Backwardation";
      marketEl.className = `text-base font-extrabold mt-0.5 ${isContango ? "text-indigo-700" : "text-amber-700"}`;
    }

    if (arbEl) {
      const diff = actual - fair;
      if (diff > 5) {
        arbEl.className = "p-3 rounded-xl bg-emerald-50 text-emerald-900 border border-emerald-300 text-xs font-semibold leading-relaxed";
        arbEl.innerHTML = `⚡ <strong>Arbitrage Signal:</strong> Cash-and-Carry Arbitrage! (Actual Future ₹${actual} &gt; Fair Value ₹${fair.toFixed(2)}. Buy Spot, Sell Futures to lock in ₹${diff.toFixed(2)} risk-free profit).`;
      } else if (diff < -5) {
        arbEl.className = "p-3 rounded-xl bg-purple-50 text-purple-900 border border-purple-300 text-xs font-semibold leading-relaxed";
        arbEl.innerHTML = `⚡ <strong>Arbitrage Signal:</strong> Reverse Cash-and-Carry Arbitrage! (Actual Future ₹${actual} &lt; Fair Value ₹${fair.toFixed(2)}. Short Spot, Buy Futures to profit).`;
      } else {
        arbEl.className = "p-3 rounded-xl bg-slate-50 text-slate-800 border border-slate-200 text-xs font-semibold leading-relaxed";
        arbEl.innerHTML = `✅ <strong>Fairly Priced:</strong> Futures trade near fair value (diff: ₹${diff.toFixed(2)}). No riskless arbitrage opportunity.`;
      }
    }
  };

  window.calculateOptions = function () {
    const spot = parseFloat(document.getElementById("opt-spot")?.value) || 0;
    const strike = parseFloat(document.getElementById("opt-strike")?.value) || 0;
    const type = document.getElementById("opt-type")?.value || "call";
    const premium = parseFloat(document.getElementById("opt-premium")?.value) || 0;

    let intrinsic = 0;
    let moneyness = "";
    let breakeven = 0;

    if (type === "call") {
      intrinsic = Math.max(0, spot - strike);
      breakeven = strike + premium;
      if (spot > strike) moneyness = "In-The-Money (ITM)";
      else if (spot === strike) moneyness = "At-The-Money (ATM)";
      else moneyness = "Out-of-The-Money (OTM)";
    } else {
      intrinsic = Math.max(0, strike - spot);
      breakeven = strike - premium;
      if (spot < strike) moneyness = "In-The-Money (ITM)";
      else if (spot === strike) moneyness = "At-The-Money (ATM)";
      else moneyness = "Out-of-The-Money (OTM)";
    }

    const timeValue = Math.max(0, premium - intrinsic);

    const mEl = document.getElementById("res-opt-moneyness");
    const intEl = document.getElementById("res-opt-intrinsic");
    const timeEl = document.getElementById("res-opt-time");
    const beEl = document.getElementById("res-opt-breakeven");

    if (mEl) {
      mEl.innerText = moneyness;
      mEl.className = `text-base font-extrabold mt-0.5 ${moneyness.includes("ITM") ? "text-emerald-700" : moneyness.includes("ATM") ? "text-indigo-700" : "text-slate-600"}`;
    }
    if (intEl) intEl.innerText = `₹${intrinsic.toFixed(2)}`;
    if (timeEl) timeEl.innerText = `₹${timeValue.toFixed(2)}`;
    if (beEl) beEl.innerText = `₹${breakeven.toFixed(2)}`;
  };

  window.calculateBonds = function () {
    const clean = parseFloat(document.getElementById("bond-clean")?.value) || 0;
    const face = parseFloat(document.getElementById("bond-face")?.value) || 100;
    const coupon = parseFloat(document.getElementById("bond-coupon")?.value) || 0;
    const days = parseFloat(document.getElementById("bond-days")?.value) || 0;
    const md = parseFloat(document.getElementById("bond-md")?.value) || 0;
    const shiftBps = parseFloat(document.getElementById("bond-shift")?.value) || 0;
    const conv = parseFloat(document.getElementById("bond-convention")?.value) || 360;

    const accrued = face * (coupon / 100) * (days / conv);
    const dirty = clean + accrued;

    const deltaY = shiftBps / 10000;
    const deltaP_pct = -md * deltaY * 100;
    const deltaP_abs = (deltaP_pct / 100) * clean;
    const pv01_single = md * clean * 0.0001;
    const pv01_lot = pv01_single * 2000;

    const accEl = document.getElementById("res-bond-accrued");
    const dirtyEl = document.getElementById("res-bond-dirty");
    const dpEl = document.getElementById("res-bond-delta-price");
    const pv01El = document.getElementById("res-bond-pv01");

    if (accEl) accEl.innerText = `₹${accrued.toFixed(4)}`;
    if (dirtyEl) dirtyEl.innerText = `₹${dirty.toFixed(4)}`;
    if (dpEl) {
      dpEl.innerText = `${deltaP_abs >= 0 ? "+" : ""}₹${deltaP_abs.toFixed(2)} (${deltaP_pct.toFixed(2)}%)`;
      dpEl.className = `text-base font-extrabold mt-0.5 ${deltaP_abs < 0 ? "text-rose-700" : "text-emerald-700"}`;
    }
    if (pv01El) pv01El.innerText = `₹${pv01_lot.toFixed(2)} / lot`;
  };

  window.calculateBeta = function () {
    const Vp = parseFloat(document.getElementById("beta-val")?.value) || 0;
    const betaP = parseFloat(document.getElementById("beta-curr")?.value) || 1;
    const betaT = parseFloat(document.getElementById("beta-target")?.value) || 0;
    const futPrice = parseFloat(document.getElementById("beta-fut-price")?.value) || 1;
    const lot = parseFloat(document.getElementById("beta-lot")?.value) || 1;

    const contractVal = futPrice * lot;
    const N = contractVal > 0 ? ((betaT - betaP) * Vp) / contractVal : 0;
    const rounded = Math.round(Math.abs(N));
    const action = N < 0 ? `SELL (Short) ${rounded} Contracts` : N > 0 ? `BUY (Long) ${rounded} Contracts` : "No Hedging Needed (Beta = Target)";

    const cValEl = document.getElementById("res-beta-contract-val");
    const nEl = document.getElementById("res-beta-n");
    const actEl = document.getElementById("res-beta-action");

    if (cValEl) cValEl.innerText = `₹${contractVal.toLocaleString("en-IN", { minimumFractionDigits: 2 })}`;
    if (nEl) nEl.innerText = `${N.toFixed(2)} Contracts`;
    if (actEl) {
      actEl.innerText = action;
      actEl.className = `text-base font-extrabold mt-0.5 ${N < 0 ? "text-rose-700" : N > 0 ? "text-emerald-700" : "text-slate-800"}`;
    }
  };

  window.switchFormulaTab = function (tabKey, btn) {
    const tabs = document.querySelectorAll(".formula-lab-tab");
    tabs.forEach(t => {
      t.classList.remove("active");
      const onclickAttr = t.getAttribute("onclick") || "";
      if (onclickAttr.includes(`'${tabKey}'`)) {
        t.classList.add("active");
      }
    });
    if (btn && btn.classList) {
      btn.classList.add("active");
    }

    const panels = document.querySelectorAll(".formula-panel");
    panels.forEach(p => p.classList.add("hidden"));

    const targetPanel = document.getElementById(`panel-${tabKey}`);
    if (targetPanel) targetPanel.classList.remove("hidden");

    if (tabKey === "nav") calculateNAV();
    else if (tabKey === "futures") calculateFutures();
    else if (tabKey === "options") calculateOptions();
    else if (tabKey === "bonds") calculateBonds();
    else if (tabKey === "beta") calculateBeta();
  };

  window.resetActiveCalculator = function () {
    const activeTab = document.querySelector(".formula-lab-tab.active");
    if (!activeTab) return;
    const text = activeTab.innerText.toLowerCase();
    if (text.includes("nav")) {
      document.getElementById("nav-investments").value = "500.00";
      document.getElementById("nav-receivables").value = "12.50";
      document.getElementById("nav-liabilities").value = "8.25";
      document.getElementById("nav-units").value = "25.00";
      document.getElementById("nav-exit-load").value = "1.00";
      calculateNAV();
    } else if (text.includes("futures")) {
      document.getElementById("fut-spot").value = "24500";
      document.getElementById("fut-rate").value = "6.50";
      document.getElementById("fut-days").value = "45";
      document.getElementById("fut-div").value = "25.00";
      document.getElementById("fut-actual").value = "24720";
      calculateFutures();
    } else if (text.includes("options")) {
      document.getElementById("opt-spot").value = "24500";
      document.getElementById("opt-strike").value = "24400";
      document.getElementById("opt-type").value = "call";
      document.getElementById("opt-premium").value = "220";
      calculateOptions();
    } else if (text.includes("bonds")) {
      document.getElementById("bond-clean").value = "98.50";
      document.getElementById("bond-coupon").value = "7.26";
      document.getElementById("bond-days").value = "120";
      document.getElementById("bond-md").value = "6.80";
      document.getElementById("bond-shift").value = "25";
      calculateBonds();
    } else if (text.includes("beta")) {
      document.getElementById("beta-val").value = "10000000";
      document.getElementById("beta-curr").value = "1.25";
      document.getElementById("beta-target").value = "0.00";
      document.getElementById("beta-fut-price").value = "24600";
      document.getElementById("beta-lot").value = "25";
      calculateBeta();
    }
  };

  window.openFormulaLab = function (tab) {
    createFormulaLabModal();
    const backdrop = document.getElementById("nism-formula-backdrop");
    if (backdrop) {
      backdrop.classList.add("open");
      document.body.classList.add("overflow-hidden");
      if (tab && typeof window.switchFormulaTab === "function") {
        window.switchFormulaTab(tab);
      }
      if (window.lucide && typeof window.lucide.createIcons === "function") {
        window.lucide.createIcons();
      }
    }
  };

  window.closeFormulaLab = function () {
    const backdrop = document.getElementById("nism-formula-backdrop");
    if (backdrop) {
      backdrop.classList.remove("open");
      document.body.classList.remove("overflow-hidden");
    }
  };

  window.toggleFormulaLab = function () {
    const backdrop = document.getElementById("nism-formula-backdrop");
    if (backdrop && backdrop.classList.contains("open")) {
      closeFormulaLab();
    } else {
      openFormulaLab();
    }
  };

  // Aliases for HTML / Spotlight button invocations
  window.openFormulaLabModal = window.openFormulaLab;
  window.closeFormulaLabModal = window.closeFormulaLab;
  window.toggleFormulaLabModal = window.toggleFormulaLab;

  // ==========================================
  // 6.6. Quick Revision Cheat Sheet Modal
  // ==========================================
  function createCheatSheetModal() {
    if (document.getElementById("nism-cheatsheet-backdrop")) return;

    const backdrop = document.createElement("div");
    backdrop.id = "nism-cheatsheet-backdrop";
    backdrop.className = "macos-formula-backdrop";
    backdrop.onclick = (e) => {
      if (e.target === backdrop) closeCheatSheet();
    };

    backdrop.innerHTML = `
      <div class="macos-sheet-modal" onclick="event.stopPropagation()">
        <!-- Header -->
        <div class="macos-window-header">
          <div class="macos-traffic-lights">
            <span class="traffic-light close" onclick="closeCheatSheet()"></span>
            <span class="traffic-light minimize" onclick="closeCheatSheet()"></span>
            <span class="traffic-light maximize" onclick="closeCheatSheet()"></span>
          </div>
          <div class="macos-window-title flex items-center gap-1.5 font-bold text-slate-800 dark:text-slate-200">
            <i data-lucide="file-text" class="w-3.5 h-3.5 text-blue-600 dark:text-blue-400"></i>
            <span>NISM Series V-D: High-Yield Exam Cram Sheet</span>
          </div>
          <span class="px-2 py-0.5 rounded text-[9px] font-bold bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60">
            Official 2026 Rules
          </span>
        </div>

        <!-- Segmented Tabs for Cram Sheet -->
        <div class="macos-segmented-control" id="cheatsheet-tabs">
          <button class="macos-segmented-tab active" onclick="switchCheatSheetTab('all', this)">
            <i data-lucide="layout-grid" class="w-3.5 h-3.5"></i>
            <span>All Summaries</span>
          </button>
          <button class="macos-segmented-tab" onclick="switchCheatSheetTab('sebi', this)">
            <i data-lucide="layers" class="w-3.5 h-3.5"></i>
            <span>1. SEBI Thresholds</span>
          </button>
          <button class="macos-segmented-tab" onclick="switchCheatSheetTab('cutoff', this)">
            <i data-lucide="clock" class="w-3.5 h-3.5"></i>
            <span>2. Cut-Off Timings</span>
          </button>
          <button class="macos-segmented-tab" onclick="switchCheatSheetTab('tax', this)">
            <i data-lucide="award" class="w-3.5 h-3.5"></i>
            <span>3. Budget 2024 Tax</span>
          </button>
          <button class="macos-segmented-tab" onclick="switchCheatSheetTab('fno', this)">
            <i data-lucide="percent" class="w-3.5 h-3.5"></i>
            <span>4. F&O & Limits</span>
          </button>
        </div>

        <!-- Sheet Body -->
        <div class="p-5 overflow-y-auto flex-1 nism-custom-scroll space-y-4 text-xs">
          
          <!-- SEBI Categorization -->
          <div data-cram-section="sebi" class="cram-section p-4 rounded-2xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200/80 dark:border-blue-800/50 shadow-2xs space-y-2">
            <h5 class="font-bold text-blue-900 dark:text-blue-300 flex items-center gap-1.5 text-sm">
              <i data-lucide="layers" class="w-4 h-4 text-blue-600 dark:text-blue-400"></i>
              1. SEBI Categorization Thresholds (October 2017 & Amendments)
            </h5>
            <ul class="space-y-1.5 text-slate-700 dark:text-slate-300 pl-4 list-disc leading-relaxed">
              <li><strong>Multi Cap:</strong> Minimum 25% in Large Cap, 25% in Mid Cap, and 25% in Small Cap equities (total &ge; 75%).</li>
              <li><strong>Large Cap:</strong> Minimum 80% in top 100 companies by market cap.</li>
              <li><strong>Mid Cap / Small Cap:</strong> Minimum 65% in Mid Cap (101st-250th) or Small Cap (251st onwards).</li>
              <li><strong>Focused Fund:</strong> Maximum 30 stocks, minimum 65% in equity.</li>
              <li><strong>ELSS:</strong> Minimum 80% equity, mandatory 3-year lock-in (Sec 80C).</li>
              <li><strong>Specialized Investment Fund (SIF):</strong> Minimum ticket ₹10 Lakhs, relaxed derivative hedging/shorting.</li>
              <li><strong>MF Lite:</strong> Relaxed light-touch regulatory framework for purely passive index funds and ETFs.</li>
            </ul>
          </div>

          <!-- Cut-off Timings -->
          <div data-cram-section="cutoff" class="cram-section p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-800/50 shadow-2xs space-y-2">
            <h5 class="font-bold text-emerald-900 dark:text-emerald-300 flex items-center gap-1.5 text-sm">
              <i data-lucide="clock" class="w-4 h-4 text-emerald-600 dark:text-emerald-400"></i>
              2. Cut-Off Timings & Uniform Realization Rule
            </h5>
            <div class="overflow-x-auto rounded-xl border border-emerald-200/60 dark:border-emerald-800/40">
              <table class="w-full text-[11px] bg-white/60 dark:bg-slate-900/60">
                <thead>
                  <tr class="text-left font-bold text-emerald-950 dark:text-emerald-200 border-b border-emerald-200 dark:border-emerald-800/60 bg-emerald-100/50 dark:bg-emerald-950/60">
                    <th class="p-2">Scheme Category</th>
                    <th class="p-2">Purchase Cut-off</th>
                    <th class="p-2">Redemption Cut-off</th>
                    <th class="p-2">Applicable NAV</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-emerald-100 dark:divide-emerald-900/50 text-slate-700 dark:text-slate-300">
                  <tr>
                    <td class="p-2 font-semibold text-emerald-900 dark:text-emerald-300">Liquid & Overnight Funds</td>
                    <td class="p-2">1:30 PM (Funds available)</td>
                    <td class="p-2">3:00 PM</td>
                    <td class="p-2 font-medium">Previous Day NAV (Purchase) / Same Day (Redeem)</td>
                  </tr>
                  <tr>
                    <td class="p-2 font-semibold text-emerald-900 dark:text-emerald-300">All Other Schemes (Equity/Debt)</td>
                    <td class="p-2">3:00 PM (Funds realized)</td>
                    <td class="p-2">3:00 PM</td>
                    <td class="p-2 font-medium">Same Day NAV (Strict realization required before 3:00 PM)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Budget 2024 Tax Matrix -->
          <div data-cram-section="tax" class="cram-section p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/50 shadow-2xs space-y-2">
            <h5 class="font-bold text-amber-900 dark:text-amber-300 flex items-center gap-1.5 text-sm">
              <i data-lucide="award" class="w-4 h-4 text-amber-600 dark:text-amber-400"></i>
              3. Union Budget 2024 Capital Gains Tax Matrix
            </h5>
            <ul class="space-y-1.5 text-slate-700 dark:text-slate-300 pl-4 list-disc leading-relaxed">
              <li><strong>Equity Funds (&ge;65% domestic equity):</strong> LTCG (>12 months) at <strong>12.5%</strong> without indexation; ₹1,25,000 annual exemption. STCG (&le;12 months) at <strong>20%</strong> under Sec 111A.</li>
              <li><strong>Specified Mutual Funds (Sec 50AA, &le;35% equity acquired after 1-Apr-2023):</strong> Deemed STCG, taxed at investor's <strong>marginal slab rate</strong>, zero indexation.</li>
              <li><strong>Other Non-Equity Funds (35% to 65% equity, Gold/Silver):</strong> LTCG (>24 months) at <strong>12.5%</strong> without indexation; STCG at slab rate.</li>
              <li><strong>IDCW (Dividend):</strong> Taxed at marginal slab rate; 10% TDS under Sec 194K if dividend exceeds ₹5,000 per financial year.</li>
            </ul>
          </div>

          <!-- F&O and IRF Limits -->
          <div data-cram-section="fno" class="cram-section p-4 rounded-2xl bg-purple-50/70 dark:bg-purple-950/30 border border-purple-200/80 dark:border-purple-800/50 shadow-2xs space-y-2">
            <h5 class="font-bold text-purple-900 dark:text-purple-300 flex items-center gap-1.5 text-sm">
              <i data-lucide="percent" class="w-4 h-4 text-purple-600 dark:text-purple-400"></i>
              4. Derivative Contract Specifications & Limits
            </h5>
            <ul class="space-y-1.5 text-slate-700 dark:text-slate-300 pl-4 list-disc leading-relaxed">
              <li><strong>F&O Contract Value Band:</strong> ₹15 Lakhs to ₹20 Lakhs per contract.</li>
              <li><strong>Market Wide Position Limit (MWPL):</strong> F&O ban triggered when Open Interest exceeds <strong>95%</strong> of MWPL. Fresh positions allowed only after OI falls below <strong>80%</strong>.</li>
              <li><strong>10-Year GoI Bond IRF:</strong> Lot size = 2,000 bonds (₹2L face value), tick size = ₹0.0025, <strong>Tick Value = ₹5.00</strong>. Settled in cash against 2-hour VWAP on NDS-OM.</li>
              <li><strong>91-Day T-Bill Futures:</strong> Price quotation = $100 - \\text{Yield}$.</li>
            </ul>
          </div>

        </div>

        <div class="spotlight-footer">
          <span>Official Series V-D Master Cheat Sheet</span>
          <span class="font-bold text-blue-600 dark:text-blue-400 cursor-pointer" onclick="closeCheatSheet()">Close</span>
        </div>
      </div>
    `;

    document.body.appendChild(backdrop);
  }

  window.switchCheatSheetTab = function (sectionId, btn) {
    const modal = document.querySelector("#nism-cheatsheet-backdrop .macos-sheet-modal");
    if (!modal) return;
    const tabs = modal.querySelectorAll(".macos-segmented-tab");
    tabs.forEach(t => t.classList.remove("active"));
    if (btn && btn.classList) {
      btn.classList.add("active");
    } else {
      tabs.forEach(t => {
        const onclickAttr = t.getAttribute("onclick") || "";
        if (onclickAttr.includes(`'${sectionId}'`)) {
          t.classList.add("active");
        }
      });
    }

    const sections = modal.querySelectorAll(".cram-section");
    sections.forEach(sec => {
      if (sectionId === "all" || sec.dataset.cramSection === sectionId) {
        sec.style.display = "block";
      } else {
        sec.style.display = "none";
      }
    });
  };

  window.openCheatSheet = function (sectionId) {
    createCheatSheetModal();
    const backdrop = document.getElementById("nism-cheatsheet-backdrop");
    if (backdrop) {
      backdrop.classList.add("open");
      document.body.classList.add("overflow-hidden");
      if (sectionId && typeof window.switchCheatSheetTab === "function") {
        window.switchCheatSheetTab(sectionId);
      }
      if (window.lucide && typeof window.lucide.createIcons === "function") {
        window.lucide.createIcons();
      }
    }
  };

  window.closeCheatSheet = function () {
    const backdrop = document.getElementById("nism-cheatsheet-backdrop");
    if (backdrop) {
      backdrop.classList.remove("open");
      document.body.classList.remove("overflow-hidden");
    }
  };

  window.toggleCheatSheet = function () {
    const backdrop = document.getElementById("nism-cheatsheet-backdrop");
    if (backdrop && backdrop.classList.contains("open")) {
      closeCheatSheet();
    } else {
      openCheatSheet();
    }
  };

  // Aliases for HTML / Spotlight button invocations
  window.openCheatSheetModal = window.openCheatSheet;
  window.closeCheatSheetModal = window.closeCheatSheet;
  window.toggleCheatSheetModal = window.toggleCheatSheet;

  // ==========================================
  // 6.7. macOS Keyboard Shortcuts Helper Modal
  // ==========================================
  function createShortcutsModal() {
    if (document.getElementById("nism-shortcuts-backdrop")) return;

    const backdrop = document.createElement("div");
    backdrop.id = "nism-shortcuts-backdrop";
    backdrop.className = "macos-formula-backdrop";
    backdrop.onclick = (e) => {
      if (e.target === backdrop) closeShortcutsModal();
    };

    backdrop.innerHTML = `
      <div class="macos-sheet-modal max-w-md" onclick="event.stopPropagation()">
        <div class="macos-window-header">
          <div class="macos-traffic-lights">
            <span class="traffic-light close" onclick="closeShortcutsModal()"></span>
            <span class="traffic-light minimize" onclick="closeShortcutsModal()"></span>
            <span class="traffic-light maximize" onclick="closeShortcutsModal()"></span>
          </div>
          <div class="macos-window-title font-bold text-slate-800">
            Keyboard Shortcuts
          </div>
          <span class="px-2 py-0.5 rounded text-[9px] font-bold bg-slate-200 text-slate-700">
            macOS HIG
          </span>
        </div>

        <div class="p-5 space-y-3 text-xs">
          <div class="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-200/80">
            <span class="font-semibold text-slate-700">Spotlight Search</span>
            <kbd class="spotlight-kbd">⌘K / Ctrl+K / /</kbd>
          </div>
          <div class="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-200/80">
            <span class="font-semibold text-slate-700">Toggle Dark / Light Mode</span>
            <kbd class="spotlight-kbd">⌘D / Ctrl+D</kbd>
          </div>
          <div class="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-200/80">
            <span class="font-semibold text-slate-700">Financial Formula Lab</span>
            <kbd class="spotlight-kbd">⌘M / Ctrl+M</kbd>
          </div>
          <div class="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-200/80">
            <span class="font-semibold text-slate-700">Keyboard Shortcuts Help</span>
            <kbd class="spotlight-kbd">?</kbd>
          </div>
          <div class="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-200/80">
            <span class="font-semibold text-slate-700">Dismiss Modal / Drawer</span>
            <kbd class="spotlight-kbd">ESC</kbd>
          </div>
          <div class="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-200/80">
            <span class="font-semibold text-slate-700">Spotlight Navigation</span>
            <kbd class="spotlight-kbd">&uarr; / &darr; + Enter</kbd>
          </div>
        </div>

        <div class="spotlight-footer">
          <span>Press <kbd class="spotlight-kbd">ESC</kbd> to dismiss</span>
          <span class="font-bold text-indigo-600 cursor-pointer" onclick="closeShortcutsModal()">Done</span>
        </div>
      </div>
    `;

    document.body.appendChild(backdrop);
  }

  window.openShortcutsModal = function () {
    createShortcutsModal();
    const backdrop = document.getElementById("nism-shortcuts-backdrop");
    if (backdrop) {
      backdrop.classList.add("open");
      document.body.classList.add("overflow-hidden");
      if (window.lucide && typeof window.lucide.createIcons === "function") {
        window.lucide.createIcons();
      }
    }
  };

  window.closeShortcutsModal = function () {
    const backdrop = document.getElementById("nism-shortcuts-backdrop");
    if (backdrop) {
      backdrop.classList.remove("open");
      document.body.classList.remove("overflow-hidden");
    }
  };

  window.toggleShortcutsModal = function () {
    const backdrop = document.getElementById("nism-shortcuts-backdrop");
    if (backdrop && backdrop.classList.contains("open")) {
      closeShortcutsModal();
    } else {
      openShortcutsModal();
    }
  };

  // ==========================================
  // 6.8. Question Selection Optimizer for Light & Dark Theme
  // ==========================================
  function setupQuizOptionSelectionListener() {
    document.addEventListener("click", function (e) {
      const label = e.target.closest("#interactive-quiz label");
      if (!label) return;

      const qContainer = label.closest("#interactive-quiz .space-y-2, #interactive-quiz .space-y-3, #interactive-quiz [id^='q-box-'], #interactive-quiz [id^='q-div-'], #interactive-quiz #questions-container > div, #interactive-quiz #quiz-container > div");
      if (qContainer) {
        qContainer.querySelectorAll("label").forEach((l) => {
          l.classList.remove("quiz-selected-opt");
        });
        label.classList.add("quiz-selected-opt");
      }

      const radio = label.querySelector("input[type='radio']");
      if (radio) {
        radio.checked = true;
      }
    });

    document.addEventListener("click", function (e) {
      if (e.target.closest("#reset-quiz-btn")) {
        setTimeout(() => {
          document.querySelectorAll("#interactive-quiz label.quiz-selected-opt").forEach((l) => {
            l.classList.remove("quiz-selected-opt");
          });
        }, 50);
      }
    });
  }

  // ==========================================
  // 7. Initialization
  // ==========================================
  function init() {
    injectModernDocsTheme();
    mountDesktopSidebar();
    createMobileDrawer();
    injectHeaderControls();
    injectReadingProgressBar();
    injectMacOSDock();
    setupSpotlightKeyboardListener();
    setupScrollSpy();
    injectMacOSTrafficLights();
    injectChapterCompletionCard();
    updateAllProgressUI();
    setupQuizOptionSelectionListener();

    if (window.lucide && typeof window.lucide.createIcons === "function") {
      window.lucide.createIcons();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
