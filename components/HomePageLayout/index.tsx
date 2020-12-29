import React from "react";
import Head from "next/head";

import LayoutFooter from "@/components/LayoutFooter";
import styles from "./index.module.scss";
import utilStyles from "@/styles/utils.module.css";

interface Props {
  children: React.ReactNode;
}

export default function Layout(props: Props) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="罗惠东的博客" />

        <meta name="og:title" content={"首页-罗惠东的博客"} />
        <meta name="twitter:card" content="summary_large_image" />

        <title>首页 · 罗惠东的博客</title>
      </Head>

      <header className={styles.header}>
        <>
          <img
            src="/images/profile.jpeg"
            className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
            draggable={false}
          />
          <h1 className={utilStyles.heading2Xl}>罗惠东</h1>
        </>
      </header>

      <main>{props.children}</main>

      <LayoutFooter />
    </div>
  );
}
