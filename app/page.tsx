import Image from "next/image";

import Team, { type TeamMember } from "@/components/ui/team-01";

type Person = { name: string; photo: string };

const departments: { name: string; people: Person[] }[] = [
  {
    name: "Orthopaedics",
    people: [
      { name: "Dr. Hannah Rajsekhar", photo: "hannah-rajsekhar" },
      { name: "Dr. N. Mary", photo: "n-mary" },
      { name: "Dr. B. Annie Aashritha", photo: "annie-aashritha" },
      { name: "Dr. V. Bhavya Vyshnavi", photo: "bhavya-vyshnavi" },
    ],
  },
  {
    name: "Cardiopulmonary",
    people: [
      { name: "Dr. D. Varalakshmi", photo: "varalakshmi" },
      { name: "Dr. B. Harshita", photo: "harshita" },
      { name: "Dr. Fouzia Sana", photo: "fouzia-sana" },
      { name: "Dr. P. Sujitha", photo: "sujitha" },
    ],
  },
  {
    name: "Neurosciences",
    people: [
      { name: "Dr. Manasi Kulkarni", photo: "manasi-kulkarni" },
      { name: "Dr. D. Sai Sushmitha", photo: "sai-sushmitha" },
      { name: "Dr. Komal Nagar", photo: "komal-nagar" },
    ],
  },
  {
    name: "Sports Medicine",
    people: [
      { name: "Dr. T. Sripada Pallavi", photo: "sripada-pallavi" },
      { name: "Dr. N. Mani Maheswari", photo: "mani-maheswari" },
    ],
  },
];

const admin: Person[] = [{ name: "Mr. P. Sunil Raju", photo: "sunil-raju" }];

const titles: Record<string, string> = {
  "Dr. Hannah Rajsekhar": "Principal",
  "Dr. D. Varalakshmi": "Vice Principal",
};

const teamMembers: TeamMember[] = [
  ...departments.flatMap((dep) =>
    dep.people.map((p) => ({
      name: p.name,
      role: dep.name,
      group: dep.name,
      image: `/orientation/staff/${p.photo}.jpg`,
      title: titles[p.name],
    })),
  ),
  ...admin.map((p) => ({ name: p.name, role: "Office Admin", group: "Office Admin", image: `/orientation/staff/${p.photo}.jpg` })),
];

const facultyCount = departments.reduce((n, d) => n + d.people.length, 0);
const yearsSince = 25; // shown as "25+" (est. 1999)

const guidelines: { title: string; points: string[] }[] = [
  {
    title: "Professional Conduct",
    points: [
      "Students strictly adhere to institutional rules on clinical attire, professional conduct and discipline at all times.",
      "Anti-ragging regulations are enforced rigorously.",
      "Cell phones may be used only during free hours.",
    ],
  },
  {
    title: "Dress Code",
    points: [
      "Scrubs and college ID cards are worn during college and clinical hours.",
      "Men: neat scrub, clean shaven, formal shoes, trimmed nails. Jeans, T-shirts, chappals, flip-flops and sandals are not permitted.",
      "Women: scrub with a black undershirt, formal shoes, tied hair and trimmed nails. Loose hair, nail polish, jeans, T-shirts, high-slit / above-knee / deep-neck tops, make-up and big or long earrings are not permitted.",
    ],
  },
  {
    title: "Attendance & Timings",
    points: [
      "College hours are 8:00 am to 4:00 pm, with a grace time till 8:15 am.",
      "A minimum of 85% attendance is required in theory, clinical and practical sessions.",
      "Leave requires prior written permission.",
    ],
  },
  {
    title: "Clinical Training",
    points: [
      "Students are expected to show a high level of involvement and commitment in clinical practice.",
      "Daily academic and clinical activities are documented in the college log book and verified by the supervisor.",
      "Clinical rounds give exposure to patient assessment, management and interdisciplinary discussion.",
    ],
  },
];

