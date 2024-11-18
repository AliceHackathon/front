import cola from "../../app/images/cola.png";
import sprite from "../../app/images/sprite.png";
import fries from "../../app/images/fries.png";
import nugget from "../../app/images/nugget.png";
import cheeseSticks from "../../app/images/cheeseSticks.png";
import wing from "../../app/images/wing.png";
import iceCream from "../../app/images/iceCream.png";
import strawberryShake from "../../app/images/strawberryShake.png";
import chocoIce from "../../app/images/chocoIce.png";
import applePie from "../../app/images/applePie.png";
import burger from "../../app/images/burger.png";
import burgerCombo from "../../app/images/burgerCombo.png";
import burgerSet from "../../app/images/burgerSet.png";

export const burgerOptions = [
  { name: "단품", image: burger, price: "6,400원" },
  { name: "콤보", image: burgerCombo, price: "7,800원" },
  { name: "세트", image: burgerSet, price: "8,600원" },
];

export const drinkOptions = [
  { name: "콜라 (R)", image: cola, price: "0원" },
  { name: "콜라 (L)", image: cola, price: "+500원" },
  { name: "제로 콜라 (R)", image: cola, price: "-400원" },
  { name: "스프라이트 (R)", image: sprite, price: "0원" },
];

export const sideOptions = [
  { name: "후렌치 후라이", image: fries, price: "0원" },
  { name: "너겟", image: nugget, price: "+1,600원" },
  { name: "치즈 스틱 2조각", image: cheeseSticks, price: "+1,000원" },
  { name: "윙 2조각", image: wing, price: "+2,400원" },
];

export const dessertOptions = [
  { name: "아이스크림 콘", image: iceCream, price: "0원" },
  { name: "딸기 쉐이크", image: strawberryShake, price: "+1,600원" },
  { name: "초코 아이스", image: chocoIce, price: "+1,000원" },
  { name: "애플 파이", image: applePie, price: "+2,400원" },
];
