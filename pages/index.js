import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import RingIcon from '../assets/ring.svg';
import TextCycleIcon from '../assets/text-cycle.svg';
import TextCycleBlackIcon from '../assets/text-cycle-service.svg';
import AboutList from "../components/AboutList";
import CardsGrid from "../components/CardsGrid";
import EladCard from "../assets/elad-card.svg";
import TamirCard from "../assets/tamir-card.svg";
import StephCard from "../assets/steph-card.svg";
import TuliCard from "../assets/tuli-card.svg";
import AlexCard from "../assets/alex-card.svg";
import CardArrowIcon from "../assets/card-arrow.svg";
import Fade from 'react-reveal/Fade';
import OurWork from "../components/OurWork";

export default function Home({workerPressedHandler, aboutSection, ourWorkSection, contactSection, projects}) {

    return (
        <div className={styles.main}>
            <Head>
                <title>Palladom Solutions</title>
                <meta name="description" content="Making your dream come true"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <div className={styles.textCycleWrapper}><TextCycleIcon className={styles.textCycle}/></div>
            <div className={styles.ringWrapper}>
                <RingIcon className={styles.ring}/>
                <p>
                    <Fade bottom>
                        {`Palldom is a full service design agency that drives positive change around social, economic,
                                and environmental issues.`}
                        {`Through creative communication and strategy, we build
                                experiences that inspire dialogue and action.`}
                    </Fade>
                </p>
            </div>
            <section className={styles.sectionHome}>
                <div className={styles.linksWrapper}>
                    <button onClick={() => aboutSection?.current.scrollIntoView()}>ABOUT</button>
                    <button onClick={() => ourWorkSection?.current.scrollIntoView()}>OUR WORK</button>
                    <button onClick={() => contactSection?.current.scrollIntoView()}>CONTACT US</button>
                </div>
                <h2 className={styles.title}>PALLADOM</h2>
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
                <div className={styles.textWrapper}>
                    <h1>
                        <Fade bottom cascade>
                            {`WHAT WE DO`}
                        </Fade>
                    </h1>
                    <h2>
                        <Fade bottom>
                            {`We help people, business, organizations and institutes speak
                                directly to their audience with carefully crafted communication.
                                Through close collaboration with our clients we tell
                                stories through the most effective means of communication.`}
                        </Fade>
                    </h2>
                    <AboutList/>
                </div>

            </section>
            <div className={styles.textCycleWrapper}><TextCycleIcon className={styles.textCycle}/></div>
            <div className={styles.ringWrapper}>
                <RingIcon className={styles.ring}/>
                <p>
                    <Fade bottom>
                        We are designers, researchers, artists, writers, and developers that communicate in
                        imaginative
                        and impactful ways to create meaningful social and environmental change.
                    </Fade>
                </p>
            </div>
            <section className={styles.sectionWhatWeDo}>
                <h1>
                    <Fade bottom cascade>
                        {`WHO WE ARE`}
                        {`AND OUR`}
                        {`SKILLS`}
                    </Fade>
                </h1>
                <CardsGrid>
                    <div className={styles.shrink}>
                        <div className={styles.cardWrapper} onClick={() => workerPressedHandler('elad')}>
                            <CardArrowIcon className={styles.arrow}/>
                            <h2 className={styles.avatarCardText}>ELAD</h2>
                            <EladCard className={styles.card}/>
                        </div>
                    </div>
                    <div className={styles.shrink}>
                        <div className={styles.cardWrapper} onClick={() => workerPressedHandler('tamir')}>
                            <CardArrowIcon className={styles.arrow}/>
                            <h2 className={styles.avatarCardText}>TAMIR</h2>
                            <TamirCard className={styles.card}/>
                        </div>
                    </div>
                    <div className={styles.shrink}>
                        <div className={styles.cardWrapper} onClick={() => workerPressedHandler('steph')}>
                            <CardArrowIcon className={styles.arrow}/>
                            <h2 className={styles.avatarCardText}>STEPH</h2>
                            <StephCard className={styles.card}/>
                        </div>
                    </div>
                    <div className={styles.shrink}>
                        <div className={styles.cardWrapper} onClick={() => workerPressedHandler('tuli')}>
                            <CardArrowIcon className={styles.arrow}/>
                            <h2 className={styles.avatarCardText}>TULI</h2>
                            <TuliCard className={styles.card}/>
                        </div>
                    </div>
                    <div className={styles.shrink}>
                        <div className={styles.cardWrapper} onClick={() => workerPressedHandler('alex')}>
                            <CardArrowIcon className={styles.arrow}/>
                            <h2 className={styles.avatarCardText}>ALEX</h2>
                            <AlexCard className={styles.card}/>
                        </div>
                    </div>
                </CardsGrid>
            </section>
            <OurWork sectionRef={ourWorkSection} title={['OUR', 'WORK']} projects={projects}/>
        </div>
    )
}
