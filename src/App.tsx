import { ArrowDownRight, ArrowRight, ArrowUpRight, Braces, BriefcaseBusiness, CheckCircle2, Code2, Github, Linkedin, Mail, MapPin, Menu, MonitorCog, Phone, Server, Users, X } from 'lucide-react';
import { useState } from 'react';

const skills = [
  { title: 'Backend & APIs', items: ['C#', '.NET Framework', '.NET Core', '.NET 6', '.NET 8', 'ASP.NET Core', 'ASP.NET MVC', 'Web API', 'WCF', 'EF Core', 'LINQ', 'ADO.NET', 'REST APIs', 'RabbitMQ'] },
  { title: 'Desktop & UI', items: ['WPF', 'MVVM', 'Windows Desktop Apps', 'React', 'TypeScript', 'Angular', 'JavaScript', 'Ionic', 'jQuery', 'HTML5', 'CSS3', 'Bootstrap'] },
  { title: 'Data, Cloud & Integration', items: ['SQL Server', 'PostgreSQL', 'Oracle', 'AWS Lambda', 'Amazon S3', 'CloudFront', 'CodeCommit', 'Azure App Insights', 'Power Automate', 'Autodesk APIs', 'Revit API', 'Sitecore Commerce'] },
  { title: 'Architecture, Quality & Leadership', items: ['DDD', 'Onion Architecture', 'SOLID', 'Design Patterns', 'EF Core', 'NUnit', 'MSTest', 'Selenium', 'Code Reviews', 'Technical Mentoring', 'Stakeholder Collaboration'] },
];

const projects = [
  { number: '01', type: 'REAL ESTATE TECHNOLOGY', title: '3D Building & Space Management', description: 'Connected an interactive 3D building experience with building, floor, and room data, bringing Autodesk visualization into a React application.', tags: ['.NET 8', 'React', 'TypeScript', 'Autodesk Forge'], icon: MonitorCog },
  { number: '02', type: 'WORKFLOW AUTOMATION', title: 'Revit Model Synchronization', description: 'Built a Revit add-in and API integrations to help users edit space information and synchronize model data with application records.', tags: ['C#', 'WPF', 'Revit API', 'REST APIs'], icon: Braces },
  { number: '03', type: 'FINANCIAL SERVICES', title: 'Trading Platform Features', description: 'Delivered and supported desktop and web modules for trading workflows, using MVVM, APIs, SQL, and Angular while mentoring developers.', tags: ['WPF / MVVM', '.NET', 'SQL', 'Angular'], icon: Server },
  { number: '04', type: 'CLOUD MODERNIZATION', title: 'Serverless API Migration', description: 'Helped modernize insurance APIs by migrating workloads to AWS Lambda and supporting data migration and test coverage.', tags: ['ASP.NET Core', 'AWS Lambda', 'PostgreSQL', 'NUnit'], icon: Code2 },
];

