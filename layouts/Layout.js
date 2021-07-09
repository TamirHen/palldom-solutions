import React, {useRef, useState} from 'react';
import styles from "../styles/Layout.module.scss";
import Head from "next/head";
import Menus from "../components/Menus";
import Footer from "../components/Footer";

import playgroundPhotoGrid from "../assets/projects/playground-grid.png";
import playgroundPhotoMain from "../assets/projects/playground-main.png";
import playgroundPhotoView from "../assets/projects/playground-view.png";
import playgroundPhoto1 from "../assets/projects/playground-1.png";
import playgroundPhoto2 from "../assets/projects/playground-2.png";

import irrigationPhotoGrid from "../assets/projects/irrigation-view.png";
import irrigationPhotoMain from "../assets/projects/irrigation-main.png";
import irrigationPhotoView from "../assets/projects/irrigation-view.png";
import irrigationPhoto1 from "../assets/projects/irrigation-1.png";
import irrigationPhoto2 from "../assets/projects/irrigation-2.png";

import portfolioPhotoGrid from "../assets/projects/portfolio-grid.png";
import portfolioPhotoMain from "../assets/projects/portfolio-main.png";
import portfolioPhotoView from "../assets/projects/portfolio-view.png";
import portfolioPhoto1 from "../assets/projects/portfolio-1.png";
import portfolioPhoto2 from "../assets/projects/portfolio-2.png";

const Layout = ({Component, pageProps}) => {
    const aboutSection = useRef();
    const ourWorkSection = useRef();
    const contactSection = useRef();
    const [isWorkerOpen, setIsWorkerOpen] = useState(false);
    const [activeWorker, setActiveWorker] = useState();

    const projects = {
        playground: {
            photoGrid: playgroundPhotoGrid,
            title: ['PLAYGROUND ', 'PRODUCTIONS\n', 'VANCOUVER'],
            photoMain: playgroundPhotoMain,
            text1: 'Palladom solutions helped The PlayGround group tell the story of a new way to socialize in post covid restrictions Vancouver',
            photoView: playgroundPhotoView,
            text2: 'Global Shark Movement Project (GSMP) tracks sharks using sophisticated, miniature electronic tags. The data from these tags are used to inform policy relating to shark conservation and the sustainable management of populations.\n' +
                '\n' +
                'We worked with the GSMP to create a brand identity and web presence to show the science and community behind GSMP.',
            photo1: playgroundPhoto1,
            photo2: playgroundPhoto2,
            text3: 'This project is led by the University of Southampton , the Marine Biological Association and the Research Centre in Biodiversity and Genetic Resources. The GSMP Database holds over 2,000 individual satellite tracks of large pelagic sharks from 23 species spanning over 280,000 track days.'
        },
        irrigation: {
            photoGrid: irrigationPhotoGrid,
            title: ['SMART ', 'IRRIGATION\n', 'SYSTEM'],
            photoMain: irrigationPhotoMain,
            text1: 'We worked with Tamir Hen in order to create an interface illustrating the potential of automatic irrigation systems',
            photoView: irrigationPhotoView,
            text2: 'This system is a tool for controlling your irrigation system remotely. With "Smart Irrigation System" you can start or stop the irrigation, set automation for your irrigation times, and see the watering status at all times, from anywhere.',
            photo1: irrigationPhoto1,
            photo2: irrigationPhoto2,
            text3: 'This project is an open source and available for plants every where, \n' +
                'That show cases our ability of integrating a assortment of technologies in too a user friendly platform'
        },
        portfolio: {
            photoGrid: portfolioPhotoGrid,
            title: ['TALIA ', 'BREUER\n', 'PORTFOLIO'],
            photoMain: portfolioPhotoMain,
            text1: 'We worked with portfolio in order to create a practical portfolio to show case her work',
            photoView: portfolioPhotoView,
            text2: 'This system layout is clean and simple in order to gather as much of the viewer attention on the work of Talia Breuer',
            photo1: portfolioPhoto1,
            photo2: portfolioPhoto2,
            text3: 'This project is a fully responsive website showcasing alias talent in addition on having a continuity interface that will let Talia add additional content when ever she would like to do so'
        }
    }

    const workerPressedHandler = (worker) => {
        setIsWorkerOpen(true);
        setActiveWorker(worker);
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Palladom Solutions</title>
                <meta name="description" content="Making your dream come true"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Menus activeWorker={activeWorker} setActiveWorker={setActiveWorker} isWorkerOpen={isWorkerOpen}
                   setIsWorkerOpen={setIsWorkerOpen} aboutSection={aboutSection} ourWorkSection={ourWorkSection}
                   contactSection={contactSection}/>
            <main>
                <Component {...pageProps} workerPressedHandler={workerPressedHandler} aboutSection={aboutSection}
                           ourWorkSection={ourWorkSection} contactSection={contactSection} projects={projects}/>
            </main>
            <Footer contactRef={contactSection}/>
        </div>
    );
};

export default Layout;