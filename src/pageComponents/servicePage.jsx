import { useState, useEffect } from "react";
import styles from "../css/servicePage.module.css";
import MenuBarTop from "../commonComponents/menuBarTop";
import ContactSection from "../commonComponents/contactSection";

const ServicePage = ({ setCurrentPage }) => {
  const [textArray, setTextArray] = useState([
    <p key="1">Uniform Design</p>,
    <p key="2">Uniform Sampling</p>,
    <p key="3">Uniform Production</p>,
    <p key="4">Embroidery and Screen Printing Solutions/Sublimation</p>,
    <p key="5">Customized Tailoring</p>,
    <p key="6">Ready Size Garments</p>,
    <p key="7">
      Procurement Expertise in Quality Fabrics, Woven & Knitted Garments
    </p>,
    <p key="8">Styling Advise</p>,
  ]);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % textArray.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [textArray]);
  return (
    <div className={styles.servicePage}>
      <MenuBarTop
        setCurrentPage={setCurrentPage}
        currentPage={"service_page"}
      ></MenuBarTop>
      <div className={styles.v1}>
        <h1 className={styles.v1Text}>
          Top Uniform Supplier in Bangalore, India - Discover unrivaled rates and
          quality with Corparight.
        </h1>
        <p className={styles.v1Description}>
          Contact us now for a quote or to schedule a meeting and experience the
          difference."
        </p>
        <button className={styles.v1Button}>REQUEST A QUOTE</button>
      </div>
      <div className={styles.v2}>
        <div className={styles.v2v1}>The Corporate Essentials Company</div>
        <div className={styles.v2v2}>
          <button className={styles.v2v2Button1}>SCHEDULE A MEETING</button>
          <button className={styles.v2v2Button2}>GET A QUOTE TODAY</button>
        </div>
        <div className={styles.v2v3}>100% GUARANTEED SATISFACTION</div>
      </div>
      <div className={styles.v3}>
        <div className={styles.v3v1}>SERVICE OFFERINGS OVERVIEW</div>
        <div className={styles.v3v2}>
          <div className={styles.v3v2h1}>
            <ul>
              <li>Uniform Design</li>
              <li>Uniform Sampling</li>
              <li>Uniform Production</li>
              <li>Embroidery and Screen Printing Solutions/Sublimation</li>
              <li>Customized Tailoring</li>
              <li>Ready Size Garments</li>
              <li>
                Procurement Expertise in Quality Fabrics, Woven & Knitted
                Garments
              </li>
              <li>Styling Advise</li>
            </ul>
          </div>
          <div className={styles.v3v2h2}>{textArray[index]}</div>
        </div>
      </div>
      <div className={styles.v4}>
        <h1>Best Uniform Supplier In Bangalore</h1>
        <p>
          If you’re on the hunt for top-quality uniforms for your business,
          hotel, SPA, ,resort, private institutions, restaurant, or medical
          facility, you’ve come to the right place! We are the new best uniform
          manufacturer in Bangalore, boasting over a decade of industry
          experience. Our extensive range includes work uniforms, corporate
          uniforms, scrubs uniforms, and chef uniforms. Whether you’re looking
          to order online or need a customized uniform, we’ve got you covered.
          Our uniforms are crafted using the finest materials and techniques,
          ensuring durability, comfort, and style. We offer a range of
          customization options to cater to your specific needs and preferences,
          allowing you to create a one-of-a-kind uniform with various colors,
          sizes, designs, and logos. With competitive prices and speedy,
          reliable service, we guarantee delivery within 3 days of order
          confirmation. On top of that, our uniform advantage program rewards
          loyal customers with discounts and rewards. Don’t settle for anything
          less than the best – reach out to us today for a complimentary quote.
          We are the ultimate uniform solution for all sectors across Bangalore!
        </p>
      </div>
      <div className={styles.v5}>
        <div className={styles.v5v1}>
            <h1>Our Tailored Service Offerings</h1>
            <p>Experience unrivaled customization through meticulous embroidery, vibrant sublimation screen printing, and eye-catching banner printing. Our extensive range of services ensures that your brand stands out from the competition, leaving a lasting impression on your customers. Trust us to deliver top-notch quality and attention to detail, making your brand truly unforgettable.</p>
        </div>
        <div className={styles.v5v2}>
            <div className={styles.v5v2h1}>
                <h1>EMBROIDERY</h1>
                <p>Embroidery is the art of decorating fabric or other materials with needle and thread. It adds a professional and polished touch to any garment, making it stand out and represent your brand or personal style. Our skilled team of embroiderers can create custom designs, logos, and text to meet your specific needs.</p>
            </div>
            <div className={styles.v5v2h2}>
                <h1>SUBLIMATION</h1>
                <p>Sublimation t-shirts are created using a unique printing process that involves transferring dye onto the fabric using heat. Sublimation t-shirts are popular for sports teams, corporate events, and personalization, as they offer a wide range of customization options and a long-lasting finish. With sublimation, the possibilities for unique and eye-catching designs are endless.</p>
            </div>
            <div className={styles.v5v2h3}>
                <h1>SCREEN PRINTING</h1>
                <p>Screen printing is a popular method of printing designs onto fabrics, including uniforms. This technique involves using a mesh screen to transfer ink onto the material, creating vibrant and long-lasting prints. Whether it's a logo, slogan, or custom design, screen printing can bring any uniform to life with sharp and precise detailing.</p>
            </div>
            <div className={styles.v5v2h4}>
                <h1>DTF PRINTING</h1>
                <p>DTF printing, or Direct to Film printing, is a revolutionary method for creating high-quality designs on uniforms. DTF printing is ideal for uniform companies as it allows for intricate and detailed designs to be printed with precision and accuracy. With DTF printing, uniform companies can offer their clients personalized and professional-looking uniforms that are sure to make a lasting impression .</p>
            </div>
        </div>
        <div className={styles.v5v3}>We at Corparight are here to guide you and provide personalised assistance throughout the entire process of creating customised requirements in any Industry or sector. As a uniform supplier ensuring the quality of our products is paramount to our success .</div>
      </div>
      <ContactSection></ContactSection>
    </div>
  );
};

export default ServicePage;
