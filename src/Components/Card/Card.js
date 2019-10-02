import React from "react";
import styled, { keyframes } from "styled-components";
import { bounce } from "react-animations";
import img from "../../img/card.png";

const bounceAnimation = keyframes`${bounce}`;

const BounceDiv = styled.div`
  animation: infinite 5s ${bounceAnimation};
`;

const Card = () => (
  <BounceDiv>
    <img src={img} alt="Card" />
  </BounceDiv>
);
export default Card;
