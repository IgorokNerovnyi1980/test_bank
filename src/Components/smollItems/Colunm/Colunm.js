import React from "react";
import styled from "styled-components";
import Item from "../Item/Item";

const Wrapper = styled.div`
  width: 30%;
  min-height: ${props => props.height};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;
const Colunm = ({ height, arr }) => (
  <Wrapper height={height}>
    {arr.map(item => (
      <Item
        key={item.id}
        id={item.id}
        icon={item.icon}
        title={item.title}
        text={item.text}
        link={item.link}
        background={item.background}
        bool={item.activeLink}
      />
    ))}
  </Wrapper>
);
export default Colunm;
