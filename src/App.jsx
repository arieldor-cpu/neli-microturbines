import React, { useEffect, useState } from "react";
import { ArrowRight, CheckCircle2, Flame, Factory, Fuel, Gauge, Globe2, Leaf, Mail, Rocket, Shield, Timer, Wrench } from "lucide-react";

const Container = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);
const Card = ({ children, className = "" }) => (
  <div className={`rounded-2xl shadow-sm border border-zinc-800/50 bg-zinc-900/60 backdrop-blur ${className}`}>{children}</div>
);
const Button = ({ children, href, onClick, className = "", variant = "primary", type }) => {
  const base = "inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition";
  const styles = {
    primary: "bg-emerald-500 hover:bg-emerald-400 text-black",
    ghost: "bg-transparent hover:bg-zinc-800 text-white border border-zinc-700",
  };
  if (href) return <a href={href} className={`${base} ${styles[variant]} ${className}`}>{children}</a>;
  return <button type={type} onClick={onClick} className={`${base} ${styles[variant]} ${className}`}>{children}</button>;
};
const Tag = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
    {children}
  </span>
);

const NAV = [
  { label: "Technology", href: "#technology" },
  { label: "Products", href: "#products" },
  { label: "Contact", href: "#contact" },
];

const STATS = [
  { label: "Target Power", value: "300W–2000W", sub: "UMGT generators" },
  { label: "Target Thrust", value: "50–2000N", sub: "micro jet engines" },
  { label: "Lead Time", value: "≤ 2–6 wks", sub: "print-to-flight (pilot)" },
  { label: "Cost Basis", value: "~$3K", sub: "equipment + powder" },
];

const VALUE_POINTS = [
  { icon: Factory, title: "Print-to-Engine", text: "Single-step, support-free metal AM of self-supported engine architectures." },
  { icon: Wrench, title: "Modular & Serviceable", text: "Field-maintainable modules for rapid swap and upgrade." },
  { icon: Timer, title: "Rapid Iteration", text: "From CAD to tested hardware in days, not months." },
  { icon: Gauge, title: "Power Density", text: "High T/W and energy density versus Li-ion for 3–40 kg UAVs." },
  { icon: Leaf, title: "Efficiency Focus", text: "Optimized combustors, recuperation options, advanced materials." },
  { icon: Shield, title: "Rugged by Design", text: "Additive geometries, fewer parts, reduced supply-chain risk." },
];

const PRODUCTS = [
  {
    title: "UMGT Micro-Generator",
    tag: "Energy Module • 300–1500W",
    bullets: [
      "Drop-in replacement for drone battery packs (3–40 kg TOW)",
      "Jet-fuel compatible • 3× flight time • 10× faster refuel",
      "Hybrid architectures for VTOL endurance",
    ],
    icon: Fuel,
  },
  {
    title: "Micro Jet Engine",
    tag: "Propulsion • 50–2000N",
    bullets: [
      "Compact, efficient heat engines for high T/W UAVs",
      "Printed turbomachinery with porous-media combustors",
      "Roadmap to thrust-vectoring and recuperation",
    ],
    icon: Rocket,
  },
  {
    title: "APE — Additively Printed Engine",
    tag: "Manufacturing Platform",
    bullets: [
      "Pre-assembled engine printed as one, minimal post-processing",
      "On-demand production at platform OEM sites",
      "Cost reduced to equipment depreciation + powder",
    ],
    icon: Factory,
  },
];

export default function NeliMicroturbinesSite() {
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    document.title = "Neli Microturbines — Efficient micro-generators & jet engines";
  }, []);

  return (
    <main className="min-h-screen bg-black text-zinc-100 selection:bg-emerald-500/30">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-zinc-800/70 bg-black/70 backdrop-blur">
        <Container className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-3">
  <img
    src="/Neli Logo_New.jpeg"
    alt="Neli Microturbines logo"
    className="h-16 w-auto"
  />
  <span className="text-lg font-bold tracking-tight">Neli Microturbines</span>
</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="text-zinc-300 hover:text-white">
                {n.label}
              </a>
            ))}
            <Button href="#contact">Get in touch <ArrowRight className="size-4" /></Button>
          </nav>
          <button className="md:hidden text-zinc-300" onClick={() => setMobileOpen((v) => !v)} aria-label="Toggle menu">☰</button>
        </Container>
        {mobileOpen && (
          <div className="md:hidden border-t border-zinc-800/70 bg-black">
            <Container className="py-3 grid gap-2">
              {NAV.map((n) => (
                <a key={n.href} href={n.href} onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-2 hover:bg-zinc-900">
                  {n.label}
                </a>
              ))}
              <Button href="#contact" className="mt-2">Get in touch <ArrowRight className="size-4" /></Button>
            </Container>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_600px_at_50%_-200px,rgba(16,185,129,0.15),transparent)]" />
        <Container className="py-20 lg:py-28">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <Tag>Re-inventing UAV propulsion</Tag>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
                Creating micro energy and propulsion solutions for defense, energy, and mobility in autonomous systems
              </h1>
              <p className="mt-4 max-w-prose text-zinc-300">
                We design micro gas turbines from the ground up—purpose-built for additive manufacturing. Our printed engines power
                next-gen drones and robots with high energy density, rapid refuel, and rugged simplicity.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="#products">Explore products <ArrowRight className="size-4" /></Button>
                <Button href="#technology" variant="ghost">How it works</Button>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {STATS.map((s) => (
                  <Card key={s.label} className="p-4">
                    <div className="text-xl font-bold">{s.value}</div>
                    <div className="text-xs text-zinc-400">{s.sub}</div>
                  </Card>
                ))}
              </div>
            </div>
        <Card className="relative aspect-[4/3] overflow-hidden">
  <img
    alt="Neli hero"
    className="absolute inset-0 size-full object-cover opacity-100"
    src="/website-image.png"
  />