const tickerTop = [
  "Apollo College of Physiotherapy",
  `Established 1999`,
  "Part of AHERF",
  "Orthopaedics",
  "Neurosciences",
  "Cardiopulmonary",
  "Sports Medicine",
];

const tickerDepts = ["Orthopaedics", "Neurosciences", "Cardiopulmonary", "Sports Medicine"];

const nav = [
  { href: "#about", label: "About" },
  { href: "#departments", label: "Departments" },
  { href: "#faculty", label: "Faculty" },
  { href: "#campus", label: "Campus" },
];

/** animation-delay helper */
const d = (s: number) => ({ "--d": `${s}s` }) as React.CSSProperties;

function Marquee({ items, className }: { items: string[]; className: string }) {
  const row = [...items, ...items];
  return (
    <div className={`overflow-hidden ${className}`} aria-hidden="true">
      <div className="animate-marquee flex w-max">
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0">
            {row.map((t, i) => (
              <span key={`${k}-${i}`} className="flex items-center gap-6 px-6 whitespace-nowrap">
                {t}
                <span className="text-accent">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function Starburst({ className, children }: { className?: string; children?: React.ReactNode }) {
  return (
    <div className={className ?? "relative"}>
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <polygon
          points="50,2 61,32 94,22 72,48 98,66 64,68 66,98 50,76 34,98 36,68 2,66 28,48 6,22 39,32"
          fill="var(--color-brand)"
          stroke="var(--color-ink)"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
      </svg>
      <div className="relative flex h-full w-full items-center justify-center">{children}</div>
    </div>
  );
}

function SpinBadge({ text, className }: { text: string; className?: string }) {
  return (
    <a
      href="#about"
      aria-label="Scroll to About"
      className={`block h-28 w-28 rounded-full border-2 border-ink bg-white shadow-hard sm:h-32 sm:w-32 ${className ?? ""}`}
    >
      <svg viewBox="0 0 100 100" className="animate-spin-slow absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <path id="circle" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
        </defs>
        <text className="font-ui" fontSize="9.5" fontWeight="700" letterSpacing="2.2" fill="var(--color-ink)">
          <textPath href="#circle">{text}</textPath>
        </text>
      </svg>
      <span className="absolute inset-0 m-auto flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white">
        <svg viewBox="0 0 20 20" className="h-5 w-5" fill="currentColor" aria-hidden="true">
          <path d="M10 3a1 1 0 011 1v9.59l3.3-3.3a1 1 0 111.4 1.42l-5 5a1 1 0 01-1.4 0l-5-5a1 1 0 111.4-1.42l3.3 3.3V4a1 1 0 011-1z" />
        </svg>
      </span>
    </a>
  );
}

function Heading({ kicker, children, light = false }: { kicker: string; children: React.ReactNode; light?: boolean }) {
  return (
    <div className="reveal mb-12 text-center">
      <span
        className={`font-ui inline-block -rotate-2 rounded-md border-2 border-ink px-3 py-1 text-xs font-bold tracking-widest uppercase shadow-hard-sm ${light ? "bg-accent text-ink" : "bg-white text-ink"}`}
      >
        {kicker}
      </span>
      <h2
        className={`font-display mt-4 text-5xl leading-none tracking-tight uppercase sm:text-7xl ${light ? "text-white" : "text-ink"}`}
      >
        {children}
      </h2>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Ticker */}
      <Marquee items={tickerTop} className="font-ui bg-ink py-2 text-[11px] font-bold tracking-widest text-white uppercase" />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b-2 border-ink bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <a href="#top" className="flex items-center gap-2 rounded-lg bg-white px-2 py-1">
            <Image src="/orientation/apollo-logo.png" alt="Apollo College of Physiotherapy" width={280} height={207} className="h-9 w-auto" loading="eager" />
            <span className="font-display hidden text-lg leading-none tracking-wide text-brand-deep uppercase sm:block">
              College of
              <br />
              Physiotherapy
            </span>
          </a>
          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="font-ui rounded-md px-3 py-2 text-sm font-bold text-ink uppercase transition hover:bg-tint hover:text-brand">
                {n.label} <span className="text-brand">+</span>
              </a>
            ))}
          </nav>
          <a href="#faculty" className="font-ui flex items-center gap-2 rounded-md bg-ink py-2 pr-2 pl-4 text-xs font-bold text-white uppercase transition hover:bg-brand-deep">
            Our Faculty
            <span className="flex h-6 w-6 items-center justify-center rounded bg-white text-ink">→</span>
          </a>
        </div>
        <div className="bg-navy text-white">
          <div className="font-ui mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-1 px-4 py-1.5 text-[11px] font-semibold sm:justify-end sm:text-xs">
            <a href="mailto:ACP@apolloimsr.edu.in" className="inline-flex items-center gap-1.5 transition hover:text-accent">
              <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 text-accent" fill="currentColor" aria-hidden="true">
                <path d="M2.5 4A1.5 1.5 0 001 5.5v.4l9 5.6 9-5.6v-.4A1.5 1.5 0 0017.5 4h-15z" />
                <path d="M19 7.7l-8.6 5.4a.75.75 0 01-.8 0L1 7.7v6.8A1.5 1.5 0 002.5 16h15a1.5 1.5 0 001.5-1.5V7.7z" />
              </svg>
              ACP@apolloimsr.edu.in
            </a>
            <a href="tel:+914023431745" className="inline-flex items-center gap-1.5 transition hover:text-accent">
              <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 text-accent" fill="currentColor" aria-hidden="true">
                <path d="M2 3.5A1.5 1.5 0 013.5 2h1.15a1.5 1.5 0 011.46 1.14l.6 2.42a1.5 1.5 0 01-.55 1.55l-.96.72a11.04 11.04 0 004.97 4.97l.72-.96a1.5 1.5 0 011.55-.55l2.42.6A1.5 1.5 0 0118 13.35v1.15A1.5 1.5 0 0116.5 16h-1C8.04 16 2 9.96 2 2.5v1z" />
              </svg>
              040-23431745
            </a>
          </div>
        </div>
        <nav className="flex justify-around border-t-2 border-ink bg-white md:hidden">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="font-ui flex-1 py-2 text-center text-[11px] font-bold text-ink uppercase">
              {n.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="top" className="flex-1">
        {/* Hero */}
        <section className="hero-bg relative overflow-hidden border-b-2 border-ink bg-navy">
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-12 sm:px-6 sm:py-16 lg:min-h-[calc(100svh-8rem)] lg:grid-cols-[1fr_1.05fr] lg:gap-10 lg:py-10">
            {/* Left: copy */}
            <div className="relative z-10 text-center lg:text-left">
              <span
                className="rise font-ui inline-block -rotate-2 rounded-md border-2 border-ink bg-white px-3 py-1 text-[10px] font-bold tracking-widest uppercase shadow-hard-sm sm:text-xs"
                style={d(0)}
              >
                A unit of AHERF · Since 1999
              </span>

              <h1 className="font-display mt-5 uppercase">
                <span
                  className="rise block text-[clamp(1.6rem,3.2vw,2.6rem)] leading-none tracking-wide text-accent"
                  style={d(0.1)}
                >
                  Apollo College of
                </span>
                <span
                  className="rise mt-2 block text-[clamp(3.4rem,min(8.4vw,13svh),7rem)] leading-[0.88] tracking-tight text-white"
                  style={d(0.2)}
                >
                  Physio-
                </span>
                <span
                  className="rise block text-[clamp(3.4rem,min(8.4vw,13svh),7rem)] leading-[0.88] tracking-tight text-white"
                  style={d(0.3)}
                >
                  therapy
                </span>
              </h1>

              <p
                className="rise mx-auto mt-5 max-w-md text-base leading-relaxed text-white/75 sm:text-lg lg:mx-0"
                style={d(0.4)}
              >
                Part of the Apollo Hospitals Educational and Research Foundation, shaping physiotherapists since 1999
                through specialised departments and hands-on clinical training.
              </p>

              <div className="rise mt-7 flex flex-wrap items-center justify-center gap-3 lg:justify-start" style={d(0.5)}>
                <a
                  href="#departments"
                  className="font-ui group inline-flex items-center gap-2 rounded-md border-2 border-white bg-brand py-2 pr-2 pl-5 text-sm font-bold text-white uppercase shadow-hard transition hover:-translate-y-0.5 hover:bg-brand-dark"
                >
                  Explore Departments
                  <span className="flex h-7 w-7 items-center justify-center rounded bg-white text-ink transition group-hover:translate-x-0.5">
                    →
                  </span>
                </a>
                <a
                  href="#faculty"
                  className="font-ui inline-flex items-center rounded-md border-2 border-ink bg-white px-5 py-[0.7rem] text-sm font-bold text-ink uppercase shadow-hard transition hover:-translate-y-0.5"
                >
                  Meet Our Faculty
                </a>
              </div>

              <div className="mx-auto mt-8 grid max-w-md grid-cols-4 gap-2 sm:gap-3 lg:mx-0">
                {[
                  { v: "1999", l: "Founded" },
                  { v: `${yearsSince}+`, l: "Years" },
                  { v: "4", l: "Departments" },
                  { v: `${facultyCount}`, l: "Faculty" },
                ].map((s, i) => (
                  <div
                    key={s.l}
                    className="rise rounded-lg border-2 border-ink bg-paper px-1 py-2 text-center shadow-hard-sm transition hover:-translate-y-1"
                    style={d(0.6 + i * 0.07)}
                  >
                    <p className="font-display text-2xl leading-none text-ink sm:text-3xl">{s.v}</p>
                    <p className="font-ui mt-1 text-[9px] font-bold tracking-widest text-muted uppercase sm:text-[10px]">
                      {s.l}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: photo collage */}
            <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
              <div className="grid grid-cols-5 gap-3 sm:gap-4">
                <figure className="pop relative col-span-3 aspect-[16/11] -rotate-2 overflow-hidden rounded-2xl border-2 border-ink bg-white shadow-hard" style={d(0.3)}>
                  <Image src="/orientation/group-2.jpg" alt="Faculty of Apollo College of Physiotherapy" fill sizes="(min-width: 1024px) 380px, 60vw" className="object-cover" preload />
                </figure>
                <figure className="pop relative col-span-2 row-span-2 rotate-2 overflow-hidden rounded-2xl border-2 border-ink bg-white shadow-hard" style={d(0.45)}>
                  <Image src="/orientation/staff/hannah-rajsekhar.jpg" alt="Principal Prof. & Dr. Hannah Rajsekhar" fill sizes="(min-width: 1024px) 260px, 40vw" className="object-cover object-top" />
                  <figcaption className="absolute inset-x-2 bottom-2 rounded-lg border-2 border-ink bg-white px-2 py-1.5 text-center">
                    <span className="font-ui block text-[9px] font-bold tracking-widest text-brand uppercase sm:text-[10px]">Principal</span>
                    <span className="font-display block text-sm leading-tight uppercase sm:text-base">Dr. Hannah Rajsekhar</span>
                  </figcaption>
                </figure>
                <div className="col-span-3 grid grid-cols-2 gap-3 sm:gap-4">
                  <figure className="pop relative aspect-[4/5] rotate-1 overflow-hidden rounded-2xl border-2 border-ink bg-white shadow-hard" style={d(0.6)}>
                    <Image src="/orientation/group-1.jpg" alt="Students of Apollo College of Physiotherapy" fill sizes="(min-width: 1024px) 190px, 30vw" className="object-cover" />
                    <figcaption className="font-ui absolute top-2 right-2 rounded border-2 border-ink bg-flame px-2 py-0.5 text-[9px] font-bold text-white uppercase sm:text-[10px]">
                      Students
                    </figcaption>
                  </figure>
                  <figure className="pop relative aspect-[4/5] -rotate-1 overflow-hidden rounded-2xl border-2 border-ink bg-white shadow-hard" style={d(0.75)}>
                    <Image src="/orientation/pmr-opd.jpg" alt="Physical Medicine & Rehabilitation OPD" fill sizes="(min-width: 1024px) 190px, 30vw" className="object-cover" />
                    <figcaption className="font-ui absolute bottom-2 left-2 rounded border-2 border-ink bg-white px-2 py-0.5 text-[9px] font-bold text-ink uppercase sm:text-[10px]">
                      PMR OPD
                    </figcaption>
                  </figure>
                </div>
              </div>

              {/* stickers */}
              <div className="rise absolute -top-8 -left-4 z-10 sm:-top-10 sm:-left-8" style={d(0.9)}>
                <Starburst className="float relative h-20 w-20 -rotate-12 sm:h-28 sm:w-28">
                  <span className="font-display text-center text-xs leading-tight text-white uppercase sm:text-base">
                    Est.
                    <br />
                    1999
                  </span>
                </Starburst>
              </div>
              <span
                className="font-ui float-slow absolute -top-4 right-4 z-10 rotate-6 rounded-md border-2 border-ink bg-flame px-3 py-1 text-[10px] font-bold text-white uppercase shadow-hard-sm sm:text-xs"
                style={d(1)}
              >
                Part of AHERF
              </span>
              <div className="rise absolute -bottom-10 -left-8 z-10 hidden sm:block lg:-left-12" style={d(1.1)}>
                <SpinBadge text="APOLLO • PHYSIOTHERAPY • EST. 1999 • " className="relative" />
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-36 md:scroll-mt-28 py-20">
          <div className="mx-auto max-w-6xl px-4">
            <Heading kicker="Who we are">About the College</Heading>
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="reveal rounded-2xl border-2 border-ink bg-white p-6 shadow-hard sm:p-8">
                <p className="text-lg leading-relaxed text-muted">
                  Founded in <strong className="text-ink">1999</strong>, Apollo College of Physiotherapy is part of the{" "}
                  <strong className="text-ink">Apollo Hospitals Educational and Research Foundation (AHERF)</strong>. The
                  college trains physiotherapists through four specialised departments, a dedicated faculty and
                  hands-on clinical exposure, including its own Physical Medicine &amp; Rehabilitation OPD.
                </p>
                <p className="font-ui mt-6 mb-3 text-xs font-bold tracking-widest text-brand uppercase">4 Departments</p>
                <div className="flex flex-wrap gap-2">
                  {tickerDepts.map((dep, i) => (
                    <span
                      key={dep}
                      className={`font-ui rounded-md border-2 border-ink px-3 py-1 text-sm font-bold uppercase shadow-hard-sm ${i % 2 ? "rotate-1 bg-accent" : "-rotate-1 bg-tint"}`}
                    >
                      {dep}
                    </span>
                  ))}
                </div>
                <Image
                  src="/orientation/aherf-logo.png"
                  alt="AHERF – Apollo Hospitals Educational and Research Foundation"
                  width={360}
                  height={162}
                  className="mt-8 h-14 w-auto"
                />
              </div>

              <div className="grid gap-4">
                {[
                  { role: "Principal", name: "Prof. & Dr. Hannah Rajsekhar", bg: "bg-brand text-white" },
                  { role: "Vice Principal", name: "Prof. & Dr. D. Varalakshmi", bg: "bg-accent text-ink" },
                  { role: "Parent Foundation", name: "Apollo Hospitals Educational & Research Foundation", bg: "bg-ink text-white" },
                ].map((p) => (
                  <div key={p.role} className={`reveal rounded-2xl border-2 border-ink p-6 shadow-hard transition hover:-translate-y-1 ${p.bg}`}>
                    <p className="font-ui text-xs font-bold tracking-widest uppercase opacity-80">{p.role}</p>
                    <p className="font-display mt-1 text-3xl leading-tight uppercase">{p.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Marquee
          items={tickerDepts}
          className="font-display -rotate-1 border-y-2 border-ink bg-brand py-3 text-3xl tracking-wide text-white uppercase"
        />

        {/* Departments */}
        <section id="departments" className="scroll-mt-36 md:scroll-mt-28 py-20">
          <div className="mx-auto max-w-6xl px-4">
            <Heading kicker="What we teach">Our Departments</Heading>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {departments.map((dept, i) => (
                <a
                  key={dept.name}
                  href="#faculty"
                  className={`reveal group flex flex-col rounded-2xl border-2 border-ink p-6 shadow-hard transition hover:-translate-y-1.5 ${["bg-white", "bg-accent", "bg-brand text-white", "bg-ink text-white"][i]}`}
                >
                  <span className="font-display text-6xl leading-none opacity-30">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-display mt-6 text-3xl leading-tight tracking-wide uppercase">{dept.name}</h3>
                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex -space-x-3">
                      {dept.people.map((p) => (
                        <span key={p.photo} className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-ink bg-white">
                          <Image src={`/orientation/staff/${p.photo}.jpg`} alt="" fill sizes="40px" className="object-cover object-top" />
                        </span>
                      ))}
                    </div>
                    <span className="font-ui text-xs font-bold tracking-widest uppercase opacity-80">
                      {dept.people.length} Faculty →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Faculty */}
        <Team
          id="faculty"
          members={teamMembers}
          kicker="Our team"
          heading="Faculty & Staff"
          groups={[...departments.map((dep) => dep.name), "Office Admin"]}
          className="scroll-mt-36 border-t-2 border-ink bg-tint py-20 md:scroll-mt-28"
        />

        {/* Numbers */}
        <section className="border-y-2 border-ink bg-ink py-20 text-white">
          <div className="mx-auto max-w-6xl px-4">
            <Heading kicker="At a glance" light>
              College in Numbers
            </Heading>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {[
                { v: "1999", l: "Year of foundation" },
                { v: `${yearsSince}+`, l: "Years of physiotherapy education" },
                { v: "4", l: "Specialised departments" },
                { v: `${facultyCount}`, l: "Faculty members" },
                { v: "85%", l: "Minimum attendance standard" },
              ].map((k, i) => (
                <div
                  key={k.l}
                  className={`reveal rounded-xl border-2 border-white/90 p-5 text-center transition hover:-translate-y-1 last:col-span-2 sm:last:col-span-1 ${i % 2 ? "bg-brand" : "bg-accent text-ink"}`}
                >
                  <p className="font-display text-5xl leading-none">{k.v}</p>
                  <p className="font-ui mt-3 text-xs font-bold tracking-wide uppercase opacity-90">{k.l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Guidelines */}
        <section id="guidelines" className="scroll-mt-36 md:scroll-mt-28 py-20">
          <div className="mx-auto max-w-4xl px-4">
            <Heading kicker="Campus culture">Student Guidelines</Heading>
            <div className="space-y-4">
              {guidelines.map((r, i) => (
                <details
                  key={r.title}
                  open={i === 0}
                  className="reveal group overflow-hidden rounded-xl border-2 border-ink bg-white shadow-hard"
                >
                  <summary className="flex cursor-pointer items-center gap-4 px-4 py-3 transition group-open:bg-accent hover:bg-tint sm:px-5">
                    <span className="font-display w-12 shrink-0 text-4xl leading-none text-brand group-open:text-ink">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display flex-1 text-xl tracking-wide text-ink uppercase sm:text-2xl">{r.title}</span>
                    <span className="chev flex h-8 w-8 shrink-0 items-center justify-center rounded-md border-2 border-ink bg-white text-xl leading-none font-bold transition-transform">
                      +
                    </span>
                  </summary>
                  <ul className="space-y-3 border-t-2 border-ink px-5 py-5">
                    {r.points.map((pt) => (
                      <li key={pt} className="flex gap-3 text-muted">
                        <span className="mt-1 text-brand">✦</span>
                        <span className="leading-relaxed">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Campus */}
        <section id="campus" className="scroll-mt-36 md:scroll-mt-28 border-t-2 border-ink bg-tint py-20">
          <div className="mx-auto max-w-6xl px-4">
            <Heading kicker="ACOP @ glance">Life at Campus</Heading>
            <div className="grid items-start gap-6 md:grid-cols-[2fr_1fr]">
              <div className="grid gap-6">
                <figure className="reveal -rotate-1 overflow-hidden rounded-xl border-2 border-ink bg-white p-2 shadow-hard">
                  <Image src="/orientation/group-1.jpg" alt="Students and faculty of Apollo College of Physiotherapy" width={1080} height={358} sizes="(min-width: 768px) 66vw, 100vw" className="h-auto w-full rounded-lg" />
                </figure>
                <figure className="reveal rotate-1 overflow-hidden rounded-xl border-2 border-ink bg-white p-2 shadow-hard">
                  <Image src="/orientation/group-2.jpg" alt="Faculty of Apollo College of Physiotherapy" width={1080} height={513} sizes="(min-width: 768px) 66vw, 100vw" className="h-auto w-full rounded-lg" />
                </figure>
              </div>
              <figure className="reveal relative rotate-2 overflow-hidden rounded-xl border-2 border-ink bg-white p-2 shadow-hard">
                <Image src="/orientation/pmr-opd.jpg" alt="Department of Physical Medicine and Rehabilitation OPD" width={1050} height={1400} sizes="(min-width: 768px) 33vw, 100vw" className="h-auto w-full rounded-lg" />
                <figcaption className="font-display px-1 pt-3 pb-1 text-xl tracking-wide uppercase">
                  Physical Medicine &amp; Rehabilitation OPD
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="relative overflow-hidden py-24 text-center">
          <Starburst className="absolute top-10 left-[6%] hidden h-24 w-24 rotate-12 sm:block" />
          <div className="mx-auto max-w-3xl px-4">
            <p className="font-display reveal text-6xl leading-none tracking-tight text-ink uppercase sm:text-8xl">
              Shaping Physiotherapists Since 1999
            </p>
            <p className="mt-6 text-lg text-muted">
              Apollo College of Physiotherapy · A unit of the Apollo Hospitals Educational and Research Foundation.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="#departments"
                className="font-ui rounded-md border-2 border-ink bg-ink px-5 py-3 text-sm font-bold text-white uppercase shadow-hard-sm transition hover:-translate-y-0.5"
              >
                Our Departments
              </a>
              <a
                href="#faculty"
                className="font-ui rounded-md border-2 border-ink bg-white px-5 py-3 text-sm font-bold text-ink uppercase shadow-hard-sm transition hover:-translate-y-0.5"
              >
                Meet the Faculty
              </a>
            </div>
          </div>
        </section>
      </main>

      <Marquee items={tickerTop} className="font-ui border-t-2 border-ink bg-accent py-2 text-[11px] font-bold tracking-widest text-ink uppercase" />
      <footer className="bg-ink text-white/80">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm sm:flex-row">
          <p>
            <span className="font-display text-lg tracking-wide text-white uppercase">Apollo College of Physiotherapy</span> · A unit of AHERF
          </p>
          <p className="font-ui text-xs font-bold tracking-widest uppercase">Est. 1999</p>
        </div>
      </footer>
    </>
  );
}
