import React, { useEffect, useState } from "react";

import styles from "./index.module.scss";

export default function PostTOC() {
  interface Header {
    /** header 元素的 id 值 */
    elementId: string;
    /** header 1 表示 h1；2 表示 h2 */
    level: number;
    /** header 的文字是什么 */
    text: string;
  }
  const [headerData, setHeaderData] = useState<Header[]>([]);
  useEffect(() => {
    const headerData: Header[] = [];
    const postContainer = document.getElementById("post");
    const headerType = new Set(["h2", "h3", "h4", "h5", "h6"]);
    const regexp = /^h(\d)$/;
    for (let child of postContainer.childNodes) {
      // 筛选指定类型的 header 元素
      if (
        child.nodeType === 1 &&
        headerType.has(child.nodeName.toLowerCase())
      ) {
        const { id, firstChild, tagName } = child as HTMLElement;
        const result = regexp.exec(tagName.toLowerCase());
        headerData.push({
          elementId: id,
          text: firstChild.nodeValue,
          level: Number(result[1]),
        });
      }
    }
    setHeaderData(headerData);
  }, []);

  return (
    <ul className={styles.toc}>
      {headerData.map((header) => (
        <a key={header.elementId} href={`#${header.elementId}`}>
          <li className={styles[`level${header.level}`]}>{header.text}</li>
        </a>
      ))}
    </ul>
  );
}
