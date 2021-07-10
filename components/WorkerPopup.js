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
                    description: ['Elad is Palladom Solutions’s founder and designer. He has worked in design marketing and web development in Canada, Israel, and Switzerland.\n',
                        'Over the last 5 years he has invested his efforts in making real, lasting changes with businesses from diverse fields by bringing their products and services vast exposure. Elad uses his skills in UX/UI Design to demonstrate complex concepts in dynamic and digestible formats which provides customized strategies for each business’s specialized needs.\n',
                        'His passion is in helping clients build and maintain projects from the ground up.'],
                    card: <EladCard/>
                },
                tamir: {
                    worker: 'tamir',
                    name: 'TAMIR HEN',
                    title: 'FOUNDER',
                    description: 'Tamir is Palladom Solutions’s founder and lead developer. He feels most at home while wrestling with any sort of technological problem, from coding a simple landing page to creating advanced, customized data-base solutions. Tamir’s back-end development provides high-level technological products, while integrating flexible options for clients to pivot and build on top of.',
                    card: <TamirCard/>
                },
                steph: {
                    worker: 'steph',
                    name: 'STEPH',
                    title: 'HEAD OF COMMUNICATION & CONTENT',
                    description: 'Steph is Palladom Solutions’s head communications and content writer. As a freelance artist and writer, she has spent the last 6 years working with various businesses to develop their brand identities through visual and written storytelling. Using her background in art history and critical theory, her strengths lie in collaborating with businesses to understand, transform, and utilize the hidden meanings behind their brand representation. Steph is enlivened by knowledge, driven by creativity, and passionate about working closely with clients to get to the heart of why they began their business journeys.',
                    card: <StephCard/>
                },
                alex: {
                    worker: 'alex',
                    name: 'ALEX',
                    title: 'Illustrator',
                    description: 'Alexander is Palladom Solutions’s illustrator. With over 6 years of experience collaborating and working on variety of projects, Alexander became dedicated to ensuring our clients always get the best service from Palladom Solutions. Ivan’s high expectations and attention to detail allows him to bring clients a high-end experience that merge innovation with design and technology, offering them a powerful digital presence.',
                    card: <AlexCard/>
                },
                tuli: {
                    worker: 'tuli',
                    name: 'TALIA',
                    title: 'DESIGNER',
                    description: '',
                    card: <TuliCard/>
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
    };

export default WorkerPopup;