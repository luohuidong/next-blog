import React from "react";
import { GetStaticProps } from "next";

import HomepageLayout from "@/components/HomePageLayout";
import { getSortedPostsData, SortedPostsData } from "@/lib/posts";
import styles from "@/styles/index.module.scss";
import HomePagePostList from "@/components/HomePagePostList";

interface Props {
  allPostsData: SortedPostsData;
}

export default function Home({ allPostsData }: Props) {
  return (
    <HomepageLayout>
      <section className={styles.container}>
        <h1
          style={{
            color: "#426686",
          }}
        >
          最新文章
        </h1>

        <HomePagePostList allPostsData={allPostsData} />
      </section>
    </HomepageLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
