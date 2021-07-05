import {useState} from "react";
import styles from '../styles/AboutList.module.scss';
import Fade from 'react-reveal/Fade';

export default function AboutList() {
    const [aboutList, setAboutList] = useState([
        {
            header: 'Storytelling',
            text: 'You already know who you are and what value you bring to the table. But how do your clients learn about you? Our team can apply an effective communication strategy to make sure that all of your future clients understand and believe in your story too.',
            isOpen: false
        },
        {
            header: 'Branding',
            text: 'An object (service? product?) is just an object, but with the right skills, strategy, and plan, we can develop a deeper connection to between your (service, product) and your clients.',
            isOpen: false
        },
        {
            header: 'Web Design & Development',
            text: 'Your website is like a book. An enticing cover, a well organized table of contents, and an opening hook, can go a long way. We can provide you with a website that is interactive and memorable.',
            isOpen: false
        },
        {
            header: 'Search Engine Optimization',
            text: 'With millions of search options, we can make it much easier for your clients to find the needle in the haystack. Using search engine optimization, our team can lead your clients to your site in no time.',
            isOpen: false
        },
        {
            header: 'Illustrations & Animations',
            text: 'Words set the stage, but our illustrations, animations, and an assortment of visual tools will keep your audience visually engaged.',
            isOpen: false
        },
        {
            header: 'Marketing Strategies',
            text: 'For every pot, there is a lid— just like how every service has its targeted audience. We are here to help you understand the best audience for your product and the most effective way to— not only reach that market, but catch and hold their attention.',
            isOpen: false
        },
        {
            header: 'Database Solutions',
            text: 'Does your website need to manage stocks, record and deliver orders, or offer custom chatbots? For every special need, we have a customized web solution for you.',
            isOpen: false
        },
        {
            header: 'E-Commerce',
            text: 'Put yourself on the map. We can help you expand your local networks and find you new clients by creating an online hub for your business.',
            isOpen: false
        }
    ]);

    const onSkillClickHandler = (index) => {
        const skill = {...aboutList[index]}
        aboutList.forEach(skl => {
            skl.isOpen = false;
        })
        // If skill already open close it
        if (skill.isOpen) {
            setAboutList([...aboutList]);
        } else {
            skill.isOpen = !skill.isOpen;
            aboutList[index] = skill;
            setAboutList([...aboutList]);
        }
    }

    return (
        <ul className={styles.aboutList}>
            {
                aboutList.map((skill, index) => (
                    <li key={index + '-' + skill.header}>
                        <Fade bottom>
                            <button onClick={() => onSkillClickHandler(index)}><h2>{skill.header}</h2></button>
                        </Fade>
                        <div className={skill.isOpen ? styles.showText : ''}>{skill.text}</div>
                    </li>
                ))
            }
        </ul>
    )
}
