import React from "react";
import img from "../../img/Travel [New] r.png";
import styles from "./Card.css";
import MagicHover from "magic-hover";

const options = {
  max: 40,
  reverse: true,
  perspective: 1000,
  scale: { x: 1, y: 1, z: 1 },
  rotate: 0,
  translate: { x: 0, y: 0 }
};

const Card = () => (
  <MagicHover options={options} className={"simple-box"}>
    <img src={img} alt="Card" />
  </MagicHover>
);
export default Card;

// import React from "react";
// import styled, { keyframes } from "styled-components";
// import { bounce } from "react-animations";
// import img from "../../img/card.png";

// const bounceAnimation = keyframes`${bounce}`;

// const BounceDiv = styled.div`
//   animation: infinite 5s ${bounceAnimation};
// `;

// const Card = () => (
//   <BounceDiv>
//     <img src={img} alt="Card" />
//   </BounceDiv>
// );
// export default Card;
