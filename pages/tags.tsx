import React from "react";
import type { GetStaticProps } from "next";
import Link from "next/link";

import { getAllPostTags } from "@/lib/posts";
import styles from "@/styles/tags.module.scss";
import Layout from "@/components/Layout";
import GoHomeButton from "@/ui/GoHomeButton";

interface Props {
  tags: [string, number][];
}

export default function Tags(props: Props) {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Tags</h1>

          <Link href="/" as={`/`}>
            <a>
              <GoHomeButton />
            </a>
          </Link>
        </div>
        {props.tags.map((tag) => (
          <span key={tag[0]} className={styles.tagText}>
            <a key={tag[0]}>{tag[0]}</a>
          </span>
        ))}
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const tags = getAllPostTags();
  return {
    props: {
      tags,
    },
  };
};
