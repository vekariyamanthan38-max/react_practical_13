
import React, { useState } from "react";
import {
  HashRouter,
  MemoryRouter,
  StaticRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import "./index.css";

const pages = [
  { path: "/", name: "Home", icon: "⌂", color: "cyan" },
  { path: "/about", name: "About", icon: "◈", color: "violet" },
  { path: "/contact", name: "Contact", icon: "✉", color: "pink" },
];

function DemoPage() {
  const location = useLocation();
  const current =
    pages.find((p) => p.path === location.pathname) || pages[0];

  return (
    <div className="mt-5 rounded-2xl border border-white/10 bg-slate-950/70 p-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
          Live route preview
        </span>
        <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
          ● Active
        </span>
      </div>

      <div className="mb-5 rounded-xl bg-white/[0.04] p-4">
        <p className="text-sm text-slate-400">Current pathname</p>
        <p className="mt-2 break-all font-mono text-lg font-bold text-cyan-300">
          {location.pathname}
        </p>
      </div>

      <div className="rounded-xl border border-white/10 p-4">
        <div className="mb-3 text-2xl">{current.icon}</div>
        <h3 className="text-xl font-bold text-white">{current.name} Page</h3>
        <p className="mt-2 text-sm leading-6 text-slate-400">
          {current.name === "Home"
            ? "Welcome! This is the home route of your React application."
            : current.name === "About"
            ? "This page explains the application and demonstrates route changes."
            : "This page represents the contact section of the application."}
        </p>
      </div>
    </div>
  );
}

function RouteLinks() {
  return (
    <nav className="mt-5 grid grid-cols-3 gap-2">
      {pages.map((page) => (
        <Link
          key={page.path}
          to={page.path}
          className="rounded-xl border border-white/10 bg-white/[0.04] px-2 py-3 text-center text-sm font-semibold text-slate-300 transition hover:border-cyan-400/60 hover:bg-cyan-400/10 hover:text-cyan-200"
        >
          <span className="mr-1">{page.icon}</span>
          {page.name}
        </Link>
      ))}
    </nav>
  );
}

function RouterCard({ number, title, subtitle, badge, children, color }) {
  const colors = {
    cyan: "from-cyan-400 to-blue-500",
    violet: "from-violet-400 to-fuchsia-500",
    pink: "from-pink-400 to-orange-400",
  };

  return (
    <section className="router-card relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 p-5 shadow-2xl sm:p-7">
      <div
        className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${colors[color]}`}
      />
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <span className="text-xs font-black tracking-widest text-slate-500">
              {number}
            </span>
            <span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-300">
              {badge}
            </span>
          </div>
          <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
            {title}
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-400">{subtitle}</p>
        </div>
        <div
          className={`hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br text-2xl font-black text-slate-950 sm:flex ${colors[color]}`}
        >
          {number}
        </div>
      </div>
      {children}
    </section>
  );
}

function App() {
  const [active, setActive] = useState("hash");

  return (
    <main className="min-h-screen bg-[#070b17] text-white">
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        .hero-grid {
          background-image:
            linear-gradient(rgba(148,163,184,.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148,163,184,.045) 1px, transparent 1px);
          background-size: 36px 36px;
        }
        .glow {
          background: radial-gradient(ellipse at center,
            rgba(34,211,238,.16), transparent 68%);
        }
        .router-card { transition: transform .25s ease, border-color .25s ease; }
        .router-card:hover {
          transform: translateY(-3px);
          border-color: rgba(103,232,249,.3);
        }
        .tab-active {
          background: rgba(34,211,238,.13);
          border-color: rgba(34,211,238,.55);
          color: #a5f3fc;
        }
        ::selection { background: #0891b2; color: white; }
      `}</style>

      <header className="hero-grid relative overflow-hidden border-b border-white/10">
        <div className="glow pointer-events-none absolute inset-0" />

        <div className="relative mx-auto max-w-7xl px-5 py-7 sm:px-8">
          <nav className="mb-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-300 font-black text-slate-950">
                {"</>"}
              </div>
              <div>
                <p className="font-black tracking-wide">ROUTE LAB</p>
                <p className="text-xs text-slate-500">REACT PLAYGROUND</p>
              </div>
            </div>
            <span className="rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-2 text-xs font-semibold text-emerald-300">
              ● Interactive Demo
            </span>
          </nav>

          <div className="max-w-4xl pb-12">
            <p className="mb-5 text-xs font-black uppercase tracking-[0.3em] text-cyan-300">
              React Router · Mini Project 03
            </p>
            <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              One app.
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
                Three routing worlds.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              Explore how HashRouter, MemoryRouter, and StaticRouter
              manage navigation in different environments.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#playground"
                className="rounded-xl bg-cyan-300 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-200"
              >
                Explore routers ↘
              </a>
              <a
                href="#comparison"
                className="rounded-xl border border-white/15 px-5 py-3 font-bold text-white transition hover:bg-white/5"
              >
                Compare types
              </a>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 border-t border-white/10 pt-6">
            {[
              ["01", "HashRouter"],
              ["02", "MemoryRouter"],
              ["03", "StaticRouter"],
            ].map(([n, label]) => (
              <div key={n}>
                <p className="text-xs font-bold text-cyan-300">{n}</p>
                <p className="mt-1 text-xs font-semibold text-slate-300 sm:text-sm">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </header>

      <section
        id="playground"
        className="mx-auto max-w-7xl px-5 py-14 sm:px-8"
      >
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
            Hands-on experience
          </p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            The Router Playground
          </h2>
          <p className="mt-3 text-slate-400">
            Select a router to jump to its live demonstration.
          </p>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {[
            ["hash", "01 / HASH", "URL fragment", "cyan"],
            ["memory", "02 / MEMORY", "In-memory history", "violet"],
            ["static", "03 / STATIC", "Fixed server route", "pink"],
          ].map(([id, title, description]) => (
            <button
              key={id}
              onClick={() => {
                setActive(id);
                document
                  .getElementById(id + "-demo")
                  ?.scrollIntoView({ behavior: "smooth", block: "center" });
              }}
              className={`rounded-2xl border p-4 text-left transition ${
                active === id
                  ? "tab-active"
                  : "border-white/10 bg-white/[0.025] text-slate-300 hover:bg-white/[0.05]"
              }`}
            >
              <p className="text-xs font-bold tracking-widest">{title}</p>
              <p className="mt-2 font-bold">{description}</p>
            </button>
          ))}
        </div>

        <div className="space-y-6">
          <div id="hash-demo">
            <RouterCard
              number="01"
              title="HashRouter"
              subtitle="Navigation using the URL fragment (#)."
              badge="Browser routing"
              color="cyan"
            >
              <HashRouter>
                <DemoPage />
                <RouteLinks />
              </HashRouter>
              <p className="mt-4 text-xs leading-5 text-slate-500">
                Try Home, About, or Contact. Watch the browser URL change
                to #/about or #/contact.
              </p>
            </RouterCard>
          </div>

          <div id="memory-demo">
            <RouterCard
              number="02"
              title="MemoryRouter"
              subtitle="Navigation state stored in memory, not the browser URL."
              badge="In-memory routing"
              color="violet"
            >
              <MemoryRouter initialEntries={["/"]}>
                <DemoPage />
                <RouteLinks />
              </MemoryRouter>
              <p className="mt-4 text-xs leading-5 text-slate-500">
                Navigate between pages. The preview changes, but the
                browser address bar stays the same.
              </p>
            </RouterCard>
          </div>

          <div id="static-demo">
            <RouterCard
              number="03"
              title="StaticRouter"
              subtitle="Renders a predetermined location, commonly on a server."
              badge="Server-side rendering"
              color="pink"
            >
              <StaticRouter location="/about">
                <DemoPage />
              </StaticRouter>
              <div className="mt-5 rounded-xl border border-pink-300/20 bg-pink-300/5 p-4">
                <p className="text-sm font-bold text-pink-200">
                  ◉ Fixed location: /about
                </p>
                <p className="mt-2 text-xs leading-5 text-slate-400">
                  This demonstration renders the About route at a fixed
                  location. StaticRouter does not perform interactive
                  browser navigation.
                </p>
              </div>
            </RouterCard>
          </div>
        </div>
      </section>

      <section
        id="comparison"
        className="border-y border-white/10 bg-white/[0.02]"
      >
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
            Technical breakdown
          </p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            Three routers. Three purposes.
          </h2>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full min-w-[620px] text-left text-sm">
              <thead className="bg-white/[0.05] text-xs uppercase tracking-wider text-slate-400">
                <tr>
                  <th className="p-4">Feature</th>
                  <th className="p-4">HashRouter</th>
                  <th className="p-4">MemoryRouter</th>
                  <th className="p-4">StaticRouter</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-slate-300">
                {[
                  ["URL", "Uses #", "Unchanged", "Fixed location"],
                  ["Navigation", "Interactive", "Interactive", "Static"],
                  ["State stored", "URL fragment/history", "Memory", "Server render context"],
                  ["Best use", "Static hosting", "Tests and embedded flows", "SSR and server rendering"],
                ].map((row) => (
                  <tr key={row[0]} className="transition hover:bg-white/[0.03]">
                    {row.map((cell, i) => (
                      <td
                        key={cell}
                        className={`p-4 ${
                          i === 0 ? "font-bold text-white" : ""
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.04] p-5">
              <p className="font-bold text-cyan-200">HashRouter</p>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Useful for static hosting where server configuration for
                clean URL paths is unavailable.
              </p>
            </div>
            <div className="rounded-2xl border border-violet-300/15 bg-violet-300/[0.04] p-5">
              <p className="font-bold text-violet-200">MemoryRouter</p>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Useful for automated tests, isolated components, and
                navigation that should not modify the address bar.
              </p>
            </div>
            <div className="rounded-2xl border border-pink-300/15 bg-pink-300/[0.04] p-5">
              <p className="font-bold text-pink-200">StaticRouter</p>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Useful for server-rendered HTML where a request determines
                the route before the page is rendered.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-7xl px-5 py-10 text-center sm:px-8">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 font-black text-cyan-200">
          {"</>"}
        </div>
        <h2 className="text-xl font-black">Understand the route. Build the experience.</h2>
        <p className="mt-3 text-sm text-slate-500">
          React Router Lab · Router Types · Mini Project 03
        </p>
      </footer>
    </main>
  );
}

export default App;
