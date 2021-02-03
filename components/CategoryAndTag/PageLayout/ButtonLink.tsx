import React from "react";
import Link from "next/link";

import IconButton from "@/ui/IconButton";
import styles from "./ButtonLink.module.scss";

export default function ButtonLink(props: {
  href: string;
  imgSrc: string;
  title: string;
}) {
  return (
    <Link href={props.href}>
      <a className={styles.link}>
        <IconButton src={props.imgSrc} title={props.title} />
      </a>
    </Link>
  );
}
