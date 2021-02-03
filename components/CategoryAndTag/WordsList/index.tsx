import React from "react";
import Link from "next/link";

import styles from "./index.module.scss";

interface Props {
  words: {
    word: string;
    count: number;
  }[];
  type: "categories" | "tags";
}

export default function WordsList(props: Props) {
  return (
    <div className={styles.container}>
      {props.words.map(({ word }) => (
        <span key={word} className={styles.tagText}>
          <Link
            href={`/${props.type}/[${props.type}]`}
            as={`/${props.type}/${word}`}
          >
            <a>{word}</a>
          </Link>
        </span>
      ))}
    </div>
  );
}
