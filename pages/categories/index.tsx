import React from "react";
import type { GetStaticProps } from "next";

import { getAllPostCategories } from "@/lib/posts";
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
      <WordsList words={props.words} type="categories" />
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
