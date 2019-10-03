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

const colunm1 = [
  {
    id: "w1w",
    background: "white",
    icon: "icon11",
    title: ["Visa Luxury Hotel collection "],
    text:
      "Діє по всьому світу цілодобово й надає для вас глобальний сервіс інформаційної підтримки в телефонному режимі.",
    link: "www.wer.com"
  },
  {
    id: "w2w",
    background: "white",
    icon: "icon12",
    title: ["Оренда сейфу"],
    text:
      "Орендуйте сейф зі знижкою 30 % для надійного зберігання важливих документів та цінних речей, доки ви за кордоном."
  },
  {
    id: "w3w",
    background: "linear-gradient(180deg, #FFDF6B 0%, #FFD43C 100%)",
    icon: "icon13",
    title: ["Повне страхування подорожі", "до 500 000 $"],
    text: "Сума страхового покриття для власників карток Visa Signature",
    link: "www.wer.com"
  }
];
const colunm2 = [
  {
    id: "w4w",
    background: "linear-gradient(180deg, #7A9FFF 0%, #57D5F0 100%)",
    icon: "icon21",
    title: ["Оренда авто"],
    text:
      "Бронюйте автомобілі по всьому світу, оплачуйте карткою Visa Signature та отримайте знижку",
    link: "www.wer.com"
  },
  {
    id: "w5w",
    background: "white",
    icon: "icon22",
    title: ["Персональний менеджер"],
    text:
      "Ваш фінансовий помічник, який завжди допоможе:- здійснити банківські операції за вашим дорученням - підготувати всі необхідні документи до вашого візиту в Банк - надасть якісні консультації й підбере для вас найкращі умови"
  }
];
const colunm3 = [
  {
    id: "w6w",
    background: "white",
    icon: "icon12",
    title: ["Консьєрж-сервіс"],
    text:
      "Діє по всьому світу цілодобово й надає для вас глобальний сервіс інформаційної підтримки в телефонному режимі.",
    link: "www.wer.com"
  },
  {
    id: "w7w",
    background: "white",
    icon: "icon32",
    title: ["Оренда готелю на agoda.com"],
    text:
      "Знижки у разі бронювання на  agoda.com. Знижка 12 % в більш ніж 985 тис. готелів по всьому світу"
  }
];

const OptionsBlock = () => (
  <Wrapper>
    <Colunm height={height.one} arr={colunm1} />
    <Colunm height={height.two} arr={colunm2} />
    <Colunm height={height.three} arr={colunm3} />
  </Wrapper>
);
export default OptionsBlock;
