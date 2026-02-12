import MenuBarTop from "../commonComponents/menuBarTop";
import ContactSection from "../commonComponents/contactSection";
import styles from "../css/aboutPage.module.css";

const AboutPage = ({setCurrentPage}) => {
    return (
        <div className={styles.aboutPage}>
            <MenuBarTop setCurrentPage={setCurrentPage} currentPage={"about_page"}></MenuBarTop>
            <div className={styles.v1}>
                <h1>About Corparight</h1>
                <p>Corparight specializes in fulfilling the diverse procurement needs of educational and business entities, serving as a dedicated supply partner for organizations in and around Bangalore. We offer a comprehensive range of high-quality solutions that cover the entire spectrum of institutional requirements, including school uniforms, custom apparel, sports jerseys, and durable footwear, as well as complete sports infrastructure and equipment. Driven by a vision to streamline operational essentials, Corparight is committed to providing schools and businesses with the reliable service and premium supplies they need to succeed</p>
            </div>
            <div className={styles.v2}>
                <div className={styles.v2v1}>
                    <h1>Our Mission</h1>
                    <p>Corparight is committed to transforming the procurement landscape for educational and business institutions in India. Our mission is to simplify and optimize the entire procurement process. With a focus on a wide array of supplies schools and corporates, we aim to be the comprehensive solution that streamlines procurement complexities. We strive to eliminate price variations and vendor hassles, ensuring a seamless procurement experience. </p>
                </div>
                <div className={styles.v2v2}>
                    <h1>Our Vision</h1>
                    <p>At Corparight, our vision is to become the unparalleled leader in simplifying and optimizing procurement processes for educational and business entities across the world. We envision a future where our comprehensive solutions redefine convenience in procurement.Leveraging our expertise from successful retail outlets, our goal is to empower clients, allowing them to concentrate on their core goals while we efficiently handle their diverse procurement requirements.</p>
                </div>
            </div>
            <ContactSection></ContactSection>
        </div>
    )
}

export default AboutPage;