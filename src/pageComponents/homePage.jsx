import { useRef, useState } from "react";
import styles from "../css/homePage.module.css";
import MenuBarTop from "../commonComponents/menuBarTop";
import ContactSection from "../commonComponents/contactSection";

const HomePage = ({setCurrentPage}) => {
  const containerRef = useRef();
  const v1Ref = useRef();
  const v2Ref = useRef();
  const v3Ref = useRef();
  const v4Ref = useRef();
  const [containerNumber, setContainerNumber] = useState([]);

  function handleScroll() {
    const containerTop = containerRef.current.scrollTop;
    const v1Height = v1Ref.current.offsetHeight;
    const v2Height = v2Ref.current.offsetHeight;
    const v3Height = v3Ref.current.offsetHeight;
    const v1Top = v1Ref.current.offsetTop;
    const v2Top = v1Top + v1Height;
    const v3Top = v2Top + v2Height;
    const v4Top = v3Top + v3Height;

    if (containerTop > v1Top && containerTop < v2Top - 100) {
      if(containerNumber.includes(1)) return;
      setContainerNumber(prev => [...prev, 1]);
    } else if (containerTop > v2Top - 100 && containerTop < v3Top - 100) {
      if(containerNumber.includes(2)) return;
      setContainerNumber(prev => [...prev, 2]);
    } else if (containerTop > v3Top - 100 && containerTop < v4Top - 10) {
      if(containerNumber.includes(3)) return;
      setContainerNumber(prev => [...prev, 3]);
    } else if (containerTop > v4Top - 100) {
      if(containerNumber.includes(4)) return;
      setContainerNumber(prev => [...prev, 4]);
    }
  }

  return (
    <div
      className={styles.homePage}
      onScroll={() => handleScroll()}
      ref={containerRef}
    >
      <MenuBarTop setCurrentPage={setCurrentPage} currentPage={"home_page"}></MenuBarTop>
      <div
        className={
          containerNumber.includes(1)? `${styles.v1} ${styles.active}` : styles.v1
        }
        ref={v1Ref}
      >
        <div className={styles.v1h1}>
          <h1>
            Corpa<br></br>RIGHT
          </h1>
        </div>
        <div className={styles.v1h2}>
          <p>
            Procurement essentials<br></br> for your company or school.
          </p>
        </div>
      </div>
      <div className={styles.v2}>
        <div
          className={
            containerNumber.includes(2)
              ? `${styles.v2v1} ${styles.active}`
              : styles.v2v1
          }
          ref={v2Ref}
        >
          <div className={styles.v2v1h1}>
            <div className={styles.v2v1h1Image}></div>
          </div>
          <div className={styles.v2v1h2}>
            <h2 className={styles.v2v1h2Title}>Uniforms & Merchandising</h2>
            <p className={styles.v2v1h2Description}>
              We offer a wide range of Refined Educational and Sports apparel
              across India.
            </p>
            <div className={styles.v2v1h2ButtonsWrapper}>
              <button className={styles.v2v1h2Button1}>Learn more</button>
              <button className={styles.v2v1h2Button2}>Contact us</button>
            </div>
          </div>
        </div>
        <div
          className={
            containerNumber.includes(3)
              ? `${styles.v2v2} ${styles.active}`
              : styles.v2v2
          }
          ref={v3Ref}
        >
          <div className={styles.v2v2h1}>
            <h2 className={styles.v2v2h1Title}>School Supplies</h2>
            <p className={styles.v2v2h1Description}>
              Your one-stop shop for essential school supplies, supporting
              learning every step of the way.
            </p>
            <div className={styles.v2v2h1ButtonsWrapper}>
              <button className={styles.v2v2h1Button1}>Learn more</button>
              <button className={styles.v2v2h1Button2}>Contact us</button>
            </div>
          </div>
          <div className={styles.v2v2h2}>
            <div className={styles.v2v2h2Image1}></div>
            <div className={styles.v2v2h2Image2}></div>
            <div className={styles.v2v2h2Image3}></div>
          </div>
        </div>
      </div>
      <div
        className={
          containerNumber.includes(4)? `${styles.v4} ${styles.active}` : styles.v4
        }
        ref={v4Ref}
      >
        <div className={styles.v4h1}>
          <p>
            We specialize in fulfilling your procurement needs, offering a wide range of products such as corporate merchandising, office supplies, and corporate gifts. Whether you are looking to enhance your brand presence with customized merchandise or replenish your office essentials, we have got you covered. Our extensive selection of corporate merchandising items allows you to showcase your brand identity and leave a lasting impression on clients and employees alike. Additionally, we provide a comprehensive range of office supplies to ensure your workspace is equipped with everything you need for smooth operations. Our corporate gifts are designed to strengthen business relationships and show appreciation to your valued partners. With our reliable procurement solutions, you can streamline your purchasing process and focus on growing your business.
          </p>
        </div>
        <div className={styles.v4h2}>
          <p>
            CORPORATE SUPPLIES
          </p>
        </div>
      </div>
      <div className={styles.v5}>
        <p className={styles.v5Text}>We are a company based in India, specializing in procurement essentials for entities.</p>
        <button className={styles.v5Button}>Learn more</button>
      </div>
      <ContactSection></ContactSection>
    </div>
  );
};

export default HomePage;
