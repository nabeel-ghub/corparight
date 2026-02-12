import { useState, useEffect, useRef } from "react";
import styles from "../css/productPage.module.css";
import MenuBarTop from "../commonComponents/menuBarTop";
import ContactSection from "../commonComponents/contactSection";
import UniformsPage from "./uniformsPage";
import SportsPage from "./sportsPage";
import TShirtsPage from "./tShirtsPage";
import CustomShoesPage from "./customShoesPage";

const ProductPage = ({ setCurrentPage }) => {
  const [currentProduct, setCurrentProduct] = useState("all");
  const [firstScroll, setFirstScroll] = useState(true);
  const [scrolling, setScrolling] = useState(false);
  const pageRef = useRef();

  useEffect(() => {
    if(firstScroll) return setFirstScroll(false);
    const page = pageRef.current;
    page.scrollTo({
      top: page.scrollHeight,
      behavior: "smooth"
    })
  }, [scrolling])

  function handleMenu(index) {
    console.log(currentProduct)
    if(index === 1) return setCurrentProduct("all");
    if(index === 2) return setCurrentProduct("uniforms");
    if(index === 3) return setCurrentProduct("tshirts");
    if(index === 4) return setCurrentProduct("shoes");
    if(index === 5) return setCurrentProduct("sports");
  }
  return (
    <div className={styles.productPage} ref={pageRef}>
      <MenuBarTop
        setCurrentPage={setCurrentPage}
        currentPage={"product_page"}
      ></MenuBarTop>
      <div className={styles.v1}>
        <p className={currentProduct === "all"? `${styles.active} ${styles.v1Nav1}` : styles.v1Nav1} onClick={() => handleMenu(1)}>All</p>
        <p className={currentProduct === "uniforms"? `${styles.active} ${styles.v1Nav2}` : styles.v1Nav2} onClick={() => handleMenu(2)}>Uniforms</p>
        <p className={currentProduct === "tshirts"? `${styles.active} ${styles.v1Nav3}` : styles.v1Nav3} onClick={() => handleMenu(3)}>T-Shirts</p>
        <p className={currentProduct === "shoes"? `${styles.active} ${styles.v1Nav4}` : styles.v1Nav4} onClick={() => handleMenu(4)}>Shoes</p>
        <p className={currentProduct === "sports"? `${styles.active} ${styles.v1Nav5}` : styles.v1Nav5} onClick={() => handleMenu(5)}>Sports</p>
      </div>
      {currentProduct === "all" ? (
        <>
          <div className={styles.v2}>OUR PRODUCTS</div>
          <div className={styles.v3}>
            <div className={styles.v3h1}></div>
            <div className={styles.v3h2}>
              <h1 className={styles.v3h2Text}>Custom Shoes</h1>
              <p className={styles.v3h2Description}>
                Our range of shoes is carefully crafted to meet the highest
                standards of quality and design. Whether you need shoes for your
                employees or team, we are here to cater to your specific
                requirements. Our goal is to ensure that your team members have
                the best comfort and support while they are working. We believe
                that comfortable shoes can greatly impact productivity and
                overall well-being. That's why we pay close attention to every
                detail, from the choice of materials to the ergonomic
                design.{" "}
              </p>
              <ul className={styles.v3h2List}>
                <li>Safety shoes</li>
                <li>Leather shoes</li>
                <li>Corporate sneakers</li>
                <li>Oxford shoes</li>
                <li>Loafers</li>
                <li>Boots</li>
              </ul>
              <button className={styles.v3h2Button}>Learn more</button>
            </div>
          </div>
          <div className={styles.v4}>
            <div className={styles.v4h1}>
              <h1 className={styles.v4h1Text}>Custom T-Shirts</h1>
              <p className={styles.v4h1Description}>
                We specialize in providing a wide range of custom t-shirts
                tailored to your specific needs. Whether you are looking for
                polo shirts, cotton shirts, dryfit shirts, or jerseys, we have
                got you covered. Our goal is to create personalized t-shirts
                that perfectly represent your team, employees, or students. To
                ensure your complete satisfaction, we have an in-house designer
                who will work closely with you to design the t-shirts exactly as
                per your requirements. With our top-notch materials and
                attention to detail, you can expect high-quality and durable
                t-shirts that will make a lasting impression. Let us help you
                showcase your team spirit or promote your brand with our custom
                t-shirt services.
              </p>
              <button className={styles.v4h1Button}>Learn more</button>
            </div>
            <div className={styles.v4h2}></div>
          </div>
          <div className={styles.v5}>
            <div className={styles.v5h1}></div>
            <div className={styles.v5h2}>
              <h1 className={styles.v5h2Text}>Uniforms</h1>
              <p className={styles.v5h2Description}>
                At our company, we specialize in creating custom office and
                school uniforms that are tailored perfectly to fit each
                individual. We understand the importance of having uniforms that
                not only represent your organization but also provide comfort
                and confidence to the wearer. Our skilled team of designers and
                tailors work closely with our clients to ensure that every
                uniform is made to their specific measurements and requirements.
                Whether it's a professional suit for the office or a uniform for
                the school, we are committed to providing high-quality garments
                that are both stylish and functional. With our attention to
                detail and commitment to customer satisfaction, we take pride in
                delivering uniforms that not only look great but also make you
                feel great.
              </p>
              <button className={styles.v5h2Button}>Learn more</button>
            </div>
          </div>
        </>
      ) : null}
      {currentProduct === "uniforms"?
      <UniformsPage setScrolling={setScrolling}></UniformsPage>
      :
      null}
      {currentProduct === "tshirts"?
      <TShirtsPage setScrolling={setScrolling}></TShirtsPage>
      :
      null}
      {currentProduct === "shoes"?
      <CustomShoesPage setScrolling={setScrolling}></CustomShoesPage>
      :
      null}
      {currentProduct === "sports"?
      <SportsPage setScrolling={setScrolling}></SportsPage>
      :
      null}
      <ContactSection></ContactSection>
    </div>
  );
};

export default ProductPage;
