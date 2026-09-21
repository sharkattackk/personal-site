import { FaTrophy, FaWind, FaAnchor } from "react-icons/fa";

const hobbies = [
  {
    eyebrow: "On the court",
    title: "Squash",
    description:
      "Squash has been my outlet since high school — fast feet, sharp angles, and the kind of focus where nothing else exists for an hour. I play in local leagues and chase a better backhand every week.",
    image: "/squash.jpg",
    icon: FaTrophy,
    accent: "from-accent-blue to-harbour-blue",
  },
  {
    eyebrow: "On the water",
    title: "Sailing",
    description:
      "There's nothing quite like reading the wind on Lake Ontario. Sailing taught me patience, planning, and how to react when conditions change faster than you do.",
    image: "/vxone.webp",
    icon: FaWind,
    accent: "from-harbour-blue to-accent-blue",
  },
  {
    eyebrow: "At the dock",
    title: "Toronto Harbour Water Taxis",
    description:
      "Although technically professional, I consider working for the Tdot water Taxi on the weekends a hobby. Aside from enjoying the outdoors and meeting the coolest people, I love the challenges I face when I need to gently place the 2 and a half ton vessel bow-on against a solid wall with only 2 inches to spare between two boats at center island. ",
    image: "/watertaxi.png",
    icon: FaAnchor,
    accent: "from-accent-blue to-harbour-blue",
  },
];

const MediaPanel = ({ image, alt, accent }) => (
  <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-dark-gray/10 bg-gradient-to-br from-accent-blue/20 via-harbour-blue/20 to-accent-blue/10 shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl dark:border-white/10">
    <img
      src={image}
      alt={alt}
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      onError={(e) => {
        e.currentTarget.style.display = "none";
      }}
    />
    {/* Gradient accent bar */}
    <div className={`absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r ${accent}`} />
  </div>
);

const HobbyRow = ({ hobby, index }) => {
  const Icon = hobby.icon;
  const mediaFirst = index % 2 === 1;

  return (
    <div
      className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
        mediaFirst ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Text side */}
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-accent-blue/30 bg-accent-blue/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-accent-blue">
          <Icon className="text-[10px]" />
          <span>{hobby.eyebrow}</span>
        </div>
        <h3 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
          {hobby.title}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-dark-gray/75 dark:text-light-gray/75 md:text-lg">
          {hobby.description}
        </p>
      </div>

      {/* Media side */}
      <MediaPanel
        image={hobby.image}
        alt={hobby.title}
        accent={hobby.accent}
      />
    </div>
  );
};

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-light-gray px-6 py-24 text-dark-gray transition-colors duration-300 dark:bg-dark-gray dark:text-light-gray md:px-20"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute -left-32 top-1/3 h-[500px] w-[500px] rounded-full bg-accent-blue/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-[500px] w-[500px] rounded-full bg-harbour-blue/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-20 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent-blue">
            About Me
          </p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
            Off the{" "}
            <span className="bg-gradient-to-r from-accent-blue to-harbour-blue bg-clip-text text-transparent">
              keyboard
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-dark-gray/70 dark:text-light-gray/70">
            When I'm not shipping code, you'll find me on a court, on the water,
            or somewhere in Toronto Harbour.
          </p>
        </div>

        {/* Staggered hobby rows */}
        <div className="space-y-24 md:space-y-32">
          {hobbies.map((hobby, i) => (
            <HobbyRow key={hobby.title} hobby={hobby} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
