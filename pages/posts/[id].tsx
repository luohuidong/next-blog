import React, { useEffect } from "react";
import Head from "next/head";
import { GetStaticPaths } from "next";
import Prism from "prismjs";

import postsStyles from "styles/post.module.scss";

import { getAllPostIds, getPostData } from "lib/posts";
import Layout from "@/components/PostPageLayout";
import Date from "@/components/dates";

interface Props {
  postData: {
    id: string;
    date: string;
    contentHtml: string;
  };
}

export default function Post({ postData }: Props) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  function createMarkup() {
    return { __html: postData.contentHtml };
  }

  return (
    <Layout>
      <Head>
        <title>{postData.title + " · 罗惠东的博客"}</title>
      </Head>

      <article className={postsStyles.artical}>
        <h1>{postData.title}</h1>

        <div className={postsStyles.date}>
          <time dateTime={postData.date}>{postData.id}</time>
        </div>

        <div
          dangerouslySetInnerHTML={createMarkup()}
          className={postsStyles.code}
        />
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};
