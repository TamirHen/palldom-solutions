import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import RingIcon from '../assets/ring.svg';
import TextCycleIcon from '../assets/text-cycle.svg';
import HalfRingIcon from '../assets/half-ring.svg';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Palldom Solutions</title>
                <meta name="description" content="Making your dream website for you"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <TextCycleIcon className={styles.textCycle}/>
                <div className={styles.ringWrapper}>
                    <RingIcon className={styles.ring}/>
                    <p>Palldom is a full service design agency<br/>that drives positive change around social,<br/>economic,
                        and environmental issues.<br/>Through creative communication and<br/>strategy, we build
                        experiences that inspire<br/>dialogue and action.</p>
                </div>
                <section className={styles.sectionHome}>
                    <div className={styles.linksWrapper}>
                        <button>ABOUT</button>
                        <button>CONTACT</button>
                        <button>OUR WORK</button>
                    </div>
                    <h2>PALLDOM</h2>
                    <h3>SOLUTIONS</h3>


                    <h1>
                        WE BUILD AND<br/>
                        DESIGN FOR <br/>
                        THE FUTURE
                    </h1>
                </section>

                <section className={styles.sectionAbout}>
                    <HalfRingIcon className={styles.halfRingIcon}/>
                    <div className={styles.textWrapper}>
                        <h1>WHAT WE DO</h1>
                        <p>
                            We help people, business, organizations and institutes speak directly to their audience with
                            carefully crafted communication. Through close collaboration with our clients we tell
                            stories through the most effective means of communication.
                        </p>
                        <ul>
                            <li>
                                <h2>Storytelling</h2>
                                <p>We help non-profits, governmental agencies, ethical businesses and
                                    research institutes speak directly to their audience with carefully crafted</p>
                            </li>
                            <li>Branding</li>
                            <li>Web design & development</li>
                            <li>Search engine optimization</li>
                            <li>Illustrations & animations</li>
                            <li>Marketing strategies</li>
                            <li>Data based solutions</li>
                            <li>E-commerce</li>
                            <li>Copy-writing</li>
                        </ul>
                    </div>

                </section>
            </main>

            <footer className={styles.footer}>
            </footer>
        </div>
    )
}
