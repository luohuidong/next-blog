import React from "react";

import styles from "./index.module.scss";
import Layout from "../Layout";
import ButtonLink from "./ButtonLink";

interface Props {
  children: React.ReactNode;
  headerTitle: string;
  showGoBackButton?: boolean;
}

export default function TagLayout(props: Props) {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>{props.headerTitle}</h1>

          {props.showGoBackButton && (
            <ButtonLink
              href="/tags"
              imgSrc="/icons/goback.svg"
              title="Go Back"
            />
          )}

          <ButtonLink href="/" imgSrc="/icons/home.svg" title="Go Home" />
        </div>

        {props.children}
      </div>
    </Layout>
  );
}
