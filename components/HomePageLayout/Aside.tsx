import React from "react";

import styles from "./Aside.module.scss";
import AsideUser from "./AsideUser";
import AsideNav from "./AsideNav";

export default function Aside() {
  return (
    <aside className={styles.sidebar}>
      <AsideUser />
      <AsideNav />
    </aside>
  );
}
