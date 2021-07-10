import React, {useState} from 'react';
import Link from 'next/link';
import styles from "../styles/Menus.module.scss";
import Logo from "../assets/logo.svg";
import Hamburger from "../assets/hamburger.svg";
import LinkedinIcon from "../assets/linkedin.svg";
import InstagramIcon from "../assets/instagram.svg";
import TwitterIcon from "../assets/twitter.svg";
import SendUsMessageIcon from "../assets/sendUsMessageIcon.svg";
import WorkerPopup from "./WorkerPopup";
import {useRouter} from "next/router";

const Menus = ({
                   aboutSection,
                   ourWorkSection,
                   contactSection,
                   activeWorker,
                   setActiveWorker,
                   isWorkerOpen,
                   setIsWorkerOpen
               }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const linkedinUrl = "https://www.linkedin.com/in/palladom-solutions-b20a47216/";
    const instagramUrl = "/";
    const twitterUrl = "https://twitter.com/PalladomS";
    const router = useRouter();

    const onButtonClickHandler = async (section) => {
        let location;
        if (typeof window !== 'undefined') {
            location = window.location.pathname;
        }
        if (location.includes('projects') && section !== contactSection) {
            await router.push('/');
        }
        setIsMobileMenuOpen(false);
        section.current.scrollIntoView();
    }
    return (
        <div className={styles.menusWrapper}>
            <Hamburger className={styles.hamburger} onClick={() => setIsMobileMenuOpen(true)}/>
            <div className={styles.sideMenuWrapper}>
                <nav className={styles.sideMenu}>
                    <Link href="/">
                        <a><Logo className={styles.logo}/></a>
                    </Link>
                    <div className={styles.socialMediaWrapper}>
                        <Link href={linkedinUrl}>
                            <a target={"_blank"} className={styles.socialMedia}><LinkedinIcon
                                className={styles.icon}/></a>
                        </Link>
                        <Link href={instagramUrl}>
                            <a target={"_blank"} className={styles.socialMedia}><InstagramIcon
                                className={styles.icon}/></a>
                        </Link>
                        <Link href={twitterUrl}>
                            <a target={"_blank"} className={styles.socialMedia}><TwitterIcon
                                className={styles.icon}/></a>
                        </Link>
                    </div>
                    <button className={styles.messageUsWrapper}><SendUsMessageIcon className={`${styles.messageUsIcon} ${styles.icon}`}/></button>
                </nav>
            </div>
            <WorkerPopup activeWorker={activeWorker} setActiveWorker={setActiveWorker} isOpen={isWorkerOpen}
                         setIsOpen={setIsWorkerOpen}/>
            <nav className={styles.mobileNav} style={{maxWidth: isMobileMenuOpen ? '100%' : '0'}}>
                <button className={styles.buttonX} onClick={() => setIsMobileMenuOpen(false)}>x</button>
                <div className={styles.buttonsWrapper}>
                    <button onClick={() => onButtonClickHandler(aboutSection)}
                            style={{opacity: isMobileMenuOpen ? '1' : '0'}}>ABOUT
                    </button>
                    <button onClick={() => onButtonClickHandler(ourWorkSection)}
                            style={{opacity: isMobileMenuOpen ? '1' : '0'}}>OUR WORK
                    </button>
                    <button onClick={() => onButtonClickHandler(contactSection)}
                            style={{opacity: isMobileMenuOpen ? '1' : '0'}}>CONTACT US
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Menus;