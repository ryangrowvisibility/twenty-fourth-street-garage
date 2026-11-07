import Icon, { Stars } from "./Icon";
import Reveal from "./Reveal";

const PHONE = "(916) 456-9812";
const TEL = "tel:+19164569812";
const MAPS =
  "https://www.google.com/maps/search/?api=1&query=Twenty-Fourth%20Street%20Garage&query_place_id=ChIJj4O5Y_nQmoARr1RZR2g51Mk";
const NEXTDOOR = "https://nextdoor.com/pages/twenty-fourth-street-garage-sacramento-ca/";
const ADDRESS = "2740 24th St, Sacramento, CA 95818";

const services = [
  {
    icon: "wrench",
    name: "General Auto Repair",
    text: "Repairs on all makes and models, from the noise you can't place to the part that finally gave out. Jeff looks at the car, tells you what it needs, and gives you the price before he starts.",
    featured: true,
  },
  {
    icon: "cog",
    name: "Engine Repair",
    text: "Leaks, misfires, overheating, rough idle and worn parts. You get a straight answer on whether a repair is worth it for your car, not a sales pitch for the biggest job.",
  },
  {
    icon: "disc",
    name: "Brake Service",
    text: "Brake inspections, pads, rotors and brake light repairs. If a part has to be ordered, the shop orders it and calls you when it is in and the car is ready.",
  },
  {
    icon: "gauge",
    name: "Diagnostics",
    text: "Check engine light on? Jeff finds the actual cause before replacing anything, so you pay for the fix you need and not a string of guesses.",
  },
  {
    icon: "drop",
    name: "Routine Maintenance",
    text: "Oil changes, fluids, filters, belts and the regular service that keeps a daily driver running for years. Bring the family cars too. Plenty of customers do.",
  },
  {
    icon: "tag",
    name: "Up-Front Estimates",
    text: "You hear the time and the price before work begins, and Jeff calls to confirm before doing anything extra. No surprise line items when you pick up.",
  },
];

const reviews = [
  {
    name: "Richard Q.",
    job: "Repair work",
    text: "Jeff is great to deal with. He's honest about what actually needs doing and always checks time and price with you before any extra work.",
  },
  {
    name: "Google reviewer",
    job: "Repair quote",
    text: "Old-school garage in the best way. He answered the phone himself, quoted right away, finished in one day like he said, and came in about $200 under the other shop.",
  },
  {
    name: "Jaxs",
    job: "Brake light repair",
    text: "Fixed my broken brake light in about two days. He ordered the part for me and it works like new. Honest pricing too.",
  },
  {
    name: "Heidi S.",
    job: "Family vehicles",
    text: "Honest, fair and quality work. We bring my car, my mother's car and my brother's car here, and I recommend him to everyone I know.",
  },
  {
    name: "Tony P.",
    job: "General repair",
    text: "An actually honest mechanic, a real gem. One tip: make an appointment and don't be late, because he is very busy.",
  },
  {
    name: "Marina F.",
    job: "Repair visit",
    text: "Clear communication and great pricing. Thank you for the help. Highly recommend.",
  },
];

const steps = [
  { title: "Call Jeff", text: `Ring ${PHONE} Monday through Thursday. Jeff usually answers himself. Tell him what the car is doing.` },
  { title: "Book a time", text: "The garage works by appointment because it stays busy. Pick a slot that suits you and arrive on time." },
  { title: "Get the price first", text: "Jeff checks the car and tells you what it needs, how long it takes and what it costs before he starts." },
  { title: "Pick up your car", text: "Most jobs are done when promised, often the same day. Anything extra gets a phone call first." },
];

