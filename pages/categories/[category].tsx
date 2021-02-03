import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";

import { getAllPostCategories, getPostListByCategory } from "@/lib/posts";
import TagLayout from "@/components/TagLayout";

interface Props {
  category: string;
  postList: {
    title: string;
    date: string;
    postFileName: string;
  }[];
}

export default function PostListByTag(props: Props) {
  return (
    <TagLayout headerTitle={`分类 - ${props.category}`} showGoBackButton>
      <ul style={{ listStyleType: "none" }}>
        {props.postList &&
          props.postList.map((data) => (
            <li key={data.postFileName} style={{ marginBottom: 20 }}>
              <Link href="/posts/[id]" as={`/posts/${data.postFileName}`}>
                <a style={{ color: "#426686" }}>
                  <span style={{ display: "inline-block", width: 120 }}>
                    <time dateTime={data.date}>{data.date}</time>
                  </span>

                  {data.title}
                </a>
              </Link>
            </li>
          ))}
      </ul>
    </TagLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = getAllPostCategories();
  const paths = categories.map((category) => ({
    params: {
      category: category[0],
    },
  }));
  return {
    paths: paths,
    fallback: true, // See the "fallback" section below
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const category = params.category as string;
  const postList = getPostListByCategory(category);

  return {
    props: {
      category: category,
      postList: postList.map(({ data, id, date }) => ({
        title: data.title,
        date,
        postFileName: id,
      })),
    },
  };
};
