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

import irrigationPhotoGrid from "../assets/projects/irrigation-grid.png";
import irrigationPhotoMain from "../assets/projects/irrigation-main.png";
import irrigationPhotoView from "../assets/projects/irrigation-view.png";
import irrigationPhoto1 from "../assets/projects/irrigation-1.png";
import irrigationPhoto2 from "../assets/projects/irrigation-2.png";

import portfolioPhotoGrid from "../assets/projects/portfolio-grid.png";
import portfolioPhotoMain from "../assets/projects/portfolio-main.png";
import portfolioPhotoView from "../assets/projects/portfolio-view.png";
import portfolioPhoto1 from "../assets/projects/portfolio-1.png";
import portfolioPhoto2 from "../assets/projects/portfolio-2.png";

import dahlakPhotoGrid from "../assets/projects/dahlak-grid.png";
import dahlakPhotoMain from "../assets/projects/dahlak-main.png";
import dahlakPhotoView from "../assets/projects/dahlak-view.png";
import dahlakPhoto1 from "../assets/projects/dahlak-1.png";
import dahlakPhoto2 from "../assets/projects/dahlak-2.png";

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
            text1: ['Palladom Solutions offered The PlayGround Group— an event planning organization— a way to tell their story of providing new and exciting ways for people to socialize after COVID-19 restrictions lifted in Vancouver, BC, Canada.', 'Their mission was to bring people together in a way that nurtured a collective understanding of past shared isolation: To offer a way to connect, celebrate, and move forward together in various outdoor locations in Greater Vancouver.'],
            photoView: playgroundPhotoView,
            text2: 'We worked with The PlayGround Group to create a brand identity that underscored the founder’s values and presence— ones based in community care and connection.',
            photo1: playgroundPhoto1,
            photo2: playgroundPhoto2,
            text3: 'This project was led by the Design and Illustration team at Palladom and worked in collaboration with The PlayGround Group. The Playground Group’s events have had over 600 individuals attend, and their audience continues to grow through the implementation of our effective marketing and branding strategy.'
        },
        dahlak: {
            photoGrid: dahlakPhotoGrid,
            title: ['DAHLAK\n', 'RESTAURANT'],
            photoMain: dahlakPhotoMain,
            text1: 'We worked with Dahlak Restaurant LTD. with a goal of increasing their digital outreach.',
            photoView: dahlakPhotoView,
            text2: 'Implementing Palladom’s new digital infrastructure allowed Dahlak Restaurant LTD to brand itself as a modern East African restaurant and maintain direct communication [How does it maintain direct communication?] with their clients while fostering their brand identity.',
            photo1: dahlakPhoto1,
            photo2: dahlakPhoto2,
            text3: "Palladom successfully increased Dahlak Restaurant’s website views by 65% monthly and improved their rating on Google from a 4.2 to a 4.6 in 4 months."
        },
        irrigation: {
            photoGrid: irrigationPhotoGrid,
            title: ['SMART ', 'IRRIGATION\n', 'SYSTEM'],
            photoMain: irrigationPhotoMain,
            text1: 'We worked with the customer in order to create an interface illustrating the potential of automated irrigation systems.',
            photoView: irrigationPhotoView,
            text2: 'This system is a tool for controlling your irrigation system remotely. With "Smart Irrigation System" you can start or stop the irrigation, set automated irrigation times, and see the watering status at all times, from anywhere.',
            photo1: irrigationPhoto1,
            photo2: irrigationPhoto2,
            text3: 'Palladom’s ability to integrate an assortment of technologies into a user-friendly platform made the Smart Irrigation System an open-source system available for plants everywhere.'
        },
        portfolio: {
            photoGrid: portfolioPhotoGrid,
            title: ['DESIGNER ', 'PORTFOLIO'],
            photoMain: portfolioPhotoMain,
            text1: 'We collaborated with the designer to create a practical portfolio to showcase his work.',
            photoView: portfolioPhotoView,
            text2: "We designed a layout that is clean and simple in order to gather as much of the viewer attention on the designer's work itself.",
            photo1: portfolioPhoto1,
            photo2: portfolioPhoto2,
            text3: "This fully responsive website showcases the designer's talent while having a convenient interface that allows him to update and add his content whenever he would like to do so."
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