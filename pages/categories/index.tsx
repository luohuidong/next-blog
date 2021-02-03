import React from "react";
import type { GetStaticProps } from "next";
import Link from "next/link";

import { getAllPostCategories } from "@/lib/posts";
import styles from "@/styles/tags.module.scss";
import { PageLayout, WordsList } from "@/components/CategoryAndTag";

interface Props {
  words: {
    word: string;
    count: number;
  }[];
}

export default function Tags(props: Props) {
  return (
    <PageLayout headerTitle="分类">
      <WordsList words={props.words} />
    </PageLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const categories = getAllPostCategories();
  const words = categories.map((category) => ({
    word: category[0],
    count: category[1],
  }));
  return {
    props: {
      words,
    },
  };
};
