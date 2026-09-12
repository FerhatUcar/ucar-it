"use client";

import Image from "next/image";
import { skills } from "@/data/data";
import styles from "@/app/work/work.module.css";

const SkillsPage = () => (
  <main className={styles.page}>
    <header className={styles.hero}>
      <div>
        <p className={styles.eyebrow}><span /> THE TOOLS OF MY TRADE</p>
        <h1>Skills<span>.</span></h1>
        <p className={styles.intro}>
          The tools and technologies I work with, from interfaces to infrastructure.
        </p>
      </div>
    </header>
    <ul className="skills-grid" aria-label="Technical skills">
      {skills.map(({ src, title, subtitle, percents, logoWidth }, index) => (
        <li
          key={title}
          className="skill-card"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="skill-heading">
            <div className="skill-logo">
              <Image
                src={src}
                alt=""
                width={logoWidth ?? 32}
                height={32}
              />
            </div>
            <div>
              <h2 className="skill-name">{title}</h2>
              {subtitle && <p className="skill-subtitle">{subtitle}</p>}
            </div>
          </div>
          <div className="skill-level" aria-hidden="true">
            <span className="skill-value">{percents}<span>%</span></span>
            <span className="skill-level-label">Proficiency</span>
          </div>
          <div
            className="skill-track"
            role="progressbar"
            aria-label={`${title}${subtitle ? ` ${subtitle}` : ""} proficiency`}
            aria-valuenow={percents}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div className="skill-fill" style={{ width: `${percents}%` }} />
          </div>
        </li>
      ))}
    </ul>
  </main>
);

export default SkillsPage;
