import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 50px;
  height: 35px;
`;
const Circle1 = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  top: 0;
  left: 0;
  background: #ffffff;
  opacity: 0.64;
  border-radius: 32px;
`;
const Circle2 = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  top: 0;
  left: 20px;
  background: #ffffff;
  opacity: 0.64;
  border-radius: 32px;
  ::after {
    content: "";
    width: 30px;
    height: 30px;
    background: black;
  }
`;

const Circles = () => (
  <Wrapper>
    <Circle1></Circle1>
    <Circle2></Circle2>
  </Wrapper>
);
export default Circles;
