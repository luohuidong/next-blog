import React from "react";
import Link from "next/link";

import type { MetaData } from "@/lib/posts";

import styles from "./Card.module.scss";

interface Props {
  id: string;
  date: string;
  data: MetaData;
}

export default function Card({ id, data, date }: Props) {
  return (
    <li key={id} className={styles.card}>
      <Link href="/posts/[id]" as={`/posts/${id}`}>
        <a className={styles.title}>{data.title}</a>
      </Link>

      <small>
        <time dateTime={date}>{date}</time>
      </small>
    </li>
  );
}
