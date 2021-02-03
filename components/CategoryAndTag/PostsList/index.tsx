import React from "react";
import Link from "next/link";

interface Props {
  postList: {
    title: string;
    date: string;
    postFileName: string;
  }[];
}

export default function CommonPostList(props: Props) {
  return (
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
  );
}
