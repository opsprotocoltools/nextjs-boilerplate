// app/page.tsx
export default function Home() {
  return (
    <main style={styles.page}>
      <div style={styles.bg} />

      <header style={styles.header}>
        <div style={styles.logoRow}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
            <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2" opacity="0.25"/>
            <path d="M6 12h12M12 6v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span style={{ marginLeft: 8, fontWeight: 700, letterSpacing: 0.5 }}>
            Ops Protocol Tools
          </span>
        </div>
        <nav style={styles.nav}>
          <a style={styles.link} href="#products">Products</a>
          <a style={styles.link} href="#automation">Automation</a>
          <a style={styles.link} href="#contact">Contact</a>
        </nav>
      </header>

      <section style={styles.hero}>
        <h1 style={styles.h1}>Automate clarity.<br/>Monetize discipline.</h1>
        <p style={styles.sub}>
          A ready-to-ship suite of systems, trackers, and automations for
          operators who want recurring revenue with low upkeep.
        </p>
        <div style={styles.ctaRow}>
          <a style={{...styles.btn, ...styles.btnPrimary}} href="#products">Explore Suite</a>
          <a style={{...styles.btn, ...styles.btnGhost}} href="#demo">View Demo</a>
        </div>
        <div style={styles.badges}>
          <span style={styles.badge}>PDFs</span>
          <span style={styles.badge}>Sheets</span>
          <span style={styles.badge}>Zapier/Make</span>
          <span style={styles.badge}>Gumroad/Payhip</span>
        </div>
      </section>

      <section id="products" style={styles.section}>
        <h2 style={styles.h2}>The Suite</h2>
        <div style={styles.grid}>
          {[
            {t:"Life Systems Playbook", d:"25-page practical guide to execution, focus, and resets."},
            {t:"Co-Parent Command Sheet", d:"Printable checklist + planner. Fillable PDF + Canva."},
            {t:"Reset Routine Course", d:"Mini course scripts, prompts, visuals + companion journal."},
            {t:"Bridge Theory Journal", d:"Reflection system. Notion + PDF template."},
            {t:"Ops Daily Tracker", d:"Google Sheet + printable log with analytics hooks."},
          ].map((x, i)=>(
            <div key={i} style={styles.card}>
              <h3 style={styles.cardTitle}>{x.t}</h3>
              <p style={styles.cardBody}>{x.d}</p>
              <a style={styles.cardLink} href="#contact">Get it</a>
            </div>
          ))}
        </div>
      </section>

      <section id="automation" style={styles.section}>
        <h2 style={styles.h2}>Automation Layer</h2>
        <ul style={styles.list}>
          <li>One-click listings: Gumroad / Payhip metadata files</li>
          <li>5-day rotating social posts: X, Instagram, Threads, Reddit</li>
          <li>5-email welcome funnel prewritten</li>
          <li>Sheets dashboard: sales, revenue, traffic</li>
          <li>Zap templates: Store → Sheets → Email → Drive backups</li>
        </ul>
      </section>

      <footer id="contact" style={styles.footer}>
        <p style={{opacity:0.9}}>Questions or wholesale? Email
          {" "}<a style={styles.footerLink} href="mailto:ops@opsprotocoltools.com">
          ops@opsprotocoltools.com</a>
        </p>
        <p style={{opacity:0.6, fontSize:12}}>© {new Date().getFullYear()} Tony Gennarelli Systems</p>
      </footer>
    </main>
  );
}

const styles: {[k:string]: React.CSSProperties} = {
  page: {
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Inter, Helvetica, Arial, sans-serif",
    color: "#e6e6e6",
    backgroundColor: "#0b0f14",
    minHeight: "100svh",
    position: "relative",
    lineHeight: 1.5
  },
  bg: {
    position: "absolute",
    inset: 0,
    background: "radial-gradient(1000px 500px at 50% -10%, #2563eb33, transparent), radial-gradient(800px 400px at 100% 0%, #22d3ee22, transparent)",
    pointerEvents: "none"
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: 1100,
    margin: "0 auto",
    padding: "20px 24px",
  },
  logoRow: { display:"flex", alignItems:"center" },
  nav: { display:"flex", gap:16 },
  link: { textDecoration:"none", color:"#cbd5e1", fontSize:14 },
  hero: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "80px 24px 24px",
    textAlign: "center" as const
  },
  h1: {
    fontSize: 48,
    lineHeight: 1.1,
    margin: 0,
    fontWeight: 800,
    letterSpacing: -0.5
  },
  sub: {
    margin: "16px auto 28px",
    maxWidth: 720,
    color: "#cbd5e1"
  },
  ctaRow: { display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" as const },
  btn: {
    padding: "12px 18px",
    borderRadius: 10,
    fontWeight: 600,
    textDecoration: "none",
    display: "inline-block",
    border: "1px solid #334155"
  },
  btnPrimary: {
    background: "linear-gradient(90deg,#2563eb,#22d3ee)",
    color: "#0b0f14",
    border: "none"
  },
  btnGhost: { color:"#e2e8f0" },
  badges: { display:"flex", gap:8, justifyContent:"center", marginTop:16, flexWrap:"wrap" as const },
  badge: {
    fontSize: 12,
    padding: "6px 10px",
    border: "1px solid #334155",
    borderRadius: 999
  },
  section: {
    maxWidth: 1100,
    margin: "32px auto",
    padding: "24px",
  },
  h2: { fontSize: 28, margin: "0 0 12px", fontWeight: 800 },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 16
  },
  card: {
    background: "rgba(15, 23, 42, 0.6)",
    border: "1px solid #334155",
    borderRadius: 14,
    padding: 16
  },
  cardTitle: { margin: "0 0 6px", fontSize: 18, fontWeight: 700 },
  cardBody: { margin: "0 0 12px", color: "#cbd5e1", fontSize: 14 },
  cardLink: { textDecoration:"none", color:"#93c5fd", fontWeight:600, fontSize:14 },
  list: { margin:0, paddingLeft:18, color:"#cbd5e1" },
  footer: {
    borderTop: "1px solid #334155",
    marginTop: 32,
    padding: "24px",
    textAlign: "center" as const,
    color: "#cbd5e1"
  },
  footerLink: { color:"#93c5fd", textDecoration:"none" }
};
