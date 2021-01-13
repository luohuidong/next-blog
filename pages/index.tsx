import React from "react";
import Link from "next/link";
import { GetStaticProps } from "next";
import classnames from "classnames";

import HomepageLayout from "@/components/HomePageLayout";
import utilStyles from "@/styles/utils.module.css";
import { getSortedPostsData, MetaData, SortedPostsData } from "@/lib/posts";
import Date from "@/components/dates";
import styles from "@/styles/index.module.scss";

interface Props {
  allPostsData: SortedPostsData;
}

export default function Home({ allPostsData }: Props) {
  return (
    <HomepageLayout>
      <section
        className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
        style={{ marginTop: 30, maxWidth: 750 }}
      >
        <ul className={classnames(utilStyles.list, styles.list)}>
          {allPostsData.map(({ id, date, data }) => (
            <li
              className={classnames(utilStyles.listItem, styles.listItem)}
              key={id}
            >
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a className={styles.listItemTitle}>{data.title}</a>
              </Link>

              <small className={utilStyles.lightText}>
                <time dateTime={date}>{date}</time>
              </small>
            </li>
          ))}
        </ul>
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
