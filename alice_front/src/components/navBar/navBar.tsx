import { useState } from "react";
import styles from "./navBar.module.css";

export default function NavBar() {
  const [selected, setSelected] = useState<string>("");

  const handleClick = (category: string) => {
    setSelected(category);
  };

  return (
    <div className={styles.navBar}>
      {["버거", "스낵", "사이드", "음료", "디저트"].map((category) => (
        <button
          key={category}
          className={`${styles.button} ${
            selected === category ? styles.selectedButton : ""
          }`}
          onClick={() => handleClick(category)}
        >
          <p>{category}</p>
        </button>
      ))}
    </div>
  );
}