const experience = [
  { date: 'FEB 2022 — PRESENT', role: 'Technology Solutions Manager / .NET Full Stack Lead', company: 'Gemini Solutions', location: 'Remote · Canada', points: ['Lead hands-on full-stack development across .NET, React, TypeScript, SQL, and integration services.', 'Deliver real-estate workflows connecting Autodesk tools, 3D visualization, and business data.', 'Support technical direction, code reviews, mentoring, and stakeholder collaboration.'] },
  { date: 'MAR 2021 — DEC 2021', role: 'Software Tech Lead', company: 'Nityo Infotech', location: 'Burlington, North Carolina', points: ['Developed insurance modules using C#, .NET Core, Web API/WCF, EF Core, and RabbitMQ.', 'Coordinated with onsite stakeholders and supported delivery across the development team.'] },
  { date: 'MAR 2020 — MAR 2021', role: 'Sitecore Developer', company: 'Horizontal Integration', location: 'Texas, USA', points: ['Built commerce pricing and API features using Sitecore Commerce and BizFX.', 'Contributed to banking applications on Sitecore XP.'] },
  { date: 'FEB 2019 — MAR 2020', role: 'Software Developer', company: 'L&T Infotech', location: 'Charlotte, North Carolina', points: ['Built insurance desktop and web applications using WPF/MVVM, Angular, and ASP.NET.', 'Applied Onion Architecture, logging, telemetry, and dependency-injection patterns.'] },
  { date: 'FEB 2015 — JUL 2017', role: 'Senior Software Developer', company: 'Nagarro', location: 'Gurgaon, India', points: ['Delivered inquiry and document-management solutions and investigated production issues.', 'Worked on a USDA desktop application using geographic coordinates and ArcGIS.'] },
  { date: 'JAN 2012 — DEC 2014', role: 'Software Associate', company: 'Mindfire Solutions', location: 'Noida, India', points: ['Developed marketplace and payment integrations, including transactions, refunds, and invoicing.', 'Built WPF and ASP.NET modules across multiple client projects.'] },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">SA</span><span>Sakshi Arora<span className="brand-sub">Software Engineering</span></span></a>
        <button className="mobile-menu" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          <a href="#about" onClick={closeMenu}>About</a><a href="#work" onClick={closeMenu}>Selected work</a><a href="#experience" onClick={closeMenu}>Experience</a><a href="#skills" onClick={closeMenu}>Skills</a><a href="#academic" onClick={closeMenu}>Academic</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> OPEN TO CANADIAN OPPORTUNITIES</div>
            <h1>Building software<br />that <em>moves work forward.</em></h1>
            <p className="hero-intro">I'm Sakshi — a hands-on .NET Full Stack Lead/Developer with 12+ years of experience turning complex business needs into reliable, thoughtful software.</p>
            <div className="hero-actions"><a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={17} /></a><a className="text-link" href="#contact">Get in touch <ArrowRight size={16} /></a></div>
            <div className="hero-meta"><span><MapPin size={15} /> St. Albert, Alberta, Canada</span><span className="meta-divider" /><span>Canadian Permanent Resident</span></div>
          </div>
          <div className="hero-visual" aria-label="Technical profile illustration">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="visual-card card-main"><div className="window-dots"><i /><i /><i /></div><div className="code-line muted">// build with intention</div><div className="code-line"><b>const</b> engineer = {'{'}</div><div className="code-line indent"><span>focus:</span> <strong>'full-stack'</strong>,</div><div className="code-line indent"><span>mindset:</span> <strong>'ownership'</strong>,</div><div className="code-line indent"><span>quality:</span> <strong>'built-in'</strong></div><div className="code-line">{'}'};</div><div className="code-footer"><span className="tiny-check"><CheckCircle2 size={14} /></span> shipping thoughtful solutions</div></div>
            <div className="float-chip chip-top"><Code2 size={17} /><span><b>12+ years</b><small>engineering experience</small></span></div>
            <div className="float-chip chip-bottom"><Users size={17} /><span><b>Lead & build</b><small>hands-on leadership</small></span></div>
            <div className="visual-caption">Curiosity → clarity → delivery</div>
          </div>
          <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a>
        </section>

        <section className="intro-section section-wrap" id="about"><div className="section-kicker">01 / A LITTLE ABOUT ME</div><div className="intro-grid"><h2>Technical depth.<br /><em>People-first leadership.</em></h2><div className="intro-text"><p>I enjoy working where engineering quality and real business impact meet. My background spans real estate technology, financial services, insurance, commerce, and enterprise applications.</p><p>I stay close to the code while helping teams make sound technical decisions, share knowledge, and deliver with confidence. I bring a practical mindset, a collaborative approach, and a bias toward solutions that are maintainable long after launch.</p><div className="mini-stats"><div><strong>12+</strong><span>Years in software</span></div><div><strong>7+</strong><span>Years of technical leadership</span></div><div><strong>4</strong><span>Business domains</span></div></div></div></div></section>

        <section className="work-section" id="work"><div className="section-wrap"><div className="section-heading"><div><div className="section-kicker">02 / SELECTED WORK</div><h2>Solving real problems,<br /><em>one system at a time.</em></h2></div><p>A snapshot of the product areas and engineering challenges I've contributed to across my career.</p></div><div className="project-grid">{projects.map((project) => { const Icon = project.icon; return <article className="project-card" key={project.number}><div className="project-top"><span className="project-number">{project.number}</span><Icon size={22} strokeWidth={1.5} /></div><div className="project-type">{project.type}</div><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></article>; })}</div><p className="project-note">Project summaries are intentionally high-level; client-confidential details are not included.</p></div></section>

        <section className="experience-section section-wrap" id="experience"><div className="section-kicker">03 / CAREER PATH</div><div className="section-heading experience-heading"><h2>Experience shaped<br /><em>by delivery.</em></h2><p>Growing from software development into technical leadership — without losing the hands-on engineering mindset.</p></div><div className="timeline">{experience.map((job, index) => <article className="timeline-item" key={job.company}><div className="timeline-date">{job.date}</div><div className="timeline-marker"><span /></div><div className="timeline-content"><div className="job-heading"><div><h3>{job.role}</h3><div className="company-name">{job.company}</div></div><span className="job-location">{job.location}</span></div><ul>{job.points.map(point => <li key={point}>{point}</li>)}</ul></div></article>)}</div></section>

        <section className="skills-section" id="skills"><div className="section-wrap"><div className="section-kicker">04 / TOOLKIT</div><div className="section-heading"><h2>The tools behind<br /><em>the outcomes.</em></h2><p>A practical stack built through delivery, modernization, and ongoing learning.</p></div><div className="skills-grid">{skills.map((group, index) => <div className="skill-group" key={group.title}><div className="skill-index">0{index + 1}</div><h3>{group.title}</h3><div className="skill-pills">{group.items.map(item => <span key={item}>{item}</span>)}</div></div>)}</div></div></section>

        <section className="work-section" id="past-projects"><div className="section-wrap"><div className="section-kicker">05 / MORE PROFESSIONAL PROJECTS</div><div className="section-heading"><h2>More work across<br /><em>different domains.</em></h2><p>A broader view of projects from earlier roles, with descriptions kept at a high level to respect client confidentiality.</p></div><div className="project-grid">
          <article className="project-card"><div className="project-type">INSURANCE · NITYO INFOTECH</div><h3>Insurance Workflow Modules</h3><p>Developed insurance features and service integrations with C#, ASP.NET Core, Web API/WCF, Entity Framework Core, and RabbitMQ; supported coordination with onsite stakeholders.</p><div className="tag-list"><span>C#</span><span>WCF</span><span>RabbitMQ</span><span>EF Core</span></div></article>
          <article className="project-card"><div className="project-type">COMMERCE · HORIZONTAL INTEGRATION</div><h3>Sitecore Commerce & Banking</h3><p>Implemented commerce pricing and API capabilities using Sitecore Commerce 9 and BizFX, and contributed to banking applications built on Sitecore XP.</p><div className="tag-list"><span>Sitecore</span><span>BizFX</span><span>Commerce APIs</span></div></article>
          <article className="project-card"><div className="project-type">INSURANCE · L&T INFOTECH</div><h3>Desktop & Web Insurance Applications</h3><p>Built WPF desktop workflows using MVVM and web features with ASP.NET and Angular, applying Onion Architecture, dependency injection, logging, and application telemetry.</p><div className="tag-list"><span>WPF / MVVM</span><span>Angular</span><span>Azure App Insights</span></div></article>
          <article className="project-card"><div className="project-type">GEOSPATIAL · NAGARRO</div><h3>USDA Desktop & Document Management</h3><p>Worked on inquiry and document-management solutions and a USDA desktop application using geographic coordinates and ArcGIS mapping capabilities.</p><div className="tag-list"><span>C#</span><span>ArcGIS</span><span>Desktop Apps</span></div></article>
          <article className="project-card"><div className="project-type">ANALYTICS · NAGARRO</div><h3>Twitter Data Analytics</h3><p>Contributed to a web application that explored Twitter data and presented analytical insights.</p><div className="tag-list"><span>Web Application</span><span>Data Analysis</span></div></article>
          <article className="project-card"><div className="project-type">PAYMENTS · MINDFIRE SOLUTIONS</div><h3>Marketplace & Payment Integrations</h3><p>Implemented marketplace APIs and payment-related workflows covering transactions, refunds, invoices, and money transfers, alongside WPF and ASP.NET modules.</p><div className="tag-list"><span>ASP.NET</span><span>WPF</span><span>Payment APIs</span></div></article>
        </div></div></section>

        <section className="education-section section-wrap" id="academic"><div className="section-kicker">06 / ACADEMIC PROJECTS</div><h2>Experiments that built<br /><em>the foundations.</em></h2><div className="education-grid">
          <article><span className="edu-year">KENT STATE UNIVERSITY</span><h3>Patient Management System</h3><p>Swift · Academic mobile application focused on patient-management workflows.</p></article>
          <article><span className="edu-year">KENT STATE UNIVERSITY</span><h3>Sentiment Analysis</h3><p>Python / Django · Academic project exploring sentiment analysis of text data.</p></article>
          <article><span className="edu-year">KENT STATE UNIVERSITY</span><h3>Water Level Detection</h3><p>Python · Embedded programming and sensor-based water-level detection with LED feedback.</p></article>
          <article><span className="edu-year">COMPUTER SCIENCE</span><h3>Range Query</h3><p>Academic programming project focused on range-query problem solving.</p></article>
          <article><span className="edu-year">JAVA</span><h3>Download Manager</h3><p>URL-based download utility with progress/status tracking and pause, resume, cancel, and clear controls.</p></article>
          <article><span className="edu-year">C++</span><h3>Bus Transport Reservation System</h3><p>Seat reservation and cancellation, destination schedules, fares, seat availability, and printable tickets.</p></article>
          <article><span className="edu-year">C</span><h3>Voting Management System</h3><p>Menu-driven member-record management with file-based storage and CRUD operations.</p></article>
          <article><span className="edu-year">OHIO STATE UNIVERSITY · HACKATHON · OCT 2018</span><h3>Doorbell Detection with Sensors</h3><p>Embedded prototype using Arduino, Microbit, LEDs, sensors, and Adafruit components.</p></article>
        </div></section>

        <section className="education-section section-wrap" id="achievements"><div className="section-kicker">07 / CERTIFICATIONS & ACHIEVEMENTS</div><h2>Learning, contribution<br /><em>and recognition.</em></h2><div className="education-grid">
          <article><span className="edu-year">MAY 2020</span><h3>Sitecore Experience Solution 9 Developer</h3><p>Professional certification.</p></article>
          <article><span className="edu-year">2020</span><h3>Sitecore Training</h3><p>Helix, Web Experience Management, Sitecore Commerce 9 / SXA.</p></article>
          <article><span className="edu-year">2012</span><h3>Microsoft .NET & WCF Training</h3><p>Microsoft .NET Framework 4.0 Web Application Development certification (Oct 2012) and WCF 4.0 training (Jun 2012).</p></article>
          <article><span className="edu-year">NOV 2018</span><h3>Kent State Cook Off</h3><p>Represented India; placed third among five participating countries.</p></article>
          <article><span className="edu-year">OCT 2018</span><h3>Ohio State University Hackathon</h3><p>Participated in a sensor-based doorbell detection project.</p></article>
          <article><span className="edu-year">PERSONAL & CAMPUS</span><h3>Sports, Leadership & Academics</h3><p>Table tennis runner-up; 5 km Dwarka Half Marathon participant; second-place college ranking in BCA; Event Manager / Secretary of Kent Indian Association (Aug 2017–Jul 2018).</p></article>
        </div></section>

        <section className="education-section section-wrap"><div className="section-kicker">08 / EDUCATION</div><h2>Learning is part of<br /><em>the engineering process.</em></h2><div className="education-grid"><article><span className="edu-year">2017 — 2018</span><h3>Master of Science, Computer Science</h3><p>Kent State University · Kent, Ohio, USA</p></article><article><span className="edu-year">2009 — 2012</span><h3>Master of Computer Applications</h3><p>Guru Gobind Singh Indraprastha University · Delhi, India</p></article><article><span className="edu-year">2006 — 2009</span><h3>Bachelor of Computer Applications</h3><p>Maharshi Dayanand University · Haryana, India</p></article></div><div className="cert-strip"><span>ADDITIONAL TRAINING</span><p>Sitecore Experience Solution 9 Developer · Sitecore Commerce 9 · Sitecore Helix · Web Experience Management · SXA · Microsoft .NET Framework 4.0 Web Application Development · WCF 4.0 training</p></div></section>

        <section className="contact-section" id="contact"><div className="section-wrap contact-inner"><div className="section-kicker">09 / START A CONVERSATION</div><h2>Have a meaningful<br />problem to <em>solve?</em></h2><p>I'm interested in opportunities where I can contribute as a Senior Software Developer, Full Stack Lead, or Engineering Lead — building great software with thoughtful teams.</p><a className="button button-light" href="mailto:sakshi.a1901@gmail.com">Email me <ArrowUpRight size={17} /></a><div className="contact-details"><a href="tel:+14379993620"><Phone size={16} /> (437) 999-3620</a><a href="tel:+14378872291"><Phone size={16} /> (437) 887-2291</a><a href="mailto:sakshi.a1901@gmail.com"><Mail size={16} /> sakshi.a1901@gmail.com</a><a href="https://www.linkedin.com/in/sakshi-arora-082b04155/" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn <ArrowUpRight size={13} /></a><a href="https://github.com/sarora19/" target="_blank" rel="noreferrer"><Github size={16} /> GitHub <ArrowUpRight size={13} /></a></div></div></section>
      </main>
      <footer className="footer section-wrap"><a className="brand footer-brand" href="#home"><span className="brand-mark">SA</span><span>Sakshi Arora<span className="brand-sub">Software Engineering</span></span></a><span>Designed to make the work speak.</span><span>© {new Date().getFullYear()} Sakshi Arora</span></footer>
    </div>
  );
}

export default App;
