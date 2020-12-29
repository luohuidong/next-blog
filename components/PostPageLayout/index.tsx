import React from "react";
import Link from "next/link";

import styles from "./index.module.scss";

interface Props {
  children: React.ReactNode;
}

export default function PostPageLayout(props: Props) {
  return (
    <div className={styles.container}>
      <main>{props.children}</main>

      <div className={styles.backToHome}>
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </div>
    </div>
  );
}
