import React from "react";
import styles from "./Card.module.css";
import img from "../../img/card.png";

const Card = () => <img src={img} alt="Card" className={styles.img} />;
export default Card;
