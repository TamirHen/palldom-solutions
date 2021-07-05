import React, {useState} from 'react';
import styles from "../styles/Menus.module.scss";
import Logo from "../assets/logo.svg";
import Hamburger from "../assets/hamburger.svg";
import LinkedinIcon from "../assets/linkedin.svg";
import InstagramIcon from "../assets/instagram.svg";
import TwitterIcon from "../assets/twitter.svg";
import SideMenuIcon from "../assets/sideMenuIcon.svg";

const Menus = ({aboutSection, ourWorkSection, contactSection}) => {
    const [isOpen, setIsOpen] = useState(false);
    const linkedinUrl = "https://www.linkedin.com/in/palladom-solutions-b20a47216/";
    const instagramUrl = "/";
    const twitterUrl = "https://twitter.com/PalladomS";

    const onButtonClickHandler = (section) => {
        setIsOpen(false);
        section.current.scrollIntoView();
    }
    return (
        <div className={styles.menusWrapper}>
            <Hamburger className={styles.hamburger} onClick={() => setIsOpen(true)}/>
            <div className={styles.sideMenuWrapper}>
                <nav className={styles.sideMenu}>
                    <a href="/"><Logo className={styles.logo}/></a>
                    <div className={styles.socialMediaWrapper}>
                        <a href={linkedinUrl} target={"_blank"}><LinkedinIcon className={styles.icon}/></a>
                        <a href={instagramUrl} target={"_blank"}><InstagramIcon className={styles.icon}/></a>
                        <a href={twitterUrl} target={"_blank"}><TwitterIcon className={styles.icon}/></a>
                    </div>
                    <SideMenuIcon className={styles.sideMenuIcon}/>
                </nav>
            </div>
            <nav className={styles.mobileNav} style={{maxWidth: isOpen ? '100%' : '0'}}>
                <button className={styles.buttonX} onClick={() => setIsOpen(false)}>x</button>
                <div className={styles.buttonsWrapper}>
                    <button onClick={() => onButtonClickHandler(aboutSection)}
                            style={{opacity: isOpen ? '100%' : '0'}}>ABOUT
                    </button>
                    <button onClick={() => onButtonClickHandler(ourWorkSection)}
                            style={{opacity: isOpen ? '100%' : '0'}}>OUR WORK
                    </button>
                    <button onClick={() => onButtonClickHandler(contactSection)}
                            style={{opacity: isOpen ? '100%' : '0'}}>CONTACT US
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Menus;