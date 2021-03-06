import React, { useEffect, useState } from "react";
import classnames from "classnames";

import styles from "./index.module.scss";

export default function PostTOC() {
  /**
   * 获取文章所有标题
   * @param cb
   */
  function getHeadings(cb: (headingNode: HTMLElement) => void) {
    const postContainer = document.getElementById("post");
    if (!postContainer) {
      return;
    }
    const headerType = new Set(["h2", "h3", "h4", "h5", "h6"]);
    for (let child of postContainer.childNodes) {
      // 筛选指定类型的 header 元素
      if (
        child.nodeType === 1 &&
        headerType.has(child.nodeName.toLowerCase())
      ) {
        cb(child as HTMLElement);
      }
    }
  }

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
    const regexp = /^h(\d)$/;
    getHeadings((heading) => {
      const result = regexp.exec(heading.tagName.toLowerCase());
      headerData.push({
        elementId: heading.id,
        text: heading.firstChild.nodeValue,
        level: Number(result[1]),
      });
    });

    setHeaderData(headerData);
  }, []);

  const [highLightHeadingId, setHighLightHeadingId] = useState<string>("");
  useEffect(
    function () {
      function throttle(fn: Function, interval) {
        let timer: NodeJS.Timeout = null;

        return {
          fn: function () {
            if (timer) {
              return;
            }
            timer = setTimeout(function () {
              fn.call(this, arguments);
              timer = null;
            }, interval);
          },
          clearTimer: function () {
            if (timer) {
              clearTimeout(timer);
            }
          },
        };
      }

      function handleScroll() {
        let id = "";
        getHeadings((heading) => {
          const top = heading.getBoundingClientRect().top;
          if (top <= 50) {
            id = heading.id;
          }
        });
        setHighLightHeadingId(id);
      }
      const { fn: handler, clearTimer } = throttle(handleScroll, 100);
      window.addEventListener("scroll", handler);

      return () => {
        window.removeEventListener("scroll", handler);
        clearTimer();
      };
    },
    [headerData]
  );

  return (
    <ul className={styles.toc}>
      {headerData.map((header) => (
        <li
          key={header.elementId}
          className={classnames(styles[`level${header.level}`], {
            [styles.highLight]: highLightHeadingId === header.elementId,
          })}
        >
          <a
            href={`#${header.elementId}`}
            className={classnames({
              [styles.highLight]: highLightHeadingId === header.elementId,
            })}
          >
            {header.text}
          </a>
        </li>
      ))}
    </ul>
  );
}
