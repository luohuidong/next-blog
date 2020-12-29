import React from "react";
import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";

import HomepageLayout from "@/components/HomePageLayout";
import utilStyles from "@/styles/utils.module.css";
import { getSortedPostsData, MetaData } from "@/lib/posts";
import Date from "@/components/dates";

interface Props {
  allPostsData: {
    id: string;
    data: MetaData;
  }[];
}

export default function Home({ allPostsData }: Props) {
  return (
    <HomepageLayout>
      <section
        className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
        style={{ marginTop: 30 }}
      >
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, data }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{data.title}</a>
              </Link>

              <br />

              <small className={utilStyles.lightText}>
                <Date timestamp={data.timestamp} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </HomepageLayout>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
