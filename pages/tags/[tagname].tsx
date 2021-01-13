import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";

import { getAllPostTags, getPostListByTagName } from "@/lib/posts";
import TagLayout from "@/components/TagLayout";

interface Props {
  tag: string;
  postList: {
    title: string;
    date: string;
    postFileName: string;
  }[];
}

export default function PostListByTag(props: Props) {
  return (
    <TagLayout headerTitle={`标签 - ${props.tag}`} showGoBackButton>
      <ul style={{ listStyleType: "none" }}>
        {props.postList &&
          props.postList.map((data) => (
            <li key={data.postFileName} style={{ marginBottom: 20 }}>
              <Link href="/posts/[id]" as={`/posts/${data.postFileName}`}>
                <a>
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
  const tags = getAllPostTags();
  const paths = tags.map((tag) => ({
    params: {
      tagname: tag[0],
    },
  }));
  return {
    paths: paths,
    fallback: true, // See the "fallback" section below
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const tagname = params.tagname as string;
  const postList = getPostListByTagName(tagname);
  return {
    props: {
      tag: tagname,
      postList: postList.map(({ data, id, date }) => ({
        title: data.title,
        date,
        postFileName: id,
      })),
    },
  };
};
