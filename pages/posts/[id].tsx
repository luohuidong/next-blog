import React, { useEffect } from "react";
import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";
import Prism from "prismjs";

import postsStyles from "styles/post.module.scss";

import { getAllPostIds, getPostData } from "lib/posts";
import Layout from "@/components/PostPageLayout";
import Date from "@/components/dates";

export default function Post({ postData }) {
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
          <Date timestamp={postData.timestamp} />
        </div>

        <div dangerouslySetInnerHTML={createMarkup()} />
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
