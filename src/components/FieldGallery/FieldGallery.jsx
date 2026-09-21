import { Eyebrow, SectionRule } from "../Ornament";

const photos = [
  { src: "/mining.jpeg", label: "On-site visit", year: 2024 },
  { src: "/deployment.png", label: "Underground deployment", year: 2024 },
  { src: "/lesson.png", label: "Development session", year: 2023 },
];

const FieldGallery = () => {
  return (
    <section
      id="field"
      className="relative overflow-hidden bg-navy bg-navy-radial px-6 py-24 text-cream dark:bg-deep-navy dark:bg-navy-radial-deep md:px-20"
    >
      <div className="texture pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[520px] w-[520px] rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <SectionRule className="mb-14" />

        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow>On location</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl font-medium tracking-tight md:text-5xl">
              A few of the places the{" "}
              <span className="italic text-gold-light">work has taken me</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-cream/60">
            Site visits, deployments, and the occasional whiteboard session
            along the way.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-3 sm:gap-8">
          {photos.map((photo, i) => (
            <figure key={photo.src} className={`group flex flex-col gap-4 ${i === 1 ? "sm:mt-10" : ""}`}>
              <div className="frame-gold relative aspect-[4/5] overflow-hidden bg-deep-navy">
                <img
                  src={photo.src}
                  alt={photo.label}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
              <figcaption className="flex items-baseline justify-between px-1">
                <span className="text-[11px] font-medium uppercase tracking-caps text-cream/70">
                  {photo.label}
                </span>
                <span className="font-serif text-lg italic text-gold">{photo.year}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FieldGallery;
