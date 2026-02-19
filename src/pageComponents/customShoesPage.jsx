import styles from "../css/customShoesPage.module.css";
import mk1 from "../css/images/making1.avif";
import mk2 from "../css/images/making2.avif";
import mk3 from "../css/images/making3.avif";
import mk4 from "../css/images/making4.avif";
import mk5 from "../css/images/making5.avif";

const CustomShoesPage = () => {
  return (
    <div className={styles.customShoePage}>
      <div className={styles.v2}>SHOES</div>
      <div className={styles.v3}></div>
      <div className={styles.v4}>
        <div style={{backgroundImage: `url(${mk1})`}} className={styles.v4Item}></div>
        <div style={{backgroundImage: `url(${mk2})`}} className={styles.v4Item}></div>
        <div style={{backgroundImage: `url(${mk3})`}} className={styles.v4Item}></div>
        <div style={{backgroundImage: `url(${mk4})`}} className={styles.v4Item}></div>
        <div style={{backgroundImage: `url(${mk5})`}} className={styles.v4Item}></div>
        <div className={styles.v4Item}>MANUFACTURING PROCESS</div>
      </div>
      <div className={styles.v5}></div>
    </div>
  );
};

export default CustomShoesPage;
