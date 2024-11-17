import styles from "./homepage.module.css";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.textWrapper}>
          <p className={`${styles.text} ${styles.red_05} font-semibold`}>
            주문하려면 <span className="font-normal">&nbsp;저와</span>
          </p>
          <p className={`${styles.text} ${styles.red_0401} font-semibold`}>
            하이파이브 &nbsp;
            <span
              className={`${styles.text} ${styles.red_05}`}
              style={{ fontWeight: 400 }}
            >
              해주세요!
            </span>
          </p>
        </div>
        {/* <Image src={character} alt="character" width={300} height={300} /> */}
        <Image
          src="../../public/static/startAnimation.gif"
          alt="Sample GIF"
          width={300}
          height={200}
          unoptimized
        />
        <button className={styles.button}>
          <Link href="/main">화면을 눌러주세요 {">"}</Link>
        </button>
      </div>
    </>
  );
}
