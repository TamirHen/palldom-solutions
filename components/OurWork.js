import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import TextCycleBlackIcon from "../assets/text-cycle-service.svg";
import Fade from "react-reveal/Fade";
import CardsGrid from "./CardsGrid";
import styles from '../styles/OurWork.module.scss';
import Shade from "./Shade";

const OurWork = ({sectionRef: ourWorkSection, title, projects}) => {
    return (
        <section ref={ourWorkSection} className={styles.sectionOurWork}>
            <div className={styles.smallRingWrapper}><TextCycleBlackIcon className={styles.smallRing}/></div>
            <h1>
                <Fade bottom cascade>
                    {title}
                </Fade>
            </h1>
            <CardsGrid scrollColor='grey'>
                {
                    projects &&
                    Object.keys(projects).map((pname, index) => (
                        <Link href={'/projects/' + pname} key={pname}>
                            <div className={styles.shrink}>
                                <div className={styles.cardWrapper}>
                                    <h3 className={styles.ourWorkCardText}>{projects[pname]?.title}</h3>
                                    <div className={styles.cardWork}>
                                        <Shade>
                                            <Image src={projects[pname].photoGrid} alt={pname}/>
                                        </Shade>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </CardsGrid>
        </section>
    );
};

export default OurWork;