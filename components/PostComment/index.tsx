import React, { useEffect, useRef } from "react";

export default function PostComment() {
  const divRef = useRef(null);

  useEffect(() => {
    const utterances = document.createElement("script");
    utterances.setAttribute("src", "https://utteranc.es/client.js");
    utterances.setAttribute("repo", "luohuidong/next-blog");
    utterances.setAttribute("issue-term", "pathname");
    utterances.setAttribute("label", "blog-comments");
    utterances.setAttribute("theme", "github-light");
    utterances.setAttribute("crossorigin", "anonymous");
    utterances.async = true;

    const div = divRef.current;

    if (div) {
      div.appendChild(utterances);
    }
  }, []);

  return <div ref={divRef} style={{ marginTop: 50 }}></div>;
}
