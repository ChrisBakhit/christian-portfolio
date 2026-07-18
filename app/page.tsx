"use client";

import { useEffect, useRef, useState } from "react";

const experience = [
  {
    role: "Full Stack Developer",
    company: "Supercharge",
    dates: "Aug 2025 — Present",
    bullets: [
      "Built full-stack patent intelligence software using React, REST APIs, AWS Lambda, and DynamoDB, integrating LLMs for AI-assisted workflows.",
      "Designed and shipped AI-powered products used by IP professionals for portfolio analysis, competitor tracking, and licensing strategy.",
      "Used Codex daily for rapid AI-assisted development while maintaining code quality and alignment with project requirements.",
    ],
  },
  {
    role: "Patent Examiner",
    company: "United States Patent and Trademark Office",
    dates: "Jan 2025 — Aug 2025",
    bullets: [
      "Reviewed software systems, APIs, and distributed architectures for technical compliance and prior-art analysis.",
      "Automated documentation workflows to reduce manual overhead and maintain audit-ready procedural records.",
      "Communicated complex technical findings to non-technical reviewers across engineering and legal contexts.",
    ],
  },
  {
    role: "Head Developer",
    company: "Daily Talk Media",
    dates: "Dec 2024 — Feb 2026",
    bullets: [
      "Led architecture and backend development for a production platform built from the ground up.",
      "Made end-to-end technical decisions across front-end and back-end to keep a small team shipping on schedule.",
    ],
  },
  {
    role: "Founder",
    company: "SkillLink",
    dates: "Mar 2023 — May 2024",
    bullets: [
      "Founded a professional-networking product focused on improving how people build useful career connections.",
      "Built the website and backend infrastructure using HTML, CSS, Node.js, and AWS S3.",
      "Developed an MVP through the Spark Accelerator and secured initial funding.",
    ],
  },
  {
    role: "Academic Support Tutor",
    company: "Johns Hopkins University",
    dates: "Aug 2022 — May 2024",
    bullets: [
      "Mentored students across introductory computer science courses.",
      "Created individualized learning plans covering JavaScript, Python, Java, C, and C++.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "St. Mary & Archangel Michael Church",
    dates: "Jun 2022 — Aug 2023",
    bullets: [
      "Developed and maintained a React and Firebase website for a multi-generational church community.",
      "Led a usability redesign focused on making the experience clearer and more accessible for older users.",
    ],
  },
  {
    role: "Student Leader",
    company: "Delineo Disease Modeling",
    dates: "Jan 2021 — May 2023",
    bullets: [
      "Managed a 50-person student team using Agile project practices.",
      "Built COVID-19 simulation tools using Unity, C#, React, SQL, and cloud infrastructure.",
      "Collaborated with Microsoft Research and AWS on simulation and dashboard testing.",
    ],
  },
];

const projects = [
  ["Supercharge", "Prior-art intelligence software for faster patent research, claim analysis, and evidence-backed workflows.", "Product · AI · Full stack", "https://www.supercharge.work/", "/projects/supercharge.png"],
  ["Portfolio by Supercharge", "A portfolio strategy center for exploring patent portfolios, competitors, and feature relationships.", "Product · Visualization · Data", "https://sila.supercharge.work/", "/projects/portfolio.png"],
  ["St. Luke", "A production healthcare operations platform with scheduling, patient workflows, and administrative tooling.", "Next.js · Supabase · Operations", "https://st-luke-amber.vercel.app/", "/projects/st-luke.png"],
  ["DTFeatureMe", "A product for turning invention concepts into structured feature maps and clearer technical narratives.", "Next.js · Product · AI", "https://dtfeatureme.com/", "/projects/dtfeatureme.png"],
  ["Delineo", "An epidemiological research platform supporting collaborative disease modeling and simulation work.", "Research · Unity · React · SQL", "https://covidmod.isi.jhu.edu/", "/projects/delineo.png"],
  ["AnyTown", "An interactive disease simulation for exploring how infections move through a modeled community.", "Simulation · C# · React", "https://malonecenter.jhu.edu/anytown-usa-tool-simulates-covid-19-spread-in-small-towns/", "/projects/anytown.png"],
  ["HopMC", "A Johns Hopkins Minecraft community and virtual Homewood campus built for connection during remote learning.", "Servers · Security · Community", "https://imagine.jhu.edu/blog/2021/09/23/hopmc-walk-around-homewood-campus-in-minecraft/", "/projects/hopmc.png"],
  ["SSHelping Hands", "A ministry platform for outreach, event registration, household coordination, and community support.", "Community · Web · Service", "https://www.sshelpinghands.org/", "/projects/sshelpinghands.png"],
  ["St. Stephen", "A modern church website for services, events, ministries, announcements, and community communication.", "Next.js · Content · Community", "https://ststephencypresstx.org/", "/projects/st-stephen.png"],
];

const skillGroups = [
  { title: "Languages", skills: [["Python", 90], ["JavaScript", 92], ["Java", 82], ["C#", 80], ["C++", 76]] },
  { title: "Frontend", skills: [["React", 94], ["Next.js", 90], ["HTML / CSS", 94], ["Responsive Design", 92]] },
  { title: "Cloud & Backend", skills: [["Node.js", 91], ["REST APIs", 94], ["AWS Lambda", 90], ["DynamoDB", 86], ["PostgreSQL", 84]] },
  { title: "AI Engineering", skills: [["OpenAI API", 91], ["Anthropic API", 85], ["Codex", 95], ["LLM Workflows", 90], ["RAG Systems", 82]] },
  { title: "DevOps & Tools", skills: [["Git", 94], ["Docker", 84], ["Kubernetes", 76], ["Azure", 78], ["Firebase", 84]] },
  { title: "Product Engineering", skills: [["System Design", 88], ["Technical Writing", 90], ["Agile Leadership", 87], ["Rapid Prototyping", 94]] },
];

export default function Home() {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [paletteQuery, setPaletteQuery] = useState("");
  const [activeSection, setActiveSection] = useState("top");
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalLines, setTerminalLines] = useState(["Christian Portfolio Terminal", "Type 'help' to see available commands."]);
  const [terminalTheme, setTerminalTheme] = useState<"default" | "matrix" | "space" | "vault">("default");
  const [statusMessage, setStatusMessage] = useState("portfolio online");
  const [checksRunning, setChecksRunning] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [cosmicMode, setCosmicMode] = useState<"default" | "eclipse" | "warp" | "launch">("default");
  const scrollingToSection = useRef<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible")),
      { threshold: 0.1 },
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));
    const updateActiveSection = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(maxScroll > 0 ? Math.min(1, window.scrollY / maxScroll) : 0);
      const destination = scrollingToSection.current;
      if (destination) {
        const target = document.getElementById(destination);
        const reachedTop = destination === "top" && window.scrollY < 8;
        const reachedSection = target && Math.abs(target.getBoundingClientRect().top - 92) < 24;
        const reachedPageEnd = destination === "projects" && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
        if (!reachedTop && !reachedSection && !reachedPageEnd) return;
        scrollingToSection.current = null;
      }
      const sections = ["top", "about", "experience", "projects", "skills", "education"];
      const current = sections.reduce((active, id) => {
        const element = document.getElementById(id);
        return element && element.getBoundingClientRect().top <= 180 ? id : active;
      }, "top");
      setActiveSection(current);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setPaletteOpen((open) => !open);
      }
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "p") {
        event.preventDefault();
        setPaletteOpen((open) => !open);
      }
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "b") {
        event.preventDefault();
        setSidebarOpen((open) => !open);
      }
      if ((event.metaKey || event.ctrlKey) && event.key === "`") {
        event.preventDefault();
        setTerminalOpen((open) => !open);
      }
      if (event.key === "Escape") setPaletteOpen(false);
    };
    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const jumpTo = (id: string) => {
    const section = id.slice(1);
    scrollingToSection.current = section;
    setActiveSection(section);
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    setPaletteOpen(false);
    setActiveMenu(null);
  };

  const runTerminalCommand = (rawCommand: string) => {
    const command = rawCommand.trim().toLowerCase();
    if (!command) return;
    const responses: Record<string, string[]> = {
      help: ["Commands: whoami, ls, projects, experience, skills, education, resume, contact, neofetch, git status, clear, exit", "Tip: good terminals reward curiosity."],
      whoami: ["Christian Bakhit — Full-Stack Engineer · AI · Cloud"],
      ls: ["home.tsx   profile.md   experience.js", "projects.json   skills.json   resume.pdf   .secrets/"],
      projects: ["Opening projects.json…"],
      experience: ["Opening experience.js…"],
      skills: ["Opening skills.json…"],
      education: ["Entering education.md gravity well…"],
      resume: ["Opening resume.pdf…"],
      contact: ["chrisbakhit@gmail.com"],
      neofetch: ["christian@portfolio", "OS: Houston / Web", "Shell: React + TypeScript", "Cloud: AWS", "Editor: Codex", "Uptime: always learning"],
      "git status": ["On branch main", "Your portfolio is up to date.", "nothing to commit, still building things"],
      coffee: ["Brewing…", "[██████████] 100%", "Coffee compiled successfully. No warnings."],
      "sudo hire christian": ["Permission granted.", "Opening mail client…"],
      "cat .secrets/mission.txt": ["Build useful software. Stay curious. Help good teams ship."],
      "cat resume.md": ["Nice try — the real one is resume.pdf. Run: resume"],
      "42": ["The answer is 42. The implementation is probably TypeScript."],
      clove: ["Controller selected: CLOVE", "Pick me up again. I dare you.", "Teal energy output: stable."],
      secret: ["Achievement unlocked: inspected the source of the source."],
      "cd .secrets": ["Access denied. Hint: doors sometimes respond to polite phrases."],
      "cat .secrets/commands.txt": ["Encrypted. Try: open sesame"],
      "sudo make me a sandwich": ["Okay. 🥪", "Dependency added: lunch@latest"],
      "rm -rf /": ["Nice try.", "This portfolio has emotional backups and a very nervous firewall."],
      "git log --oneline": ["e3a2f7f add terminal easter eggs", "9488d10 make it less ugly", "c4be46f equip teal agent portrait", "0000000 begin building things"],
      hopmc: ["Connecting to mc.jhu.edu…", "Homewood campus loaded. Watch out for creepers near Gilman."],
      supercharge: ["⚡ Systems charged.", "Patent intelligence: online", "Portfolio strategy: online", "Builder mode: active"],
      patent: ["Claim 1: A developer configured to ship useful software.", "Status: exceptionally allowable."],
      xyzzy: ["A hollow voice says: impressive commit history."],
      "ping christian": ["64 bytes from christian: talent=high latency=low", "64 bytes from christian: curiosity=∞ latency=low"],
      "npm run destiny": ["> christian-portfolio@future destiny", "Compiling ambitious ideas…", "Build succeeded."],
      "hello there": ["General Kenobi.", "You are a bold one for checking the terminal."],
    };
    if (command === "clear") { setTerminalLines([]); setTerminalTheme("default"); }
    else if (["eclipse", "warp", "launch"].includes(command)) { const mode = command as "eclipse" | "warp" | "launch"; setCosmicMode(mode); setTerminalLines((lines) => [...lines, `$ ${rawCommand}`, `${mode} mode engaged.`, "Run: normal to restore orbit."]); setStatusMessage(`${mode} mode`); }
    else if (command === "normal") { setCosmicMode("default"); setTerminalLines((lines) => [...lines, `$ ${rawCommand}`, "Normal orbit restored."]); }
    else if (command === "matrix") { setTerminalTheme("matrix"); setTerminalLines((lines) => [...lines, `$ ${rawCommand}`, "Wake up, Christian…", "The portfolio has you."]); }
    else if (command === "space") { setTerminalTheme("space"); setTerminalLines((lines) => [...lines, `$ ${rawCommand}`, "⋆｡°✩ Launching portfolio into orbit…", "Houston, we have a deployment."]); }
    else if (command === "open sesame" || command === "konami") { setTerminalTheme("vault"); setTerminalLines((lines) => [...lines, `$ ${rawCommand}`, "◆ PRIVATE VAULT UNLOCKED ◆", "Hidden commands detected: coffee · matrix · space · clove", "There are more. The best secrets are found, not listed."]); setStatusMessage("secret vault discovered"); }
    else if (command === "exit") { setTerminalOpen(false); setTerminalTheme("default"); }
    else setTerminalLines((lines) => [...lines, `$ ${rawCommand}`, ...(responses[command] || [`command not found: ${command}`, "Try 'help' — or experiment."])]);
    if (command === "projects") jumpTo("#projects");
    if (command === "experience") jumpTo("#experience");
    if (command === "skills") jumpTo("#skills");
    if (command === "education") jumpTo("#education");
    if (command === "resume") window.open("/Christian_Bakhit_Resume.pdf", "_blank");
    if (command === "sudo hire christian") window.location.href = "mailto:chrisbakhit@gmail.com?subject=Let%27s%20work%20together";
    setTerminalInput("");
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText("chrisbakhit@gmail.com");
    setStatusMessage("email copied");
    setActiveMenu(null);
  };

  const showBranchInfo = () => {
    setTerminalLines(["$ git branch --show-current", "main", "$ git log -1 --oneline", "latest  portfolio ready to ship"]);
    setTerminalOpen(true);
    setStatusMessage("main branch opened");
  };

  const runPortfolioChecks = () => {
    if (checksRunning) return;
    setChecksRunning(true);
    setTerminalOpen(true);
    setTerminalLines(["$ npm run check", "Checking routes, links, and build…"]);
    setStatusMessage("running checks…");
    window.setTimeout(() => {
      setTerminalLines((lines) => [...lines, "✓ 6 portfolio files found", "✓ project links connected", "✓ production build healthy", "All checks passed."]);
      setStatusMessage("all checks passed");
      setChecksRunning(false);
    }, 900);
  };

  const menuItems: Record<string, { label: string; shortcut?: string; action: () => void }[]> = {
    File: [
      { label: "New Tab", shortcut: "Ctrl+T", action: () => { jumpTo("#top"); setStatusMessage("home.tsx opened"); } },
      { label: "Open File…", shortcut: "Ctrl+P", action: () => { setPaletteOpen(true); setActiveMenu(null); } },
      { label: "Download Resume", action: () => { window.open("/Christian_Bakhit_Resume.pdf", "_blank"); setActiveMenu(null); } },
    ],
    Edit: [
      { label: "Find…", shortcut: "Ctrl+P", action: () => { setPaletteOpen(true); setActiveMenu(null); } },
      { label: "Copy Email", shortcut: "Ctrl+C", action: copyEmail },
    ],
    View: [
      { label: "Command Palette", shortcut: "Ctrl+P", action: () => { setPaletteOpen(true); setActiveMenu(null); } },
      { label: "Toggle Sidebar", shortcut: "Ctrl+B", action: () => { setSidebarOpen((open) => !open); setActiveMenu(null); } },
      { label: "Toggle Terminal", shortcut: "Ctrl+`", action: () => { setTerminalOpen((open) => !open); setActiveMenu(null); } },
      { label: "Enter Full Screen", shortcut: "F11", action: () => { document.documentElement.requestFullscreen?.(); setActiveMenu(null); } },
    ],
    Go: [
      { label: "home.tsx", action: () => jumpTo("#top") },
      { label: "profile.md", action: () => jumpTo("#about") },
      { label: "experience.js", action: () => jumpTo("#experience") },
      { label: "projects.json", action: () => jumpTo("#projects") },
      { label: "skills.json", action: () => jumpTo("#skills") },
      { label: "education.md", action: () => jumpTo("#education") },
    ],
    Run: [
      { label: "Start Terminal", shortcut: "Ctrl+`", action: () => { setTerminalOpen(true); setActiveMenu(null); } },
      { label: "Run Portfolio Info", action: () => { setTerminalOpen(true); runTerminalCommand("whoami"); setActiveMenu(null); } },
    ],
    Terminal: [
      { label: "New Terminal", shortcut: "Ctrl+`", action: () => { setTerminalLines(["New portfolio terminal ready."]); setTerminalOpen(true); setActiveMenu(null); } },
      { label: "Toggle Terminal", action: () => { setTerminalOpen((open) => !open); setActiveMenu(null); } },
      { label: "Clear Terminal", action: () => { setTerminalLines([]); setActiveMenu(null); } },
    ],
    Help: [
      { label: "Keyboard Shortcuts", action: () => { setTerminalOpen(true); setTerminalLines(["Ctrl+P  Command Palette", "Ctrl+B  Toggle Explorer", "Ctrl+`  Toggle Terminal", "Esc  Close overlays"]); setActiveMenu(null); } },
      { label: "GitHub ↗", action: () => { window.open("https://github.com/ChrisBakhit", "_blank"); setActiveMenu(null); } },
      { label: "About", action: () => { jumpTo("#about"); setStatusMessage("Christian Bakhit Portfolio"); } },
    ],
  };

  const paletteItems = [
    ["home.tsx", "Introduction, resume, full-stack", "#top", "tsIcon", "TS"],
    ["profile.md", "Christian, Supercharge, Georgia Tech, JHU", "#about", "mdIcon", "#"],
    ["experience.js", "Work history, AWS, React, AI", "#experience", "jsIcon", "JS"],
    ["projects.json", "Live products, research, community builds", "#projects", "jsonIcon", "{}"],
    ["skills.json", "React, TypeScript, cloud, APIs, LLMs", "#skills", "jsonIcon", "{}"],
    ["education.md", "Georgia Tech and Johns Hopkins", "#education", "mdIcon", "#"],
  ].filter(([name, keywords]) => `${name} ${keywords}`.toLowerCase().includes(paletteQuery.toLowerCase()));

  const projectStatus = (title: string) => title === "Delineo" || title === "AnyTown" ? "Research" : title === "HopMC" ? "Community" : "Live";

  return (
    <main className={`${sidebarOpen ? "sidebarOpen" : ""} cosmic-${cosmicMode}`} onClick={() => activeMenu && setActiveMenu(null)}>
      <div className="spaceBackdrop" aria-hidden="true"><span className="stars starsOne" /><span className="stars starsTwo" /><div className="meteorShow"><i /><i /><i /><i /><i /><i /><i /></div></div>
      <header className="siteHeader">
        <div className="windowBar"><div className="windowDots" aria-hidden="true"><i /><i /><i /></div><a className="logo" href="#top">christian-bakhit / portfolio</a><button className="commandTrigger" onClick={() => setPaletteOpen(true)}><span>⌕</span> christian-bakhit : portfolio <kbd>Ctrl P</kbd></button><a className="contactLink" href="mailto:chrisbakhit@gmail.com">Contact</a></div>
        <nav className="desktopMenus" aria-label="Application menu" onClick={(event) => event.stopPropagation()}>{Object.keys(menuItems).map((menu) => <div className="menuRoot" key={menu}><button aria-expanded={activeMenu === menu} onClick={() => setActiveMenu(activeMenu === menu ? null : menu)}>{menu}</button>{activeMenu === menu && <div className="menuDropdown" role="menu">{menuItems[menu].map((item) => <button role="menuitem" key={item.label} onClick={item.action}><span>{item.label}</span>{item.shortcut && <kbd>{item.shortcut}</kbd>}</button>)}</div>}</div>)}</nav>
        <nav className="fileTabs" aria-label="Portfolio files"><a className={activeSection === "top" ? "active" : undefined} aria-current={activeSection === "top" ? "page" : undefined} onClick={(event) => { event.preventDefault(); jumpTo("#top"); }} href="#top"><i className="tsIcon">TS</i>home.tsx</a><a className={activeSection === "about" ? "active" : undefined} aria-current={activeSection === "about" ? "page" : undefined} onClick={(event) => { event.preventDefault(); jumpTo("#about"); }} href="#about"><i className="mdIcon">#</i>profile.md</a><a className={activeSection === "experience" ? "active" : undefined} aria-current={activeSection === "experience" ? "page" : undefined} onClick={(event) => { event.preventDefault(); jumpTo("#experience"); }} href="#experience"><i className="jsIcon">JS</i>experience.js</a><a className={activeSection === "projects" ? "active" : undefined} aria-current={activeSection === "projects" ? "page" : undefined} onClick={(event) => { event.preventDefault(); jumpTo("#projects"); }} href="#projects"><i className="jsonIcon">{`{}`}</i>projects.json</a><a className={activeSection === "skills" ? "active" : undefined} aria-current={activeSection === "skills" ? "page" : undefined} onClick={(event) => { event.preventDefault(); jumpTo("#skills"); }} href="#skills"><i className="jsonIcon">{`{}`}</i>skills.json</a><a className={activeSection === "education" ? "active" : undefined} aria-current={activeSection === "education" ? "page" : undefined} onClick={(event) => { event.preventDefault(); jumpTo("#education"); }} href="#education"><i className="mdIcon">#</i>education.md</a><a href="/Christian_Bakhit_Resume.pdf" target="_blank"><i className="pdfIcon">PDF</i>resume.pdf</a></nav>
      </header>

      <aside className="activityRail" aria-label="Quick navigation"><a className={activeSection === "top" ? "active" : undefined} onClick={(event) => { event.preventDefault(); jumpTo("#top"); }} href="#top" aria-label="Home">⌂</a><a className={activeSection === "about" ? "active" : undefined} onClick={(event) => { event.preventDefault(); jumpTo("#about"); }} href="#about" aria-label="Profile">◎</a><a className={activeSection === "experience" ? "active" : undefined} onClick={(event) => { event.preventDefault(); jumpTo("#experience"); }} href="#experience" aria-label="Experience">⑂</a><a className={activeSection === "projects" ? "active" : undefined} onClick={(event) => { event.preventDefault(); jumpTo("#projects"); }} href="#projects" aria-label="Projects">◇</a><a className={activeSection === "skills" ? "active" : undefined} onClick={(event) => { event.preventDefault(); jumpTo("#skills"); }} href="#skills" aria-label="Skills">{`{}`}</a><a className={activeSection === "education" ? "active" : undefined} onClick={(event) => { event.preventDefault(); jumpTo("#education"); }} href="#education" aria-label="Education">◉</a><a href="mailto:chrisbakhit@gmail.com" aria-label="Email">✉</a></aside>

      {sidebarOpen && <aside className="explorerPanel" aria-label="Portfolio explorer"><div className="explorerTitle"><span>EXPLORER</span><button onClick={() => setSidebarOpen(false)} aria-label="Close explorer">×</button></div><strong>⌄ CHRISTIAN-PORTFOLIO</strong><button className={activeSection === "top" ? "active" : undefined} onClick={() => jumpTo("#top")}><i className="tsIcon">TS</i> home.tsx</button><button className={activeSection === "about" ? "active" : undefined} onClick={() => jumpTo("#about")}><i className="mdIcon">#</i> profile.md</button><button className={activeSection === "experience" ? "active" : undefined} onClick={() => jumpTo("#experience")}><i className="jsIcon">JS</i> experience.js</button><button className={activeSection === "projects" ? "active" : undefined} onClick={() => jumpTo("#projects")}><i className="jsonIcon">{`{}`}</i> projects.json</button><button className={activeSection === "skills" ? "active" : undefined} onClick={() => jumpTo("#skills")}><i className="jsonIcon">{`{}`}</i> skills.json</button><button className={activeSection === "education" ? "active" : undefined} onClick={() => jumpTo("#education")}><i className="mdIcon">#</i> education.md</button><a href="/Christian_Bakhit_Resume.pdf" target="_blank"><i className="pdfIcon">PDF</i> resume <span>↓</span></a><div className={`explorerBranch ${checksRunning ? "checking" : ""}`}><button onClick={showBranchInfo} aria-label="Show main branch information">⑂ main</button><button onClick={runPortfolioChecks} aria-label="Run portfolio checks" disabled={checksRunning}>{checksRunning ? "◌" : "✓"}</button></div></aside>}

      {paletteOpen && <div className="paletteBackdrop" onMouseDown={() => setPaletteOpen(false)}><div className="commandPalette" role="dialog" aria-modal="true" aria-label="Search portfolio" onMouseDown={(event) => event.stopPropagation()}><div className="paletteInput"><span>›</span><input autoFocus value={paletteQuery} onChange={(event) => setPaletteQuery(event.target.value)} placeholder="Search React, AWS, AI, projects…" aria-label="Search portfolio" /><kbd>ESC</kbd></div>{paletteItems.map(([name, keywords, href, iconClass, icon]) => <button key={name} onClick={() => { jumpTo(href); setPaletteQuery(""); }}><i className={iconClass}>{icon}</i><span><b>{name}</b><small>{keywords}</small></span></button>)}{paletteItems.length === 0 && <p className="paletteEmpty">No matching file. Try a technology or project type.</p>}</div></div>}

      <section className="hero" id="top">
        <div className="editorCrumb"><span>christian-portfolio</span><b>›</b><span>src</span><b>›</b><strong>home.tsx</strong></div>
        <div className="heroText" data-reveal>
          <p className="codeComment">// home.tsx — full-stack engineering, AI, and cloud systems</p>
          <span className="status"><i /> Open to opportunities</span>
          <p className="kicker">Full-Stack Engineering · AI · Cloud</p>
          <h1>Christian<br />Bakhit</h1>
          <p className="intro">Full-stack engineer building modern React applications, AWS serverless systems, REST APIs, and AI-assisted workflows.</p>
          <div className="actions"><a className="primaryButton" href="/Christian_Bakhit_Resume.pdf" target="_blank">View resume</a><a className="textButton" href="#experience">Experience ↓</a></div>
        </div>
        <div className="profileWrap" data-reveal>
          <span className="portraitGlow" aria-hidden="true" />
          <div className="portraitFrame">
            <img src="/christian-agent-portrait.png" alt="Stylized portrait of Christian Bakhit" />
            <span className="portraitLabel">Engineer / Builder</span>
          </div>
          <div className="profileMeta"><span>Based in Houston, TX</span><span>Georgia Tech · JHU</span></div>
        </div>
      </section>

      <section className="about section" id="about">
        <nav className="profileConstellation" aria-label="Profile constellation"><button onClick={() => jumpTo("#experience")} data-label="Supercharge" /><button onClick={() => jumpTo("#education")} data-label="Georgia Tech" /><button onClick={() => jumpTo("#education")} data-label="Johns Hopkins" /><button onClick={() => jumpTo("#skills")} data-label="Engineering" /><button onClick={() => jumpTo("#contact")} data-label="Houston" /><i /><i /><i /></nav>
        <div className="editorCrumb"><span>christian-portfolio</span><b>›</b><strong>profile.md</strong></div>
        <article className="profileRoute" data-reveal>
          <header className="routeIntro"><div className="routeFile"><span>01</span><b>PROFILE / README</b></div><h2>More than a title.<br /><em>Here&apos;s the route.</em></h2><p>Christian is a full-stack engineer who moves comfortably between product thinking, cloud architecture, and applied AI.</p></header>
          <div className="routeMap">
            <div className="routeTrack" aria-hidden="true"><i /><i /><i /><i /></div>
            <figure className="routePortrait"><img src="/christian-profile.webp" alt="Christian Bakhit at Washington Square Park" /><figcaption><b>Christian Bakhit</b><span>Houston, Texas</span></figcaption></figure>
            <div className="routeStops">
              <article><span className="stopIndex">01</span><small>ORIGIN</small><h3>Computer science meets applied mathematics.</h3><p>Johns Hopkins built the technical foundation; Georgia Tech is extending it through graduate study in computer science.</p></article>
              <article><span className="stopIndex">02</span><small>CURRENT STOP</small><h3>Building at Supercharge.</h3><p>Turning complex patent evidence into practical software for research, portfolio analysis, and licensing strategy.</p></article>
              <article><span className="stopIndex">03</span><small>HOW I MOVE</small><h3>From ambiguity to shipped product.</h3><p>I connect React interfaces, APIs, AWS systems, data models, and AI workflows—then stay accountable for the result.</p></article>
              <article><span className="stopIndex">04</span><small>NEXT</small><h3>Useful systems with real leverage.</h3><p>The goal is simple: own the outcome, explain the tradeoffs, and ship the part that matters.</p></article>
            </div>
          </div>
        </article>
      </section>

      <section className="resume section" id="experience">
        <span className="sectionComet cometTwo" aria-hidden="true" />
        <div className="editorCrumb"><span>christian-portfolio</span><b>›</b><strong>experience.js</strong></div>
        <p className="codeComment" data-reveal>// experience.js — roles, responsibilities, and shipped outcomes</p>
        <div className="sectionTitle" data-reveal><span>02</span><h2>Experience</h2></div>
        <div className="resumeList">
          {experience.map((item) => <article className="resumeItem" key={item.role + item.company} data-reveal><div className="resumeDate">{item.dates}</div><div><h3>{item.role}</h3><p className="company">{item.company}</p><ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></div></article>)}
        </div>
      </section>

      <section className="projects section" id="projects">
        <span className="sectionComet cometThree" aria-hidden="true" />
        <div className="projectAsteroids" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
        <div className="editorCrumb"><span>christian-portfolio</span><b>›</b><strong>projects.json</strong></div>
        <p className="codeComment" data-reveal>// projects.json — selected products, platforms, and community builds</p>
        <div className="sectionTitle" data-reveal><span>03</span><h2>Selected projects</h2></div>
        <code className="jsonRoot" data-reveal><span>{`{`}</span> <b>&quot;projects&quot;</b>: [</code>
        <div className="projectGrid">
          {projects.map(([title, description, tags, href, image], index) => <a href={href} target="_blank" rel="noreferrer" className="projectCard" key={title} data-reveal><div className="jsonRecord"><span>{index}</span><code>project</code><b className={`projectStatus status${projectStatus(title)}`}>{projectStatus(title)}</b></div><div className="projectVisual"><img src={image} alt={`${title} website preview`} /><span className="cardNumber">{String(index + 1).padStart(2, "0")}</span></div><div className="projectCopy"><small>name</small><h3>{title}</h3><small>summary</small><p>{description}</p></div><footer><span><i>stack</i>{tags}</span><b aria-hidden="true">↗</b></footer></a>)}
        </div>
        <code className="jsonRoot jsonClose" data-reveal>]</code>
      </section>
      <section className="skillsEditor section" id="skills">
        <span className="sectionOrbit" aria-hidden="true"><i /><i /><i /></span>
        <span className="sectionComet cometFour" aria-hidden="true" />
        <div className="editorCrumb"><span>christian-portfolio</span><b>›</b><span>data</span><b>›</b><strong>skills.json</strong></div>
        <p className="codeComment" data-reveal>// skills.json — technologies I use to ship real products</p>
        <div className="skillsHeading" data-reveal><h2>Skills</h2></div>
        <div className="skillGroupGrid">
          {skillGroups.map((group, groupIndex) => <article className="skillGroup" data-reveal key={group.title} style={{ "--group-index": groupIndex } as React.CSSProperties}><header><span>{String(groupIndex + 1).padStart(2, "0")}</span><h3>{group.title}</h3><small>{group.skills.length} capabilities</small></header><div className="skillOrbitGrid">{group.skills.map(([name, level], skillIndex) => <div className="skillNode" key={name}><div className="skillGauge" style={{ "--level": level, "--skill-color": `var(--skill-${(groupIndex + skillIndex) % 5})`, "--node-index": skillIndex } as React.CSSProperties}><span>{level}</span></div><strong>{name}</strong></div>)}</div></article>)}
        </div>
        <div className="familiarTools" data-reveal><span>Also familiar with</span><div>{["Azure", "Firebase", "SQL", "C++", "C#", "JIRA", "Unity", "Figma", "MLOps", "Vector DBs", "Cloudflare", "Vercel"].map((skill) => <b key={skill}>{skill}</b>)}</div></div>
      </section>

      <section className="educationFile section" id="education">
        <span className="sectionComet cometFive" aria-hidden="true" />
        <div className="editorCrumb"><span>christian-portfolio</span><b>›</b><strong>education.md</strong></div>
        <div className="blackHoleScene" role="img" aria-label="Interactive black hole representing education as a gravity well" tabIndex={0}><span className="gravityLens" /><span className="accretionDisk" /><span className="blackHole"><i /></span><span className="orbitPath orbitA"><i /></span><span className="orbitPath orbitB"><i /></span><span className="gravityLabel">education / gravity well</span></div>
        <div className="educationDocument" data-reveal><p className="codeComment">// education.md — foundations that keep pulling the work forward</p><div className="markdownTitle"><span>#</span><h3>Education</h3></div><p className="educationLead">Computer science, applied mathematics, statistics, and continued graduate study.</p><div className="degreeStack"><article><span>01</span><small>2025 — 2027</small><h4>Georgia Institute of Technology</h4><p>M.S. Computer Science · OMSCS</p><b>Graduate study in computing systems and machine learning.</b></article><article><span>02</span><small>2020 — 2024</small><h4>Johns Hopkins University</h4><p>B.S. Computer Science</p><b>Applied Mathematics &amp; Statistics</b></article></div></div>
      </section>

      <section className="contact" id="contact">
        <div className="contactSky" aria-hidden="true"><span /><span /><span /><span /><span /><span /><span /><span /></div>
        <div className="contactSignalArt" aria-hidden="true"><span className="signalStar">✦</span><div className="signalWaves"><i /><i /><i /></div><div className="signalDish"><i /></div></div>
        <p className="contactComment" data-reveal>// contact.css — start a conversation</p>
        <p data-reveal>Full-stack engineering, AI-assisted products, and cloud systems.</p>
        <h2 data-reveal>Let&apos;s talk.</h2>
        <a data-reveal href="mailto:chrisbakhit@gmail.com">chrisbakhit@gmail.com <span>↗</span></a>
        <footer><span>© {new Date().getFullYear()} Christian Bakhit</span><div><a href="https://github.com/ChrisBakhit" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/christianbakhit/" target="_blank" rel="noreferrer">LinkedIn</a></div><span>Houston, Texas</span></footer>
      </section>
      {terminalOpen && <section className={`terminalPanel ${terminalTheme}`} aria-label="Portfolio terminal"><header><span>TERMINAL</span><small>{terminalTheme !== "default" ? `${terminalTheme} mode` : "bash"}</small><button onClick={() => { setTerminalLines([]); setTerminalTheme("default"); }}>Clear</button><button onClick={() => setTerminalOpen(false)} aria-label="Close terminal">×</button></header><div className="terminalOutput" aria-live="polite">{terminalLines.map((line, index) => <p key={`${line}-${index}`}>{line}</p>)}</div><form onSubmit={(event) => { event.preventDefault(); runTerminalCommand(terminalInput); }}><span>christian@portfolio:~$</span><input aria-label="Terminal command" value={terminalInput} onChange={(event) => setTerminalInput(event.target.value)} autoComplete="off" spellCheck={false} autoFocus /></form></section>}
      <div className="statusBar"><button onClick={() => setSidebarOpen((open) => !open)}>⑂ main</button><span>✓ {statusMessage}</span><div className="progressStars" aria-label={`${Math.round(scrollProgress * 100)}% explored`}>{[.12,.3,.5,.7,.9].map((point) => <i className={scrollProgress >= point ? "lit" : ""} key={point}>✦</i>)}</div><button onClick={() => setPaletteOpen(true)}>Ctrl P</button><span>React · TypeScript</span><button onClick={() => setTerminalOpen((open) => !open)}>⌘ Terminal</button></div>
    </main>
  );
}
