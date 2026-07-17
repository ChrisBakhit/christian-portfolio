"use client";

import { useEffect } from "react";

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
];

const projects = [
  ["Supercharge", "A portfolio intelligence platform for organizing, analyzing, and activating intellectual-property opportunities.", "Product · Data · Full stack", "https://supercharge.work/"],
  ["Sila by Supercharge", "A focused Supercharge experience for exploring patent portfolios, competitors, and feature relationships.", "Product · Visualization · Data", "https://sila.supercharge.work/"],
  ["St. Luke", "A production healthcare operations platform with scheduling, patient workflows, and administrative tooling.", "Next.js · Supabase · Operations", "https://github.com/ChrisBakhit/St-Luke"],
  ["DTFeatureMe", "A product for turning invention concepts into structured feature maps and clearer technical narratives.", "Next.js · Product · AI", "https://github.com/ChrisBakhit/DTFeatureMe"],
  ["Delineo", "An epidemiological research platform supporting collaborative disease modeling and simulation work.", "Research · Unity · React · SQL", "https://covidweb.isi.jhu.edu/"],
  ["AnyTown", "An interactive COVID-19 simulation that lets users explore how disease spreads through a modeled community.", "Simulation · C# · React", "https://covidweb.isi.jhu.edu/"],
  ["SkillLink", "A professional-networking product taken from concept through an accelerator-backed MVP.", "Founder · Node.js · AWS", "https://github.com/ChrisBJHU"],
  ["Church Site", "A community website designed to make services, events, and church information accessible across generations.", "React · Firebase · UX", "https://ststephencypresstx.org/"],
  ["Gemini Discord Bot", "An automation bot for stock monitoring, website uptime, and useful community alerts.", "Python · APIs · Automation", "https://github.com/ChrisBJHU/DiscordBot"],
  ["HopMC", "A Johns Hopkins Minecraft community and server that grew into a hands-on lesson in infrastructure and community leadership.", "Servers · Security · Community", "https://studentaffairs.jhu.edu/dmc/hopmc/"],
  ["SSHelping Hands", "A community-focused platform created to make support, resources, and outreach easier to access and coordinate.", "Community · Web · Service", "https://github.com/ChrisBJHU"],
  ["St. Stephen", "A modern church website for services, events, ministries, announcements, and community communication.", "Next.js · Content · Community", "https://ststephencypresstx.org/"],
];

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible")),
      { threshold: 0.1 },
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <header className="siteHeader">
        <a className="logo" href="#top">Christian Bakhit</a>
        <nav aria-label="Main navigation"><a href="#about">About</a><a href="#experience">Experience</a><a href="#projects">Projects</a><a href="/Christian_Bakhit_Resume.pdf" target="_blank">Résumé</a></nav>
        <a className="contactLink" href="mailto:chrisbakhit@gmail.com">Contact</a>
      </header>

      <section className="hero" id="top">
        <div className="heroText" data-reveal>
          <span className="status"><i /> Open to opportunities</span>
          <p className="kicker">Full-Stack Engineering · AI · Cloud</p>
          <h1>Christian<br />Bakhit</h1>
          <p className="intro">Full-stack engineer building modern React applications, AWS serverless systems, REST APIs, and AI-assisted workflows.</p>
          <div className="actions"><a className="primaryButton" href="/Christian_Bakhit_Resume.pdf" target="_blank">View résumé</a><a className="textButton" href="#experience">Experience ↓</a></div>
        </div>
        <div className="profileWrap" data-reveal>
          <img src="/christian-profile.webp" alt="Christian Bakhit" />
          <div className="profileMeta"><span>Based in Houston, TX</span><span>Georgia Tech · JHU</span></div>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="sectionTitle" data-reveal><span>01</span><h2>Profile</h2></div>
        <div className="aboutContent" data-reveal>
          <p className="largeCopy">I build modern software across the stack, from responsive interfaces to cloud back ends and AI-powered workflows.</p>
          <div className="aboutColumns"><p>My recent work combines React front ends, REST APIs, AWS Lambda, DynamoDB, and large language models to deliver production tools for patent intelligence and portfolio analysis.</p><p>I am comfortable moving quickly across unfamiliar systems, making end-to-end technical decisions, and translating complex engineering work for non-technical partners.</p></div>
        </div>
      </section>

      <section className="resume section" id="experience">
        <div className="sectionTitle" data-reveal><span>02</span><h2>Experience</h2></div>
        <div className="resumeList">
          {experience.map((item) => <article className="resumeItem" key={item.role + item.company} data-reveal><div className="resumeDate">{item.dates}</div><div><h3>{item.role}</h3><p className="company">{item.company}</p><ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></div></article>)}
        </div>
      </section>

      <section className="projects section" id="projects">
        <div className="sectionTitle" data-reveal><span>03</span><h2>Selected projects</h2></div>
        <div className="projectGrid">
          {projects.map(([title, description, tags, href], index) => <a href={href} target="_blank" rel="noreferrer" className="projectCard" key={title} data-reveal><span className="cardNumber">{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{description}</p></div><footer><span>{tags}</span><b>↗</b></footer></a>)}
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
    </main>
  );
}
