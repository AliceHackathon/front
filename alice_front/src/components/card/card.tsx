import { useState } from "react";
import styles from "./card.module.css";
import Image from "next/image";
import hamburger from "../../app/images/hamburger.png";
import Modal from "../modal/modal";

interface MenuItem {
  name: string;
  englishName: string;
  price: string;
  composition: string;
}

interface CardProps {
  menu: MenuItem;
  onClick?: () => void; // onClick 속성 추가 (선택적 속성)
}

export default function Card({ menu, onClick }: CardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    setIsModalOpen(true);
    if (onClick) {
      onClick(); // 부모 컴포넌트에서 전달된 onClick 호출
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={styles.container} onClick={handleCardClick}>
        <div className={styles.container2}>
          <Image src={hamburger} alt={menu.name} className={styles.img} />
        </div>
        <p
          style={{
            fontWeight: "600",
            fontSize: "18px",
            marginTop: "5px",
            wordWrap: "break-word",
            textAlign: "center",
          }}
        >
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

      {isModalOpen && <Modal item={menu} onClose={handleCloseModal} />}
    </>
  );
}
