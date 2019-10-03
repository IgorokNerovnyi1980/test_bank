import React from "react";
import styled from "styled-components";

const title = "Планування подорожі";
const text = "Ретельна підготовка — запорука вдалої мандрівки";

const Wrapper = styled.div`
  width: 100%;
  height: 85px;
  font-family: "Roboto";
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;
const Text = styled.p`
  font-size: 20px;
  padding-left: 15px;
`;
const Title = styled.h2`
  font-size: 54px;
  font-weight: bold;
  padding-left: 15px;
`;

const TextBlock = () => (
  <Wrapper>
    <Title>{title}</Title>
    <Text>{text}</Text>
  </Wrapper>
);
export default TextBlock;
