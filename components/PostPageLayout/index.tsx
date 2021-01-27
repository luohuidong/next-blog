import React from "react";
import Link from "next/link";

import styles from "./index.module.scss";
import Layout from "../Layout";
import PostComment from "../PostComment";
import PostTOC from "../PostTOC";

interface Props {
  children: React.ReactNode;
}

export default function PostPageLayout(props: Props) {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.main}>
          <div>{props.children}</div>

          <PostComment />
        </div>

        <div className={styles.toc}>
          <div className={styles.innerContainer}>
            <PostTOC />
          </div>
        </div>

        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
