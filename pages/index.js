import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import RingIcon from '../assets/ring.svg';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Palldom Solutions</title>
                <meta name="description" content="Making your dream website for you"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <section className={styles.sectionAbout}>
                    <RingIcon className={styles.ring}/>
                    <h2>PALLDOM</h2>
                    <h3>SOLUTIONS</h3>

                    <h1>WE BUILD AND<br/>
                    DESIGN FOR <br/>
                    THE FUTURE</h1>
                </section>
            </main>

            <footer className={styles.footer}>
            </footer>
        </div>
    )
}
