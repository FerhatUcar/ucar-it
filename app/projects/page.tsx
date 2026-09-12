import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, FolderOpen } from "lucide-react";
import styles from "../work/work.module.css";
import projectStyles from "./projects.module.css";

const projects = [
  {
    id: "kusadasi",
    name: "Snack Kusadasi Lede",
    category: "Food & online ordering",
    image: "/kusadasi.png",
    width: 465,
    height: 320,
    headline: "Local favourites. Just a few clicks away.",
    paragraphs: [
      "A webshop bringing the flavours of Snack Kusadasi to homes across Lede, Belgium. I built an online experience that makes it easy to browse the menu, discover a favourite meal and place an order from any device.",
      "Built with Next.js, React and Node.js, the platform brings menu browsing, order placement and account management together. My focus was on a straightforward ordering flow, responsive layouts and dependable performance, giving a familiar local snack bar a welcoming digital home.",
    ],
    tags: ["Next.js", "React", "Node.js", "E-commerce"],
    href: "https://www.snack-kusadasi.com",
  },
  {
    id: "its-clean",
    name: "Its Clean",
    category: "Home cleaning & services",
    image: "/logo_itsclean-transparent.png",
    width: 602,
    height: 333,
    headline: "A fresh home starts with a clear first step.",
    paragraphs: [
      "Its Clean helps households make room for what matters with home cleaning through service vouchers. The website translates that everyday peace of mind into a fresh, approachable online presence, with a clear introduction to the service and how it works.",
      "The focus is on simplicity: easy-to-read information, a layout that feels natural on both mobile and desktop, and a straightforward path to getting in touch. Paired with the brand’s blue identity, the result is a welcoming place to take the first step towards a cleaner home.",
    ],
    tags: ["Business website", "Responsive design", "User experience"],
    href: "https://www.itsclean-diensten.be/",
  },
  {
    id: "ferrygraphy",
    name: "Ferrygraphy",
    category: "Photography & creative portfolio",
    headline: "A different perspective. One frame at a time.",
    paragraphs: [
      "Ferrygraphy brings my passion for photography into a dedicated creative space. A portfolio centred on the photographs themselves, sharing the places, details and everyday moments that catch my eye beyond the screen.",
      "The idea is simple: give each image room to tell its story. With a calm visual direction and an emphasis on exploration, the project brings photography and digital design together in a personal home for my creative work.",
    ],
    tags: ["Photography", "Portfolio", "Visual design"],
    href: "https://ferrygraphy.com",
  },
];

const ProjectsPage = () => (
  <main className={styles.page}>
    <header className={styles.hero}>
      <div>
        <p className={styles.eyebrow}><span /> IDEAS INTO EXPERIENCES</p>
        <h1>Projects<span>.</span></h1>
        <p className={styles.intro}>
          Thoughtful websites for businesses and creative ideas. A selection
          of projects connecting people, services and stories.
        </p>
      </div>
      <div className={styles.overview} aria-label="Project overview">
        <div><strong>{projects.length.toString().padStart(2, "0")}</strong><span>Selected projects</span></div>
        <div><strong>Built with care</strong><span>From idea to experience</span></div>
      </div>
    </header>

    <section aria-labelledby="projects-title">
      <div className={styles.sectionHeading}>
        <h2 id="projects-title"><FolderOpen size={17} aria-hidden="true" /> Selected work</h2>
        <span>BUSINESSES, CREATIVITY &amp; DIGITAL EXPERIENCES</span>
      </div>
      <div className={projectStyles.grid}>
        {projects.map((project, index) => (
          <article key={project.id} className={`${styles.card} ${projectStyles.project}`} aria-labelledby={`${project.id}-title`}>
            <div className={projectStyles.brand}>
              {project.image ? <Image
                src={project.image}
                alt={`${project.name} logo`}
                width={project.width}
                height={project.height}
                sizes="(max-width: 640px) 70vw, 280px"
                className={`${projectStyles.logo} ${project.id === "its-clean" ? projectStyles.itsCleanLogo : ""}`}
              /> : (
                <div className={projectStyles.wordmark} aria-label="Ferrygraphy">
                  FERRY<span>/</span>GRAPHY
                </div>
              )}
            </div>
            <div className={projectStyles.body}>
              <header className={styles.cardHeader}>
                <div className={styles.company}>
                  <p className={projectStyles.category}>{project.category}</p>
                  <h3 id={`${project.id}-title`}>{project.name}</h3>
                </div>
                <span className={projectStyles.number} aria-hidden="true">{(index + 1).toString().padStart(2, "0")}</span>
              </header>
              <p className={projectStyles.headline}>{project.headline}</p>
              <div className={projectStyles.copy}>
                {project.paragraphs.map((paragraph) => <p key={paragraph} className={styles.description}>{paragraph}</p>)}
              </div>
              <ul className={`${styles.tags} ${projectStyles.tags}`} aria-label={`${project.name} project highlights`}>
                {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
              <footer className={projectStyles.footer}>
                {project.href ? (
                  <a href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.name} website (opens in a new tab)`}>
                    Visit website <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                ) : (
                  <Link href="/contact">Let’s talk about your project <ArrowUpRight size={16} aria-hidden="true" /></Link>
                )}
              </footer>
            </div>
          </article>
        ))}
      </div>
    </section>

    <footer className={styles.contact}>
      <div><p className={styles.eyebrow}>WHAT’S NEXT?</p><h2>Let’s build something great.</h2></div>
      <Link href="/contact">Get in touch <ArrowUpRight size={18} aria-hidden="true" /></Link>
    </footer>
  </main>
);

export default ProjectsPage;