const faqs = [
  {
    q: "Do I need an appointment?",
    a: "Yes, please call ahead. Twenty-Fourth Street Garage is a small, busy shop and works by appointment. Call (916) 456-9812 and Jeff will find you a time. Customers say it helps to show up on time.",
  },
  {
    q: "What are your hours?",
    a: "Monday through Thursday, 7:30 AM to 5:00 PM. The shop is closed Friday, Saturday and Sunday, so call early in the week if you need the car back before the weekend.",
  },
  {
    q: "Will I know the price before you start?",
    a: "Yes. Jeff gives you the time and the price up front, and he calls to confirm before doing any extra work. Reviewers mention this more than anything else.",
  },
  {
    q: "What kinds of cars do you work on?",
    a: "General repair for all makes: engine work, brakes, diagnostics and routine maintenance. If you are not sure whether your job is a fit, call and ask. You will get a straight answer.",
  },
  {
    q: "Where are you located?",
    a: "2740 24th St, Sacramento, CA 95818, in the Curtis Park area of central Sacramento. Most customers come from Curtis Park, Land Park, Oak Park and the neighborhoods around 24th Street.",
  },
  {
    q: "What if you need to order a part?",
    a: "The shop orders it for you and lets you know when it arrives and when the car will be ready. Small jobs like a brake light can turn around in a couple of days.",
  },
];

const areas = ["Curtis Park", "Land Park", "Oak Park", "Hollywood Park", "Tahoe Park", "Elmhurst", "Midtown", "Central Sacramento 95818"];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Twenty-Fourth Street Garage",
  telephone: "+1-916-456-9812",
  address: { "@type": "PostalAddress", streetAddress: "2740 24th St", addressLocality: "Sacramento", addressRegion: "CA", postalCode: "95818", addressCountry: "US" },
  openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "07:30", closes: "17:00" }],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.6", reviewCount: "29" },
  areaServed: "Sacramento, CA",
  sameAs: [NEXTDOOR],
  hasMap: MAPS,
};

