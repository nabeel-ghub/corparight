import styles from "../css/tShirtsPage.module.css";

const TShirtsPage = ({ setScrolling }) => {
  return (
    <div className={styles.tShirtsPage}>
      <div className={styles.v2}>T-SHIRTS</div>
      <div className={styles.v3}></div>
      <div className={styles.v4}>
        <ul>
            <li>Our Custom  T-Shirts are a unique fusion of comfort and style, crafted from soft, breathable 100% cotton fabric for all-day wear.</li>
            <li>With endless customization options, you can personalize these tshirts with your company logo, design, custom material or favorite quote, making them perfect for personal expression or brand promotion.</li>
            <li>Offering vibrant, durable prints and embroidery, and available in various sizes, these high-quality t-shirts provide a fashionable and personalized touch to everyday wear.</li>
            <button onClick={() => setScrolling(prev => !prev)}>Click to Enquire</button>
        </ul>
      </div>
      <div className={styles.v5}></div>
      <div className={styles.v6}>CUSTOMIZE YOUR SUBLIMATION SPORTSWEAR AS PER YOUR SPEC REQUIREMENT</div>
    </div>
  );
};

export default TShirtsPage;
