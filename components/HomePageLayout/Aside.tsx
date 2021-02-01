import React from "react";

import styles from "./Aside.module.scss";
import AsideUser from "./AsideUser";
import AsideNav from "./AsideNav";

export default function Aside() {
  return (
    <div className={styles.sidebar}>
      <AsideUser />
      <AsideNav />
    </div>
  );
}
