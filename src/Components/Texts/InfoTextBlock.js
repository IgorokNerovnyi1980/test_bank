import React from "react";
import styled from "styled-components";

const title = "Планування подорожі";
const text = "Ретельна підготовка — запорука вдалої мандрівки";

const Wrapper = styled.div`
  position: absolute;
  width: 85%;
  height: 95px;
  top: 70px;
  left: 85px;
  font-family: "Roboto";
`;
const Text = styled.p`
  font-size: 20px;
  margin-top: 15px;
  padding-left: 10px;
`;
const Title = styled.h2`
  font-size: 54px;
  font-weight: bold;
  padding-left: 10px;
`;

const TextBlock = () => (
  <Wrapper>
    <Title>{title}</Title>
    <Text>{text}</Text>
  </Wrapper>
);
export default TextBlock;
