const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = path.resolve(__dirname, '..');
const portraitPath = path.join(rootDir, 'public', 'images', 'editorial', 'formal-portrait-white-background.webp');
const pdfDestPath = path.join(rootDir, 'public', 'resume', 'cv.pdf');
const pdfCopyPath = path.join(rootDir, 'public', 'images', 'editorial', 'cv.pdf');
const tempHtmlPath = path.join(rootDir, 'temp-resume.html');

// Read portrait as base64
let portraitBase64 = '';
if (fs.existsSync(portraitPath)) {
  const imageBuffer = fs.readFileSync(portraitPath);
  portraitBase64 = `data:image/webp;base64,${imageBuffer.toString('base64')}`;
}

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Curriculum Vitae — Md. Sohag Islam</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Caveat:wght@600;700&family=JetBrains+Mono:wght@500;600;700&display=swap');

    @page {
      size: A4 portrait;
      margin: 0;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html, body {
      width: 210mm;
      height: 297mm;
      max-height: 297mm;
      overflow: hidden;
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      background: #040711;
      color: #ffffff;
      -webkit-font-smoothing: antialiased;
    }

    .poster-container {
      width: 210mm;
      height: 297mm;
      padding: 7mm 8mm 6mm 8mm;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background: radial-gradient(circle at 82% 18%, #0d1e3d 0%, #060914 55%, #03050b 100%);
      position: relative;
    }

    /* Ambient glow elements */
    .glow-blob {
      position: absolute;
      width: 180px;
      height: 180px;
      background: #0077fe;
      filter: blur(80px);
      opacity: 0.16;
      pointer-events: none;
      z-index: 0;
    }
    .glow-1 { top: 30px; right: 40px; }
    .glow-2 { bottom: 70px; left: 30px; }

    /* CONTENT WRAPPER */
    .content-layer {
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      gap: 6px;
      height: 100%;
      justify-content: space-between;
    }

    /* 1. TOP NAVBAR */
    .top-nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 2px;
    }

    .brand-logo-area {
      display: flex;
      align-items: center;
      gap: 7px;
    }

    .logo-emblem {
      width: 26px;
      height: 26px;
      background: linear-gradient(135deg, #00d2ff, #0055ff);
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 12pt;
      color: #ffffff;
      box-shadow: 0 0 12px rgba(0, 162, 255, 0.5);
    }

    .brand-text {
      display: flex;
      flex-direction: column;
      line-height: 1.1;
    }
    .brand-text-top {
      font-size: 7.2pt;
      font-weight: 800;
      letter-spacing: 0.08em;
      color: #ffffff;
    }
    .brand-text-sub {
      font-size: 6.2pt;
      font-weight: 700;
      color: #00aaff;
      letter-spacing: 0.04em;
    }

    .nav-tagline {
      display: flex;
      align-items: center;
      gap: 6px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 6.5pt;
      color: #94a3b8;
    }
    .nav-tagline .code-icon {
      color: #00aaff;
      font-weight: 700;
      font-size: 8pt;
    }
    .nav-tagline strong {
      color: #00d2ff;
    }

    /* 2. HERO SHOWCASE SECTION */
    .hero-banner {
      display: grid;
      grid-template-columns: 1.25fr 0.85fr;
      gap: 10px;
      align-items: center;
      background: rgba(13, 22, 41, 0.65);
      border: 1px solid rgba(0, 170, 255, 0.22);
      border-radius: 10px;
      padding: 8px 12px;
      backdrop-filter: blur(8px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
    }

    .hero-left {
      display: flex;
      flex-direction: column;
      gap: 3px;
    }

    .hero-h1-first {
      font-size: 18pt;
      font-weight: 900;
      letter-spacing: -0.02em;
      line-height: 1;
      color: #ffffff;
      text-transform: uppercase;
    }

    .hero-h1-second {
      font-size: 24pt;
      font-weight: 900;
      letter-spacing: -0.02em;
      line-height: 0.95;
      background: linear-gradient(90deg, #00d2ff, #0066ff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-transform: uppercase;
    }

    .hero-slogan {
      font-size: 6.8pt;
      font-weight: 800;
      letter-spacing: 0.12em;
      color: #00d2ff;
      text-transform: uppercase;
    }
    .hero-slogan span {
      color: #ffffff;
    }

    .hero-description {
      font-size: 6.8pt;
      color: #cbd5e1;
      line-height: 1.35;
      max-width: 98%;
    }

    .hero-cta-btn {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      width: fit-content;
      margin-top: 3px;
      padding: 3px 10px;
      background: rgba(0, 153, 255, 0.12);
      border: 1px solid #00aaff;
      border-radius: 20px;
      font-size: 6.2pt;
      font-weight: 700;
      color: #00d2ff;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }

    /* RIGHT VISUAL: 100% UNCLIPPED PORTRAIT */
    .hero-right-visual {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    }

    .portrait-card-container {
      position: relative;
      width: 100%;
      height: 122px;
      border-radius: 8px;
      overflow: hidden;
      border: 1.5px solid rgba(0, 187, 255, 0.4);
      background: #091222;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.6);
    }

    /* CONTAIN: GUARANTEES FULL FACE AND PHOTO IS 100% VISIBLE WITH NO CROPPING */
    .portrait-img-main {
      width: auto;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      display: block;
      margin: 0 auto;
    }

    .floating-code-badge {
      position: absolute;
      top: 6px;
      right: 6px;
      background: rgba(4, 10, 24, 0.9);
      border: 1px solid #00d2ff;
      border-radius: 4px;
      padding: 2px 5px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 5.8pt;
      font-weight: 700;
      color: #00d2ff;
      box-shadow: 0 0 8px rgba(0, 210, 255, 0.4);
    }

    .floating-role-tag {
      position: absolute;
      bottom: 6px;
      left: 6px;
      background: rgba(4, 10, 24, 0.9);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 4px;
      padding: 2px 6px;
      font-size: 5.8pt;
      font-weight: 700;
      color: #ffffff;
      letter-spacing: 0.04em;
    }

    /* SECTION TITLES */
    .section-title-bar {
      display: flex;
      align-items: center;
      gap: 5px;
      font-size: 7.8pt;
      font-weight: 800;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: #ffffff;
      margin-bottom: 4px;
    }
    .section-title-bar span.accent {
      color: #00aaff;
    }
    .section-title-bar span.dash {
      color: #00aaff;
      font-weight: bold;
    }

    /* 3. ROW MIDDLE: WHAT I DO + MY SKILLS */
    .row-middle-grid {
      display: grid;
      grid-template-columns: 1.2fr 0.9fr;
      gap: 10px;
    }

    /* WHAT I DO CARDS (2 cols x 3 rows) */
    .services-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4px;
    }

    .service-card {
      background: rgba(13, 21, 38, 0.7);
      border: 1px solid rgba(255, 255, 255, 0.07);
      border-radius: 5px;
      padding: 4px 6px;
      display: flex;
      gap: 5px;
      align-items: flex-start;
    }

    .service-icon-box {
      width: 20px;
      height: 20px;
      border-radius: 4px;
      background: rgba(0, 153, 255, 0.1);
      border: 1px solid rgba(0, 170, 255, 0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #00d2ff;
      font-size: 7.5pt;
      flex-shrink: 0;
      margin-top: 1px;
    }

    .service-texts {
      display: flex;
      flex-direction: column;
      gap: 1px;
    }
    .service-name {
      font-size: 6.8pt;
      font-weight: 700;
      color: #ffffff;
    }
    .service-desc {
      font-size: 5.8pt;
      color: #94a3b8;
      line-height: 1.25;
    }

    /* SKILL PROGRESS BARS */
    .skills-panel {
      display: flex;
      flex-direction: column;
      gap: 3.5px;
      background: rgba(13, 21, 38, 0.7);
      border: 1px solid rgba(255, 255, 255, 0.07);
      border-radius: 5px;
      padding: 5px 8px;
    }

    .skill-bar-row {
      display: flex;
      flex-direction: column;
      gap: 1px;
    }

    .skill-info {
      display: flex;
      justify-content: space-between;
      font-size: 6.4pt;
      font-weight: 700;
      color: #e2e8f0;
    }

    .skill-percent {
      color: #00d2ff;
      font-family: 'JetBrains Mono', monospace;
      font-size: 6pt;
    }

    .progress-track {
      width: 100%;
      height: 3.5px;
      background: rgba(255, 255, 255, 0.08);
      border-radius: 3px;
      overflow: hidden;
    }

    .progress-fill {
      height: 100%;
      background: linear-gradient(90deg, #0077ff, #00d2ff);
      border-radius: 3px;
      box-shadow: 0 0 6px rgba(0, 187, 255, 0.5);
    }

    /* 4. NEW ROW: EDUCATION & BIO-DATA (EXACT DETAILS REQUESTED) */
    .row-edu-bio-grid {
      display: grid;
      grid-template-columns: 1.08fr 1.02fr;
      gap: 10px;
    }

    /* EDUCATION CARDS */
    .edu-container {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .edu-card-dark {
      background: rgba(13, 21, 38, 0.75);
      border: 1px solid rgba(0, 170, 255, 0.2);
      border-left: 2.5px solid #00d2ff;
      border-radius: 4px;
      padding: 4px 7px;
      display: flex;
      flex-direction: column;
      gap: 1px;
    }

    .edu-title-dark {
      font-size: 7.2pt;
      font-weight: 700;
      color: #ffffff;
    }

    .edu-sub-dark {
      font-size: 6.2pt;
      color: #94a3b8;
    }

    .edu-badge-dark {
      display: inline-block;
      font-family: 'JetBrains Mono', monospace;
      font-size: 5.8pt;
      color: #00d2ff;
      font-weight: 600;
      margin-top: 1px;
    }

    /* BIO-DATA TABLE DARK */
    .biodata-panel {
      background: rgba(13, 21, 38, 0.75);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 4px;
      padding: 4px 6px;
    }

    .bio-table-dark {
      width: 100%;
      border-collapse: collapse;
      font-size: 6.2pt;
    }

    .bio-table-dark td {
      padding: 2px 4px;
      vertical-align: top;
      border-bottom: 1px solid rgba(255, 255, 255, 0.04);
    }

    .bio-table-dark tr:last-child td {
      border-bottom: none;
    }

    .bio-k {
      color: #00d2ff;
      font-family: 'JetBrains Mono', monospace;
      font-size: 5.6pt;
      text-transform: uppercase;
      width: 32%;
      font-weight: 600;
    }

    .bio-v {
      color: #cbd5e1;
      font-weight: 500;
      width: 68%;
    }

    /* 5. ROW: DEPLOYED PROJECTS (4 Live Projects) */
    .projects-strip-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 5px;
    }

    .proj-card-dark {
      background: rgba(13, 21, 38, 0.75);
      border: 1px solid rgba(0, 170, 255, 0.18);
      border-radius: 5px;
      padding: 4px 6px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 2px;
    }

    .proj-card-dark .proj-name {
      font-size: 7.2pt;
      font-weight: 700;
      color: #ffffff;
    }

    .proj-card-dark .proj-link {
      font-family: 'JetBrains Mono', monospace;
      font-size: 5.4pt;
      color: #00d2ff;
      font-weight: 600;
      text-transform: uppercase;
    }

    .proj-card-dark .proj-desc {
      font-size: 5.8pt;
      color: #94a3b8;
      line-height: 1.25;
    }

    .proj-card-dark .proj-tech {
      font-family: 'JetBrains Mono', monospace;
      font-size: 5.2pt;
      color: #64748b;
      background: rgba(255, 255, 255, 0.04);
      padding: 1px 3px;
      border-radius: 2px;
      width: fit-content;
    }

    /* 6. BOTTOM: LET'S CONNECT & QUOTE BANNER */
    .connect-banner {
      background: rgba(10, 17, 33, 0.9);
      border: 1px solid rgba(0, 170, 255, 0.25);
      border-radius: 8px;
      padding: 6px 10px;
      display: grid;
      grid-template-columns: 1.2fr 0.35fr 0.95fr;
      gap: 8px;
      align-items: center;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
    }

    .connect-col-left {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .connect-heading {
      font-size: 7.2pt;
      font-weight: 800;
      color: #ffffff;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 1px;
    }
    .connect-heading span {
      color: #00aaff;
    }

    .connect-links-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2px 6px;
      font-size: 6pt;
      color: #cbd5e1;
    }

    .connect-link-item {
      display: flex;
      align-items: center;
      gap: 4px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .connect-link-item .icn {
      color: #00d2ff;
      font-size: 6.5pt;
      flex-shrink: 0;
    }

    /* Center Emblem */
    .connect-center-emblem {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .glowing-circle-logo {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      background: radial-gradient(circle, #0055ff, #060b18);
      border: 1.8px solid #00d2ff;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 0 14px rgba(0, 210, 255, 0.5);
      font-size: 14pt;
      font-weight: 900;
      color: #ffffff;
    }

    /* Right Quote */
    .connect-right-quote {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 6px;
      border-left: 1px solid rgba(255, 255, 255, 0.1);
    }

    .quote-mark {
      color: #00d2ff;
      font-size: 12pt;
      line-height: 0.6;
      font-family: serif;
      margin-bottom: 1px;
    }

    .quote-body {
      font-size: 6.2pt;
      color: #e2e8f0;
      line-height: 1.3;
    }
    .quote-body strong {
      color: #00d2ff;
    }

    .quote-author {
      font-family: 'Caveat', cursive;
      font-size: 11pt;
      color: #00d2ff;
    }

    /* 7. BOTTOM PILL FEATURES STRIP */
    .features-strip {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 3.5px 8px;
      background: #03060c;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 5px;
    }

    .feature-item {
      display: flex;
      align-items: center;
      gap: 4px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 5.6pt;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: #94a3b8;
    }

    .feature-item .f-icon {
      color: #00aaff;
      font-size: 6.8pt;
    }
  </style>
</head>
<body>

  <div class="poster-container">
    <div class="glow-blob glow-1"></div>
    <div class="glow-blob glow-2"></div>

    <div class="content-layer">

      <!-- 1. TOP NAVBAR -->
      <nav class="top-nav">
        <div class="brand-logo-area">
          <div class="logo-emblem">W</div>
          <div class="brand-text">
            <span class="brand-text-top">DEVELOPER SOHAG</span>
            <span class="brand-text-sub">WIEXORA FOUNDER</span>
          </div>
        </div>

        <div class="nav-tagline">
          <span class="code-icon">&lt;/&gt;</span>
          <span>I BUILD SOLUTIONS THAT <strong>INSPIRE.</strong></span>
        </div>
      </nav>

      <!-- 2. HERO SHOWCASE -->
      <header class="hero-banner">
        <div class="hero-left">
          <h1 class="hero-h1-first">DEVELOPER</h1>
          <h1 class="hero-h1-second">SOHAG</h1>
          <div class="hero-slogan">| <span>DESIGN.</span> | <span>CODE.</span> | <span>CREATE. —</span></div>
          <p class="hero-description">
            Passionate Full-Stack Developer &amp; Cloud DevOps Engineer combining industrial precision from Diploma in Textile Engineering with modern cloud architectures. Founder of <strong>WIEXORA</strong>, building high-performance web applications and automated CI/CD deployments.
          </p>
          <div class="hero-cta-btn">
            <span>LET&apos;S BUILD SOMETHING AMAZING &rarr;</span>
          </div>
        </div>

        <div class="hero-right-visual">
          <div class="portrait-card-container">
            ${portraitBase64 ? `<img src="${portraitBase64}" alt="Md. Sohag Islam" class="portrait-img-main" />` : ''}
            <div class="floating-code-badge">&lt;/&gt; FULL-STACK</div>
            <div class="floating-role-tag">MD. SOHAG ISLAM</div>
          </div>
        </div>
      </header>

      <!-- 3. WHAT I DO + MY SKILLS -->
      <section class="row-middle-grid">
        
        <!-- WHAT I DO -->
        <div>
          <div class="section-title-bar">
            <span>WHAT I DO</span>
            <span class="dash">&mdash;</span>
          </div>
          <div class="services-grid">
            <div class="service-card">
              <div class="service-icon-box">💻</div>
              <div class="service-texts">
                <div class="service-name">Frontend Engineering</div>
                <div class="service-desc">Responsive SSR interfaces with Next.js, React &amp; Tailwind CSS.</div>
              </div>
            </div>

            <div class="service-card">
              <div class="service-icon-box">&lt;/&gt;</div>
              <div class="service-texts">
                <div class="service-name">Full-Stack Web Apps</div>
                <div class="service-desc">End-to-end web applications built for scale and speed.</div>
              </div>
            </div>

            <div class="service-card">
              <div class="service-icon-box">⚙️</div>
              <div class="service-texts">
                <div class="service-name">Backend &amp; APIs</div>
                <div class="service-desc">RESTful APIs, Node.js, Express, and type-safe Zod validation.</div>
              </div>
            </div>

            <div class="service-card">
              <div class="service-icon-box">☁️</div>
              <div class="service-texts">
                <div class="service-name">DevOps &amp; Cloud</div>
                <div class="service-desc">Docker containers, CI/CD automated deployment, AWS &amp; Vercel.</div>
              </div>
            </div>

            <div class="service-card">
              <div class="service-icon-box">🗄️</div>
              <div class="service-texts">
                <div class="service-name">Database Architecture</div>
                <div class="service-desc">Optimized data models in MongoDB, PostgreSQL &amp; Redis.</div>
              </div>
            </div>

            <div class="service-card">
              <div class="service-icon-box">🛡️</div>
              <div class="service-texts">
                <div class="service-name">Systems &amp; Security</div>
                <div class="service-desc">Clean architecture, reliable state &amp; continuous monitoring.</div>
              </div>
            </div>
          </div>
        </div>

        <!-- MY SKILLS WITH BARS -->
        <div>
          <div class="section-title-bar">
            <span>MY SKILLS</span>
            <span class="dash">&mdash;</span>
          </div>
          <div class="skills-panel">
            <div class="skill-bar-row">
              <div class="skill-info">
                <span>JavaScript &amp; TypeScript</span>
                <span class="skill-percent">95%</span>
              </div>
              <div class="progress-track"><div class="progress-fill" style="width: 95%;"></div></div>
            </div>

            <div class="skill-bar-row">
              <div class="skill-info">
                <span>React.js &amp; Next.js (App Router)</span>
                <span class="skill-percent">95%</span>
              </div>
              <div class="progress-track"><div class="progress-fill" style="width: 95%;"></div></div>
            </div>

            <div class="skill-bar-row">
              <div class="skill-info">
                <span>Node.js, Express &amp; REST APIs</span>
                <span class="skill-percent">90%</span>
              </div>
              <div class="progress-track"><div class="progress-fill" style="width: 90%;"></div></div>
            </div>

            <div class="skill-bar-row">
              <div class="skill-info">
                <span>Docker, CI/CD &amp; Cloud DevOps</span>
                <span class="skill-percent">88%</span>
              </div>
              <div class="progress-track"><div class="progress-fill" style="width: 88%;"></div></div>
            </div>

            <div class="skill-bar-row">
              <div class="skill-info">
                <span>MongoDB &amp; PostgreSQL Databases</span>
                <span class="skill-percent">88%</span>
              </div>
              <div class="progress-track"><div class="progress-fill" style="width: 88%;"></div></div>
            </div>

            <div class="skill-bar-row">
              <div class="skill-info">
                <span>Tailwind CSS &amp; Responsive UI</span>
                <span class="skill-percent">96%</span>
              </div>
              <div class="progress-track"><div class="progress-fill" style="width: 96%;"></div></div>
            </div>

            <div class="skill-bar-row">
              <div class="skill-info">
                <span>Industrial Precision &amp; Quality Control</span>
                <span class="skill-percent">92%</span>
              </div>
              <div class="progress-track"><div class="progress-fill" style="width: 92%;"></div></div>
            </div>
          </div>
        </div>

      </section>

      <!-- 4. EDUCATION & PERSONAL BIO-DATA (EXACT DETAILS USER REQUESTED) -->
      <section class="row-edu-bio-grid">
        
        <!-- EDUCATION DETAILS -->
        <div>
          <div class="section-title-bar">
            <span>EDUCATION &amp; <span class="accent">CREDENTIALS</span></span>
            <span class="dash">&mdash;</span>
          </div>
          <div class="edu-container">
            <div class="edu-card-dark">
              <div class="edu-title-dark">Diploma in Textile Engineering</div>
              <div class="edu-sub-dark">Textile Engineering Institute / Polytechnic · Industrial Systems &amp; Quality</div>
              <div class="edu-badge-dark">7th Semester (Final Year) · In Progress</div>
            </div>

            <div class="edu-card-dark">
              <div class="edu-title-dark">Secondary School Certificate (SSC)</div>
              <div class="edu-sub-dark">Science Group · Higher Math, Physics, Chemistry, ICT</div>
              <div class="edu-badge-dark">GPA: 3.78 / 5.00 · Graduated with Distinction</div>
            </div>
          </div>
        </div>

        <!-- BIO-DATA DETAILS -->
        <div>
          <div class="section-title-bar">
            <span>PERSONAL <span class="accent">BIO-DATA</span></span>
            <span class="dash">&mdash;</span>
          </div>
          <div class="biodata-panel">
            <table class="bio-table-dark">
              <tr>
                <td class="bio-k">Father</td>
                <td class="bio-v">Md. Abdul Alim</td>
              </tr>
              <tr>
                <td class="bio-k">Mother</td>
                <td class="bio-v">Mst. Bulbuli Begum</td>
              </tr>
              <tr>
                <td class="bio-k">Date of Birth</td>
                <td class="bio-v">01-01-2001 (01 January 2001)</td>
              </tr>
              <tr>
                <td class="bio-k">Present Addr.</td>
                <td class="bio-v">Hatimara, Mollamarket, Kashempur, Gazipur/Dhaka</td>
              </tr>
              <tr>
                <td class="bio-k">Permanent</td>
                <td class="bio-v">Kazirhat Baninagar, Lalmonirhat, Bangladesh</td>
              </tr>
              <tr>
                <td class="bio-k">Languages</td>
                <td class="bio-v">Bengali (Native) · English (Working Proficiency)</td>
              </tr>
            </table>
          </div>
        </div>

      </section>

      <!-- 5. DEPLOYED PRODUCTION PROJECTS -->
      <section>
        <div class="section-title-bar">
          <span>FEATURED DEPLOYED <span class="accent">PROJECTS</span></span>
          <span class="dash">&mdash;</span>
        </div>
        <div class="projects-strip-grid">
          <div class="proj-card-dark">
            <div class="proj-name">Bazar Dor</div>
            <div class="proj-link">Live ↗ bazardor-o9va.vercel.app</div>
            <div class="proj-desc">Full-Stack e-commerce web platform with responsive storefront &amp; fast dynamic routing.</div>
            <div class="proj-tech">Next.js · React · TS · Tailwind · Vercel</div>
          </div>

          <div class="proj-card-dark">
            <div class="proj-name">Fit Log</div>
            <div class="proj-link">Live ↗ assinment-6-kohl.vercel.app</div>
            <div class="proj-desc">Fitness activity &amp; workout tracking application optimized for fluid mobile interaction.</div>
            <div class="proj-tech">Next.js · React · TypeScript · CSS · Vercel</div>
          </div>

          <div class="proj-card-dark">
            <div class="proj-name">Dev Portfolio</div>
            <div class="proj-link">Live ↗ assinment-5-3kk7.vercel.app</div>
            <div class="proj-desc">High-performance developer showcase highlighting clean modular code architecture.</div>
            <div class="proj-tech">Next.js · TypeScript · CSS Props · Vercel</div>
          </div>

          <div class="proj-card-dark">
            <div class="proj-name">WIEXORA Studio</div>
            <div class="proj-link">Live ↗ wiexora-dev-portfolio.vercel.app</div>
            <div class="proj-desc">Independent engineering portal with Next.js SSR, typed Zod validation &amp; Resend API.</div>
            <div class="proj-tech">Next.js · Server Actions · Zod · Cloud</div>
          </div>
        </div>
      </section>

      <!-- 6. BOTTOM: LET'S CONNECT & QUOTE BANNER -->
      <footer class="connect-banner">
        <div class="connect-col-left">
          <div class="connect-heading">LET&apos;S <span class="accent">CONNECT</span> &mdash;</div>
          <div class="connect-links-grid">
            <div class="connect-link-item">
              <span class="icn">✉️</span>
              <span>wiexora.dev@gmail.com</span>
            </div>
            <div class="connect-link-item">
              <span class="icn">💬</span>
              <span>WhatsApp: +8801611530770</span>
            </div>
            <div class="connect-link-item">
              <span class="icn">🐙</span>
              <span>github.com/sohag-wiexora</span>
            </div>
            <div class="connect-link-item">
              <span class="icn">💼</span>
              <span>linkedin.com/in/sohag-wiexora</span>
            </div>
            <div class="connect-link-item">
              <span class="icn">🌐</span>
              <span>wiexora-dev-portfolio.vercel.app</span>
            </div>
            <div class="connect-link-item">
              <span class="icn">📍</span>
              <span>Kashempur, Gazipur / Dhaka, BD</span>
            </div>
          </div>
        </div>

        <div class="connect-center-emblem">
          <div class="glowing-circle-logo">W</div>
        </div>

        <div class="connect-right-quote">
          <div class="quote-mark">&ldquo;</div>
          <div class="quote-body">Code is not just what I do, it&apos;s how I <strong>bring ideas to life.</strong> &rdquo;</div>
          <div class="quote-author">Md. Sohag Islam</div>
        </div>
      </footer>

      <!-- 7. BOTTOM PILL FEATURES STRIP -->
      <div class="features-strip">
        <div class="feature-item">
          <span class="f-icon">🚀</span>
          <span>FAST DELIVERY</span>
        </div>
        <div class="feature-item">
          <span class="f-icon">🛡️</span>
          <span>CLEAN &amp; SECURE CODE</span>
        </div>
        <div class="feature-item">
          <span class="f-icon">📱</span>
          <span>MOBILE FRIENDLY</span>
        </div>
        <div class="feature-item">
          <span class="f-icon">🎧</span>
          <span>SUPPORT &amp; MAINTENANCE</span>
        </div>
      </div>

    </div>
  </div>

</body>
</html>
`;

fs.writeFileSync(tempHtmlPath, htmlContent, 'utf-8');
console.log('Generated temp-resume.html successfully.');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const cmd = '"' + edgePath + '" --headless=new --disable-gpu --no-pdf-header-footer --print-to-pdf="' + pdfDestPath + '" "' + tempHtmlPath + '"';

try {
  console.log('Compiling complete unclipped PDF with Edge headless...');
  execSync(cmd, { stdio: 'inherit' });
  console.log('Successfully generated PDF at: ' + pdfDestPath);
  
  // Also copy to public/images/editorial/cv.pdf for full coverage
  fs.copyFileSync(pdfDestPath, pdfCopyPath);
  console.log('Copied to ' + pdfCopyPath);
} catch (err) {
  console.error('Error generating PDF:', err);
} finally {
  if (fs.existsSync(tempHtmlPath)) {
    fs.unlinkSync(tempHtmlPath);
    console.log('Cleaned up temporary HTML file.');
  }
}
