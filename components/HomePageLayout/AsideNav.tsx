import React from "react";
import Link from "next/link";

import styles from "./AsideNav.module.scss";

export default function AsideNav() {
  return (
    <div className={styles.nav}>
      <Link href="/tags">
        <a>
          <img
            src="/icons/bookmark.svg"
            alt=""
            style={{
              width: 30,
              height: 30,
            }}
          />
          <span
            style={{
              fontWeight: "bold",
              fontSize: 18,
              color: "#262626",
            }}
          >
            标签
          </span>
        </a>
      </Link>
    </div>
  );
}
