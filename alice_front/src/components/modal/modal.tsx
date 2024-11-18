import styles from "./modal.module.css";
import Image from "next/image";
import hamburger from "../../app/images/hamburger.png";

interface MenuItem {
  name: string;
  englishName: string;
  price: string;
  composition: string;
}

interface ModalProps {
  item: MenuItem;
  onClose: () => void;
}

export default function Modal({ item, onClose }: ModalProps) {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <Image
            src={hamburger}
            alt={item.name}
            className={styles.modalImage}
          />
          <div className={styles.leftTextContainer}>
            <div className={styles.headerText}>
              <h2 className={styles.itemName}>{item.name}</h2>
              <p className={styles.composition}>{item.composition}</p>
            </div>
            <p className={styles.priceText}>총 {item.price}</p>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.closeButton} onClick={onClose}>
            돌아가기
          </button>
          <button className={styles.addButton}>장바구니에 추가</button>
        </div>
      </div>
    </div>
  );
}
