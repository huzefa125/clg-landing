import Image from "next/image";

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
  {
    name: "Office Admin",
    people: [{ name: "Mr. P. Sunil Raju", photo: "sunil-raju" }],
  },
];

const rules: { title: string; points: string[] }[] = [
  {
    title: "Behaviour & Dress Code",
    points: [
      "Strictly adhere to institutional rules on clinical attire, professional conduct and discipline at all times.",
      "Anti-ragging regulations are enforced rigorously.",
      "Wear your scrubs and college ID card during college and clinical hours.",
      "Men: neat scrub, clean shaven, formal shoes, trimmed nails. Jeans, T-shirts, chappals, flip-flops and sandals are not permitted.",
      "Women: scrub with a black undershirt, formal shoes, tied hair and trimmed nails. Loose hair, nail polish, jeans, T-shirts, high-slit / above-knee / deep-neck tops, make-up and big or long earrings are not permitted.",
    ],
  },
  {
    title: "Attendance",
    points: [
      "A minimum of 85% attendance is strictly required in theory, clinical and practical sessions.",
      "College hours are 8:00 am to 4:00 pm. Grace time till 8:15 am; after that you are marked late, and three late comings count as one absent.",
      "Take prior permission for leave and inform both coordinators in writing.",
      "Attendance for internal examinations is compulsory.",
      "Cell phones may be used only during free hours.",
    ],
  },
  {
    title: "Log Book Maintenance",
    points: [
      "Purchase the log book from the college and document your daily academic and clinical activities in it.",
      "Update it regularly and get it verified and signed by your guide/supervisor at periodic intervals.",
    ],
  },
  {
    title: "Clinical Postings",
    points: [
      "MPT students are expected to show a high level of involvement and commitment in clinical practice throughout the program.",
      "Whenever you are asked to attend clinical postings, be present without fail.",
      "One holiday duty earns only one compensatory off, to be availed within a week. Comp-offs cannot be accumulated.",
      "Always mention the holiday duty date when posting a comp-off message in the WhatsApp group.",
    ],
  },
  {
    title: "Dissertation Work",
    points: [
      "Begin or continue your dissertation research, including the synopsis and ethical clearance, under the supervision of a guide.",
      "Review and document progress weekly and get it signed by your supervisor.",
    ],
  },
  {
    title: "Academic Activities",
    points: [
      "Journal presentations: approximately 5 per year.",
      "Seminars and case presentations: minimum 5 each per year.",
      "Undergraduate teaching and training: 5 sessions per year.",
      "Present as per the given schedule. No delays, pre-ponement or postponement will be entertained.",
      "Meet your moderator one week before the presentation and follow the guidance given.",
    ],
  },
  {
    title: "Clinical Rounds",
    points: [
      "Actively participate in clinical rounds, totalling approximately 550 hours over the academic year.",
      "Register a minimum of 20 cases in the log book, or one case per week.",
    ],
  },
  {
    title: "Internal Assessment",
    points: [
      "Perform consistently in periodic evaluations, including mid-term and pre-final examinations.",
      "These contribute to internal assessment, typically 20%–35% of total marks.",
    ],
  },
  {
    title: "Fees & No Discontinuation",
    points: [
      "Fees once paid are generally non-refundable if a student discontinues or fails to join after reporting.",
      "Clear all dues, including the full 2nd-year fee, before the 1st-year MPT examinations begin.",
    ],
  },
];

const tickerTop = [
  "Welcome MPT 2026 Batch",
  "Orientation Session",
  "Apollo College of Physiotherapy",
  "Est. 1999",
  "Part of AHERF",
  "MPT since 2014",
];

const tickerDepts = [
  "Orthopaedics",
  "Neurosciences",
  "Cardiopulmonary",
  "Sports Medicine",
];

