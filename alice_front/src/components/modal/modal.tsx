import styles from "./modal.module.css";
import Image, { StaticImageData } from "next/image";
import hamburger from "../../app/images/hamburger.png";

interface MenuItem {
  id: number;
  name: string;
  englishName: string;
  price: string;
  description: string;
  image: StaticImageData;
}
interface ModalProps {
  item: MenuItem;
  onClose: () => void;
}

export default function Modal({ item, onClose }: ModalProps) {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          닫기
        </button>
        <Image src={hamburger} alt={item.name} className={styles.modalImage} />
        <h2>{item.name}</h2>
        <p>{item.englishName}</p>
        <p>{item.price}</p>
        <p>{item.description}</p>
        <button className={styles.addButton}>장바구니에 추가</button>
      </div>
    </div>
  );
}
