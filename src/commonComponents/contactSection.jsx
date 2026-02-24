import styles from "../css/contactSection.module.css";
import {useRef} from "react";

const ContactSection = () => {
    const nameRef = useRef();
    const subRef = useRef();
    const bodyRef = useRef();
    function handleEmail() {
        const nameInput = nameRef.current;
        const subInput = subRef.current;
        const bodyInput = bodyRef.current;
        window.location.href = `mailto:info@corparight.com?subject=${subInput.value}&body=Hiii GlobalWave Team, %0A%0A${bodyInput.value}%0A%0ALooking forward to your response,%0A%0A${nameInput.value}`;
        nameInput.value = "";
        subInput.value = "";
        bodyInput.value = "";
    }
    return(
        <div className={styles.contactSection}>
            <h2 className={styles.Text}>Contact Corparight</h2>
            <input type="text" placeholder="Your name" ref={nameRef} className={styles.nameInput}></input>
            <input type="text" placeholder="Subject" ref={subRef} className={styles.subjectInput}></input>
            <textarea placeholder="Message..." ref={bodyRef} className={styles.messageInput}></textarea>
            <button onClick={() => handleEmail()} className={styles.submitButton}>Send from my email</button>
        </div>
    )
}

export default ContactSection;
