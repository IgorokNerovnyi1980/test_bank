import React from "react";
import styled, { css } from "styled-components";
import icon11 from "../../../img/icons/col1_icn1.png";
import icon12 from "../../../img/icons/col1_icn2.png";
import icon13 from "../../../img/icons/col1_icn3.png";
import icon21 from "../../../img/icons/col2_icn1.png";
import icon22 from "../../../img/icons/col2_icn2.png";
import icon32 from "../../../img/icons/col3_icn2.png";

const Box = styled.div`
  width: 100%;
  height: auto;
  margin-top: 40px;
  background: ${props => props.background};
  border-radius: 10px;
  box-shadow: 0px 3px 10px 2px rgba(0, 0, 0, 0.33);
  transition: 0.4s;
  ${props =>
    props.hover &&
    css`
      cursor: pointer;
      :hover {
        transform: scale(1.1);
        box-shadow: 0px 3px 10px 4px rgba(0, 0, 0, 0.33);
        transition: 0.4s;
      }
    `}
`;

const Wrapper = styled.div`
  width: 90%;
  height: auto;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
`;
const Title = styled.h4`
  font-family: Roboto;
  font-weight: bold;
  font-size: 24px;
  line-height: 136.5%;
  letter-spacing: -0.050568px;
  color: #222222;
`;
const Text = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 144%;
  letter-spacing: -0.050568px;
  color: #0f0f10;
`;
const Link = styled.a`
  text-decoration: none;
  color: blue;
`;

const Item = ({ background, icon, title, text, link }) => {
  let click = null;
  if (icon === "icon11") {
    icon = icon11;
  } else if (icon === "icon12") {
    icon = icon12;
  } else if (icon === "icon13") {
    icon = icon13;
  } else if (icon === "icon21") {
    icon = icon21;
  } else if (icon === "icon22") {
    icon = icon22;
  } else if (icon === "icon32") {
    icon = icon32;
  }
  if (link) {
    click = () => alert("переход по ссылке");
  }
  return (
    <Box background={background} hover={link} onClick={click}>
      <Wrapper>
        <img src={icon} alt="Icon" />
        {title.map(item => (
          <Title key={item}>{item}</Title>
        ))}
        <Text>{text}</Text>
        {link && <Link href={link}>Подробнее ></Link>}
      </Wrapper>
    </Box>
  );
};
export default Item;
