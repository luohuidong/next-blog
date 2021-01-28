import React, { useEffect, useState } from "react";
import Head from "next/head";
import { GetStaticPaths } from "next";
import classnames from "classnames";

import postsStyles from "styles/post.module.scss";

import { getAllPostIds, getPostData, PostData } from "lib/posts";
import Layout from "@/components/PostPageLayout";
import PostPrismCDN from "@/components/PostPrismCDN";

interface Props {
  postData: PostData;
}

export default function Post({ postData }: Props) {
  useEffect(() => {}, []);

  function createMarkup() {
    return { __html: postData.contentHtml };
  }

  return (
    <Layout>
      <Head>
        <title>{postData.title + " · 罗惠东的博客"}</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"
        />
      </Head>

      <PostPrismCDN />

      <article className={postsStyles.artical}>
        <h1>{postData.title}</h1>

        <div className={postsStyles.date}>
          <time dateTime={postData.date}>{postData.id}</time>
        </div>

        <div
          id="post"
          dangerouslySetInnerHTML={createMarkup()}
          className={classnames(postsStyles.code, "line-numbers")}
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
