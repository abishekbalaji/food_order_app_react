import React from "react";

import mealsImage from "../../../assets/meals.jpg";
import CartButton from "./CartButton";
import styles from "./Header.module.css";

const Header = function () {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <CartButton />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="Meals" />
      </div>
    </React.Fragment>
  );
};

export default Header;
