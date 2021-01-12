import React from "react";
import Link from "next/link";

import styles from "./index.module.scss";
import Layout from "../Layout";
import GoHomeButton from "@/ui/GoHomeButton";

interface Props {
  children: React.ReactNode;
  headerTitle: string;
}

export default function TagLayout(props: Props) {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>{props.headerTitle}</h1>

          <Link href="/" as={`/`}>
            <a>
              <GoHomeButton />
            </a>
          </Link>
        </div>

        {props.children}
      </div>
    </Layout>
  );
}
