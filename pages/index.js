import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import RingIcon from '../assets/ring.svg';
import TextCycleIcon from '../assets/text-cycle.svg';
import TextCycleBlackIcon from '../assets/text-cycle-service.svg';
import HalfRingIcon from '../assets/half-ring.svg';
import AboutList from "../components/AboutList";
import CardsGrid from "../components/CardsGrid";
import EladCard from "../assets/elad-card.svg";
import TamirCard from "../assets/tamir-card.svg";
import CardArrowIcon from "../assets/card-arrow.svg";
import WorkExample from "../assets/work1.svg";
import Fade from 'react-reveal/Fade';
import {useRef} from "react";

export default function Home() {
    const aboutSection = useRef();
    const ourWorkSection = useRef();
    const contactSection = useRef();

    return (
        <div className={styles.container}>
            <Head>
                <title>Palldom Solutions</title>
                <meta name="description" content="Making your dream website for you"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <TextCycleIcon className={styles.textCycle}/>
                <div className={styles.ringWrapper}>
                    <RingIcon className={styles.ring}/>
                    <p>Palldom is a full service design agency that drives positive change around social,<br/>economic,
                        and environmental issues.<br/>Through creative communication and strategy, we build
                        experiences that inspire dialogue and action.</p>
                </div>
                <section className={styles.sectionHome}>
                    <div className={styles.linksWrapper}>
                        <button onClick={() => aboutSection.current.scrollIntoView()}>ABOUT</button>
                        <button onClick={() => ourWorkSection.current.scrollIntoView()}>OUR WORK</button>
                        <button onClick={() => contactSection.current.scrollIntoView()}>CONTACT</button>
                    </div>
                    <h2>PALLDOM</h2>
                    <h3>SOLUTIONS</h3>

                    <h1>
                        <Fade bottom cascade>
                            {`WE BUILD AND`}
                            {`DESIGN FOR`}
                            {`THE FUTURE`}
                        </Fade>
                    </h1>
                </section>

                <section ref={aboutSection} className={styles.sectionAbout}>
                    <HalfRingIcon className={styles.halfRingIcon}/>
                    <div className={styles.textWrapper}>
                        <h1>
                            <Fade bottom cascade>
                                WHAT WE DO
                            </Fade>
                        </h1>
                        <Fade bottom cascade>
                            <h2>
                                {`We help people, business, organizations and institutes speak`}
                                {`directly to their audience with carefully crafted communication.`}<br/>
                                {`Through close collaboration with our clients we tell `}
                                {`stories through the most effective means of communication.`}
                            </h2>
                        </Fade>
                        <AboutList/>
                    </div>

                </section>
                <TextCycleIcon className={styles.textCycle}/>
                <div className={styles.ringWrapper}>
                    <RingIcon className={styles.ring}/>
                    <p>We are designers, researchers, artists, writers, and developers that communicate in imaginative
                        and impactful ways to create meaningful social and environmental change.
                    </p>
                </div>
                <section className={styles.sectionWhatWeDo}>
                    <h1>
                        <Fade bottom cascade>
                            {`WHO WE`}
                            {`ARE & WHAT`}
                            {`WE DO`}
                        </Fade>
                    </h1>
                    <CardsGrid>
                        <div className={styles.shrink}>
                            <div className={styles.cardWrapper}>
                                <CardArrowIcon className={styles.arrow}/>
                                <h2 className={styles.avatarCardText}>ELAD</h2>
                                <EladCard className={styles.card}/>
                            </div>
                        </div>
                        <div className={styles.shrink}>
                            <div className={styles.cardWrapper}>
                                <CardArrowIcon className={styles.arrow}/>
                                <h2 className={styles.avatarCardText}>TAMIR</h2>
                                <TamirCard className={styles.card}/>
                            </div>
                        </div>
                        <div className={styles.shrink}>
                            <div className={styles.cardWrapper}>
                                <CardArrowIcon className={styles.arrow}/>
                                <h2 className={styles.avatarCardText}>ELAD</h2>
                                <EladCard className={styles.card}/>
                            </div>
                        </div>
                        <div className={styles.shrink}>
                            <div className={styles.cardWrapper}>
                                <CardArrowIcon className={styles.arrow}/>
                                <h2 className={styles.avatarCardText}>TAMIR</h2>
                                <TamirCard className={styles.card}/>
                            </div>
                        </div>
                        <div className={styles.shrink}>
                            <div className={styles.cardWrapper}>
                                <CardArrowIcon className={styles.arrow}/>
                                <h2 className={styles.avatarCardText}>ELAD</h2>
                                <EladCard className={styles.card}/>
                            </div>
                        </div>
                        <div className={styles.shrink}>
                            <div className={styles.cardWrapper}>
                                <CardArrowIcon className={styles.arrow}/>
                                <h2 className={styles.avatarCardText}>TAMIR</h2>
                                <TamirCard className={styles.card}/>
                            </div>
                        </div>
                    </CardsGrid>
                </section>
                <TextCycleBlackIcon className={styles.smallRing}/>
                <section ref={ourWorkSection} className={styles.sectionOurWork}>
                    <h1>
                        <Fade bottom cascade>
                            {`OUR`}
                            {`WORK`}
                        </Fade>
                    </h1>
                    <CardsGrid>
                        <div className={styles.shrink}>
                            <div className={styles.cardWrapper}>
                                <h3 className={styles.ourWorkCardText}>PlayGround Productions<br/>
                                    social event co-op</h3>
                                <WorkExample className={styles.card}/>
                            </div>
                        </div>
                        <div className={styles.shrink}>
                            <div className={styles.cardWrapper}>
                                <h3 className={styles.ourWorkCardText}>PlayGround Productions<br/>
                                    social event co-op</h3>
                                <WorkExample className={styles.card}/>
                            </div>
                        </div>
                        <div className={styles.shrink}>
                            <div className={styles.cardWrapper}>
                                <h3 className={styles.ourWorkCardText}>PlayGround Productions<br/>
                                    social event co-op</h3>
                                <WorkExample className={styles.card}/>
                            </div>
                        </div>
                        <div className={styles.shrink}>
                            <div className={styles.cardWrapper}>
                                <h3 className={styles.ourWorkCardText}>PlayGround Productions<br/>
                                    social event co-op</h3>
                                <WorkExample className={styles.card}/>
                            </div>
                        </div>
                        <div className={styles.shrink}>
                            <div className={styles.cardWrapper}>
                                <h3 className={styles.ourWorkCardText}>PlayGround Productions<br/>
                                    social event co-op</h3>
                                <WorkExample className={styles.card}/>
                            </div>
                        </div>
                        <div className={styles.shrink}>
                            <div className={styles.cardWrapper}>
                                <h3 className={styles.ourWorkCardText}>PlayGround Productions<br/>
                                    social event co-op</h3>
                                <WorkExample className={styles.card}/>
                            </div>
                        </div>
                    </CardsGrid>
                </section>
            </main>
            <footer ref={contactSection} className={styles.footer}>
                <div className={styles.contactInfo}>
                    <Fade bottom cascade>
                        <a href='mailto:info@palldomsolutions.com'
                           className={styles.emailLink}>info@palldomsolutions.com</a>
                        <p>Canada</p>
                        <p>Vancouver, BC</p>
                        <a href='tel:+1(236)5121151'>+1 (236) 512-1151</a>
                    </Fade>
                </div>
                <h6>{`© ${new Date().getFullYear()} PALLDOM SOLUTIONS. All rights reserved.`}</h6>
            </footer>
        </div>
    )
}
