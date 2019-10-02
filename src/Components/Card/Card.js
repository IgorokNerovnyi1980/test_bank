import React from "react";
import img from "../../img/Travel [New] r.png";
// eslint-disable-next-line
import styles from "./Card.css";
import MagicHover from "magic-hover";

const options = {
  max: 50,
  reverse: true,
  perspective: 1000,
  scale: { x: 1.1, y: 1.1, z: 1.1 },
  rotate: 0,
  translate: { x: 0, y: 0 }
};

const Card = () => (
  <MagicHover options={options} className={"simple-box"}>
    <img src={img} alt="Card" />
  </MagicHover>
);
export default Card;
