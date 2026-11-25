import { Eyebrow, SectionRule } from "../Ornament";

const projects = [
  {
    name: "Hawkeye",
    tagline: "Drone surveillance system",
    paragraphs: [
      "Hawkeye uses drone photos and computer vision to track boat traffic in and out of a client's marina.",
      "It's in use under contract with the Toronto Port Authority, a federal agency. I designed the whole system myself, and I'm the one who keeps it running.",
      "When a new drone photo comes in, Hawkeye works out which reference shot it matches and lines the two up using SIFT features. A CLIP-based classifier then checks each marina slip, and the results show up on a timeline in the dashboard. If the model gets something wrong, the user can label the photo and retrain it from the same dashboard, offering constant model improvement.",
    ],
    stack: ["Python", "PyTorch", "OpenCV", "CLIP", "Kubernetes", "AWS Lambda", "MySQL", "React"],
    image: {
      src: "/hawkeye.png",
      alt: "The Hawkeye dashboard: marina occupancy at a glance, a map built from drone photos, and every slip marked as holding a boat or empty",
      width: 1009,
      height: 955,
    },
  },
];

const ProjectCard = ({ project, index }) => {
  const numeral = ["I", "II", "III", "IV", "V"][index] ?? index + 1;

  return (
    <article className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
      <div>
        <div className="flex items-center gap-4">
          <span className="font-serif text-3xl text-gold">{numeral}</span>
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
        <div className="mt-8 flex flex-wrap gap-1.5">
          {project.stack.map((t) => (
            <span
              key={t}
              className="border border-cream/20 px-2 py-0.5 text-[10px] uppercase tracking-wider text-cream/80"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {project.image && (
        <figure className="border border-gold/40 bg-white/[0.04] p-2 shadow-2xl shadow-black/30 sm:p-3">
          {/* Opens full size, since it's hard to read on a phone */}
          <a href={project.image.src} target="_blank" rel="noreferrer" className="block">
            <img
              src={project.image.src}
              alt={project.image.alt}
              width={project.image.width}
              height={project.image.height}
              loading="lazy"
              className="block h-auto w-full border border-gold/20"
            />
          </a>
        </figure>
      )}
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
              Projects I <span className="text-gold-light">run myself</span>
            </h2>
          </div>
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
