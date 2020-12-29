import React from "react";
import LayoutFooter from "../LayoutFooter";

import styles from "./index.module.scss";

interface Props {
  children: React.ReactNode;
}

export default function Layout(props: Props) {
  return (
    <div className={styles.container}>
      <div>{props.children}</div>

      <div>
        <LayoutFooter />
      </div>
    </div>
  );
}
