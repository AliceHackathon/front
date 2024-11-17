import { useState } from "react";
import styles from "./card.module.css";
import Image, { StaticImageData } from "next/image";
import hamburger from "../../app/images/hamburger.png";
import Modal from "../modal/modal";

interface MenuItem {
  name: string;
  englishName: string;
  price: string;
  description: string;
  image: StaticImageData;
}

export default function Card({ menu }: { menu: MenuItem }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    setIsModalOpen(true);
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

      {/* 모달이 열려 있을 때만 Modal 컴포넌트를 렌더링 */}
      {isModalOpen && <Modal item={menu} onClose={handleCloseModal} />}
    </>
  );
}
