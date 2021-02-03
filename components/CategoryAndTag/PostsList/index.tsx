import React from "react";
import Link from "next/link";

import styles from "./index.module.scss";

interface Props {
  postList: {
    title: string;
    date: string;
    postFileName: string;
  }[];
}

export default function CommonPostList(props: Props) {
  return (
    <ul className={styles.list}>
      {props.postList &&
        props.postList.map((data) => (
          <li key={data.postFileName} className={styles.listItem}>
            <Link href="/posts/[id]" as={`/posts/${data.postFileName}`}>
              <a className={styles.link}>
                <span className={styles.time}>
                  <time dateTime={data.date}>{data.date}</time>
                </span>

                {data.title}
              </a>
            </Link>
          </li>
        ))}
    </ul>
  );
}