function CallButton({ label = `Call ${PHONE}`, className = "" }: { label?: string; className?: string }) {
  return (
    <a href={TEL} className={`btn btn-call inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-xl bg-cta px-6 font-semibold text-white shadow-sm hover:bg-cta-dark ${className}`}>
      <span className="handset inline-flex"><Icon name="phone" className="h-5 w-5" /></span>
      {label}
    </a>
  );
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Reveal />
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2">Skip to content</a>

      {/* Utility strip */}
      <div className="hidden bg-brand-dark text-[15px] text-white md:block">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-2">
          <span className="inline-flex items-center gap-2"><Icon name="pin" className="h-4 w-4" />2740 24th St, Curtis Park, Sacramento</span>
          <span className="inline-flex items-center gap-2"><Icon name="clock" className="h-4 w-4" />Mon to Thu, 7:30 AM to 5 PM · By appointment</span>
        </div>
      </div>

      {/* Sticky header */}
      <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-5 py-3 md:px-6">
          <a href="#top" className="flex items-center gap-2.5" aria-label="Twenty-Fourth Street Garage home">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand text-white"><Icon name="wrench" className="h-5 w-5" /></span>
            <span className="font-heading text-[1.3rem] font-bold leading-none text-ink">Twenty-Fourth<br className="sm:hidden" /> Street Garage</span>
          </a>
          <nav aria-label="Main" className="hidden items-center gap-7 text-[16px] font-medium text-muted lg:flex">
            <a href="#services" className="hover:text-brand">Services</a>
            <a href="#reviews" className="hover:text-brand">Reviews</a>
            <a href="#about" className="hover:text-brand">About Jeff</a>
            <a href="#faq" className="hover:text-brand">FAQ</a>
            <a href="#contact" className="hover:text-brand">Location</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href={TEL} className="hidden font-semibold text-ink hover:text-brand md:inline">{PHONE}</a>
            <CallButton label="Call Now" className="hidden md:inline-flex" />
            <a href={TEL} aria-label={`Call ${PHONE}`} className="btn grid h-12 w-12 place-items-center rounded-xl bg-cta text-white md:hidden"><Icon name="phone" className="h-5 w-5" /></a>
          </div>
        </div>
      </header>

      <main id="main">
        {/* Hero */}
        <section id="top" className="relative overflow-hidden bg-paper">
          <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 pb-16 pt-12 md:px-6 md:pb-24 md:pt-20 lg:grid-cols-[1.15fr_1fr]">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-soft px-3.5 py-1.5 text-[15px] font-semibold text-brand-dark">
                <Icon name="pin" className="h-4 w-4" /> Independent garage in Curtis Park
              </p>
              <h1 className="text-[clamp(2.25rem,5vw,3.6rem)] text-ink">
                Honest Auto Repair in Sacramento&apos;s Curtis Park
              </h1>
              <p className="mt-5 max-w-[58ch] text-[1.15rem] text-muted">
                Engine work, brakes, diagnostics and maintenance from Jeff, the owner, who answers the phone himself,
                quotes before he starts, and calls you before doing anything extra.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CallButton />
                <a href="#services" className="btn inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl border-2 border-ink/15 bg-white px-6 font-semibold text-ink hover:border-brand hover:text-brand">
                  See our services <Icon name="arrow" className="h-5 w-5" />
                </a>
              </div>
              <ul className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[15.5px] text-muted" aria-label="Why customers trust us">
                <li className="inline-flex items-center gap-2"><Stars className="h-[18px] w-[18px]" /><strong className="text-ink">4.6</strong> · 29 Google reviews</li>
                <li className="inline-flex items-center gap-1.5"><Icon name="user" className="h-[18px] w-[18px] text-brand" />Owner on every job</li>
                <li className="inline-flex items-center gap-1.5"><Icon name="tag" className="h-[18px] w-[18px] text-brand" />Price before work</li>
              </ul>
            </div>

            {/* Featured review card */}
            <figure className="relative rounded-2xl border border-line bg-white p-7 shadow-[0_24px_50px_-30px_oklch(0.3_0.05_45/0.5)] md:p-9">
              <div className="flex items-center justify-between">
                <Stars />
                <span className="text-[14px] font-medium text-muted">Google review</span>
              </div>
              <blockquote className="mt-5 font-heading text-[1.5rem] font-semibold leading-snug text-ink md:text-[1.7rem]">
                &ldquo;He answers the phone himself, quotes right away, and did the work in one day. About $200 cheaper than the other garage.&rdquo;
              </blockquote>
              <figcaption className="mt-5 text-[15.5px] text-muted">Repeat customer · general repair</figcaption>
              <div className="mt-7 grid grid-cols-2 gap-3 border-t border-line pt-6 text-[15px]">
                <div className="flex items-start gap-2.5"><Icon name="clock" className="mt-0.5 h-5 w-5 shrink-0 text-brand" /><span><strong className="block text-ink">Mon to Thu</strong>7:30 AM to 5 PM</span></div>
                <div className="flex items-start gap-2.5"><Icon name="calendar" className="mt-0.5 h-5 w-5 shrink-0 text-brand" /><span><strong className="block text-ink">By appointment</strong>Call to book</span></div>
              </div>
            </figure>
          </div>
        </section>

        {/* Trust bar */}
        <section aria-label="At a glance" className="bg-brand text-white">
          <ul className="mx-auto grid max-w-[1200px] grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4 md:px-6">
            {[
              { i: "star", t: "4.6 stars", s: "29 Google reviews" },
              { i: "user", t: "Owner-run", s: "Jeff does the work" },
              { i: "tag", t: "Quote up front", s: "Time and price first" },
              { i: "pin", t: "Curtis Park", s: "2740 24th St" },
            ].map((x) => (
              <li key={x.t} className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/15"><Icon name={x.i} className="h-5 w-5" /></span>
                <span><strong className="block font-heading text-[1.15rem]">{x.t}</strong><span className="text-[15px] text-white/85">{x.s}</span></span>
              </li>
            ))}
          </ul>
        </section>

        {/* Services */}
        <section id="services" className="bg-paper py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="max-w-[640px]">
              <p className="font-semibold text-brand">What we fix</p>
              <h2 className="mt-2 text-[clamp(1.9rem,3.5vw,2.6rem)]">Auto repair services on 24th Street</h2>
              <p className="mt-4 text-muted">
                A small independent garage that handles the repairs most drivers need. Every job starts the same way: Jeff
                looks at the car, tells you what it needs, and gives you the price before any work begins.
              </p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <article key={s.name} className={`reveal card-lift flex flex-col rounded-2xl border bg-white p-7 ${s.featured ? "border-brand ring-1 ring-brand" : "border-line"}`}>
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand-dark"><Icon name={s.icon} /></span>
                    {s.featured && <span className="rounded-full bg-brand px-3 py-1 text-[13px] font-semibold text-white">Most requested</span>}
                  </div>
                  <h3 className="mt-5 text-[1.35rem]">{s.name}</h3>
                  <p className="mt-2.5 flex-1 text-[16.5px] text-muted">{s.text}</p>
                  <a href={TEL} className="mt-5 inline-flex items-center gap-1.5 font-semibold text-brand hover:text-brand-dark">
                    Call about this <Icon name="arrow" className="h-4 w-4" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="font-semibold text-brand">What customers say</p>
                <h2 className="mt-2 text-[clamp(1.9rem,3.5vw,2.6rem)]">Rated 4.6 from 29 Google reviews</h2>
                <p className="mt-3 max-w-[56ch] text-muted">The word that keeps coming up is honest. Here is what Sacramento drivers say after a visit.</p>
              </div>
              <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn inline-flex min-h-[48px] items-center gap-2 self-start rounded-xl border-2 border-ink/15 bg-white px-5 font-semibold hover:border-brand hover:text-brand md:self-auto">
                Read all reviews on Google <Icon name="arrow" className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((r) => (
                <figure key={r.name + r.job} className="reveal flex flex-col rounded-2xl border border-line bg-white p-6">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-brand-soft font-heading text-[1.1rem] font-bold text-brand-dark" aria-hidden="true">
                      {r.name === "Google reviewer" ? "G" : r.name[0]}
                    </span>
                    <figcaption>
                      <strong className="block text-ink">{r.name}</strong>
                      <span className="text-[14.5px] text-muted">{r.job}</span>
                    </figcaption>
                  </div>
                  <Stars className="mt-4 h-[18px] w-[18px]" />
                  <blockquote className="mt-3 flex-1 text-[16.5px] leading-relaxed text-ink/90">&ldquo;{r.text}&rdquo;</blockquote>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-paper py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-12 px-5 md:px-6 lg:grid-cols-2">
            <div>
              <p className="font-semibold text-brand">About the garage</p>
              <h2 className="mt-2 text-[clamp(1.9rem,3.5vw,2.6rem)]">A neighborhood mechanic who tells you the truth</h2>
              <div className="mt-5 space-y-4 text-muted">
                <p>
                  Twenty-Fourth Street Garage is a small independent repair shop in Curtis Park, run by owner Jeff. There is no
                  service writer and no call center. When you phone the shop, you are usually talking to the person who will
                  work on your car.
                </p>
                <p>
                  Jeff runs the place the old-school way. He listens to what the car is doing, gives you a quote right away,
                  and sticks to it. If he finds something else while he is in there, he calls you first and lets you decide.
                  Customers say that is exactly why they keep coming back, and why they send their parents, siblings and
                  neighbors too.
                </p>
                <p>
                  The garage is open Monday through Thursday and stays booked, so appointments matter. Call ahead, show up on
                  time, and you will get careful work at a fair price, often for less than the bigger shops quote.
                </p>
              </div>
            </div>
            <ul className="grid content-start gap-4 sm:grid-cols-2">
              {[
                { i: "phone", t: "Jeff picks up", s: "Call the shop and you usually reach the owner, not a front desk." },
                { i: "tag", t: "Price before work", s: "Time and cost confirmed up front, and again before anything extra." },
                { i: "bolt", t: "Done when promised", s: "Many jobs finish the same day. Parts get ordered for you." },
                { i: "users", t: "Whole-family shop", s: "Customers bring every car in the family here and recommend it to friends." },
              ].map((d) => (
                <li key={d.t} className="reveal rounded-2xl border border-line bg-white p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand text-white"><Icon name={d.i} className="h-5 w-5" /></span>
                  <h3 className="mt-4 text-[1.2rem]">{d.t}</h3>
                  <p className="mt-1.5 text-[16px] text-muted">{d.s}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <p className="font-semibold text-brand">How it works</p>
            <h2 className="mt-2 text-[clamp(1.9rem,3.5vw,2.6rem)]">Getting your car fixed, in four steps</h2>
            <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <li key={s.title} className="reveal rounded-2xl border border-line bg-white p-6">
                  <span className="font-heading text-[3rem] font-bold leading-none text-brand">{i + 1}</span>
                  <h3 className="mt-4 text-[1.25rem]">{s.title}</h3>
                  <p className="mt-2 text-[16px] text-muted">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Service area */}
        <section id="contact" className="bg-paper py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-10 px-5 md:px-6 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="font-semibold text-brand">Where to find us</p>
              <h2 className="mt-2 text-[clamp(1.9rem,3.5vw,2.6rem)]">Serving Curtis Park and central Sacramento</h2>
              <p className="mt-4 text-muted">
                The garage sits at 2740 24th St, an easy drop-off for drivers from the neighborhoods below. Coming from farther
                away? Call and ask. Plenty of customers make the drive for an honest quote.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {areas.map((a) => (
                  <li key={a} className="rounded-full border border-line bg-white px-4 py-2 text-[15.5px] font-medium">{a}</li>
                ))}
              </ul>
              <div className="mt-8 space-y-3 text-[16.5px]">
                <p className="flex items-start gap-3"><Icon name="pin" className="mt-0.5 h-5 w-5 shrink-0 text-brand" />{ADDRESS}</p>
                <p className="flex items-start gap-3"><Icon name="clock" className="mt-0.5 h-5 w-5 shrink-0 text-brand" />Mon to Thu 7:30 AM to 5:00 PM · Fri to Sun closed</p>
                <p className="flex items-start gap-3"><Icon name="phone" className="mt-0.5 h-5 w-5 shrink-0 text-brand" /><a href={TEL} className="font-semibold hover:text-brand">{PHONE}</a></p>
              </div>
              <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn mt-7 inline-flex min-h-[48px] items-center gap-2 rounded-xl border-2 border-ink/15 bg-white px-5 font-semibold hover:border-brand hover:text-brand">
                Get directions <Icon name="arrow" className="h-4 w-4" />
              </a>
            </div>
            <div className="overflow-hidden rounded-2xl border border-line bg-white">
              <iframe
                title="Map of Twenty-Fourth Street Garage, 2740 24th St, Sacramento"
                src="https://maps.google.com/maps?q=2740%2024th%20St%2C%20Sacramento%2C%20CA%2095818&output=embed"
                className="h-[360px] w-full md:h-full md:min-h-[440px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-tint py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-10 px-5 md:px-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="font-semibold text-brand">Questions</p>
              <h2 className="mt-2 text-[clamp(1.9rem,3.5vw,2.6rem)]">Frequently asked questions</h2>
              <p className="mt-4 text-muted">Don&apos;t see yours? Jeff is happy to answer it on the phone.</p>
              <a href={TEL} className="mt-5 inline-flex items-center gap-2 font-semibold text-brand hover:text-brand-dark"><Icon name="phone" className="h-5 w-5" />{PHONE}</a>
            </div>
            <div className="divide-y divide-line rounded-2xl border border-line bg-white">
              {faqs.map((f) => (
                <details key={f.q} className="group px-6">
                  <summary className="flex min-h-[64px] items-center justify-between gap-4 py-4 font-heading text-[1.2rem] font-semibold text-ink">
                    {f.q}
                    <span className="faq-icon grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-soft text-brand-dark"><Icon name="plus" className="h-5 w-5" /></span>
                  </summary>
                  <p className="pb-5 pr-10 text-[16.5px] text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-paper py-16 md:py-20">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="relative overflow-hidden rounded-3xl bg-brand px-7 py-12 text-white md:px-14 md:py-16">
              <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10" aria-hidden="true" />
              <div className="relative grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
                <div>
                  <h2 className="text-[clamp(1.9rem,4vw,2.8rem)]">Car acting up? Call Jeff at {PHONE}.</h2>
                  <p className="mt-3 max-w-[52ch] text-[1.1rem] text-white/90">
                    Get an honest quote before any work starts. Open Monday to Thursday, 7:30 AM to 5 PM. Appointments recommended.
                  </p>
                </div>
                <div className="flex flex-col gap-3 md:items-end">
                  <a href={TEL} className="btn btn-call inline-flex min-h-[56px] items-center justify-center gap-2.5 rounded-xl bg-white px-7 text-[1.1rem] font-bold text-cta hover:bg-paper">
                    <span className="handset inline-flex"><Icon name="phone" className="h-5 w-5" /></span> Call {PHONE}
                  </a>
                  <a href={MAPS} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-white/90 hover:text-white">
                    <Icon name="pin" className="h-5 w-5" /> 2740 24th St, Sacramento
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-line bg-tint pb-28 pt-14 md:pb-12">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 md:grid-cols-[1.3fr_1fr_1fr_1fr] md:px-6">
          <div>
            <p className="font-heading text-[1.4rem] font-bold">Twenty-Fourth Street Garage</p>
            <p className="mt-3 text-[16px] text-muted">Independent auto repair in Curtis Park, Sacramento. Honest quotes from the owner.</p>
            <a href={NEXTDOOR} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-[15.5px] font-semibold text-brand hover:text-brand-dark">
              <Icon name="home" className="h-5 w-5" /> Find us on Nextdoor
            </a>
          </div>
          <div>
            <h3 className="text-[1.05rem]">Contact</h3>
            <ul className="mt-3 space-y-2 text-[16px] text-muted">
              <li><a href={TEL} className="font-semibold text-ink hover:text-brand">{PHONE}</a></li>
              <li>2740 24th St<br />Sacramento, CA 95818</li>
            </ul>
          </div>
          <div>
            <h3 className="text-[1.05rem]">Hours</h3>
            <ul className="mt-3 space-y-1 text-[16px] text-muted">
              <li>Mon to Thu: 7:30 AM to 5 PM</li>
              <li>Fri to Sun: Closed</li>
              <li>By appointment</li>
            </ul>
          </div>
          <div>
            <h3 className="text-[1.05rem]">Services</h3>
            <ul className="mt-3 space-y-1 text-[16px] text-muted">
              {services.map((s) => <li key={s.name}>{s.name}</li>)}
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-[1200px] border-t border-line px-5 pt-6 text-[14.5px] text-muted md:px-6">
          © {new Date().getFullYear()} Twenty-Fourth Street Garage · Serving Curtis Park, Land Park, Oak Park and central Sacramento
        </div>
      </footer>

      {/* Mobile tap-to-call bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-line bg-paper/95 p-3 backdrop-blur md:hidden">
        <a href={TEL} className="btn inline-flex min-h-[50px] items-center justify-center gap-2 rounded-xl bg-cta font-semibold text-white"><Icon name="phone" className="h-5 w-5" />Call</a>
        <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn inline-flex min-h-[50px] items-center justify-center gap-2 rounded-xl border-2 border-ink/15 bg-white font-semibold"><Icon name="pin" className="h-5 w-5" />Directions</a>
      </div>
    </>
  );
}
