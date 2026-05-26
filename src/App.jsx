import { useState } from 'react'
import {
  ArrowRight,
  BadgeCheck,
  Binary,
  Building2,
  CheckCircle2,
  ChevronRight,
  Cpu,
  Database,
  Factory,
  FileCheck2,
  Fingerprint,
  Layers3,
  LockKeyhole,
  Network,
  RadioTower,
  ScanSearch,
  ServerCog,
  ShieldCheck,
  ShieldHalf,
  Sparkles,
  Workflow,
  Zap,
} from 'lucide-react'

const navItems = [
  ['Home', '#home'],
  ['About Us', '#about'],
  ['Contact Us', '#contact'],
]

const serviceNavItems = [
  ['SME Secure Infrastructure Services', '#sme-services'],
  ['OT & Industrial Cybersecurity Services', '#ot-services'],
  ['Design & Configuration Reviews', '#design-reviews'],
  ['Templates & Automation', '#automation'],
  ['MCP/API Automation', '#mcp-api'],
  ['Managed Network & Cyber Services', '#managed-services'],
  ['Backup & NAS Solutions', '#sme-services'],
  ['Configuration Automation Services', '#configuration-automation'],
]

const mobileServiceOptions = [
  ['SME Services', '#sme-services'],
  ['OT Services', '#ot-services'],
  ['Specialist Services', '#specialist-services'],
  ['Managed Services', '#managed-services'],
]

const smeServices = [
  ['Secure Infrastructure Project Services', ServerCog],
  ['Storage & NAS Solutions', Database],
  ['Network & Security Solutions', Network],
  ['Backup & Restore Solutions', ShieldHalf],
  ['Application Whitelisting & Malware Protection', Fingerprint],
  ['Managed Network & Cyber Services', RadioTower],
]

const otServices = [
  ['Secure Infrastructure Project Services', Factory],
  ['Industrial Storage & NAS Solutions', Database],
  ['OT Network Security', ShieldCheck],
  ['Backup & Restore for OT Systems', FileCheck2],
  ['Active Directory Setup & Hardening', Layers3],
  ['Application Whitelisting & Malware Protection', Fingerprint],
  ['OT Cyber Services', Cpu],
  ['Managed OT Network & Cyber Services', RadioTower],
]

const managedServices = [
  ['Network and Firewall Configuration Visibility', Network],
  ['Backup, NAS and Recovery Readiness Checks', ShieldHalf],
  ['OT Cybersecurity Review and Improvement Planning', Factory],
  ['Monthly Advisory, Documentation and Action Tracking', FileCheck2],
]

const specialistServices = [
  {
    title: 'Design & Configuration Reviews',
    description:
      'Independent reviews for firewall, routing, segmentation, backup, NAS, AD and OT infrastructure designs before change windows.',
    icon: ScanSearch,
    id: 'design-reviews',
  },
  {
    title: 'Design Templates & Automation Services',
    description:
      'Reusable design packs, validation checklists and implementation templates that make secure delivery repeatable.',
    icon: Workflow,
    id: 'automation',
  },
  {
    title: 'Configuration Automation Services',
    description:
      'Structured configuration generation and review workflows for teams who need consistency without losing engineering control.',
    icon: Binary,
    id: 'configuration-automation',
  },
  {
    title: 'MCP & Infrastructure API Automation Services',
    description:
      'AI-assisted, human-reviewed workflows that connect documentation, network intent and infrastructure APIs.',
    icon: Zap,
    id: 'mcp-api',
  },
]

const highlights = [
  'Senior network engineering and secure infrastructure experience',
  'OT and industrial cybersecurity background',
  'Railway and critical infrastructure project experience',
  'Firewall, VLAN, VRF, routing and segmentation design',
  'Fortinet, Cisco, Nokia, Palo Alto, UniFi and industrial network experience',
  'NAS, backup and recovery solution experience',
  'Acronis backup and restore knowledge',
  'Active Directory, DNS and secure infrastructure design',
  'IEC 62443-aligned OT cybersecurity understanding',
  'Design review, configuration review and test verification experience',
  'Practical documentation and project delivery mindset',
]

