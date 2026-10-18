export default function HomePage() {
  return (
    <main style={{ maxWidth: 840, margin: "80px auto", padding: "0 24px" }}>
      <header style={{ textAlign: "center", marginBottom: 60 }}>
        <div style={{ display: "inline-block", background: "rgba(59, 130, 246, 0.1)", color: "#60a5fa", padding: "4px 12px", borderRadius: 999, fontSize: 13, fontWeight: 600, marginBottom: 16 }}>
          AI Crew Activated
        </div>
        <h1 style={{ fontSize: 44, fontWeight: 700, letterSpacing: "-0.03em", margin: "0 0 16px" }}>
          Pulse Engineering Intelligence
        </h1>
        <p style={{ fontSize: 18, color: "#9ca3af", lineHeight: 1.6, margin: 0 }}>
          Real-time metrics, automated code review with <code>@crewd/code-reviewer</code>, and OWASP audit with <code>@crewd/security-auditor</code>.
        </p>
      </header>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
        <div style={{ background: "#16161a", border: "1px solid rgba(255,255,255,0.08)", padding: 24, borderRadius: 12 }}>
          <h3 style={{ margin: "0 0 8px", fontSize: 18 }}>PR Reviewer</h3>
          <p style={{ margin: 0, fontSize: 14, color: "#9ca3af", lineHeight: 1.5 }}>
            Automated code reviewer subagent checking logic correctness, performance bottlenecks, and PR descriptions.
          </p>
        </div>

        <div style={{ background: "#16161a", border: "1px solid rgba(255,255,255,0.08)", padding: 24, borderRadius: 12 }}>
          <h3 style={{ margin: "0 0 8px", fontSize: 18 }}>Security Auditor</h3>
          <p style={{ margin: 0, fontSize: 14, color: "#9ca3af", lineHeight: 1.5 }}>
            OWASP Top 10 auditing, dependency CVE detection, and API secret leakage prevention subagent.
          </p>
        </div>
      </section>
    </main>
  );
}
