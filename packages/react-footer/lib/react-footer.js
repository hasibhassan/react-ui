import React from "react";
import { FaGithub } from "react-icons/fa";

import styles from "./react-footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.stack}>
        <div className={styles.stackTwo}>
          <img src="logo.svg" alt="" className={styles.logo} />
          <FaGithub fontSize="20px" />
        </div>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} Hasib Hassan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
