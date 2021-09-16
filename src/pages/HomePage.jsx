import React from "react";
import styles from "../css/Home.module.css";

const HomePage = () => {
  return (
    <>
      <div className={styles.background}>
        <div className={styles.homeText}>
          We have movies.
          <br /> Click on stuff to find them.
        </div>
      </div>
    </>
  );
};

export default HomePage;
