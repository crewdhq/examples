import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pulse SaaS — High Velocity Engineering Analytics",
  description: "Next-generation analytics for engineering teams with built-in AI subagents.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif", background: "#0a0a0c", color: "#f3f4f6" }}>
        {children}
      </body>
    </html>
  );
}
