import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";

import { getAllPostTags, getPostListByTagName } from "@/lib/posts";
import { PageLayout, PostsList } from "@/components/CategoryAndTag";
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
    <PageLayout
      headerTitle={`标签 - ${props.tag}`}
      showGoBackButton
      goBackButtonHref="/tags"
    >
      <PostsList postList={props.postList} />
    </PageLayout>
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
