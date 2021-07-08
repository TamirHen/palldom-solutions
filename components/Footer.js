import React from 'react';
import styles from "../styles/Footer.module.scss";
import FilledRingIcon from '../assets/filled-ring.svg';
import Link from 'next/link';

const Footer = ({contactRef}) => {
    return (
        <footer ref={contactRef} className={styles.footer}>
            <Link href='mailto:info@palladomsolutions.com'>
                <a
                    className={styles.emailLink}>info@palladomsolutions.com</a>
            </Link>
            <div className={styles.contactInfoWrapper}>
                <div className={styles.contactInfo}>
                    <p>Canada</p>
                    <p>Vancouver, BC</p>
                    <Link href='tel:+1(236)5121151'>
                        <a>+1 (236) 512-1151</a>
                    </Link>
                </div>
                <div className={styles.divider}>
                </div>
                <div className={styles.contactInfo}>
                    <p>Israel</p>
                    <p>Tel Aviv</p>
                    <Link href='tel:+972(53)9875975'>
                        <a>+972 (53) 9875975</a>
                    </Link>
                </div>
            </div>
            <FilledRingIcon className={styles.filledRing}/>
            <h6>{`© ${new Date().getFullYear()} PALLADOM SOLUTIONS. All rights reserved.`}</h6>
        </footer>
    );
};

export default Footer;