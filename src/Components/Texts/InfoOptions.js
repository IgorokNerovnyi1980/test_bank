import React from "react";
import styled from "styled-components";
import Colunm from "../smollItems/Colunm/Colunm";

const Wrapper = styled.div`
  position: absolute;
  width: 85%;
  height: 950px;
  top: 220px;
  left: 85px;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
`;

const height = {
  one: "100%",
  two: "78%",
  three: "84%"
};

const test1 = [
  { id: "w1w", icon: "icon", title: "first", text: "text", link: "www.123" },
  { id: "w1w", icon: "icon", title: "second", text: "text" },
  { id: "w1w", icon: "icon", title: "three", text: "text", link: "www.345" }
];
const test2 = [
  { id: "w1w", icon: "icon", title: "first", text: "text", link: "www.123" },
  { id: "w1w", icon: "icon", title: "second", text: "text" }
];
const test3 = [
  { id: "w1w", icon: "icon", title: "first", text: "text", link: "www.123" },
  { id: "w1w", icon: "icon", title: "second", text: "text" }
];

const OptionsBlock = () => (
  <Wrapper>
    <Colunm height={height.one} arr={test1} />
    <Colunm height={height.two} arr={test2} />
    <Colunm height={height.three} arr={test3} />
  </Wrapper>
);
export default OptionsBlock;
