import styles from '../css/menuBarTop.module.css';
import { useState } from 'react';

const MenuBarTop = ({setCurrentPage, currentPage}) => {
    const [isActiveMenu, setIsActiveMenu] = useState(false);

    function handleNav(index) {
        if(index === 1) return setCurrentPage("home_page");
        if(index === 2) return setCurrentPage("product_page");
        if(index === 3) return setCurrentPage("service_page");
        if(index === 4) return setCurrentPage("contact_page")
        if(index === 5) return setCurrentPage("about_page");
    }

    return(
        <div className={styles.menuBarTop}>
            <div className={styles.pcmenu}>
                <div className={styles.h1}>
                <div className={styles.logo}></div>
            </div>
            <div className={styles.h2}>
                <p className={currentPage === "home_page"? `${styles.nav} ${styles.active}` : styles.nav} onClick={() => handleNav(1)}>Home</p>
                <p className={currentPage === "product_page"? `${styles.nav} ${styles.active}` : styles.nav} onClick={() => handleNav(2)}>Products</p>
                <p className={currentPage === "service_page"? `${styles.nav} ${styles.active}` : styles.nav} onClick={() => handleNav(3)}>Services</p>
                <p className={currentPage === "contact_page"? `${styles.nav} ${styles.active}` : styles.nav} onClick={() => handleNav(4)}>Contact</p>
                <p className={currentPage === "about_page"? `${styles.nav} ${styles.active}` : styles.nav} onClick={() => handleNav(5)}>About us</p>
                <p className={styles.nav} onClick={() => handleNav(6)}><a href="/corparight.pdf" download="Corparight.pdf">Catalogue</a></p>
                <p className={isActiveMenu? `${styles.mobilenav} ${styles.active}` : styles.mobilenav} onClick={() => setIsActiveMenu(!isActiveMenu)}></p>
            </div>
            </div>
            <div className={isActiveMenu? `${styles.mobilemenu} ${styles.active}` : styles.mobilemenu}>
                <p className={currentPage === "home_page"? `${styles.nav1} ${styles.active}` : styles.nav1} onClick={() => handleNav(1)}>Home</p>
                <p className={currentPage === "product_page"? `${styles.nav1} ${styles.active}` : styles.nav1} onClick={() => handleNav(2)}>Products</p>
                <p className={currentPage === "service_page"? `${styles.nav1} ${styles.active}` : styles.nav1} onClick={() => handleNav(3)}>Services</p>
                <p className={currentPage === "contact_page"? `${styles.nav1} ${styles.active}` : styles.nav1} onClick={() => handleNav(4)}>Contact</p>
                <p className={currentPage === "about_page"? `${styles.nav1} ${styles.active}` : styles.nav1} onClick={() => handleNav(5)}>About us</p>
                <p className={styles.nav1} onClick={() => handleNav(6)}>Catalogue</p>
            </div>
        </div>
    )
}

export default MenuBarTop;