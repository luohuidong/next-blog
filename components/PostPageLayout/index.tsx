import React from "react";
import Link from "next/link";

import styles from "./index.module.scss";
import Layout from "../Layout";

interface Props {
  children: React.ReactNode;
}

export default function PostPageLayout(props: Props) {
  return (
    <Layout>
      <div className={styles.container}>
        <div>{props.children}</div>

        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
