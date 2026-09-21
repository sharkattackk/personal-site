
const photos = [
  { src: "/mining.jpeg", label: "On-site visit", year: 2024 },
  { src: "/deployment.png", label: "Underground deployment", year: 2024 },
  { src: "/lesson.png", label: "Development session", year: 2023 },
];

const CornerBrackets = () => (
  <>
    <span className="pointer-events-none absolute top-1.5 left-1.5 h-3 w-3 border-t border-l border-accent-blue/80" />
    <span className="pointer-events-none absolute top-1.5 right-1.5 h-3 w-3 border-t border-r border-accent-blue/80" />
    <span className="pointer-events-none absolute bottom-1.5 left-1.5 h-3 w-3 border-b border-l border-accent-blue/80" />
    <span className="pointer-events-none absolute bottom-1.5 right-1.5 h-3 w-3 border-b border-r border-accent-blue/80" />
  </>
);

const FieldGallery = () => {
  return (
    <section
      id="field"
      className="relative overflow-hidden bg-light-gray px-6 py-20 text-dark-gray transition-colors duration-300 dark:bg-dark-gray dark:text-light-gray md:px-20"
    >
      {/* Faint blueprint grid backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] dark:opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(#2c92d1 1px, transparent 1px), linear-gradient(90deg, #2c92d1 1px, transparent 1px)",
          backgroundSize: "96px 96px",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-accent-blue">
              In the field
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
              I've seen first-hand the data gaps in{" "}
              <span className="bg-gradient-to-r from-accent-blue to-harbour-blue bg-clip-text text-transparent">
                heavy industry
              </span>
            </h2>
          </div>
        </div>

        {/* Gallery row */}
        <div className="grid gap-4 sm:grid-cols-3">
          {photos.map((photo) => (
            <figure
              key={photo.src}
              className="group relative flex flex-col gap-2"
            >
              {/* Image frame */}
              <div className="relative aspect-[4/3] overflow-hidden border border-accent-blue/30 bg-gradient-to-br from-accent-blue/10 to-harbour-blue/10 shadow-lg transition-all hover:-translate-y-0.5 hover:border-accent-blue/70 hover:shadow-2xl">
                <img
                  src={photo.src}
                  alt={photo.label}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />

                <CornerBrackets />
              </div>

              {/* Caption */}
              <figcaption className="flex items-center justify-between text-xs text-dark-gray/70 dark:text-light-gray/70">
                <span>{photo.label}</span>
                <span>{photo.year}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FieldGallery;
