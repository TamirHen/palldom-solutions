import React from 'react';
import styles from "../styles/WorkerPopup.module.scss";
import EladCard from "../assets/elad-card.svg";
import TamirCard from "../assets/tamir-card.svg";
import StephCard from "../assets/steph-card.svg";
import TuliCard from "../assets/tuli-card.svg";
import AlexCard from "../assets/alex-card.svg";

const WorkerPopup = ({isOpen, setIsOpen, activeWorker, setActiveWorker}) => {

        const workers =
            {
                elad: {
                    name: 'ELAD YOSEF',
                    title: 'FOUNDER',
                    description: 'Carly is Pact Media\'s Co-Founder and CEO. She has worked in marketing, design and business development in NY and run and directed several successful companies. Over the last 7 years she has invested her efforts in making real, lasting change with some of the world’s top scientific and philanthropic institutions globally.\n' +
                        '\n' +
                        'She has extensive experience in helping clients build internationally renowned projects from the ground up, using design to present complex concepts in dynamic and digestible formats',
                    card: <EladCard/>
                },
                tamir: {
                    worker: 'tamir',
                    name: 'TAMIR HEN',
                    title: 'FOUNDER',
                    description: 'Carly is Pact Media\'s Co-Founder and CEO. She has worked in marketing, design and business development in NY and run and directed several successful companies. Over the last 7 years she has invested her efforts in making real, lasting change with some of the world’s top scientific and philanthropic institutions globally.\n' +
                        '\n' +
                        'She has extensive experience in helping clients build internationally renowned projects from the ground up, using design to present complex concepts in dynamic and digestible formats',
                    card: <TamirCard/>
                },
                steph: {
                    worker: 'steph',
                    name: 'STEPH',
                    title: 'FOUNDER',
                    description: 'Carly is Pact Media\'s Co-Founder and CEO. She has worked in marketing, design and business development in NY and run and directed several successful companies. Over the last 7 years she has invested her efforts in making real, lasting change with some of the world’s top scientific and philanthropic institutions globally.\n' +
                        '\n' +
                        'She has extensive experience in helping clients build internationally renowned projects from the ground up, using design to present complex concepts in dynamic and digestible formats',
                    card: <StephCard/>
                },
                tuli: {
                    worker: 'tuli',
                    name: 'TULI',
                    title: 'FOUNDER',
                    description: 'Carly is Pact Media\'s Co-Founder and CEO. She has worked in marketing, design and business development in NY and run and directed several successful companies. Over the last 7 years she has invested her efforts in making real, lasting change with some of the world’s top scientific and philanthropic institutions globally.\n' +
                        '\n' +
                        'She has extensive experience in helping clients build internationally renowned projects from the ground up, using design to present complex concepts in dynamic and digestible formats',
                    card: <TuliCard/>
                },
                alex: {
                    worker: 'alex',
                    name: 'ALEX',
                    title: 'FOUNDER',
                    description: 'Carly is Pact Media\'s Co-Founder and CEO. She has worked in marketing, design and business development in NY and run and directed several successful companies. Over the last 7 years she has invested her efforts in making real, lasting change with some of the world’s top scientific and philanthropic institutions globally.\n' +
                        '\n' +
                        'She has extensive experience in helping clients build internationally renowned projects from the ground up, using design to present complex concepts in dynamic and digestible formats',
                    card: <AlexCard/>
                },
            }

        return (
            <div className={styles.popup} style={{maxWidth: isOpen ? '100%' : '0'}}>
                {activeWorker &&
                <div className={styles.workerWrapper} style={{opacity: isOpen ? '1' : '0'}}>
                    <div className={styles.cardWrapper}>{workers[activeWorker].card}</div>
                    <div className={styles.divider}/>
                    <div className={styles.workerDescription}>
                        <div className={styles.name}>{workers[activeWorker].name}</div>
                        <h2>{workers[activeWorker].title}</h2>
                        <p>{workers[activeWorker].description}</p>
                    </div>
                </div>
                }
                <button className={styles.buttonX} onClick={() => setIsOpen(false)}>x</button>
            </div>
        );
    }
;

export default WorkerPopup;