"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, LoaderCircle, Mail, MessageSquare } from "lucide-react";
import { contactDetails, socialMedia } from "@/data/data";
import { contactSchema, contactSubjects, type ContactFormData } from "@/lib/contact";
import { generateCaptcha } from "@/utils/captcha";
import pageStyles from "@/app/work/work.module.css";
import styles from "./contact.module.css";

const Captcha = dynamic(() => import("@/components/custom/captcha"), { ssr: false });

export default function ContactPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [captchaError, setCaptchaError] = useState("");
  const [userInput, setUserInput] = useState("");
  const [captchaValue] = useState(generateCaptcha);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  useEffect(() => {
    if (captchaError && !isSubmitting) document.getElementById("captcha-answer")?.focus();
  }, [captchaError, isSubmitting]);

  const onSubmit = async (values: ContactFormData) => {
    setError("");
    const answer = captchaValue.split(" + ").reduce((sum, number) => sum + Number(number), 0);
    if (!userInput.trim() || Number(userInput) !== answer) {
      setCaptchaError("Please check your answer and try again.");
      return;
    }
    setCaptchaError("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("Message could not be sent");
      router.push("/thank");
    } catch {
      setError("Your message couldn’t be sent. Please try again, or email me at info@ucar-it.nl.");
    }
  };

  return (
    <main className={`${pageStyles.page} ${styles.page}`}>
      <header className={pageStyles.hero}>
        <div>
          <p className={pageStyles.eyebrow}><span /> LET’S START A CONVERSATION</p>
          <h1>Let’s talk<span>.</span></h1>
          <p className={pageStyles.intro}>Have a project in mind, a question or an idea to share? Tell me a little about it and let’s see what we can build together.</p>
        </div>
      </header>
      <div className={styles.layout}>
        <section className={styles.formCard} aria-labelledby="form-title">
          <div className={styles.cardHeading}>
            <span className={styles.icon}><MessageSquare size={21} aria-hidden="true" /></span>
            <div><h2 id="form-title">Send a message</h2><p>A good conversation is where it starts.</p></div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} noValidate aria-busy={isSubmitting}>
            <fieldset disabled={isSubmitting} className={styles.fields}>
              <legend className="sr-only">Your contact details and message</legend>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="contact-name">Your name <span>*</span></label>
                  <input id="contact-name" autoComplete="name" placeholder="Your name" required maxLength={100} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} {...register("name")} />
                  {errors.name && <p id="name-error" className={styles.fieldError}>{errors.name.message}</p>}
                </div>
                <div className={styles.field}>
                  <label htmlFor="contact-email">Email address <span>*</span></label>
                  <input id="contact-email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={254} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} {...register("email")} />
                  {errors.email && <p id="email-error" className={styles.fieldError}>{errors.email.message}</p>}
                </div>
              </div>
              <div className={styles.field}>
                <label htmlFor="contact-subject">What’s it about? <span>*</span></label>
                <select id="contact-subject" required aria-invalid={!!errors.subject} aria-describedby={errors.subject ? "subject-error" : undefined} {...register("subject")}>
                  <option value="" disabled>Select a subject</option>
                  {contactSubjects.map((subject) => <option key={subject} value={subject}>{subject}</option>)}
                </select>
                {errors.subject && <p id="subject-error" className={styles.fieldError}>{errors.subject.message}</p>}
              </div>
              <div className={styles.field}>
                <label htmlFor="contact-message">Your message <span>*</span></label>
                <textarea id="contact-message" rows={6} placeholder="Tell me about your project, ideas or questions…" required maxLength={5000} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} {...register("message")} />
                {errors.message && <p id="message-error" className={styles.fieldError}>{errors.message.message}</p>}
              </div>
              <div className={styles.captcha}>
                <Captcha captchaValue={captchaValue} userInput={userInput} setUserInput={(value) => { setUserInput(value); setCaptchaError(""); }} error={captchaError} />
              </div>
              {error && <p className={styles.error} role="alert">{error}</p>}
              <div className={styles.formFooter}>
                <p>Fields marked <span>*</span> are required.</p>
                <button className={styles.submit} type="submit" disabled={isSubmitting}>
                  {isSubmitting ? <>Sending… <LoaderCircle size={17} className={styles.spinner} aria-hidden="true" /></> : <>Send message <ArrowUpRight size={17} aria-hidden="true" /></>}
                </button>
              </div>
            </fieldset>
          </form>
        </section>
        <aside className={styles.sidebar} aria-label="Contact information">
          <section className={styles.infoCard}>
            <div className={styles.cardHeading}>
              <span className={styles.icon}><Mail size={21} aria-hidden="true" /></span>
              <h2>Prefer a direct hello?</h2>
            </div>
            <p>You can also reach me by email or phone.</p>
            <ul className={styles.contactList}>
              {contactDetails.map(({ icon: Icon, text }) => (
                <li key={text}><Icon size={16} aria-hidden="true" />{text.includes("@") ? <a href={`mailto:${text}`}>{text}</a> : text.startsWith("+") ? <a href={`tel:${text}`}>{text}</a> : <span>{text}</span>}</li>
              ))}
            </ul>
            <div className={styles.socials}>
              <h3>Let’s connect</h3>
              <div>{socialMedia.map(({ icon: Icon, link }) => (
                <Link key={link} href={link} target="_blank" rel="noopener noreferrer" aria-label={`Visit my ${new URL(link).hostname.replace("www.", "").split(".")[0]} profile (opens in a new tab)`}><Icon size={18} aria-hidden="true" /></Link>
              ))}</div>
            </div>
          </section>
        </aside>
      </div>
    </main>
  );
}
