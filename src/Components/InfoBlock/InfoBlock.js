import React from "react";
import styled from "styled-components";
import bg from "../../img/bg.png";
import TextBlock from "../Texts/InfoTextBlock";
import OptionsBlock from "../Texts/InfoOptions";

const Wrapper = styled.div`
  position: relative;
  width: 1070px;
  height: 1275px;
  margin: 0 auto;
  margin-top: 78px;
  margin-bottom: 100px;
  border-radius: 20px;
  color: white;
  background-image: url(${bg});
`;

const InfoBlock = () => (
  <Wrapper>
    <TextBlock />
    <OptionsBlock />
  </Wrapper>
);
export default InfoBlock;
