import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Link as WebLink, UserRound } from "lucide-react";
import { Instagram } from "@/components/ui/brand-icons";
import { AboutParagraphs } from "@/data/data";
import styles from "../work/work.module.css";
import aboutStyles from "./about.module.css";

const AboutPage = () => (
  <main className={styles.page}>
    <header className={styles.hero}>
      <div>
        <p className={styles.eyebrow}><span /> BEHIND THE WORK</p>
        <h1>About me<span>.</span></h1>
        <p className={styles.intro}>
          Engineer, creative and explorer. A little about the person behind
          the code, and the things that keep me curious.
        </p>
      </div>
      <div className={`${styles.overview} ${aboutStyles.overview}`} aria-label="About Ferhat">
        <div><strong>Ferhat Ucar</strong><span>Software engineer &amp; designer</span></div>
        <div><strong>Beyond code</strong><span>Photography, travel &amp; everyday life</span></div>
      </div>
    </header>

    <section aria-labelledby="story-title">
      <div className={styles.sectionHeading}>
        <h2 id="story-title"><UserRound size={17} aria-hidden="true" /> My story</h2>
        <span>WORK, CREATIVITY &amp; LIFE</span>
      </div>
      <div className={aboutStyles.stories}>
        {AboutParagraphs.map((paragraph, index) => (
            <article key={paragraph.title} className={`${styles.card} ${aboutStyles.storyCard}`} aria-labelledby={`about-${index}`}>
              <header className={styles.cardHeader}>
                <div className={styles.companyIcon} aria-hidden="true"><paragraph.icon size={21} /></div>
                <div className={styles.company}>
                  <h3 id={`about-${index}`}>{paragraph.title}</h3>
                  <p>{paragraph.desc}</p>
                </div>
              </header>
              <div className={aboutStyles.storyContent}>
                {paragraph.image && (
                  <Image
                    src={paragraph.image}
                    className={aboutStyles.portrait}
                    alt={index === 0 ? "Portrait of Ferhat Ucar" : "Ferhat’s travels"}
                    width={128}
                    height={128}
                  />
                )}
                <div className={aboutStyles.copy}>
                  <p className={styles.description}>{paragraph.text}</p>
                  {paragraph.text2 && <p className={styles.description}>{paragraph.text2}</p>}
                </div>
              </div>
              {paragraph.links && (
                <footer className={aboutStyles.links}>
                  <a href="https://www.instagram.com/ferrygraphy/" target="_blank" rel="noopener noreferrer">
                    <Instagram size={16} aria-hidden="true" /> Instagram <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                  <a href="https://www.ferrygraphy.nl/" target="_blank" rel="noopener noreferrer">
                    <WebLink size={16} aria-hidden="true" /> Website <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                </footer>
              )}
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

export default AboutPage;
