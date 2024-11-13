import styles from "./card.module.css";
import Image from "next/image";

import hamburger from "../../app/images/hamburger.png";
export default function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        <Image src={hamburger} alt="" className={styles.img} />
      </div>
      <p style={{ fontWeight: "600", fontSize: "18px", marginTop: "5px" }}>
        더블 1955 버거 세트
      </p>
      <p
        style={{
          lineHeight: "0.5",
          fontSize: "12px",
          fontFamily: "Pretendard",
        }}
      >
        Double 1955 Burger Meal
      </p>
      <p style={{ fontWeight: "600", marginTop: "15px" }}>8,600원</p>
    </div>
  );
}
