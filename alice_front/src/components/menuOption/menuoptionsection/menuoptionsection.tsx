import { StaticImageData } from "next/image";
import MenuOptionCard from "../menuoptioncard/menuoptioncard";
import styles from "./menuoptionsection.module.css";

interface MenuOptionSectionProps {
  options: { name: string; image: StaticImageData; price: string }[];
  title: string;
}

export default function MenuOptionSection({
  options,
  title,
}: MenuOptionSectionProps) {
  return (
    <div className={styles.section}>
      <div className={styles.cardContainer}>
        {options.map((option, index) => (
          <MenuOptionCard
            key={index}
            name={option.name}
            image={option.image}
            price={option.price}
          />
        ))}
        {/* <h3 className={styles.sectionTitle}>{title}</h3> */}
      </div>
    </div>
  );
}
