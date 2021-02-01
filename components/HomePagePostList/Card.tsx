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
    <Link href="/posts/[id]" as={`/posts/${id}`}>
      <a style={{ textDecoration: "none" }}>
        <li className={styles.card}>
          <span className={styles.title}>{data.title}</span>

          <small>
            <time dateTime={date}>{date}</time>
          </small>
        </li>
      </a>
    </Link>
  );
}
