import React from 'react';
import styles from "../styles/Menus.module.scss";
import Logo from "../assets/logo.svg";
import Hamburger from "../assets/hamburger.svg";
import LinkedinIcon from "../assets/linkedin.svg";
import InstagramIcon from "../assets/instagram.svg";
import TwitterIcon from "../assets/twitter.svg";
import SideMenuIcon from "../assets/sideMenuIcon.svg";

const Menus = () => {
    return (
        <div className={styles.menusWrapper}>
            <Hamburger className={styles.hamburger}/>
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
            <nav className={styles.mobileNav}>
                <button>ABOUT</button>
                <button>OUR WORK</button>
                <button>CONTACT US</button>
            </nav>
        </div>
    );
};

export default Menus;