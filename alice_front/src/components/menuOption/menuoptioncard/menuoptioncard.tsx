import styles from "./menuoptioncard.module.css";
import Image, { StaticImageData } from "next/image";

interface MenuOptionCardProps {
  name: string;
  image: StaticImageData;
  price: string;
}

export default function MenuOptionCard({
  name,
  image,
  price,
}: MenuOptionCardProps) {
  return (
    // <div style={{ display: "flex", flexDirection: "column" }}>
    //   <div className={styles.card}>
    //     <div style={{ backgroundColor: "#FFD1CA" }}>
    //       <p className={styles.cardName}>{name}</p>
    //     </div>
    //     <div style={{ backgroundColor: "white" }}>
    //       <Image src={image} alt={name} className={styles.cardImage} />
    //     </div>
    //   </div>
    //   <p className={styles.cardPrice}>{price}</p>
    // </div>
    <div
      style={{
        width: "120px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* 이름 */}
      <div
        style={{
          backgroundColor: "#FFD1CA",
          width: "100%",
          height: "28px",
          borderRadius: "17px 17px 0 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p className={styles.cardName}>{name}</p>
      </div>
      {/* 사진 */}
      <div
        style={{
          backgroundColor: "white",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          borderRadius: "0 0 17px 17px",
          padding: "10px",
        }}
      >
        <Image src={image} alt={name} className={styles.cardImage} />
      </div>
      <p className={styles.cardPrice}>{price}</p>
    </div>
  );
}
