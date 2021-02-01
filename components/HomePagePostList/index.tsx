import React from "react";
import type { SortedPostsData } from "@/lib/posts";

import styles from "./index.module.scss";

import Card from "./Card";

interface Props {
  allPostsData: SortedPostsData;
}
export default function HomepagePostList(props: Props) {
  return (
    <ul className={styles.list}>
      {props.allPostsData.map(({ id, date, data }) => (
        <Card key={id} id={id} date={date} data={data} />
      ))}
    </ul>
  );
}
