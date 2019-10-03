import React from "react";
import styled from "styled-components";
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
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Wrapper = styled.div`
  width: 85%;
  min-height: 88%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const InfoBlock = () => (
  <Box>
    <Wrapper>
      <TextBlock />
      <OptionsBlock />
    </Wrapper>
  </Box>
);
export default InfoBlock;

// const Wrapper = styled.div`
//   position: relative;
//   width: 1070px;
//   height: 1275px;
//   margin: 0 auto;
//   margin-top: 155px;
//   margin-bottom: 100px;
//   border-radius: 20px;
//   color: white;
//   background-image: url(${bg});
// `;

// const InfoBlock = () => (
//   <Wrapper>
//     <TextBlock />
//     <OptionsBlock />
//   </Wrapper>
// );
