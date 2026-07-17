"use client";

import { useEffect } from "react";

const experience = [
  {
    role: "Founder",
    company: "SkillLink",
    dates: "Mar 2023 — May 2024",
    bullets: [
      "Founded a networking product focused on addressing gaps in how professionals build useful connections.",
      "Built the web experience and backend infrastructure with HTML, CSS, Node.js, and AWS S3.",
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
    role: "Student Leader",
    company: "Delineo Disease Modeling",
    dates: "Jan 2021 — May 2023",
    bullets: [
      "Managed a 50-person student team using Agile project practices.",
      "Built COVID-19 simulation tools using Unity, C#, React, SQL, and cloud infrastructure.",
      "Collaborated with Microsoft Research and AWS on simulation and dashboard testing.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "St. Mary & Archangel Michael Church",
    dates: "Jun 2022 — Aug 2023",
    bullets: [
      "Developed and maintained a React and Firebase website for a multi-generational community.",
      "Led a usability redesign focused on making the experience clearer for older users.",
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
        <nav aria-label="Main navigation"><a href="#about">About</a><a href="#experience">Experience</a><a href="#projects">Projects</a></nav>
        <a className="contactLink" href="mailto:cbakhit1@jh.edu">Contact</a>
      </header>

      <section className="hero" id="top">
        <div className="heroText" data-reveal>
          <span className="status"><i /> Open to opportunities</span>
          <p className="kicker">Computer Science · Data · Product</p>
          <h1>Christian<br />Bakhit</h1>
          <p className="intro">Computer science graduate with experience building software products, research systems, and technical communities.</p>
          <div className="actions"><a className="primaryButton" href="#experience">View experience</a><a className="textButton" href="https://www.linkedin.com/in/christianbakhit/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
        </div>
        <div className="profileWrap" data-reveal>
          <img src="/christian-profile.webp" alt="Christian Bakhit" />
          <div className="profileMeta"><span>Based in Houston, TX</span><span>JHU ’24</span></div>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="sectionTitle" data-reveal><span>01</span><h2>Profile</h2></div>
        <div className="aboutContent" data-reveal>
          <p className="largeCopy">I enjoy turning complex technical problems into software that is useful, understandable, and built to last.</p>
          <div className="aboutColumns"><p>My background spans full-stack development, data systems, simulation research, technical mentorship, and product leadership. I am especially interested in artificial intelligence, robotics, and data science.</p><p>I work well across disciplines—from writing code and designing systems to organizing teams, explaining tradeoffs, and helping people move toward a shared goal.</p></div>
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
        <div className="education" data-reveal><span className="miniLabel">Education</span><h2>Johns Hopkins University</h2><p>B.S. Computer Science<br />Applied Mathematics & Statistics</p><small>2020 — 2024 · Baltimore, Maryland</small></div>
        <div className="skills" data-reveal><span className="miniLabel">Core skills</span><div>{["Python", "Java", "C / C++", "JavaScript", "React", "Node.js", "SQL", "AWS", "Unity", "Flutter"].map((skill) => <span key={skill}>{skill}</span>)}</div></div>
      </section>

      <section className="contact" id="contact">
        <p data-reveal>Currently exploring software engineering and data opportunities.</p>
        <h2 data-reveal>Let&apos;s talk.</h2>
        <a data-reveal href="mailto:cbakhit1@jh.edu">cbakhit1@jh.edu <span>↗</span></a>
        <footer><span>© {new Date().getFullYear()} Christian Bakhit</span><div><a href="https://github.com/ChrisBJHU" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/christianbakhit/" target="_blank" rel="noreferrer">LinkedIn</a></div><span>Houston, Texas</span></footer>
      </section>
    </main>
  );
}
