import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import styles from "@/app/work/work.module.css";
import contactStyles from "@/app/contact/contact.module.css";

export default function ThankPage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <div>
          <p className={styles.eyebrow}><Check size={16} aria-hidden="true" /> MESSAGE SENT</p>
          <h1>Thank you<span>.</span></h1>
          <p className={styles.intro}>Your message is on its way. I’ll get back to you soon.</p>
        </div>
      </header>
      <div className="flex flex-wrap items-center gap-6">
        <Link href="/" className={contactStyles.submit}>Back to home <ArrowUpRight size={17} aria-hidden="true" /></Link>
        <Link href="/contact" className="text-sm text-zinc-300 hover:text-rose-300">Send another message</Link>
      </div>
    </main>
  );
}
