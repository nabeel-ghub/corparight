import styles from "../css/contactPage.module.css";
import MenuBarTop from "../commonComponents/menuBarTop";
import ContactSection from "../commonComponents/contactSection";
import MapLibreView from "../commonComponents/MapComponent";
import instagramLogo from "../css/images/instagram_logo.png";
import whatsappLogo from "../css/images/whatsapp_logo.png";
import xLogo from "../css/images/x_logo.png";


const ContactPage = ({setCurrentPage}) => {
    return(
        <div className={styles.contactPage}>
            <MenuBarTop setCurrentPage={setCurrentPage} currentPage={"contact_page"}></MenuBarTop>
            <div className={styles.v1}>
                <div className={styles.v1h1}>
                    <div className={styles.v1h1v1}>Corparight Location</div>
                    <div className={styles.v1h1v2}>
                       <b>Head Office :</b> # S /57-B ,15th main 1stcross Dwarakavasa road BEL layout 2nd stage Bharathnagar ,herohalli Bangalore 560091<br></br>
                       <br></br>
                       <b>Hours :</b>&nbsp; Mon-Sat&nbsp; 9am-5pm
                    </div>
                </div>
                <div className={styles.v1h2}>
                    <MapLibreView></MapLibreView>
                </div>
            </div>
            <div className={styles.v2}>
                <div className={styles.v2h1}>Corparight Socials : </div>
                <a href="https://instagram.com/corparight"><button className={styles.v2h2} style={{backgroundImage: `url(${instagramLogo})`}}></button></a>
                <a href="https://wa.me/+919844124669"><button className={styles.v2h2} style={{backgroundImage: `url(${whatsappLogo})`}}></button></a>
                <a href="https://x.com/CorpaRight"><button className={styles.v2h2} style={{backgroundImage: `url(${xLogo})`}}></button></a>
            </div>
            <ContactSection></ContactSection>
        </div>
    )
}

export default ContactPage;