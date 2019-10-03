import React from "react";
import styled from "styled-components";
import Card from "../Card/Card";
import TextBlock from "../Texts/BanerTextBlock";

const Wrapper = styled.div`
  width: 100%;
  height: 580px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: white;
`;

const Baner = () => (
  <Wrapper>
    <TextBlock />
    <Card />
  </Wrapper>
);
export default Baner;
