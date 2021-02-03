import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";

import { getAllPostCategories, getPostListByCategory } from "@/lib/posts";
import { PageLayout, PostsList } from "@/components/CategoryAndTag";

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
    <PageLayout
      headerTitle={`分类 - ${props.category}`}
      showGoBackButton
      goBackButtonHref="/categories"
    >
      <PostsList postList={props.postList} />
    </PageLayout>
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
