import React from "react";
import type { GetStaticProps } from "next";

import { getAllPostTags } from "@/lib/posts";
import { PageLayout, WordsList } from "@/components/CategoryAndTag";

interface Props {
  words: {
    word: string;
    count: number;
  }[];
}

export default function Tags(props: Props) {
  return (
    <PageLayout headerTitle="标签">
      <WordsList words={props.words} type="tags" />
    </PageLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const tags = getAllPostTags();
  const words = tags.map((tag) => ({
    word: tag[0],
    count: tag[1],
  }));
  return {
    props: {
      words,
    },
  };
};