</Card>
          </div>
        </Container>
      </section>

      {/* Technology */}
      <section id="technology" className="border-t border-zinc-800/70">
        <Container className="py-16 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold">Technology advantages</h2>
              <p className="mt-3 text-zinc-300">
                Additive manufacturing (AM) unlocks self-supported engine architectures and drastic part count reduction—enabling on-demand,
                distributed production and fast iteration cycles.
              </p>
            </div>
            <div className="lg:col-span-2 grid gap-4 sm:grid-cols-2">
              {VALUE_POINTS.map((v, i) => (
                <Card key={i} className="p-5">
                  <div className="flex items-start gap-3">
                    <v.icon className="mt-1 size-5 text-emerald-400" />
                    <div>
                      <div className="font-semibold">{v.title}</div>
                      <p className="mt-1 text-sm text-zinc-300">{v.text}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Products */}
      <section id="products" className="border-t border-zinc-800/70 bg-gradient-to-b from-black via-black to-zinc-950">
        <Container className="py-16 lg:py-24">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold">Products</h2>
              <p className="mt-3 max-w-prose text-zinc-300">Affordable, high-performance propulsion & power modules for defense and industrial UAVs </p>
            </div>
            <Button href="#contact" variant="ghost">Partner with us</Button>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {PRODUCTS.map((p, idx) => (
              <Card key={idx} className="p-6">
                <div className="flex items-center gap-3">
                  <p.icon className="size-6 text-emerald-400" />
                  <div className="text-xs uppercase tracking-wider text-emerald-300">{p.tag}</div>
                </div>
                <h3 className="mt-2 text-xl font-bold">{p.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                  {p.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 size-4 text-emerald-400" />{b}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-zinc-800/70">
        <Container className="py-16 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold">Contact</h2>
              <p className="mt-3 max-w-prose text-zinc-300">Tell us about your platform and power/thrust needs. We’ll follow up to schedule a technical session.</p>
              <div className="mt-6 grid gap-3 text-sm">
                <div className="flex items-center gap-2 text-zinc-300"><Mail className="size-4 text-emerald-400" /> <a className="hover:underline" href="mailto:info@neli-microturbines.com">info@neli-microturbines.com</a></div>
                <div className="flex items-center gap-2 text-zinc-300"><Globe2 className="size-4 text-emerald-400" /> neli-microturbines.com</div>
              </div>
            </div>
            <Card className="p-6">
              <ContactForm />
            </Card>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800/70">
        <Container className="py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-400">
          <div>© {new Date().getFullYear()} Neli Microturbines Ltd. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-zinc-200">Privacy</a>
          </div>
        </Container>
      </footer>
    </main>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  return sent ? (
    <div className="grid place-items-center py-14 text-center">
      <CheckCircle2 className="size-8 text-emerald-400" />
      <p className="mt-2 text-zinc-200 font-medium">Thanks — we’ll be in touch shortly.</p>
      <p className="text-xs text-zinc-400">
        You can also email <a className="underline" href="mailto:hello@neli-microturbines.com">ariel@neli-microturbines.com</a>.
      </p>
    </div>
  ) : (
    <form
      className="grid gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget).entries());
        const body = encodeURIComponent(
          `Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company}\nUse Case: ${data.use}\nMessage:\n${data.message}`
        );
        window.open(
          `mailto:hello@neli-microturbines.com?subject=Neli%20Microturbines%20Inquiry&body=${body}`
        );
        setSent(true);
      }}
    >
      <div className="grid gap-2">
        <label className="text-xs text-zinc-400">Name</label>
        <input
          name="name"
          required
          className="rounded-xl bg-zinc-900 border border-zinc-800 px-4 py-2 outline-none focus:border-emerald-500"
          placeholder="Your name"
        />
      </div>
      <div className="grid gap-2">
        <label className="text-xs text-zinc-400">Work Email</label>
        <input
          type="email"
          name="email"
          required
          className="rounded-xl bg-zinc-900 border border-zinc-800 px-4 py-2 outline-none focus:border-emerald-500"
          placeholder="you@company.com"
        />
      </div>
      <div className="grid gap-2">
        <label className="text-xs text-zinc-400">Company</label>
        <input
          name="company"
          className="rounded-xl bg-zinc-900 border border-zinc-800 px-4 py-2 outline-none focus:border-emerald-500"
          placeholder="Organization"
        />
      </div>
      <div className="grid gap-2">
        <label className="text-xs text-zinc-400">Use Case</label>
        <select
          name="use"
          className="rounded-xl bg-zinc-900 border border-zinc-800 px-4 py-2 outline-none focus:border-emerald-500"
        >
          <option>UAV endurance (generator)</option>
          <option>UAV propulsion (jet)</option>
          <option>On-site printing / APE</option>
          <option>Other / exploratory</option>
        </select>
      </div>
      <div className="grid gap-2">
        <label className="text-xs text-zinc-400">Message</label>
        <textarea
          name="message"
          rows={4}
          className="rounded-xl bg-zinc-900 border border-zinc-800 px-4 py-2 outline-none focus:border-emerald-500"
          placeholder="Tell us about your platform, payload, power or thrust needs..."
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="text-xs text-zinc-500">
          By sending, you agree to be contacted by Neli.
        </div>
        <Button type="submit">
          Send <ArrowRight className="size-4" />
        </Button>
      </div>
    </form>
  );
}
