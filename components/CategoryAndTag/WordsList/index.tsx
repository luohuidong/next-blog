import React from "react";
import Link from "next/link";

import styles from "./index.module.scss";

interface Props {
  words: {
    word: string;
    count: number;
  }[];
}

export default function WordsList(props: Props) {
  return (
    <div className={styles.container}>
      {props.words.map(({ word }) => (
        <span key={word} className={styles.tagText}>
          <Link href="/categories/[categories]" as={`/categories/${word}`}>
            <a>{word}</a>
          </Link>
        </span>
      ))}
    </div>
  );
}
