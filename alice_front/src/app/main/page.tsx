import Image from "next/image";
import styles from "./mainpage.module.css";
import character from "../images/character.png";
import Union from "../images/Union.png";
import payment from "../images/payment.png";
import voice from "../images/voice.png";
import cart from "../images/cart.png";
import Card from "@/components/card/card";

export default function MainPage() {
  return (
    <>
      <div className={styles.characterSection}>
        <div className={styles.container2}>
          <Image src={Union} alt="Union" className={styles.Union} />
          <Image
            src={character}
            alt="Character"
            className={styles.characterImage}
          />
        </div>
        <div className={styles.ask}>
          <p style={{ marginTop: "3px" }}>엘리에게 직접 주문해보세요!</p>
        </div>
        <p
          style={{
            marginTop: "3px",
            fontFamily: "Pretendard",
            color: "rgba(222, 68, 50, 0.5)",
          }}
        >
          말풍선을 누르면 엘리가 적합한 상품을 추천 드릴게요!
        </p>
        <div className={styles.container3}>
          <div className={styles.comment} style={{ marginLeft: "250px" }}>
            추천 메뉴가 있니?
          </div>
          <div className={styles.comment2}>신제품 소개해줘</div>
          <div className={styles.comment} style={{ marginLeft: "230px" }}>
            칼로리 적은 거 추천해줘
          </div>
        </div>
        <div className={styles.container4}>
          <p style={{ color: "#B98585" }}>
            아래 버튼을 눌러 엘리한테 대화로 주문해보세요
          </p>
        </div>
        <Card />
        <footer
          style={{
            display: "flex",
            justifyContent: "space-around",
            bottom: 80,
            position: "fixed",
            width: "100%",
          }}
        >
          <Image src={cart} alt="" className={styles.img} layout="fixed" />
          <Image
            src={voice}
            alt=""
            className={styles.img}
            style={{
              background: "white",
              borderRadius: "50%",
              boxShadow:
                "0 0 20px 10px rgba(222, 68, 50, 0.2), 0 0 40px 20px rgba(222, 68, 50, 0.2)",
            }}
            layout="fixed"
          />
          <Image src={payment} alt="" className={styles.img} layout="fixed" />
        </footer>
      </div>
    </>
  );
}
