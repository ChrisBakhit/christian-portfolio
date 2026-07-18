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
  ["AnyTown", "An interactive disease simulation for exploring how infections move through a modeled community.", "Simulation · C# · React", "https://covidmod.isi.jhu.edu/simulator", "/projects/anytown.png"],
  ["SkillLink", "A professional-networking product taken from concept through an accelerator-backed MVP.", "Founder · Node.js · AWS", "https://skilllink-app-chrisbjhus-projects.vercel.app/", "/projects/skilllink.png"],
  ["HopMC", "A Johns Hopkins Minecraft community and virtual Homewood campus built for connection during remote learning.", "Servers · Security · Community", "https://imagine.jhu.edu/blog/2021/09/23/hopmc-walk-around-homewood-campus-in-minecraft/", "/projects/hopmc.png"],
  ["SSHelping Hands", "A ministry platform for outreach, event registration, household coordination, and community support.", "Community · Web · Service", "https://www.sshelpinghands.org/", "/projects/sshelpinghands.png"],
  ["St. Stephen", "A modern church website for services, events, ministries, announcements, and community communication.", "Next.js · Content · Community", "https://ststephencypresstx.org/", "/projects/st-stephen.png"],
];

export default function Home() {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const scrollingToSection = useRef<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible")),
      { threshold: 0.1 },
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));
    const updateActiveSection = () => {
      const destination = scrollingToSection.current;
      if (destination) {
        const target = document.getElementById(destination);
        const reachedTop = destination === "top" && window.scrollY < 8;
        const reachedSection = target && Math.abs(target.getBoundingClientRect().top - 92) < 24;
        const reachedPageEnd = destination === "projects" && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
        if (!reachedTop && !reachedSection && !reachedPageEnd) return;
        scrollingToSection.current = null;
      }
      const sections = ["top", "about", "experience", "projects"];
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
  };

  return (
    <main>
      <div className="spaceBackdrop" aria-hidden="true"><span className="stars starsOne" /><span className="stars starsTwo" /><span className="shootingStar" /></div>
      <header className="siteHeader">
        <div className="windowBar"><div className="windowDots" aria-hidden="true"><i /><i /><i /></div><a className="logo" href="#top">christian-bakhit / portfolio</a><button className="commandTrigger" onClick={() => setPaletteOpen(true)}><span>⌕</span> Go to file or section <kbd>Ctrl K</kbd></button><a className="contactLink" href="mailto:chrisbakhit@gmail.com">Contact</a></div>
        <nav className="fileTabs" aria-label="Portfolio files"><a className={activeSection === "top" ? "active" : undefined} aria-current={activeSection === "top" ? "page" : undefined} onClick={(event) => { event.preventDefault(); jumpTo("#top"); }} href="#top"><i className="tsIcon">TS</i>home.tsx</a><a className={activeSection === "about" ? "active" : undefined} aria-current={activeSection === "about" ? "page" : undefined} onClick={(event) => { event.preventDefault(); jumpTo("#about"); }} href="#about"><i className="mdIcon">#</i>profile.md</a><a className={activeSection === "experience" ? "active" : undefined} aria-current={activeSection === "experience" ? "page" : undefined} onClick={(event) => { event.preventDefault(); jumpTo("#experience"); }} href="#experience"><i className="jsIcon">JS</i>experience.js</a><a className={activeSection === "projects" ? "active" : undefined} aria-current={activeSection === "projects" ? "page" : undefined} onClick={(event) => { event.preventDefault(); jumpTo("#projects"); }} href="#projects"><i className="jsonIcon">{`{}`}</i>projects.json</a><a href="/Christian_Bakhit_Resume.pdf" target="_blank"><i className="pdfIcon">PDF</i>resume.pdf</a></nav>
      </header>

      <aside className="activityRail" aria-label="Quick navigation"><a className={activeSection === "top" ? "active" : undefined} onClick={(event) => { event.preventDefault(); jumpTo("#top"); }} href="#top" aria-label="Home">⌂</a><a className={activeSection === "about" ? "active" : undefined} onClick={(event) => { event.preventDefault(); jumpTo("#about"); }} href="#about" aria-label="Profile">◎</a><a className={activeSection === "experience" ? "active" : undefined} onClick={(event) => { event.preventDefault(); jumpTo("#experience"); }} href="#experience" aria-label="Experience">⑂</a><a className={activeSection === "projects" ? "active" : undefined} onClick={(event) => { event.preventDefault(); jumpTo("#projects"); }} href="#projects" aria-label="Projects">◇</a><a href="mailto:chrisbakhit@gmail.com" aria-label="Email">✉</a></aside>

      {paletteOpen && <div className="paletteBackdrop" onMouseDown={() => setPaletteOpen(false)}><div className="commandPalette" role="dialog" aria-modal="true" aria-label="Go to portfolio section" onMouseDown={(event) => event.stopPropagation()}><div className="paletteInput"><span>›</span><strong>Go to file or section</strong><kbd>ESC</kbd></div><button onClick={() => jumpTo("#top")}><i className="tsIcon">TS</i><span><b>home.tsx</b><small>Introduction and résumé</small></span></button><button onClick={() => jumpTo("#about")}><i className="mdIcon">#</i><span><b>profile.md</b><small>Real photo and background</small></span></button><button onClick={() => jumpTo("#experience")}><i className="jsIcon">JS</i><span><b>experience.js</b><small>Combined work history</small></span></button><button onClick={() => jumpTo("#projects")}><i className="jsonIcon">{`{}`}</i><span><b>projects.json</b><small>Live builds and site previews</small></span></button></div></div>}

      <section className="hero" id="top">
        <div className="editorCrumb"><span>christian-portfolio</span><b>›</b><span>src</span><b>›</b><strong>home.tsx</strong></div>
        <div className="heroText" data-reveal>
          <span className="status"><i /> Open to opportunities</span>
          <p className="kicker">Full-Stack Engineering · AI · Cloud</p>
          <h1>Christian<br />Bakhit</h1>
          <p className="intro">Full-stack engineer building modern React applications, AWS serverless systems, REST APIs, and AI-assisted workflows.</p>
          <div className="actions"><a className="primaryButton" href="/Christian_Bakhit_Resume.pdf" target="_blank">View résumé</a><a className="textButton" href="#experience">Experience ↓</a></div>
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
        <div className="editorCrumb"><span>christian-portfolio</span><b>›</b><strong>profile.md</strong></div>
        <div className="sectionTitle" data-reveal><span>01</span><h2>Profile</h2></div>
        <div className="aboutContent" data-reveal>
          <p className="largeCopy">I build modern software across the stack, from responsive interfaces to cloud back ends and AI-powered workflows.</p>
          <div className="realProfileGrid"><figure className="realPhoto"><img src="/christian-profile.webp" alt="Christian Bakhit at Washington Square Park" /><figcaption><span>christian-profile.webp</span><small>New York, NY</small></figcaption></figure><div className="aboutColumns"><p>My recent work combines React front ends, REST APIs, AWS Lambda, DynamoDB, and large language models to deliver production tools for patent intelligence and portfolio analysis.</p><p>I am comfortable moving quickly across unfamiliar systems, making end-to-end technical decisions, and translating complex engineering work for non-technical partners.</p></div></div>
        </div>
      </section>

      <section className="resume section" id="experience">
        <div className="editorCrumb"><span>christian-portfolio</span><b>›</b><strong>experience.js</strong></div>
        <div className="sectionTitle" data-reveal><span>02</span><h2>Experience</h2></div>
        <div className="resumeList">
          {experience.map((item) => <article className="resumeItem" key={item.role + item.company} data-reveal><div className="resumeDate">{item.dates}</div><div><h3>{item.role}</h3><p className="company">{item.company}</p><ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></div></article>)}
        </div>
      </section>

      <section className="projects section" id="projects">
        <div className="editorCrumb"><span>christian-portfolio</span><b>›</b><strong>projects.json</strong></div>
        <div className="sectionTitle" data-reveal><span>03</span><h2>Selected projects</h2></div>
        <div className="projectGrid">
          {projects.map(([title, description, tags, href, image], index) => <a href={href} target="_blank" rel="noreferrer" className="projectCard" key={title} data-reveal><div className="projectVisual"><img src={image} alt={`${title} website preview`} /><span className="cardNumber">{String(index + 1).padStart(2, "0")}</span></div><div className="projectCopy"><h3>{title}</h3><p>{description}</p></div><footer><span>{tags}</span><b>↗</b></footer></a>)}
        </div>
      </section>

      <section className="details section">
        <div className="education" data-reveal><span className="miniLabel">Education</span><h2>Georgia Institute of Technology</h2><p>M.S. Computer Science (OMSCS)</p><small>Aug 2025 — Aug 2027</small><h2>Johns Hopkins University</h2><p>B.S. Computer Science & Applied Mathematics and Statistics</p><small>Aug 2020 — May 2024</small></div>
        <div className="skills" data-reveal><span className="miniLabel">Technical skills</span><div>{["Python", "JavaScript", "Java", "C#", "C++", "React", "Node.js", "REST APIs", "AWS Lambda", "DynamoDB", "PostgreSQL", "Azure", "Kubernetes", "Firebase", "Codex", "OpenAI API", "Anthropic API", "Git"].map((skill) => <span key={skill}>{skill}</span>)}</div></div>
      </section>

      <section className="contact" id="contact">
        <p data-reveal>Full-stack engineering, AI-assisted products, and cloud systems.</p>
        <h2 data-reveal>Let&apos;s talk.</h2>
        <a data-reveal href="mailto:chrisbakhit@gmail.com">chrisbakhit@gmail.com <span>↗</span></a>
        <footer><span>© {new Date().getFullYear()} Christian Bakhit</span><div><a href="https://github.com/ChrisBJHU" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/christianbakhit/" target="_blank" rel="noreferrer">LinkedIn</a></div><span>Houston, Texas</span></footer>
      </section>
      <div className="statusBar" aria-hidden="true"><span>⑂ main</span><span>✓ portfolio online</span><span>UTF-8</span><span>React · TypeScript</span><span>Christian Dark</span></div>
    </main>
  );
}
