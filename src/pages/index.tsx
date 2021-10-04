import Head from "next/head";
import Image from "next/image";
import { SubscribeButton } from "../components/SubscribeButton";
import styles from "./home.module.scss";

import { GetServerSideProps } from "next";
import { stripe } from "../services/stripe";

interface IHomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

export default function Home({ product }: IHomeProps) {
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
            <span>for {product.amount} a month</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
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

export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve("price_1Jgo1oIATRbPLEcfc8GMk7Kh");

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product,
    },
  };
};
