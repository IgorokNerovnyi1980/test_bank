import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  margin-top: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  background-color: green;
`;
const Icon = styled.div`
  padding-left: 5px;
  background-color: white;
`;
const Title = styled.h4`
  padding-left: 5px;
  font-size: 20px;
  font-weight: bold;
  color: grey;
`;
const Text = styled.p`
  padding-left: 5px;
  font-size: 14px;
  color: grey;
`;
const Link = styled.p`
  padding-left: 5px;
  color: blue;
`;

const Item = ({ id, icon, title, text, link }) => (
  <Wrapper key={id}>
    <Icon>{icon}</Icon>
    <Title>{title}</Title>
    <Text>{text}</Text>
    {link && <Link>{link}</Link>}
  </Wrapper>
);
export default Item;
