import styles from "./card.module.css";
import Image from "next/image";
import hamburger from "../../app/images/hamburger.png";

interface MenuItem {
  name: string;
  englishName: string;
  price: string;
}

export default function Card({ menu }: { menu: MenuItem }) {
  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        <Image src={hamburger} alt={menu.name} className={styles.img} />
      </div>
      <p style={{ fontWeight: "600", fontSize: "18px", marginTop: "5px" }}>
        {menu.name}
      </p>
      <p
        style={{
          lineHeight: "0.5",
          fontSize: "12px",
          fontFamily: "Pretendard",
        }}
      >
        {menu.englishName}
      </p>
      <p style={{ fontWeight: "600", marginTop: "15px" }}>{menu.price}</p>
    </div>
  );
}
