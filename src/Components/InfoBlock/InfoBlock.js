import React from "react";
import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";
import TextBlock from "../Texts/InfoTextBlock";
import OptionsBlock from "../Texts/InfoOptions";
import bg from "../../img/bg.png";

const Box = styled.div`
  width: 1070px;
  height: 1275px;
  margin: 0 auto;
  margin-top: 155px;
  margin-bottom: 100px;
  border-radius: 20px;
  background: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
`;

const InfoBlock = () => (
  <Box>
    <TextBlock />
    <Parallax className="custom-class" y={[-6, 12]} tagOuter="figure">
      <OptionsBlock />
    </Parallax>
  </Box>
);
export default InfoBlock;