const nav = [
  { href: "#about", label: "About" },
  { href: "#faculty", label: "Faculty" },
  { href: "#rules", label: "Rules" },
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
      <header className="sticky top-0 z-50 border-b-2 border-ink bg-accent">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <a href="#top" className="flex items-center gap-2 rounded-lg bg-white px-2 py-1 shadow-hard-sm ring-2 ring-ink">
            <Image src="/orientation/apollo-logo.png" alt="Apollo College of Physiotherapy" width={280} height={207} className="h-9 w-auto" loading="eager" />
            <span className="font-display hidden text-lg leading-none tracking-wide text-brand-deep uppercase sm:block">
              College of
              <br />
              Physiotherapy
            </span>
          </a>
          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="font-ui rounded-md px-3 py-2 text-sm font-bold text-ink uppercase transition hover:bg-white/40">
                {n.label} <span className="text-brand-deep">+</span>
              </a>
            ))}
          </nav>
          <a href="#rules" className="font-ui flex items-center gap-2 rounded-md bg-ink py-2 pr-2 pl-4 text-xs font-bold text-white uppercase transition hover:bg-brand-deep">
            Read Rules
            <span className="flex h-6 w-6 items-center justify-center rounded bg-white text-ink">→</span>
          </a>
        </div>
        <nav className="flex justify-around border-t-2 border-ink bg-white md:hidden">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="font-ui flex-1 py-2 text-center text-xs font-bold text-ink uppercase">
              {n.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="top" className="flex-1">
        {/* Hero */}
        <section className="hero-bg relative overflow-hidden border-b-2 border-ink bg-accent">
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-12 sm:px-6 sm:py-16 lg:min-h-[calc(100svh-6.25rem)] lg:grid-cols-[1fr_1.05fr] lg:gap-10 lg:py-10">
            {/* Left: copy */}
            <div className="relative z-10 text-center lg:text-left">
              <span
                className="rise font-ui inline-block -rotate-2 rounded-md border-2 border-ink bg-white px-3 py-1 text-[10px] font-bold tracking-widest uppercase shadow-hard-sm sm:text-xs"
                style={d(0)}
              >
                Apollo College of Physiotherapy
              </span>

              <h1 className="font-display mt-5 uppercase">
                <span
                  className="rise block text-[clamp(1.6rem,3.2vw,2.6rem)] leading-none tracking-wide text-white [text-shadow:2px_2px_0_var(--color-ink)]"
                  style={d(0.1)}
                >
                  MPT 1st Year · 2026 Batch
                </span>
                <span
                  className="rise mt-2 block text-[clamp(3.6rem,min(9vw,14svh),7.5rem)] leading-[0.88] tracking-tight text-ink"
                  style={d(0.2)}
                >
                  Orientation
                </span>
                <span
                  className="rise block text-[clamp(3.6rem,min(9vw,14svh),7.5rem)] leading-[0.88] tracking-tight text-ink"
                  style={d(0.3)}
                >
                  Session
                </span>
              </h1>

              <p
                className="rise mx-auto mt-5 max-w-md text-base leading-relaxed text-ink/80 sm:text-lg lg:mx-0"
                style={d(0.4)}
              >
                Welcome to Apollo College of Physiotherapy. Get to know your college, meet your faculty, and read the
                rules that will guide your MPT journey.
              </p>

              <div className="rise mt-7 flex flex-wrap items-center justify-center gap-3 lg:justify-start" style={d(0.5)}>
                <a
                  href="#faculty"
                  className="font-ui group inline-flex items-center gap-2 rounded-md border-2 border-ink bg-ink py-2 pr-2 pl-5 text-sm font-bold text-white uppercase shadow-hard transition hover:-translate-y-0.5 hover:bg-brand-deep"
                >
                  Meet Your Faculty
                  <span className="flex h-7 w-7 items-center justify-center rounded bg-white text-ink transition group-hover:translate-x-0.5">
                    →
                  </span>
                </a>
                <a
                  href="#rules"
                  className="font-ui inline-flex items-center rounded-md border-2 border-ink bg-white px-5 py-[0.7rem] text-sm font-bold text-ink uppercase shadow-hard transition hover:-translate-y-0.5"
                >
                  Read the Rules
                </a>
              </div>

              <div className="mx-auto mt-8 grid max-w-md grid-cols-4 gap-2 sm:gap-3 lg:mx-0">
                {[
                  { v: "85%", l: "Attendance" },
                  { v: "8:00", l: "Start time" },
                  { v: "550", l: "Clinic hrs" },
                  { v: "20+", l: "Cases" },
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
                {/* group photo */}
                <figure className="pop relative col-span-3 aspect-[16/11] -rotate-2 overflow-hidden rounded-2xl border-2 border-ink bg-white shadow-hard" style={d(0.3)}>
                  <Image src="/orientation/group-2.jpg" alt="Faculty of Apollo College of Physiotherapy" fill sizes="(min-width: 1024px) 380px, 60vw" className="object-cover" preload />
                </figure>
                {/* principal */}
                <figure className="pop relative col-span-2 row-span-2 rotate-2 overflow-hidden rounded-2xl border-2 border-ink bg-white shadow-hard" style={d(0.45)}>
                  <Image src="/orientation/staff/hannah-rajsekhar.jpg" alt="Principal Prof. & Dr. Hannah Rajsekhar" fill sizes="(min-width: 1024px) 260px, 40vw" className="object-cover object-top" />
                  <figcaption className="absolute inset-x-2 bottom-2 rounded-lg border-2 border-ink bg-white px-2 py-1.5 text-center">
                    <span className="font-ui block text-[9px] font-bold tracking-widest text-brand uppercase sm:text-[10px]">Principal</span>
                    <span className="font-display block text-sm leading-tight uppercase sm:text-base">Dr. Hannah Rajsekhar</span>
                  </figcaption>
                </figure>
                {/* coordinator + OPD */}
                <div className="col-span-3 grid grid-cols-2 gap-3 sm:gap-4">
                  <figure className="pop relative aspect-[4/5] rotate-1 overflow-hidden rounded-2xl border-2 border-ink bg-white shadow-hard" style={d(0.6)}>
                    <Image src="/orientation/staff/n-mary.jpg" alt="Class coordinator Dr. N. Mary" fill sizes="(min-width: 1024px) 190px, 30vw" className="object-cover object-top" />
                    <figcaption className="font-ui absolute top-2 right-2 rounded border-2 border-ink bg-flame px-2 py-0.5 text-[9px] font-bold text-white uppercase sm:text-[10px]">
                      Coordinator
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
                MPT since 2014
              </span>
              <div className="rise absolute -bottom-10 -left-8 z-10 hidden sm:block lg:-left-12" style={d(1.1)}>
                <SpinBadge text="WELCOME • ORIENTATION 2026 • MPT BATCH • " className="relative" />
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-28 py-20">
          <div className="mx-auto max-w-6xl px-4">
            <Heading kicker="Who we are">About the College</Heading>
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="reveal rounded-2xl border-2 border-ink bg-white p-6 shadow-hard sm:p-8">
                <p className="text-lg leading-relaxed text-muted">
                  Founded in <strong className="text-ink">1999</strong>, Apollo College of Physiotherapy is part of the{" "}
                  <strong className="text-ink">Apollo Hospitals Educational and Research Foundation (AHERF)</strong>. The
                  Master of Physiotherapy (MPT) program began in <strong className="text-ink">2014</strong>.
                </p>
                <p className="font-ui mt-6 mb-3 text-xs font-bold tracking-widest text-brand uppercase">4 Departments</p>
                <div className="flex flex-wrap gap-2">
                  {["Orthopaedics", "Neurosciences", "Cardiopulmonary", "Sports Medicine"].map((d, i) => (
                    <span
                      key={d}
                      className={`font-ui rounded-md border-2 border-ink px-3 py-1 text-sm font-bold uppercase shadow-hard-sm ${i % 2 ? "rotate-1 bg-accent" : "-rotate-1 bg-tint"}`}
                    >
                      {d}
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
                  { role: "Class Coordinators", name: "Dr. N. Mary & Dr. Komal Nagar", bg: "bg-ink text-white" },
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

        {/* Faculty */}
        <section id="faculty" className="scroll-mt-28 py-20">
          <div className="mx-auto max-w-6xl px-4">
            <Heading kicker="Our team">Faculty & Staff</Heading>
            <div className="space-y-16">
              {departments.map((dept) => (
                <div key={dept.name}>
                  <div className="reveal mb-6 flex items-center gap-4">
                    <h3 className="font-display text-3xl tracking-wide text-brand-deep uppercase sm:text-4xl">{dept.name}</h3>
                    <span className="h-0.5 flex-1 bg-ink" />
                    <span className="font-ui rounded-full border-2 border-ink bg-accent px-3 py-0.5 text-xs font-bold">
                      {dept.people.length}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
                    {dept.people.map((p, i) => (
                      <figure
                        key={p.name}
                        className={`reveal group relative rounded-xl border-2 border-ink bg-white p-2 shadow-hard transition hover:rotate-0 ${i % 2 ? "rotate-1" : "-rotate-1"}`}
                      >
                        <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-line">
                          <Image
                            src={`/orientation/staff/${p.photo}.jpg`}
                            alt={p.name}
                            fill
                            sizes="(min-width: 1024px) 260px, (min-width: 640px) 33vw, 50vw"
                            className="object-cover object-top transition duration-500 group-hover:scale-105"
                          />
                        </div>
                        <figcaption className="font-ui px-1 pt-3 pb-1 text-center text-sm font-bold text-ink">
                          {p.name}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Numbers */}
        <section className="border-y-2 border-ink bg-ink py-20 text-white">
          <div className="mx-auto max-w-6xl px-4">
            <Heading kicker="At a glance" light>
              Numbers to Remember
            </Heading>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {[
                { v: "85%", l: "Minimum attendance in theory & clinicals" },
                { v: "8–4", l: "College hours · grace till 8:15 am" },
                { v: "550", l: "Hours of clinical rounds per year" },
                { v: "20+", l: "Log book cases (≈1 per week)" },
                { v: "35%", l: "Internal assessment, up to (20–35%)" },
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

        {/* Rules */}
        <section id="rules" className="scroll-mt-28 py-20">
          <div className="mx-auto max-w-4xl px-4">
            <Heading kicker="Please read carefully">Rules & Regulations</Heading>
            <div className="space-y-4">
              {rules.map((r, i) => (
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
        <section id="campus" className="scroll-mt-28 border-t-2 border-ink bg-accent py-20">
          <div className="mx-auto max-w-6xl px-4">
            <Heading kicker="ACOP @ glance">Life at Campus</Heading>
            <div className="grid items-start gap-6 md:grid-cols-[2fr_1fr]">
              <div className="grid gap-6">
                <figure className="-rotate-1 reveal overflow-hidden rounded-xl border-2 border-ink bg-white p-2 shadow-hard">
                  <Image src="/orientation/group-1.jpg" alt="Students and faculty of Apollo College of Physiotherapy" width={1080} height={358} sizes="(min-width: 768px) 66vw, 100vw" className="h-auto w-full rounded-lg" />
                </figure>
                <figure className="rotate-1 reveal overflow-hidden rounded-xl border-2 border-ink bg-white p-2 shadow-hard">
                  <Image src="/orientation/group-2.jpg" alt="Faculty gathering at Apollo College of Physiotherapy" width={1080} height={513} sizes="(min-width: 768px) 66vw, 100vw" className="h-auto w-full rounded-lg" />
                </figure>
              </div>
              <figure className="relative rotate-2 reveal overflow-hidden rounded-xl border-2 border-ink bg-white p-2 shadow-hard">
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
            <p className="font-display reveal text-7xl leading-none tracking-tight text-ink uppercase sm:text-9xl">Thank You!</p>
            <p className="mt-6 text-lg text-muted">
              Welcome to the team. We wish you a rewarding journey through your MPT program at Apollo College of
              Physiotherapy.
            </p>
            <div className="mt-8 flex justify-center">
              <span className="font-ui -rotate-2 rounded-md border-2 border-ink bg-flame px-4 py-2 text-sm font-bold text-white uppercase shadow-hard-sm">
                Welcome to the team
              </span>
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
          <p className="font-ui text-xs font-bold tracking-widest uppercase">MPT 1st Year 2026 · Orientation</p>
        </div>
      </footer>
    </>
  );
}
