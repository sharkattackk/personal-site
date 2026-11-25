import { Eyebrow, SectionRule } from "../Ornament";

const projects = [
  {
    name: "Hawkeye",
    tagline: "Drone surveillance system",
    client: "Toronto Port Authority",
    role: "Sole engineer",
    status: "In production",
    paragraphs: [
      "Hawkeye uses drone photos and computer vision to track boat traffic in Toronto's harbour. It also watches for property theft on land.",
      "It's in use under contract with the Toronto Port Authority, a federal agency. I designed the whole system myself, and I'm the one who keeps it running.",
      "When a new drone photo comes in, Hawkeye works out which reference shot it matches and lines the two up using SIFT features. A CLIP-based classifier then checks each marina slip, and the results show up on a timeline in the dashboard. If the model gets something wrong, I can label the photo and retrain it from the same dashboard.",
    ],
    stack: ["Python", "PyTorch", "OpenCV", "CLIP", "Kubernetes", "AWS Lambda", "MySQL", "React"],
  },
];

const Corner = ({ className }) => (
  <span className={`pointer-events-none absolute h-2.5 w-2.5 border-gold/70 ${className}`} />
);

const Detail = ({ label, children }) => (
  <div className="border-b border-gold/20 pb-4 last:border-b-0 last:pb-0">
    <dt className="text-[10px] font-medium uppercase tracking-caps text-gold">{label}</dt>
    <dd className="mt-1.5 text-sm text-cream/85">{children}</dd>
  </div>
);

const ProjectCard = ({ project, index }) => {
  const numeral = ["I", "II", "III", "IV", "V"][index] ?? index + 1;

  return (
    <article className="grid gap-12 md:grid-cols-[1.6fr_1fr] md:gap-16">
      <div>
        <div className="flex items-center gap-4">
          <span className="font-serif text-3xl italic text-gold">{numeral}</span>
          <Eyebrow>{project.tagline}</Eyebrow>
        </div>
        <h3 className="mt-4 font-serif text-4xl font-medium tracking-tight md:text-5xl">
          {project.name}
        </h3>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-cream/75">
          {project.paragraphs.map((text) => (
            <p key={text.slice(0, 24)}>{text}</p>
          ))}
        </div>
      </div>

      <aside className="relative self-start border border-gold/40 bg-white/[0.04] p-7 backdrop-blur-sm">
        <Corner className="left-1.5 top-1.5 border-l border-t" />
        <Corner className="right-1.5 top-1.5 border-r border-t" />
        <Corner className="bottom-1.5 left-1.5 border-b border-l" />
        <Corner className="bottom-1.5 right-1.5 border-b border-r" />

        <dl className="flex flex-col gap-4">
          <Detail label="Client">{project.client}</Detail>
          <Detail label="Role">{project.role}</Detail>
          <Detail label="Status">
            <span className="inline-flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
              </span>
              {project.status}
            </span>
          </Detail>
          <Detail label="Built with">
            <span className="mt-1 flex flex-wrap gap-1.5">
              {project.stack.map((t) => (
                <span
                  key={t}
                  className="border border-cream/20 px-2 py-0.5 text-[10px] uppercase tracking-wider text-cream/80"
                >
                  {t}
                </span>
              ))}
            </span>
          </Detail>
        </dl>
      </aside>
    </article>
  );
};

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-navy bg-navy-radial px-6 py-24 text-cream dark:bg-deep-navy dark:bg-navy-radial-deep md:px-20"
    >
      <div className="texture pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[520px] w-[520px] rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <SectionRule className="mb-14" />

        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow>Projects</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl font-medium tracking-tight md:text-5xl">
              Projects I <span className="italic text-gold-light">run myself</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-cream/60">
            I&apos;m the only engineer on these.
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
