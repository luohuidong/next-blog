import React from "react";
import Head from "next/head";
import classnames from "classnames";

import Layout from "../Layout";
import styles from "./index.module.scss";
import Aside from "./Aside";

interface Props {
  children: React.ReactNode;
}

export default function HomePageLayout(props: Props) {
  return (
    <Layout>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="罗惠东的博客" />

        <meta name="og:title" content={"首页-罗惠东的博客"} />
        <meta name="twitter:card" content="summary_large_image" />

        <title>首页 · 罗惠东的博客</title>
      </Head>

      <div className={styles.container}>
        <div className={styles.glass}>
          <Aside />
          {props.children}
        </div>
      </div>
      <div className={classnames(styles.circle, styles.circle1)}></div>
      <div className={classnames(styles.circle, styles.circle2)}></div>
    </Layout>
  );
}
