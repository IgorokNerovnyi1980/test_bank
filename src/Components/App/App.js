import React from "react";
import styles from "./App.module.css";
import HeaderMenu from "../Menus/HeaderMenu";
import Baner from "../Baner/Baner";

const App = () => (
  <div className={styles.screen}>
    <HeaderMenu />
    <Baner />
  </div>
);
export default App;
