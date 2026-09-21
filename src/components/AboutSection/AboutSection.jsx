import { Eyebrow, SectionRule } from "../Ornament";

const hobbies = [
  {
    eyebrow: "On the court",
    title: "Squash",
    description:
      "Squash has been my outlet since high school — fast feet, sharp angles, and the kind of focus where nothing else exists for an hour. I play in local leagues and chase a better backhand every week.",
    image: "/squash.jpg",
  },
  {
    eyebrow: "On the water",
    title: "Sailing",
    description:
      "There's nothing quite like reading the wind on Lake Ontario. Sailing taught me patience, planning, and how to react when conditions change faster than you do.",
    image: "/vxone.webp",
  },
  {
    eyebrow: "At the dock",
    title: "Toronto Harbour Water Taxis",
    description:
      "Although technically professional, I consider working for the Tdot water Taxi on the weekends a hobby. Aside from enjoying the outdoors and meeting the coolest people, I love the challenges I face when I need to gently place the 2 and a half ton vessel bow-on against a solid wall with only 2 inches to spare between two boats at center island.",
    image: "/watertaxi.png",
  },
];

const HobbyRow = ({ hobby, index }) => {
  const mediaFirst = index % 2 === 1;
  const numeral = ["I", "II", "III", "IV", "V"][index] ?? index + 1;

  return (
    <div
      className={`grid items-center gap-10 md:grid-cols-2 md:gap-20 ${
        mediaFirst ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div>
        <div className="flex items-center gap-4">
          <span className="font-serif text-3xl italic text-gold">{numeral}</span>
          <Eyebrow>{hobby.eyebrow}</Eyebrow>
        </div>
        <h3 className="mt-4 font-serif text-3xl font-medium tracking-tight md:text-4xl">
          {hobby.title}
        </h3>
        <p className="mt-5 text-base leading-relaxed text-navy/75 dark:text-cream/75">
          {hobby.description}
        </p>
      </div>

      <div className="frame-gold group relative aspect-[4/3] w-full overflow-hidden bg-sky/30">
        <img
          src={hobby.image}
          alt={hobby.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-sand bg-sand-soft px-6 py-24 text-navy dark:bg-deep-navy dark:bg-sand-soft-dark dark:text-cream md:px-20"
    >
      <div className="texture pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[520px] w-[520px] rounded-full bg-sky/40 blur-3xl dark:bg-ocean/20" />

      <div className="relative mx-auto max-w-6xl">
        <SectionRule className="mb-14" />

        <div className="mb-20 text-center">
          <Eyebrow center>About me</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl font-medium tracking-tight md:text-5xl">
            Off the <span className="italic text-ocean dark:text-sky">keyboard</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-navy/65 dark:text-cream/65">
            When I&apos;m not shipping code, you&apos;ll find me on a court, on the
            water, or somewhere in Toronto Harbour.
          </p>
        </div>

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
