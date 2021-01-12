import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";

import { getAllPostTags, getPostListByTagName } from "@/lib/posts";
import TagLayout from "@/components/TagLayout";

interface Props {
  tag: string;
  postList: {
    title: string;
    postFileName: string;
  }[];
}

export default function PostListByTag(props: Props) {
  return (
    <TagLayout headerTitle={`标签 - ${props.tag}`} showGoBackButton>
      <ul>
        {props.postList.map((data) => (
          <li key={data.postFileName}>
            <Link href="/posts/[id]" as={`/posts/${data.postFileName}`}>
              <a>{data.title}</a>
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
      postList: postList.map(({ data, id }) => ({
        title: data.title,
        postFileName: id,
      })),
    },
  };
};
