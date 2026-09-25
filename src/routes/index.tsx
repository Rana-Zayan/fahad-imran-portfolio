import { createFileRoute } from "@tanstack/react-router";
import { Mail, Github, Linkedin, ArrowUpRight, Sparkles, BrainCircuit, Globe, Database } from "lucide-react";
import portrait from "@/assets/ranazayan-portrait.png";
import projectNeural from "@/assets/project-neural.jpg";
import projectVision from "@/assets/project-vision.jpg";
import projectWeb from "@/assets/project-web.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fahad Imran — AI & Web Student" },
      {
        name: "description",
        content:
          "Portfolio of Fahad Imran, an artificial intelligence and web development student building intelligent, human-centered digital experiences.",
      },
      { property: "og:title", content: "Fahad Imran — AI & Web Student" },
      {
        property: "og:description",
        content:
          "Portfolio of Fahad Imran, an artificial intelligence and web development student building intelligent, human-centered digital experiences.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const skills = [
  { icon: BrainCircuit, label: "Machine Learning", detail: "Neural networks, model training & fine-tuning" },
  { icon: Globe, label: "Web Development", detail: "React, modern UI engineering & APIs" },
  { icon: Database, label: "Data & Databases", detail: "Python, SQL & data pipelines" },
  { icon: Sparkles, label: "Generative AI", detail: "LLMs, prompt engineering & AI tooling" },
];

