import React from "react";
import type { GetStaticProps } from "next";
import Link from "next/link";

import { getAllPostTags } from "@/lib/posts";
import styles from "@/styles/tags.module.scss";
import TagLayout from "@/components/TagLayout";

interface Props {
  tags: [string, number][];
}

export default function Tags(props: Props) {
  return (
    <TagLayout headerTitle="标签">
      <div className={styles.container}>
        {props.tags.map((tag) => (
          <span key={tag[0]} className={styles.tagText}>
            <a key={tag[0]}>{tag[0]}</a>
          </span>
        ))}
      </div>
    </TagLayout>
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
