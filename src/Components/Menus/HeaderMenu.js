import React from "react";
import styled from "styled-components";
const text = " Замовити картку";

const Header = styled.header`
  width: 66%;
  height: 80px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Button = styled.button`
  width: 137px;
  height: 33px;
  border: none;
  border-radius: 23.5px;
  background-color: white;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.5px;
  color: #066eb0;
`;

const HeaderMenu = () => (
  <Header>
    <div>Logo</div>
    <Wrapper>
      <nav>Menu</nav>
      <Button>{text}</Button>
    </Wrapper>
  </Header>
);
export default HeaderMenu;
