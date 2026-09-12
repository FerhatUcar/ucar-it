"use client";

import { MotionWrapper } from "@/components/motion-wrapper";
import Image from "next/image";
import HeaderTitle from "@/components/custom/header";
import { skills } from "@/data/data";

const SkillsPage = () => (
  <MotionWrapper>
    <HeaderTitle text="Skills" bottomSpace />
    <p className="mb-8 max-w-2xl text-sm leading-7 text-zinc-400">
      The tools and technologies I work with, from interfaces to infrastructure.
    </p>
    <ul className="skills-grid" aria-label="Technical skills">
      {skills.map(({ src, title, subtitle, percents, logoWidth }) => (
        <li key={title} className="skill-card">
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
  </MotionWrapper>
);

export default SkillsPage;
