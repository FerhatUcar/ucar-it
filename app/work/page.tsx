"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, BriefcaseBusiness, ChevronDown, MapPin } from "lucide-react";
import { workInformation } from "@/data/data";
import styles from "./work.module.css";

const WorkPage = () => {
  const [showAll, setShowAll] = useState(false);
  const experience = showAll ? workInformation : workInformation.slice(0, 3);

  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <div>
          <p className={styles.eyebrow}><span /> THE JOURNEY SO FAR</p>
          <h1>Work experience<span>.</span></h1>
          <p className={styles.intro}>
            From first ideas to products people rely on. A look at the teams,
            challenges and technology that shaped my work.
          </p>
        </div>
        <div className={styles.overview} aria-label="Career overview">
          <div><strong>Since 2014</strong><span>Building digital experiences</span></div>
          <div><strong>{workInformation.length.toString().padStart(2, "0")}</strong><span>Roles along the way</span></div>
        </div>
      </header>

      <section aria-labelledby="timeline-title" className={styles.experience}>
        <div className={styles.sectionHeading}>
          <h2 id="timeline-title"><BriefcaseBusiness size={17} aria-hidden="true" /> Career timeline</h2>
          <span>PAST TO PRESENT, IN REVERSE</span>
        </div>
        <ol className={styles.timeline}>
          {experience.map((work, index) => {
            const current = /now/i.test(work.date);
            const technologies = work.stack.replace(/^Stack:\s*/, "").replace(/\.$/, "").split(/,\s*|\s+&\s+|\s+and\s+/).map((tag) => tag.trim()).filter(Boolean);
            const paragraphs = [work.text2, work.text3, work.text4, work.text5].filter(Boolean);
            return (
              <li key={work.company} className={`${styles.entry} ${current ? styles.current : ""}`}>
                <div className={styles.date}>
                  <span>{work.date.replace("-", " — ").replace("Now", "Present")}</span>
                  {work.months && <small>{work.months.replace(/[()]/g, "")}</small>}
                  {current && <small className={styles.currentLabel}>Current role</small>}
                </div>
                <span className={styles.marker} aria-hidden="true"><span /></span>
                <article className={styles.card} aria-labelledby={`role-${index}`}>
                  <header className={styles.cardHeader}>
                    <div className={styles.companyIcon} aria-hidden="true">
                      {work.company.split(" ").slice(0, 2).map((word) => word[0]).join("")}
                    </div>
                    <div className={styles.company}>
                      <h3 id={`role-${index}`}>{work.company}</h3>
                      <p>{work.title}</p>
                    </div>
                    <span className={styles.location}><MapPin size={13} aria-hidden="true" />{work.place}</span>
                  </header>
                  <p className={styles.description}>{work.text}</p>
                  <ul className={styles.tags} aria-label="Technology highlights">
                    {technologies.slice(0, 6).map((tag, i) => <li key={`${tag}-${i}`}>{tag}</li>)}
                    {technologies.length > 6 && <li className={styles.moreTags}>+{technologies.length - 6} more</li>}
                  </ul>
                  <details className={styles.details}>
                    <summary><span className={styles.closedLabel}>Explore this role</span><span className={styles.openLabel}>Show less</span><ChevronDown size={16} aria-hidden="true" /></summary>
                    <div className={styles.detailContent}>
                      {paragraphs.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
                      <h4>Full technology stack</h4>
                      <ul className={styles.tags} aria-label="Full technology stack">
                        {technologies.map((tag, i) => <li key={`${tag}-${i}`}>{tag}</li>)}
                      </ul>
                    </div>
                  </details>
                </article>
              </li>
            );
          })}
        </ol>
        <div className={styles.timelineEnd}>
          {!showAll ? (
            <button className={styles.loadMore} onClick={() => setShowAll(true)} aria-controls="experience-progress">
              <ArrowDown size={16} aria-hidden="true" /> View earlier experience <span>+{workInformation.length - 3}</span>
            </button>
          ) : <span className={styles.startLabel}>2014 · Where it all started</span>}
          <p id="experience-progress" role="status">Showing {experience.length} of {workInformation.length} roles</p>
        </div>
      </section>
      <footer className={styles.contact}>
        <div><p className={styles.eyebrow}>WHAT’S NEXT?</p><h2>Let’s build something great.</h2></div>
        <Link href="/contact">Get in touch <ArrowUpRight size={18} aria-hidden="true" /></Link>
      </footer>
    </main>
  );
};

export default WorkPage;
