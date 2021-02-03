import React from "react";
import Link from "next/link";

import styles from "./AsideNav.module.scss";

function NavLink(props: { href: string; iconSrc: string; text: string }) {
  return (
    <Link href={props.href}>
      <a style={{ width: 100, marginBottom: 20 }}>
        <img
          src={props.iconSrc}
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
            marginLeft: 20,
          }}
        >
          {props.text}
        </span>
      </a>
    </Link>
  );
}

export default function AsideNav() {
  return (
    <div className={styles.nav}>
      <NavLink href="/categories" iconSrc="/icons/category.png" text="分类" />
      <NavLink href="/tags" iconSrc="icons/tags.png" text="标签" />
    </div>
  );
}
