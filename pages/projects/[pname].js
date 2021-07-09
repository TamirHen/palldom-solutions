import React from 'react';
import {useRouter} from "next/router";
import styles from '../../styles/Project.module.scss';
import Image from 'next/image'
import Head from "next/head";
import TextCycleIcon from "../../assets/text-cycle.svg";
import RingIcon from "../../assets/ring.svg";
import Fade from "react-reveal/Fade";
import OurWork from "../../components/OurWork";
import Shade from "../../components/Shade";

const Project = ({aboutSection, ourWorkSection, contactSection, projects}) => {
        const router = useRouter();
        const {pname} = router.query;

        return (
            <>
                {projects[pname] &&
                <div className={styles.main}>
                    <Head>
                        <title>{projects[pname].title}</title>
                        <meta name="description" content={projects[pname].text1}/>
                    </Head>

                    <div className={styles.textCycleWrapper}><TextCycleIcon className={styles.textCycle}/></div>
                    <div className={styles.ringWrapper}>
                        <RingIcon className={styles.ring}/>
                        <div className={styles.mainPhotoWrapper}>
                            <Image src={projects[pname].photoMain}
                                   alt={projects[pname].title}/>
                        </div>
                        <p>
                            <Fade bottom>
                                {projects[pname].text1}
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
                                {projects[pname].title}
                            </Fade>
                        </h1>
                    </section>

                    <section className={styles.sectionAbout}>
                        <Fade bottom>
                            <Shade disableOnHover>
                                <Image src={projects[pname].photoView} alt={projects[pname].text1}/>
                            </Shade>
                        </Fade>
                        <p className={styles.text2}>
                            <Fade bottom>
                                {projects[pname].text2}
                            </Fade>
                        </p>
                        <div className={styles.imagesWrapper}>
                            <div className={styles.photo1}>
                                <Shade disableOnHover>
                                    <Image src={projects[pname].photo1} alt={projects[pname] + '-photo-1'}/>
                                </Shade>
                            </div>
                            <div className={styles.photo2}>
                                <Shade disableOnHover>
                                    <Image src={projects[pname].photo2} alt={projects[pname] + '-photo-2'}/>
                                </Shade>
                            </div>
                        </div>
                        <p>{projects[pname].text3}</p>
                    </section>
                    <OurWork title={'VIEW NEXT'} projects={projects}/>
                </div>
                }
            </>
        );
    }
;

export default Project;