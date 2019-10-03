import React from "react";
import styles from "./App.module.css";
import { ParallaxProvider } from "react-scroll-parallax";
import HeaderMenu from "../Menus/HeaderMenu";
import Baner from "../Baner/Baner";
import InfoBlock from "../InfoBlock/InfoBlock";

const App = () => (
  <ParallaxProvider>
    <div className={styles.screen}>
      <HeaderMenu />
      <Baner />
      <InfoBlock />
    </div>
  </ParallaxProvider>
);
export default App;
