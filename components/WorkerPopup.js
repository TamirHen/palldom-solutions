import React, {useState} from 'react';
import styles from "../styles/WorkerPopup.module.scss";
import EladCard from "../assets/elad-card.svg";
import TamirCard from "../assets/tamir-card.svg";
import StephCard from "../assets/steph-card.svg";

const WorkerPopup = ({isOpen, setIsOpen, activeWorker, setActiveWorker}) => {

        const workers =
            {
                elad: {
                    name: 'ELAD YOSEF',
                    title: 'FOUNDER',
                    description: 'Carly is Pact Media\'s Co-Founder and CEO. She has worked in marketing, design and business development in NY and run and directed several successful companies. Over the last 7 years she has invested her efforts in making real, lasting change with some of the world’s top scientific and philanthropic institutions globally.\n' +
                        '\n' +
                        'She has extensive experience in helping clients build internationally renowned projects from the ground up, using design to present complex concepts in dynamic and digestible formats',
                    card: <EladCard style={{width: '100%'}}/>
                },
                tamir: {
                    worker: 'tamir',
                    name: 'TAMIR HEN',
                    title: 'FOUNDER',
                    description: 'Carly is Pact Media\'s Co-Founder and CEO. She has worked in marketing, design and business development in NY and run and directed several successful companies. Over the last 7 years she has invested her efforts in making real, lasting change with some of the world’s top scientific and philanthropic institutions globally.\n' +
                        '\n' +
                        'She has extensive experience in helping clients build internationally renowned projects from the ground up, using design to present complex concepts in dynamic and digestible formats',
                    card: <TamirCard style={{width: '100%'}}/>
                },
                steph: {
                    worker: 'steph',
                    name: 'STEPH',
                    title: 'FOUNDER',
                    description: 'Carly is Pact Media\'s Co-Founder and CEO. She has worked in marketing, design and business development in NY and run and directed several successful companies. Over the last 7 years she has invested her efforts in making real, lasting change with some of the world’s top scientific and philanthropic institutions globally.\n' +
                        '\n' +
                        'She has extensive experience in helping clients build internationally renowned projects from the ground up, using design to present complex concepts in dynamic and digestible formats',
                    card: <StephCard style={{width: '100%'}}/>
                },
            }

        return (
            <>
                {activeWorker &&
                <div className={styles.popup} style={{maxWidth: isOpen ? '100%' : '0'}}>
                    <div className={styles.workerWrapper} style={{opacity: isOpen ? '100%' : '0%'}}>
                        <div className={styles.cardWrapper}>{workers[activeWorker].card}</div>
                        <div className={styles.divider}/>
                        <div className={styles.workerDescription}>
                            <h1>{workers[activeWorker].name}</h1>
                            <h2>{workers[activeWorker].title}</h2>
                            <p>{workers[activeWorker].description}</p>
                        </div>
                    </div>
                    <button className={styles.buttonX} onClick={() => setIsOpen(false)}>x</button>
                </div>
                }
            </>
        );
    }
;

export default WorkerPopup;