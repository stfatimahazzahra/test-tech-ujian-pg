// import Image from "next/image";
// import styles from "./page.module.css";
import Navbar from "../components/Navbar";
import styles from "../app/styles/styles.module.css";
import Soal from "../components/Soal";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* <main className={styles.main}>
        <Image
          className={styles.logo}
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            Get started by editing <code>src/app/page.js</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="https://nextjs.org/icons/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer> */}
      {/* <Navbar /> */}

      <div className="mt-5">
        <div className={`${styles["container-modify"]}`}>
          <div className={`${styles["bg-card-col2"]} card bg-light`}>
            <div className="card-body">
              <p className="card-text" style={{ fontSize: "15px" }}>
                Welcome to the multiple-choice exam consisting of 20 questions.
                You will have 20 minutes to complete all the questions. Make
                sure to read each question carefully and select the most
                appropriate answer. The timer will start once you click the
                Start button. If the time runs out, the exam will
                automatically end, and your answers will be saved. Get ready,
                and good luck!
              </p>
              <Link href="/soal" type="button" className="btn btn-primary">
                Mulai
              </Link>
            </div>
          </div>
        </div>
      </div>

        {/* <div className="mt-5">
          <Soal />
        </div> */}
    </div>
  );
}
