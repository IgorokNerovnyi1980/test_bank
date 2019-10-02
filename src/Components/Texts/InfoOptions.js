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
  {
    id: "w1w",
    icon: "icon11",
    title: "Visa Luxury Hotel collection ",
    text:
      "Діє по всьому світу цілодобово й надає для вас глобальний сервіс інформаційної підтримки в телефонному режимі.",
    link: "Подробнее  >"
  },
  {
    id: "w2w",
    icon: "icon12",
    title: "Оренда сейфу",
    text:
      "Орендуйте сейф зі знижкою 30 % для надійного зберігання важливих документів та цінних речей, доки ви за кордоном."
  },
  {
    id: "w3w",
    icon: "icon13",
    title: "Повне страхування подорожі до 500 000 $",
    text: "Сума страхового покриття для власників карток Visa Signature",
    link: "Подробнее  >"
  }
];
const test2 = [
  {
    id: "w4w",
    icon: "icon21",
    title: "Оренда авто",
    text:
      "Бронюйте автомобілі по всьому світу, оплачуйте карткою Visa Signature та отримайте знижку",
    link: "Подробнее  >"
  },
  {
    id: "w5w",
    icon: "icon22",
    title: "Персональний менеджер",
    text:
      "Ваш фінансовий помічник, який завжди допоможе:- здійснити банківські операції за вашим дорученням - підготувати всі необхідні документи до вашого візиту в Банк - надасть якісні консультації й підбере для вас найкращі умови"
  }
];
const test3 = [
  {
    id: "w6w",
    icon: "icon12",
    title: "Консьєрж-сервіс ",
    text:
      "Діє по всьому світу цілодобово й надає для вас глобальний сервіс інформаційної підтримки в телефонному режимі.",
    link: "Подробнее  >"
  },
  {
    id: "w7w",
    icon: "icon32",
    title: "Оренда готелю на agoda.com ",
    text:
      "Знижки у разі бронювання на  agoda.com. Знижка 12 % в більш ніж 985 тис. готелів по всьому світу"
  }
];

const OptionsBlock = () => (
  <Wrapper>
    <Colunm height={height.one} arr={test1} />
    <Colunm height={height.two} arr={test2} />
    <Colunm height={height.three} arr={test3} />
  </Wrapper>
);
export default OptionsBlock;
