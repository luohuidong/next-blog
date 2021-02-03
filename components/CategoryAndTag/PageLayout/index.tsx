import React from "react";

import styles from "./index.module.scss";
import Layout from "@/components/Layout";
import ButtonLink from "./ButtonLink";

interface Props {
  children: React.ReactNode;
  headerTitle: string;
  showGoBackButton?: boolean;
  goBackButtonHref?: string;
}

export default function TagLayout(props: Props) {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <div className={styles.header}>
            <h1 style={{ color: "rgb(66, 102, 134)" }}>{props.headerTitle}</h1>

            {props.showGoBackButton && (
              <ButtonLink
                href={props.goBackButtonHref}
                imgSrc="/icons/goback.png"
                title="返回"
              />
            )}

            <ButtonLink href="/" imgSrc="/icons/home.png" title="首页" />
          </div>

          {props.children}
        </div>
      </div>
    </Layout>
  );
}
