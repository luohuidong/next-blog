import React from "react";
import Link from "next/link";

import styles from "./index.module.scss";
import Layout from "@/components/Layout";
import { PostTOC, PostComment } from "@/components/Post";

interface Props {
  children: React.ReactNode;
}

export default function PostPageLayout(props: Props) {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.main}>
          <div>{props.children}</div>

          <div className={styles.comment}>
            <PostComment />
          </div>
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
