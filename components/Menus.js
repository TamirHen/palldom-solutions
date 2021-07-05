import React, {useState} from 'react';
import styles from "../styles/Menus.module.scss";
import Logo from "../assets/logo.svg";
import Hamburger from "../assets/hamburger.svg";
import LinkedinIcon from "../assets/linkedin.svg";
import InstagramIcon from "../assets/instagram.svg";
import TwitterIcon from "../assets/twitter.svg";
import SideMenuIcon from "../assets/sideMenuIcon.svg";
import Fade from "react-reveal";

const Menus = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={styles.menusWrapper}>
            <Hamburger className={styles.hamburger} onClick={() => setIsOpen(true)}/>
            <div className={styles.sideMenuWrapper}>
                <nav className={styles.sideMenu}>
                    <a href="/"><Logo className={styles.logo}/></a>
                    <div className={styles.socialMediaWrapper}>
                        <button><LinkedinIcon className={styles.icon}/></button>
                        <button><InstagramIcon className={styles.icon}/></button>
                        <button><TwitterIcon className={styles.icon}/></button>
                    </div>
                    <SideMenuIcon className={styles.sideMenuIcon}/>
                </nav>
            </div>
            <nav className={styles.mobileNav} style={{maxWidth: isOpen ? '100%' : '0'}}>
                <button className={styles.buttonX} onClick={() => setIsOpen(false)}>x</button>
                <div className={styles.buttonsWrapper}>
                    <button style={{opacity: isOpen ? '100%' : '0'}}>ABOUT</button>
                    <button style={{opacity: isOpen ? '100%' : '0'}}>OUR WORK</button>
                    <button style={{opacity: isOpen ? '100%' : '0'}}>CONTACT US</button>
                </div>
            </nav>
        </div>
    );
};

export default Menus;