const projects = [
  {
    image: projectNeural,
    alt: "Abstract glowing neural network visualization",
    tag: "Machine Learning",
    title: "Neural Playground",
    description:
      "An interactive tool that visualizes how a neural network learns — watch weights, activations and predictions evolve live in the browser.",
    stack: ["Python", "PyTorch", "React"],
  },
  {
    image: projectVision,
    alt: "Flowing golden data streams on a dark background",
    tag: "Computer Vision",
    title: "SeeSense",
    description:
      "A real-time image recognition app that identifies everyday objects through the webcam, with confidence scores and a clean web dashboard.",
    stack: ["Python", "OpenCV", "FastAPI"],
  },
  {
    image: projectWeb,
    alt: "Layered glass panels with warm amber light",
    tag: "AI × Web",
    title: "Chatfolio",
    description:
      "A personal website with a built-in AI assistant that answers questions about my work, skills and projects in natural language.",
    stack: ["TypeScript", "LLM APIs", "Tailwind"],
  },
];

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight text-foreground">
          Fahad<span className="text-ember">.</span>Imran
        </a>
        <div className="hidden items-center gap-8 text-sm font-medium text-muted-foreground sm:flex">
          <a href="#about" className="transition-colors hover:text-ember">About</a>
          <a href="#skills" className="transition-colors hover:text-ember">Skills</a>
          <a href="#projects" className="transition-colors hover:text-ember">Projects</a>
        </div>
        <a
          href="#contact"
          className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_24px_-6px_var(--ember)]"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="grain ember-glow relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="rise mb-6 inline-flex items-center gap-2 rounded-full border border-ember/30 bg-ember/10 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-ember uppercase">
            <Sparkles className="size-3.5" />
            AI & Web Development Student
          </p>
          <h1
            className="rise font-display text-5xl leading-[1.02] font-medium tracking-tight text-balance text-cream sm:text-7xl"
            style={{ animationDelay: "120ms" }}
          >
            Learning to build machines that think — and websites that feel.
          </h1>
          <p
            className="rise mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground"
            style={{ animationDelay: "240ms" }}
          >
            I'm <span className="font-semibold text-foreground">Fahad Imran</span>, a student of artificial
            intelligence and web development. I turn what I learn in class into real, working things —
            models, apps and experiments you can actually click.
          </p>
          <div className="rise mt-10 flex flex-wrap gap-4" style={{ animationDelay: "360ms" }}>
            <a
              href="#projects"
              className="rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_32px_-6px_var(--ember)]"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-border px-8 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-ember/50 hover:text-ember"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="lg:col-span-5" style={{ animation: "rise-in 1s cubic-bezier(0.16,1,0.3,1) 200ms both" }}>
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -inset-3 rounded-3xl border border-ember/20" aria-hidden="true" />
            <div className="absolute -top-10 -right-10 size-40 rounded-full bg-ember/25 blur-3xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-3xl border border-border shadow-[0_24px_60px_-20px_rgb(0_0_0/0.7)]">
              <img
                src={portrait}
                alt="Portrait of Fahad Imran"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-5 pt-14">
                <p className="text-xs font-semibold tracking-[0.2em] text-ember uppercase">Currently learning</p>
                <p className="mt-1 font-display text-lg text-cream">Deep Learning & Full-Stack Web</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-t border-border bg-card/40 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold tracking-[0.22em] text-ember uppercase">About me</p>
          <h2 className="mt-4 font-display text-4xl leading-tight font-medium tracking-tight text-cream sm:text-5xl">
            Curious by default, building by habit.
          </h2>
        </div>
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            I'm studying artificial intelligence alongside web development, which means my days alternate
            between training models and shipping interfaces. I love that the two feed each other —
            AI gives my projects a brain, and the web gives them a face.
          </p>
          <p>
            Most of what I know comes from building: small models, side projects, and rewriting things
            until they make sense. When I'm not coding, I'm usually reading about the next wave of AI
            tools and figuring out how to put them to work.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {["Python", "JavaScript", "React", "Machine Learning", "Problem Solving"].map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-border bg-background px-4 py-1.5 text-xs font-medium text-foreground"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 flex items-end justify-between border-b border-border pb-6">
          <h2 className="font-display text-3xl font-medium tracking-tight text-cream sm:text-4xl">What I work with</h2>
          <span className="font-mono text-sm text-ember">[ 01 ]</span>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map(({ icon: Icon, label, detail }) => (
            <div
              key={label}
              className="group rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-ember/40 hover:shadow-[0_16px_40px_-16px_color-mix(in_oklab,var(--ember)_35%,transparent)]"
            >
              <div className="mb-6 inline-flex size-12 items-center justify-center rounded-xl border border-ember/30 bg-ember/10 text-ember transition-colors group-hover:bg-ember/20">
                <Icon className="size-5" />
              </div>
              <h3 className="font-display text-xl font-medium text-foreground">{label}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="border-t border-border bg-card/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 flex items-end justify-between border-b border-border pb-6">
          <h2 className="font-display text-3xl font-medium tracking-tight text-cream sm:text-4xl">Selected projects</h2>
          <span className="font-mono text-sm text-ember">[ 02 ]</span>
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-border bg-background transition-all hover:-translate-y-1.5 hover:border-ember/40 hover:shadow-[0_24px_50px_-20px_rgb(0_0_0/0.8)]"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.alt}
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="aspect-[3/2] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <p className="text-[11px] font-semibold tracking-[0.2em] text-ember uppercase">{project.tag}</p>
                <h3 className="mt-2.5 font-display text-2xl font-medium text-cream">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-muted px-3 py-1 text-[11px] font-medium text-foreground/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="ember-glow grain relative border-t border-border py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="text-xs font-semibold tracking-[0.22em] text-ember uppercase">Contact</p>
        <h2 className="mt-5 font-display text-4xl leading-tight font-medium tracking-tight text-balance text-cream sm:text-6xl">
          Let's build something intelligent together.
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
          Whether it's a project, an internship, or just a conversation about AI — my inbox is always open.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:hello@ranazayan.dev"
            className="inline-flex items-center gap-2.5 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_32px_-6px_var(--ember)]"
          >
            <Mail className="size-4" />
            Say hello
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full border border-border px-8 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-ember/50 hover:text-ember"
          >
            <Github className="size-4" />
            GitHub
            <ArrowUpRight className="size-3.5 opacity-60" />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full border border-border px-8 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-ember/50 hover:text-ember"
          >
            <Linkedin className="size-4" />
            LinkedIn
            <ArrowUpRight className="size-3.5 opacity-60" />
          </a>
        </div>
      </div>
      <footer className="mt-24 border-t border-border/60 pt-8 text-center">
        <p className="text-[11px] font-medium tracking-[0.2em] text-muted-foreground uppercase">
          © 2026 Fahad Imran · Built with curiosity
        </p>
      </footer>
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
