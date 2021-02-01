import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import remarkSlug from "remark-slug";
import remarkMath from "remark-math";
import remark2rehype from "remark-rehype";
import katex from "rehype-katex";
import stringify from "rehype-stringify";

const postsDirectory = path.join(process.cwd(), "posts");

export interface MetaData {
  title: string;
  tag: string[];
}

export interface SortedPostsDataItem {
  id: string;
  date: string;
  data: MetaData;
}

export type SortedPostsData = SortedPostsDataItem[];

/** 获取排序过的文章数据 */
export function getSortedPostsData(): SortedPostsData {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    const data = matterResult.data as MetaData;

    // Combine the data with the id
    return {
      id,
      date: id,
      data,
    };
  });

  interface PostData {
    id: string;
    data: MetaData;
  }

  // Sort posts by time
  return allPostsData.sort((a: PostData, b: PostData) => {
    if (Date.parse(a.id) < Date.parse(b.id)) {
      return 1;
    } else {
      return -1;
    }
  });
}

/** 获取所有文章的 id */
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export type PostData = {
  id: string;
  date: string;
  contentHtml: string;
} & MetaData;

/**
 * 获取某篇文章的数据
 * @param {string} id 文件名
 */
export async function getPostData(id: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(remarkSlug)
    .use(remarkMath)
    .use(remark2rehype)
    .use(katex)
    .use(stringify)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    date: id,
    contentHtml,
    ...(matterResult.data as MetaData),
  };
}

export function getAllPostTags() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);

  const tmpMap = new Map<string, number>();

  fileNames.forEach((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    const data = matterResult.data as MetaData;

    data.tag.forEach((t) => {
      tmpMap.get(t) ? tmpMap.set(t, tmpMap.get(t) + 1) : tmpMap.set(t, 1);
    });
  });

  return [...tmpMap];
}

export function getPostListByTagName(tagname: string) {
  const postsData = getSortedPostsData();
  return postsData.filter(({ data }) => data.tag.includes(tagname));
}
