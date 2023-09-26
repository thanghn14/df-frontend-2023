import React from "react";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div id={styles.head}>
      <a href="/" id={styles.logo}>Bookstore</a>
      <div id={styles.user}>
        <div id={styles.userAvatar}></div>
        <div id={styles.userName}>Ngoc Thang</div>
      </div>
    </div>
  );
};
