import React from 'react';
import Link from 'next/link';
import TextCycleBlackIcon from "../assets/text-cycle-service.svg";
import Fade from "react-reveal/Fade";
import CardsGrid from "./CardsGrid";
import WorkExample from "../assets/work1.svg";
import styles from '../styles/OurWork.module.scss';

const OurWork = ({sectionRef: ourWorkSection, title, projects}) => {
    return (
        <section ref={ourWorkSection} className={styles.sectionOurWork}>
            <div className={styles.smallRingWrapper}><TextCycleBlackIcon className={styles.smallRing}/></div>
            <h1>
                <Fade bottom cascade>
                    {title}
                </Fade>
            </h1>
            <CardsGrid>
                <Link href={'/projects/playground'}>
                    <div className={styles.shrink}>
                        <div className={styles.cardWrapper}>
                            <h3 className={styles.ourWorkCardText}>PlayGround Productions<br/>
                                social event co-op</h3>
                            <WorkExample className={styles.cardWork}/>
                        </div>
                    </div>
                </Link>
                <Link href={'/projects/playground'}>
                    <div className={styles.shrink}>
                        <div className={styles.cardWrapper}>
                            <h3 className={styles.ourWorkCardText}>PlayGround Productions<br/>
                                social event co-op</h3>
                            <WorkExample className={styles.cardWork}/>
                        </div>
                    </div>
                </Link>
                <Link href={'/projects/playground'}>
                    <div className={styles.shrink}>
                        <div className={styles.cardWrapper}>
                            <h3 className={styles.ourWorkCardText}>PlayGround Productions<br/>
                                social event co-op</h3>
                            <WorkExample className={styles.cardWork}/>
                        </div>
                    </div>
                </Link>
                <Link href={'/projects/playground'}>
                    <div className={styles.shrink}>
                        <div className={styles.cardWrapper}>
                            <h3 className={styles.ourWorkCardText}>PlayGround Productions<br/>
                                social event co-op</h3>
                            <WorkExample className={styles.cardWork}/>
                        </div>
                    </div>
                </Link>
                <Link href={'/projects/playground'}>
                    <div className={styles.shrink}>
                        <div className={styles.cardWrapper}>
                            <h3 className={styles.ourWorkCardText}>PlayGround Productions<br/>
                                social event co-op</h3>
                            <WorkExample className={styles.cardWork}/>
                        </div>
                    </div>
                </Link>
            </CardsGrid>
        </section>
    );
};

export default OurWork;