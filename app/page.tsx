// app/page.tsx
export default function Home() {
  return (
    <main style={s.page}>
      {/* background */}
      <div style={s.bg} />

      {/* header */}
      <header style={s.header}>
        <div style={s.brand}>
          <img
            src="/logo.png"
            alt="Ops Protocol Tools"
            width={32}
            height={32}
            style={{ borderRadius: 6 }}
          />
          <span style={s.brandText}>Ops Protocol Tools</span>
        </div>
        <nav style={s.nav}>
          <a style={s.link} href="#products">Products</a>
          <a style={s.link} href="#automation">Automation</a>
          <a style={s.ctaSmall} href="#contact">Contact</a>
        </nav>
      </header>

      {/* hero */}
      <section style={s.hero}>
        <h1 style={s.h1}>Automate clarity. <span style={{opacity:.85}}>Monetize discipline.</span></h1>
        <p style={s.sub}>
          A ready-to-ship suite of systems, trackers, and automations for operators who want
          recurring revenue with low upkeep.
        </p>
        <div style={s.heroCtas}>
          <a style={{...s.btn, ...s.btnPrimary}} href="#products">Explore the Suite</a>
          <a style={{...s.btn, ...s.btnGhost}} href="#automation">See Automations</a>
        </div>
        <div style={s.badges}>
          {["PDFs","Sheets","Zapier/Make","Gumroad/Payhip"].map((b,i)=>
            <span key={i} style={s.badge}>{b}</span>
          )}
        </div>
      </section>

      {/* products */}
      <section id="products" style={s.section}>
        <h2 style={s.h2}>The Suite</h2>
        <div style={s.grid}>
          {[
            {t:"Life Systems Playbook", d:"25-page guide to execution, focus, and resets."},
            {t:"Co-Parent Command Sheet", d:"Printable checklist + planner. Fillable PDF + Canva."},
            {t:"Reset Routine Course", d:"Mini-course scripts, prompts, visuals + journal."},
            {t:"Bridge Theory Journal", d:"Reflection system. Notion + PDF template."},
            {t:"Ops Daily Tracker", d:"Google Sheet + printable log with analytics hooks."},
          ].map((x, i) => (
            <article key={i} style={s.card}>
              <h3 style={s.cardTitle}>{x.t}</h3>
              <p style={s.cardBody}>{x.d}</p>
              <a style={s.cardLink} href="#contact">Get it</a>
            </article>
          ))}
        </div>
      </section>

      {/* automation */}
      <section id="automation" style={s.section}>
        <h2 style={s.h2}>Automation Layer</h2>
        <ul style={s.list}>
          <li>One-click store listings: Gumroad / Payhip metadata files</li>
          <li>5-day rotating social posts: X, Instagram, Threads, Reddit</li>
          <li>5-email welcome funnel, prewritten</li>
          <li>Sheets dashboard: sales, revenue, traffic</li>
          <li>Zap templates: Store → Sheets → Email → Drive backups</li>
        </ul>
      </section>

      {/* footer */}
      <footer id="contact" style={s.footer}>
        <p>Questions or wholesale?{" "}
          <a style={s.footerLink} href="mailto:ops@opsprotocoltools.com">
            ops@opsprotocoltools.com
          </a>
        </p>
        <p style={s.copy}>© {new Date().getFullYear()} Tony Gennarelli Systems</p>
      </footer>
    </main>
  );
}

const s: {[k:string]: React.CSSProperties} = {
  page: {
    fontFamily: "-apple-system,BlinkMacSystemFont,Segoe UI,Inter,Roboto,Helvetica,Arial,sans-serif",
    color: "#e6e6e6",
    backgroundColor: "#0b0f14",
    minHeight: "100svh",
    position: "relative",
    lineHeight: 1.55
  },
  bg: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(900px 420px at 50% -10%, #2563eb33, transparent)," +
      "radial-gradient(700px 360px at 100% 0%, #22d3ee22, transparent)",
    pointerEvents: "none"
  },
  header: {
    maxWidth: 1120,
    margin: "0 auto",
    padding: "18px 22px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  brand: { display: "flex", alignItems: "center", gap: 10 },
  brandText: { fontWeight: 700, letterSpacing: .3, fontSize: 16 },
  nav: { display: "flex", alignItems: "center", gap: 18 },
  link: { color: "#cbd5e1", textDecoration: "none", fontSize: 14 },
  ctaSmall: {
    textDecoration: "none",
    padding: "8px 12px",
    border: "1px solid #334155",
    borderRadius: 10,
    fontSize: 14,
    color: "#e2e8f0"
  },
  hero: {
    maxWidth: 1120,
    margin: "0 auto",
    padding: "84px 22px 28px",
    textAlign: "center"
  },
  h1: { fontSize: 46, lineHeight: 1.1, margin: 0, fontWeight: 800, letterSpacing: -.4 },
  sub: { margin: "16px auto 26px", maxWidth: 760, color: "#cbd5e1" },
  heroCtas: { display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" },
  btn: {
    padding: "12px 18px",
    borderRadius: 12,
    fontWeight: 700,
    textDecoration: "none",
    display: "inline-block",
    border: "1px solid #334155"
  },
  btnPrimary: {
    background: "linear-gradient(90deg,#2563eb,#22d3ee)",
    color: "#071018",
    border: "none"
  },
  btnGhost: { color: "#e2e8f0" },
  badges: { display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap", marginTop: 14 },
  badge: { fontSize: 12, padding: "6px 10px", border: "1px solid #334155", borderRadius: 999 },
  section: { maxWidth: 1120, margin: "28px auto", padding: "0 22px" },
  h2: { fontSize: 26, margin: "0 0 12px", fontWeight: 800 },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 16
  },
  card: {
    background: "rgba(15,23,42,.6)",
    border: "1px solid #334155",
    borderRadius: 14,
    padding: 16
  },
  cardTitle: { margin: "0 0 6px", fontSize: 18, fontWeight: 700 },
  cardBody: { margin: "0 0 12px", color: "#cbd5e1", fontSize: 14 },
  cardLink: { color: "#93c5fd", textDecoration: "none", fontWeight: 600, fontSize: 14 },
  list: { margin: 0, paddingLeft: 18, color: "#cbd5e1" },
  footer: {
    borderTop: "1px solid #334155",
    marginTop: 36,
    padding: "22px",
    textAlign: "center",
    color: "#cbd5e1"
  },
  footerLink: { color: "#93c5fd", textDecoration: "none" },
  copy: { opacity: .6, fontSize: 12, marginTop: 8 }
};