const whyPoints = [
  'Practical network and cybersecurity experience',
  'SME and OT expertise',
  'Design-to-deployment support',
  'Security-focused configuration',
  'Test and verification mindset',
  'Clear documentation',
  'Monthly visibility and advisory',
  'Automation-ready approach',
  'Human-reviewed AI-assisted delivery',
]

function Button({ children, href, variant = 'primary', className = '' }) {
  const base =
    'group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300'
  const variants = {
    primary:
      'bg-white text-slate-950 shadow-[0_0_32px_rgba(34,211,238,.24)] hover:bg-cyan-100',
    secondary:
      'border border-white/14 bg-white/[.04] text-white hover:border-cyan-300/50 hover:bg-cyan-300/10',
  }

  return (
    <a className={`${base} ${variants[variant]} ${className}`} href={href}>
      {children}
      <ArrowRight
        aria-hidden="true"
        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
      />
    </a>
  )
}

function SectionHeading({ eyebrow, title, children, align = 'center' }) {
  return (
    <div
      className={`mx-auto max-w-3xl ${
        align === 'left' ? 'text-left' : 'text-center'
      }`}
    >
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {children && (
        <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
          {children}
        </p>
      )}
    </div>
  )
}

function ServiceCard({ title, Icon }) {
  return (
    <article className="group rounded-[28px] border border-white/10 bg-white/[.045] p-6 shadow-2xl shadow-slate-950/20 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-cyan-300/[.07]">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-200/20 bg-cyan-300/10 text-cyan-200">
        <Icon aria-hidden="true" className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-semibold leading-7 text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-400">
        Secure planning, implementation guidance, verification and clear
        documentation for resilient business infrastructure.
      </p>
    </article>
  )
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#03070d]/75 backdrop-blur-xl">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
      >
        <a href="#home" className="flex items-center gap-1.5">
          <img
            src="/logo.png"
            alt="CyberVeyra logo"
            className="h-16 w-16 shrink-0 object-contain"
          />
          <span className="-ml-4 text-base font-semibold tracking-wide text-white">
            CyberVeyra
          </span>
        </a>
        <div className="hidden items-center gap-2 lg:flex">
          <a
            className="rounded-full px-4 py-2 text-base font-medium leading-none text-slate-300 transition hover:bg-white/8 hover:text-white"
            href="#home"
          >
            Home
          </a>
          <div className="group relative">
            <button
              type="button"
              className="inline-flex min-h-10 items-center gap-2 rounded-full px-4 py-2 text-base font-medium leading-none text-slate-300 transition hover:bg-white/8 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
              aria-haspopup="true"
            >
              Services
              <ChevronRight
                aria-hidden="true"
                className="h-4 w-4 rotate-90 transition duration-300 group-hover:-rotate-90"
              />
            </button>
            <div className="invisible absolute left-1/2 top-full z-50 mt-4 w-[min(88vw,28rem)] -translate-x-1/2 rounded-[28px] border border-white/10 bg-[#07101a]/95 p-3 opacity-0 shadow-2xl shadow-slate-950/50 backdrop-blur-xl transition duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="grid gap-1">
                {serviceNavItems.map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    className="group/item flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-cyan-300/10 hover:text-white"
                  >
                    <span>{label}</span>
                    <ChevronRight
                      aria-hidden="true"
                      className="h-4 w-4 text-cyan-200 transition group-hover/item:translate-x-1"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
          {navItems.slice(1).map(([label, href]) => (
            <a
              key={label}
              className="rounded-full px-4 py-2 text-base font-medium leading-none text-slate-300 transition hover:bg-white/8 hover:text-white"
              href={href}
            >
              {label}
            </a>
          ))}
        </div>
        <a
          className="inline-flex min-h-10 items-center justify-center rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#020617] transition hover:bg-cyan-100"
          href="#contact"
        >
          Free Consultation
        </a>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-svh items-center overflow-hidden px-4 pb-20 pt-28 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,.18),transparent_34%),linear-gradient(180deg,#050914_0%,#02050a_60%,#060b12_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-gradient-to-t from-[#060b12] to-transparent" />
      <div className="absolute left-1/2 top-24 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full border border-cyan-200/10 bg-cyan-300/[.04] blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <div className="max-w-5xl">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100">
            <Sparkles aria-hidden="true" className="h-4 w-4" />
            Secure design. Correct configuration. Verified deployment.
            Continuous visibility.
          </p>
          <h1 className="max-w-5xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.3rem] lg:leading-[1.04] xl:text-[3.65rem]">
            Secure Infrastructure, Network & Cybersecurity Services for SMEs and
            Industrial Environments
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg sm:leading-8">
            CyberVeyra helps businesses design, review, configure, test, verify,
            automate and monitor secure infrastructure across firewalls,
            networks, NAS storage, backup systems, Active Directory, endpoint
            protection and OT cybersecurity environments.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#contact">Book a Free Consultation</Button>
            <div className="hidden sm:block">
              <Button href="#sme-services" variant="secondary">
                View Services
              </Button>
            </div>
            <details className="group relative sm:hidden">
              <summary className="flex min-h-12 cursor-pointer list-none items-center justify-center gap-2 rounded-full border border-white/14 bg-white/[.04] px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:bg-cyan-300/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 [&::-webkit-details-marker]:hidden">
                View Services
                <ChevronRight
                  aria-hidden="true"
                  className="h-4 w-4 rotate-90 transition-transform duration-300 group-open:-rotate-90"
                />
              </summary>
              <div className="absolute left-0 right-0 z-20 mt-3 rounded-[24px] border border-white/10 bg-[#07101a]/95 p-2 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
                {mobileServiceOptions.map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-cyan-300/10 hover:text-white"
                  >
                    {label}
                    <ChevronRight aria-hidden="true" className="h-4 w-4 text-cyan-200" />
                  </a>
                ))}
              </div>
            </details>
          </div>
        </div>
        <div className="relative mx-auto hidden w-full max-w-xl md:block">
          <div className="absolute inset-8 rounded-full bg-cyan-300/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[.05] p-4 shadow-2xl shadow-cyan-950/30 backdrop-blur">
            <div className="rounded-[28px] border border-white/10 bg-[#050b14] p-5">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/70">
                    Visibility Matrix
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    Firewall / Network / OT / Backup
                  </p>
                </div>
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-300/10 text-emerald-200">
                  <BadgeCheck aria-hidden="true" className="h-5 w-5" />
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  ['Segmentation', 'Verified'],
                  ['Backups', 'Recoverable'],
                  ['AD / DNS', 'Hardened'],
                  ['OT Zones', 'Reviewed'],
                ].map(([label, state]) => (
                  <div
                    key={label}
                    className="rounded-3xl border border-white/10 bg-white/[.04] p-4"
                  >
                    <p className="text-sm font-medium text-white">{label}</p>
                    <p className="mt-6 text-xs uppercase tracking-[0.2em] text-cyan-200">
                      {state}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-3xl border border-cyan-200/15 bg-cyan-300/[.07] p-5">
                <div className="mb-4 flex items-center gap-3">
                  <LockKeyhole aria-hidden="true" className="h-5 w-5 text-cyan-200" />
                  <p className="text-sm font-semibold text-white">
                    Continuous improvement loop
                  </p>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-cyan-200 via-teal-300 to-emerald-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ServiceAreaIntro() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Trusted Service Areas"
          title="Built for business networks and industrial environments."
        >
          CyberVeyra supports two clear operating worlds: SME infrastructure
          that needs reliable security foundations, and OT environments that
          need disciplined engineering, segmentation and verification.
        </SectionHeading>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {[
            [
              'SME Secure Infrastructure Services',
              'Firewalls, networks, NAS, backup, endpoints, AD and managed visibility for growing businesses.',
              Building2,
              '#sme-services',
            ],
            [
              'OT & Industrial Cybersecurity Services',
              'Industrial network segmentation, backup recovery, AD hardening, whitelisting and OT security support.',
              Factory,
              '#ot-services',
            ],
          ].map(([title, description, Icon, href]) => (
            <a
              key={title}
              href={href}
              className="group rounded-[32px] border border-white/10 bg-white/[.045] p-8 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[.07]"
            >
              <Icon aria-hidden="true" className="h-9 w-9 text-cyan-200" />
              <h3 className="mt-8 text-2xl font-semibold text-white">{title}</h3>
              <p className="mt-4 max-w-xl leading-7 text-slate-300">
                {description}
              </p>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-100">
                Explore area
                <ChevronRight
                  aria-hidden="true"
                  className="h-4 w-4 transition group-hover:translate-x-1"
                />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServicesSection({ id, eyebrow, title, description, services }) {
  return (
    <section id={id} className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow={eyebrow} title={title}>
          {description}
        </SectionHeading>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(([service, Icon]) => (
            <ServiceCard key={service} title={service} Icon={Icon} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SpecialistServices() {
  return (
    <section id="specialist-services" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Specialist Services"
          title="Reviews, templates and automation for secure delivery."
        >
          CyberVeyra helps teams make complex infrastructure work more reliable:
          reviewed by humans, structured for repeatability and ready for modern
          API-driven operations.
        </SectionHeading>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {specialistServices.map(({ title, description, icon: Icon, id }) => (
            <article
              id={id}
              key={title}
              className="rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[.07] to-cyan-300/[.04] p-7"
            >
              <Icon aria-hidden="true" className="h-8 w-8 text-cyan-200" />
              <h3 className="mt-6 text-lg font-semibold leading-7 text-white">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ManagedServices() {
  return (
    <ServicesSection
      id="managed-services"
      eyebrow="Managed Services"
      title="Monthly visibility for networks, security and OT environments."
      description="CyberVeyra supports ongoing advisory, configuration review, monitoring improvement and change readiness for teams that need a senior technical eye without building a full internal cybersecurity function."
      services={managedServices}
    />
  )
}

function Founder() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 rounded-[36px] border border-white/10 bg-white/[.045] p-6 shadow-2xl shadow-slate-950/30 sm:p-10 lg:grid-cols-[.9fr_1.1fr] lg:p-12">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
            About the Founder
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Built by a Network & OT Cybersecurity Specialist
          </h2>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#contact">Book a Free Consultation</Button>
            <Button href="#linkedin-profile" variant="secondary">
              View LinkedIn Profile
            </Button>
          </div>
        </div>
        <div>
          <p className="text-base leading-8 text-slate-300">
            CyberVeyra is founded by a senior network and OT cybersecurity
            professional with hands-on experience in secure infrastructure
            design, firewall and network segmentation, industrial cybersecurity,
            backup and recovery, NAS/storage solutions, Active Directory,
            endpoint protection, and design/configuration review.
          </p>
          <p className="mt-5 text-base leading-8 text-slate-300">
            With experience across railway, industrial and enterprise
            environments, CyberVeyra brings a practical engineering mindset to
            cybersecurity. The focus is not only on giving advice, but on
            producing clear designs, correct configurations, tested deployments,
            verified documentation and continuous improvement plans.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {highlights.map((highlight) => (
              <div key={highlight} className="flex gap-3 text-sm text-slate-300">
                <CheckCircle2
                  aria-hidden="true"
                  className="mt-0.5 h-4 w-4 shrink-0 text-cyan-200"
                />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function WhyCyberVeyra() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Why CyberVeyra"
          title="Security advice that stays close to implementation."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyPoints.map((point) => (
            <div
              key={point}
              className="flex min-h-24 items-start gap-4 rounded-3xl border border-white/10 bg-white/[.04] p-5"
            >
              <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-300/10 text-cyan-200">
                <CheckCircle2 aria-hidden="true" className="h-4 w-4" />
              </span>
              <p className="font-medium leading-7 text-white">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactForm() {
  const [formStatus, setFormStatus] = useState('idle')
  const [formMessage, setFormMessage] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    setFormStatus('submitting')
    setFormMessage('')

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error('Form submission failed')
      }

      form.reset()
      setFormStatus('success')
      setFormMessage(
        'Thank you. Your consultation request has been sent successfully.',
      )
    } catch {
      setFormStatus('error')
      setFormMessage(
        'Sorry, the form could not be sent. Please email shehzad.nazir@gmail.com directly.',
      )
    }
  }

  return (
    <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.85fr_1.15fr]">
        <SectionHeading
          align="left"
          eyebrow="Free Consultation"
          title="Book a Free Infrastructure & Cybersecurity Consultation"
        >
          Tell us about your network, firewall, NAS, backup, OT or cybersecurity
          requirements. CyberVeyra will review your needs and recommend the
          right next step.
        </SectionHeading>
        <form
          action="https://formspree.io/f/xwvzpjep"
          method="POST"
          onSubmit={handleSubmit}
          className="rounded-[34px] border border-cyan-200/15 bg-[#07101a]/90 p-6 shadow-[0_0_60px_rgba(34,211,238,.12)] sm:p-8"
        >
          <input
            type="hidden"
            name="_subject"
            value="New CyberVeyra consultation request"
          />
          <input
            type="text"
            name="_honey"
            tabIndex="-1"
            autoComplete="off"
            className="hidden"
          />
          <div className="grid gap-5 sm:grid-cols-2">
            <label>
              <span>Full Name</span>
              <input required name="name" autoComplete="name" />
            </label>
            <label>
              <span>Company Name</span>
              <input required name="company" autoComplete="organization" />
            </label>
            <label>
              <span>Email Address</span>
              <input required type="email" name="email" autoComplete="email" />
            </label>
            <label>
              <span>Phone Number</span>
              <input type="tel" name="phone" autoComplete="tel" />
            </label>
            <label className="sm:col-span-2">
              <span>Service Interest</span>
              <select required name="service" defaultValue="">
                <option value="" disabled>
                  Select a service
                </option>
                <option>SME Secure Infrastructure Services</option>
                <option>OT & Industrial Cybersecurity Services</option>
                <option>Design & Configuration Review</option>
                <option>Templates & Automation</option>
                <option>MCP/API Automation</option>
                <option>Managed Network & Cyber Services</option>
                <option>Backup & NAS Solutions</option>
                <option>Not Sure Yet</option>
              </select>
            </label>
            <label className="sm:col-span-2">
              <span>Message / Requirements</span>
              <textarea required name="message" rows="5" />
            </label>
          </div>
          <button
            type="submit"
            disabled={formStatus === 'submitting'}
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100 sm:w-auto"
          >
            {formStatus === 'submitting'
              ? 'Sending Request...'
              : 'Request Free Consultation'}
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </button>
          {formMessage && (
            <p
              role="status"
              aria-live="polite"
              className={`mt-5 rounded-2xl border px-4 py-3 text-sm ${
                formStatus === 'success'
                  ? 'border-emerald-300/25 bg-emerald-300/10 text-emerald-100'
                  : 'border-red-300/25 bg-red-300/10 text-red-100'
              }`}
            >
              {formMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

function FinalCta() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[36px] border border-white/10 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,.16),transparent_55%),rgba(255,255,255,.045)] p-8 text-center sm:p-12">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
          Ready to secure your infrastructure?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
          Book a consultation to discuss your network, cybersecurity, backup,
          NAS, OT or automation requirements.
        </p>
        <div className="mt-8">
          <Button href="#contact">Book a Free Consultation</Button>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="CyberVeyra logo"
            className="h-20 w-20 shrink-0 object-contain"
          />
          <div className="-ml-5">
            <p className="font-semibold text-white">CyberVeyra</p>
            <p className="mt-2">
              Secure infrastructure, network and cybersecurity services.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          {['SME Services', 'OT Services', 'Design Reviews', 'Contact'].map(
            (item) => (
              <a
                key={item}
                href={
                  item === 'Contact'
                    ? '#contact'
                    : item === 'OT Services'
                      ? '#ot-services'
                      : item === 'SME Services'
                        ? '#sme-services'
                        : '#design-reviews'
                }
                className="transition hover:text-white"
              >
                {item}
              </a>
            ),
          )}
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServiceAreaIntro />
        <ServicesSection
          id="sme-services"
          eyebrow="SME Services"
          title="Secure infrastructure foundations for modern SMEs."
          description="From network segmentation and firewall configuration to NAS, backup, endpoints and managed visibility, CyberVeyra helps businesses deploy infrastructure that can be trusted."
          services={smeServices}
        />
        <ServicesSection
          id="ot-services"
          eyebrow="OT Services"
          title="Industrial cybersecurity support for operational environments."
          description="CyberVeyra brings practical network engineering and OT security thinking to industrial systems, with careful attention to resilience, availability and verification."
          services={otServices}
        />
        <SpecialistServices />
        <ManagedServices />
        <WhyCyberVeyra />
        <Founder />
        <ContactForm />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}

export default App
