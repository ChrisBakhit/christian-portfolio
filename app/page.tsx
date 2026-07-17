"use client";

import { useEffect } from "react";

const projects = [
  {
    number: "01",
    title: "Delineo Disease Modeling",
    tag: "Research · Simulation",
    text: "Led a 50-person student team building epidemiological simulations with Unity, React, SQL, and cloud infrastructure in collaboration with Microsoft Research and AWS.",
    href: "https://covidweb.isi.jhu.edu/",
  },
  {
    number: "02",
    title: "SkillLink",
    tag: "Founder · Product",
    text: "Created a networking platform from first idea to MVP, built the web and backend infrastructure, and earned backing through the Spark Accelerator.",
    href: "https://github.com/ChrisBJHU",
  },
  {
    number: "03",
    title: "Gemini Discord Bot",
    tag: "Automation · Data",
    text: "Built a monitoring bot that keeps communities informed about watched stocks, website uptime, and other live signals through useful automated alerts.",
    href: "https://github.com/ChrisBJHU/DiscordBot",
  },
];

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.14 },
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <div className="noise" aria-hidden="true" />
      <nav className="nav" aria-label="Main navigation">
        <a className="mark" href="#top" aria-label="Christian Bakhit, home">CB<span>✦</span></a>
        <div className="navLinks">
          <a href="#about">About</a><a href="#work">Work</a><a href="#contact">Contact</a>
        </div>
        <a className="navCta" href="mailto:cbakhit1@jh.edu">Start a conversation <span>↗</span></a>
      </nav>

      <section className="hero" id="top">
        <div className="heroGlow glowOne" /><div className="heroGlow glowTwo" />
        <div className="eyebrow heroEyebrow"><i /> Houston, TX · Open to ambitious ideas</div>
        <div className="heroGrid">
          <div className="heroCopy">
            <h1><span>Christian</span><span className="outline">Bakhit.</span></h1>
            <p className="lede">I build at the edge of <strong>intelligence</strong>, <strong>data</strong>, and human possibility.</p>
            <div className="heroActions">
              <a className="button primary" href="#work">Explore my work <span>↓</span></a>
              <a className="button ghost" href="https://github.com/ChrisBJHU" target="_blank" rel="noreferrer">GitHub ↗</a>
            </div>
          </div>
          <div className="portraitStage">
            <div className="portraitHalo" aria-hidden="true"><span /><span /><span /></div>
            <div className="portraitFrame">
              <img src="/christian-ai-portrait.png" alt="Illustrated portrait of Christian Bakhit with subtle computer science motifs" />
            </div>
            <div className="coordinate">29.7604° N<br />95.3698° W</div>
          </div>
        </div>
        <div className="heroFoot">
          <span>Computer scientist</span><span>Research-minded builder</span><span>Community leader</span>
        </div>
      </section>

      <section className="manifesto" id="about">
        <div className="sectionLabel" data-reveal><span>01</span> Mission</div>
        <div className="manifestoGrid">
          <h2 data-reveal>Building toward<br /><em>what comes next.</em></h2>
          <div data-reveal>
            <p>Christian is a Johns Hopkins computer science and applied mathematics graduate drawn to artificial intelligence, robotics, and the difficult questions behind truly intelligent systems.</p>
            <p>His work moves comfortably from research simulations and data systems to products and communities—always with the same instinct: understand the system, then make it more useful.</p>
            <div className="facts">
              <div><strong>JHU</strong><span>Computer Science<br />+ Applied Math</span></div>
              <div><strong>04+</strong><span>Major technical<br />builds shipped</span></div>
              <div><strong>50</strong><span>Students led on<br />a research team</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="work" id="work">
        <div className="sectionLabel" data-reveal><span>02</span> Selected trajectories</div>
        <div className="workHeader" data-reveal><h2>Work with<br />real orbit.</h2><p>Selected projects at the intersection of technical depth, practical value, and collective impact.</p></div>
        <div className="projectList">
          {projects.map((project) => (
            <a className="project" href={project.href} target="_blank" rel="noreferrer" key={project.title} data-reveal>
              <span className="projectNumber">{project.number}</span>
              <div><span className="projectTag">{project.tag}</span><h3>{project.title}</h3><p>{project.text}</p></div>
              <span className="projectArrow">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="experience">
        <div className="sectionLabel" data-reveal><span>03</span> Signal history</div>
        <div className="timeline">
          <div className="timelineIntro" data-reveal><h2>Engineer.<br />Founder.<br /><em>Leader.</em></h2><p>A path shaped by making, teaching, organizing, and asking better questions.</p></div>
          <div className="timelineItems">
            {[
              ["2023 — 2024", "Founder", "SkillLink", "Product strategy, full-stack development, accelerator pitch"],
              ["2021 — 2023", "Student Leader", "Delineo Disease Modeling", "Research systems, Agile leadership, simulation infrastructure"],
              ["2022 — 2024", "Academic Tutor", "Johns Hopkins University", "JavaScript, Python, Java, C, and C++ mentorship"],
              ["2023 — 2024", "Senior Class Senator", "JHU Student Government", "Campus advocacy, programming, and student services"],
            ].map(([date, role, org, detail]) => (
              <article key={role + org} data-reveal><span>{date}</span><div><h3>{role}</h3><p>{org}</p><small>{detail}</small></div></article>
            ))}
          </div>
        </div>
      </section>

      <section className="capabilities">
        <div className="capCopy" data-reveal><span className="eyebrow"><i /> Toolkit</span><h2>From first principles<br />to working systems.</h2></div>
        <div className="skillCloud" data-reveal>
          {["Python", "Java", "C / C++", "React", "Node.js", "SQL", "Unity", "Flutter", "AWS", "Data Science", "Robotics", "Product Leadership"].map((skill, i) => <span style={{"--i": i} as React.CSSProperties} key={skill}>{skill}</span>)}
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contactOrbit" aria-hidden="true"><span /><span /><span /></div>
        <div className="sectionLabel" data-reveal><span>04</span> Next mission</div>
        <div className="contactContent" data-reveal>
          <p>Have an impossible-looking problem?</p>
          <h2>Let&apos;s make it<br /><em>move.</em></h2>
          <a href="mailto:cbakhit1@jh.edu">cbakhit1@jh.edu <span>↗</span></a>
        </div>
        <footer><span>© {new Date().getFullYear()} Christian Bakhit</span><div><a href="https://www.linkedin.com/in/christianbakhit/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/ChrisBJHU" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.instagram.com/chrisbakhit/" target="_blank" rel="noreferrer">Instagram</a></div><span>Houston · Earth</span></footer>
      </section>
    </main>
  );
}
