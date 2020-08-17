import React, { useEffect } from "react";
import Head from "next/head";
import { GetStaticProps, GetStaticPaths } from "next";

import postsStyles from "styles/post.module.scss";

import { getAllPostIds, getPostData } from "lib/posts";
import Layout from "@/components/layout";
import Date from "@/components/dates";
import prismjs from "@/lib/prismjs";

export default function Post({ postData, html }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <article className={postsStyles.artical}>
        <h1>{postData.title}</h1>

        <div className={postsStyles.date}>
          <Date dateString={postData.date} />
        </div>

        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
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
  const html = prismjs();
  return {
    props: {
      postData,
      html,
    },
  };
};
