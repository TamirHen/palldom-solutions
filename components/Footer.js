import React from 'react';
import styles from "../styles/Footer.module.scss";

const Footer = ({contactRef}) => {
    return (
        <footer ref={contactRef} className={styles.footer}>
            <a href='mailto:info@palladomsolutions.com'
               className={styles.emailLink}>info@palladomsolutions.com</a>
            <div className={styles.contactInfoWrapper}>
                <div className={styles.contactInfo}>
                    <p>Canada</p>
                    <p>Vancouver, BC</p>
                    <a href='tel:+1(236)5121151'>+1 (236) 512-1151</a>
                </div>
                <div className={styles.divider}>
                </div>
                <div className={styles.contactInfo}>
                    <p>Israel</p>
                    <p>Tel Aviv</p>
                    <a href='tel:+972(53)9875975'>+972 (53) 9875975</a>
                </div>
            </div>
            <h6>{`© ${new Date().getFullYear()} PALLADOM SOLUTIONS. All rights reserved.`}</h6>
        </footer>
    );
};

export default Footer;