import Head from "next/head";
import Image from "next/image";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main className={styles.mainContainer}>
        <section className={styles.welcomeSection}>
          <span>👋 Hey, welcome</span>
          <h1>
            News about the
            <br /> <span>React</span> world
          </h1>
          <p>
            Get access to all the publications
            <br />
            <span>for $9.90 a month</span>
          </p>
        </section>
        <picture>
          <Image
            src="/assets/avatar.svg"
            alt="Girl coding"
            width="400"
            height="400"
          />
        </picture>
      </main>
    </>
  );
}
