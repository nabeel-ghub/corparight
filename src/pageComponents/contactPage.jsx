import styles from "../css/contactPage.module.css";
import MenuBarTop from "../commonComponents/menuBarTop";
import ContactSection from "../commonComponents/contactSection";
import MapLibreView from "../commonComponents/MapComponent";
import instagramLogo from "../css/images/instagram_logo.png";
import whatsappLogo from "../css/images/whatsapp_logo.png";
import facebookLogo from "../css/images/facebook_logo.png";
import xLogo from "../css/images/x_logo.png";


const ContactPage = ({setCurrentPage}) => {
    return(
        <div className={styles.contactPage}>
            <MenuBarTop setCurrentPage={setCurrentPage} currentPage={"contact_page"}></MenuBarTop>
            <div className={styles.v1}>
                <div className={styles.v1h1}>
                    <div className={styles.v1h1v1}>Corparight Location</div>
                    <div className={styles.v1h1v2}>
                       <b>Head Office :</b> CorpEss 195/3, Dommasandra,Sarjapur-Marathahalli-Rd, Bangalore, Karnataka, 562125, India <br></br>
                       <br></br>
                       <b>Branch :</b> CorpEss SRMP General trading llc, Store no.4 , Near AL-Shola school, Industrial area 13, Sharjah, UAE
                       <br></br>
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
                <a href="/instagram"><button className={styles.v2h2} style={{backgroundImage: `url(${instagramLogo})`}}></button></a>
                <a href="/whatsapp"><button className={styles.v2h2} style={{backgroundImage: `url(${whatsappLogo})`}}></button></a>
                <a href="/facebook"><button className={styles.v2h2} style={{backgroundImage: `url(${facebookLogo})`}}></button></a>
                <a href="/x"><button className={styles.v2h2} style={{backgroundImage: `url(${xLogo})`}}></button></a>
            </div>
            <ContactSection></ContactSection>
        </div>
    )
}

export default ContactPage;