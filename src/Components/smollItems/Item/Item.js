import React from "react";
import styled from "styled-components";
import icon11 from "../../../img/icons/col1_icn1.png";
import icon12 from "../../../img/icons/col1_icn2.png";
import icon13 from "../../../img/icons/col1_icn3.png";
import icon21 from "../../../img/icons/col2_icn1.png";
import icon22 from "../../../img/icons/col2_icn2.png";
import icon32 from "../../../img/icons/col3_icn2.png";

const Box = styled.div`
  width: 100%;
  height: auto;
  margin-top: 20px;
  background: white;
  border-radius: 10px;
  transition: 0.4s;
  :hover {
    transform: scale(1.1);
    transition: 0.4s;
  }
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
// const Icon = styled.div``;
const Title = styled.h4`
  margin-top: 10px;
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
const Link = styled.p`
  padding-left: 5px;
  color: blue;
`;

const Item = ({ icon, title, text, link,bckgd }) => {
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

  return (
    <Box>
      <Wrapper>
        <img src={icon} alt="" />
        <Title>{title}</Title>
        <Text>{text}</Text>
        {link && <Link>{link}</Link>}
      </Wrapper>
    </Box>
  );
};
export default Item;
