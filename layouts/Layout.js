import React, {useRef, useState} from 'react';
import styles from "../styles/Layout.module.scss";
import Head from "next/head";
import Menus from "../components/Menus";
import Footer from "../components/Footer";
import playgroundPhotoMain from "../assets/projects/playground-main.png";
import playgroundPhotoView from "../assets/projects/playground-view.png";
import playgroundPhoto1 from "../assets/projects/playground-1.png";
import playgroundPhoto2 from "../assets/projects/playground-2.png";

const Layout = ({Component, pageProps}) => {
    const aboutSection = useRef();
    const ourWorkSection = useRef();
    const contactSection = useRef();
    const [isWorkerOpen, setIsWorkerOpen] = useState(false);
    const [activeWorker, setActiveWorker] = useState();

    const projects = {
        playground: {
            title: ['PlayGround', 'Productions', 'Vancouver,BC'],
            photoMain: playgroundPhotoMain,
            text1: 'Palladom solutions helped The PlayGround group tell the story of a new way to socialize in post covid restrictions Vancouver',
            photoView: playgroundPhotoView,
            text2: 'Global Shark Movement Project (GSMP) tracks sharks using sophisticated, miniature electronic tags. The data from these tags are used to inform policy relating to shark conservation and the sustainable management of populations.\n' +
                '\n' +
                'We worked with the GSMP to create a brand identity and web presence to show the science and community behind GSMP.',
            photo1: playgroundPhoto1,
            photo2: playgroundPhoto2,
            text3: 'This project is led by the University of Southampton , the Marine Biological Association and the Research Centre in Biodiversity and Genetic Resources. The GSMP Database holds over 2,000 individual satellite tracks of large pelagic sharks from 23 species spanning over 280,000 track days.'
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