import { useState, useEffect } from 'react';
import HomePage from "./homePage";
import ProductPage from './productPage';
import ServicePage from "./servicePage";
import AboutPage from './aboutPage';
import InfoBarTop from "../commonComponents/infoBarTop";
import ContactPage from './contactPage';

const MainPage = () => {
    const [currentPage, setCurrentPage] = useState("home_page");
    return(
        <div>
            <InfoBarTop></InfoBarTop>
            {currentPage === "home_page"?
            <HomePage setCurrentPage={setCurrentPage}></HomePage>
            :
            null
            }
            {currentPage === "product_page"?
            <ProductPage setCurrentPage={setCurrentPage}></ProductPage>
            :
            null
            }
            {currentPage === "service_page"?
            <ServicePage setCurrentPage={setCurrentPage}></ServicePage>
            :
            null
            }
            {currentPage === "contact_page"?
            <ContactPage setCurrentPage={setCurrentPage}></ContactPage>
            :
            null
            }
            {currentPage === "about_page"?
            <AboutPage setCurrentPage={setCurrentPage}></AboutPage>
            :
            null
            }
        </div>
    )
}

export default MainPage;