import React from "react";
import Head from "next/head";
import classnames from "classnames";

import Layout from "../Layout";
import styles from "./index.module.scss";
import utilStyles from "@/styles/utils.module.css";

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

      <header className={styles.header}>
        <>
          <picture>
            <source
              media="(max-width: 500px)"
              srcSet="http://images.luohuidong.cn/profile.jpeg?imageMogr2/thumbnail/!7p"
            />
            <img
              src="http://images.luohuidong.cn/profile.jpeg?imageMogr2/thumbnail/!13p"
              alt="头像"
              className={classnames(
                styles.headerImage,
                utilStyles.borderCircle
              )}
              draggable={false}
            />
          </picture>

          <h1 className={classnames(utilStyles.heading2Xl, styles.title)}>
            罗惠东
          </h1>
        </>
      </header>

      <main className={styles.main}>{props.children}</main>
    </Layout>
  );
}
