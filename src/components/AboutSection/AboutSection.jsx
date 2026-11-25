import { Eyebrow, SectionRule } from "../Ornament";

const hobbies = [
  {
    eyebrow: "On the court",
    title: "Squash",
    description:
      "I've played squash since high school. These days I'm in a local league, and I'm still working on my backhand.",
    image: "/squash.jpg",
  },
  {
    eyebrow: "On the water",
    title: "Sailing",
    description:
      "I sail on Lake Ontario whenever I can. Reading the wind well is harder than it looks, which is a big part of why I keep going out.",
    image: "/vxone.webp",
  },
  {
    eyebrow: "At the dock",
    title: "Toronto Harbour Water Taxis",
    description:
      "It's technically a job, but I count driving for Tdot Water Taxi on weekends as a hobby. I get to spend the day outside and meet the coolest people. My favourite part is docking at Centre Island, where I have to gently set a two-and-a-half-ton boat bow-on against a solid wall, squeezed between two other boats with two inches to spare.",
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
            What I get up to outside of work.
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
