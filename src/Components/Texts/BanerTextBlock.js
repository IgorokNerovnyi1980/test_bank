import React from "react";
import styled from "styled-components";

const text = "Visa Signature";
const title1 = "Картка для";
const title2 = "яскравих подорожей";

const Wrapper = styled.div`
  width: 50%;
  height: 210px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-family: "IBM Plex Sans";
`;
const Text = styled.p`
  font-size: 35px;
  line-height: 100%;
`;
const Title = styled.h2`
  font-size: 64px;
  line-height: 131%;
  font-weight: bold;
  text-align: center;
`;

const TextBlock = () => (
  <Wrapper>
    <Text>{text}</Text>
    <Title>{title1}</Title>
    <Title>{title2}</Title>
  </Wrapper>
);
export default TextBlock;
