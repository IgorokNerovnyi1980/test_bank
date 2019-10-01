import React from "react";
import styles from "./App.module.css";
import HeaderMenu from "../Menus/HeaderMenu";
import Baner from "../Baner/Baner";
import InfoBlock from "../InfoBlock/InfoBlock";

const App = () => (
  <div className={styles.screen}>
    <HeaderMenu />
    <Baner />
    <InfoBlock />
  </div>
);
export default App;
