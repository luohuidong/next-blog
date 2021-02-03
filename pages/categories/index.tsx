import React from "react";
import type { GetStaticProps } from "next";
import Link from "next/link";

import { getAllPostCategories } from "@/lib/posts";
import styles from "@/styles/tags.module.scss";
import TagLayout from "@/components/TagLayout";

interface Props {
  categories: string[];
}

export default function Tags(props: Props) {
  return (
    <TagLayout headerTitle="分类">
      <div className={styles.container}>
        {props.categories.map((category) => (
          <span key={category[0]} className={styles.tagText}>
            <Link
              href="/categories/[categories]"
              as={`/categories/${category[0]}`}
            >
              <a>{category[0]}</a>
            </Link>
          </span>
        ))}
      </div>
    </TagLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const categories = getAllPostCategories();
  console.log("categories", categories);
  return {
    props: {
      categories,
    },
  };
};
