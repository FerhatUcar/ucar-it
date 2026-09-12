import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Layers3,
  MapPin,
  PenTool,
} from "lucide-react";

const technologies = [
  { name: "React", logo: "/react.png" },
  { name: "Next.js", logo: "/next.png" },
  { name: "TypeScript", logo: "/ts.png" },
  { name: "Node.js", logo: "/node.png" },
  { name: "Figma", logo: "/figma.svg" },
];

const services = [
  {
    number: "01",
    icon: PenTool,
    title: "Thoughtful design.",
    text: "Clear interfaces and intuitive experiences. Turning complex requirements into products that feel simple to use.",
    tags: "UI / UX · Design systems",
  },
  {
    number: "02",
    icon: Code2,
    title: "Exceptional front ends.",
    text: "Fast, responsive applications built with care. From the first interaction to the smallest detail, quality comes first.",
    tags: "React · Next.js · TypeScript",
  },
  {
    number: "03",
    icon: Layers3,
    title: "Solid foundations.",
    text: "Reliable APIs and maintainable architecture that connect your product, support your team and grow with your business.",
    tags: "Node.js · APIs · Architecture",
  },
];

export default function Home() {
  return (
    <main id="main-content" className="home-page">
      <section className="home-hero" aria-labelledby="hero-title">
        <Image
          src="/hero-desk-v2.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-background"
          aria-hidden="true"
        />
        <div className="hero-copy">
          <div className="eyebrow">
            <span /> INDEPENDENT SOFTWARE ENGINEER
          </div>
          <h1 id="hero-title">
            Good ideas.
            <br />
            Great <span className="hero-software">software<span className="hero-cursor" aria-hidden="true">|</span></span>
          </h1>
          <p className="hero-intro">
            I’m Ferhat Ucar. I bring design and engineering together to build
            digital products that work beautifully.
          </p>
          <div className="hero-actions">
            <Link href="/contact" className="primary-action">
              Let’s build something{" "}
              <ArrowUpRight size={19} aria-hidden="true" />
            </Link>
            <Link href="/work" className="secondary-action">
              Explore my work <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <div className="hero-details">
            <span>
              <MapPin size={15} aria-hidden="true" /> Based in the Netherlands
            </span>
            <span>Working beyond borders</span>
          </div>
        </div>
        <a href="#expertise" className="explore-link">
          <ArrowDown size={15} aria-hidden="true" /> SCROLL TO EXPLORE
        </a>
      </section>
      <div className="technology-strip" aria-label="Technologies I work with">
        <span>BUILT WITH THE RIGHT TOOLS</span>
        <div>
          {technologies.map(({ name, logo }) => (
            <span key={name} className="technology-item">
              <Image
                src={logo}
                alt=""
                width={28}
                height={28}
                className={`technology-logo${name === "Next.js" ? " technology-logo-next" : ""}`}
              />
              {name}
            </span>
          ))}
        </div>
      </div>
      <section
        id="expertise"
        className="expertise-section"
        aria-labelledby="expertise-title"
      >
        <div className="section-heading">
          <div>
            <span className="eyebrow">FROM FIRST IDEA TO FINAL PRODUCT</span>
            <h2 id="expertise-title">Craft at every layer.</h2>
          </div>
          <p>
            One partner for the bigger picture.
            <br />
            An eye for every detail.
          </p>
        </div>
        <div className="expertise-grid">
          {services.map(({ number, icon: Icon, title, text, tags }) => (
            <article key={number} className="expertise-card">
              <div className="service-top">
                <Icon size={25} aria-hidden="true" />
                <h3>{title}</h3>
                <span>{number}</span>
              </div>
              <p>{text}</p>
              <span className="service-tags">{tags}</span>
            </article>
          ))}
        </div>
      </section>
      <section className="home-contact" aria-labelledby="contact-title">
        <div>
          <span className="eyebrow">HAVE A PROJECT IN MIND?</span>
          <h2 id="contact-title">
            Let’s make it happen<span>.</span>
          </h2>
        </div>
        <Link href="/contact" className="primary-action">
          Start a conversation <ArrowUpRight size={19} aria-hidden="true" />
        </Link>
      </section>
      <footer className="home-footer">
        <Link href="/" className="wordmark" aria-label="Ucar IT home">
          <Image
            src="/logo.png"
            alt=""
            width={64}
            height={64}
            className="brand-logo"
          />
        </Link>
        <span>Thoughtfully designed. Carefully built.</span>
        <a href="mailto:info@ucar-it.nl">
          info@ucar-it.nl <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </footer>
    </main>
  );
}
