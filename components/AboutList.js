import {useState} from "react";
import styles from '../styles/AboutList.module.scss';

export default function AboutList() {
    const [aboutList, setAboutList] = useState([
        {
            header: 'Storytelling',
            text: 'We help non-profits, governmental agencies, ethical businesses and research institutes speak directly to their audience with carefully crafted',
            isOpen: false
        },
        {
            header: 'Branding',
            text: 'We help non-profits, governmental agencies, ethical businesses and research institutes speak directly to their audience with carefully crafted',
            isOpen: false
        },
        {
            header: 'Web design & development',
            text: 'We help non-profits, governmental agencies, ethical businesses and research institutes speak directly to their audience with carefully crafted',
            isOpen: false
        },
        {
            header: 'Search engine optimization',
            text: 'We help non-profits, governmental agencies, ethical businesses and research institutes speak directly to their audience with carefully crafted',
            isOpen: false
        },
        {
            header: 'Illustrations & animations',
            text: 'We help non-profits, governmental agencies, ethical businesses and research institutes speak directly to their audience with carefully crafted',
            isOpen: false
        },
        {
            header: 'Marketing strategies',
            text: 'We help non-profits, governmental agencies, ethical businesses and research institutes speak directly to their audience with carefully crafted',
            isOpen: false
        },
        {
            header: 'Data based solutions',
            text: 'We help non-profits, governmental agencies, ethical businesses and research institutes speak directly to their audience with carefully crafted',
            isOpen: false
        },
        {
            header: 'E-commerce',
            text: 'We help non-profits, governmental agencies, ethical businesses and research institutes speak directly to their audience with carefully crafted',
            isOpen: false
        },
        {
            header: 'Copy-writing',
            text: 'We help non-profits, governmental agencies, ethical businesses and research institutes speak directly to their audience with carefully crafted',
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
        }
        skill.isOpen = !skill.isOpen;
        aboutList[index] = skill;
        setAboutList([...aboutList]);
    }

    return (
        <ul className={styles.aboutList}>
            {
                aboutList.map((skill, index) => (
                    <li key={index + '-' + skill.header} style={skill.isOpen ? {border: 'none'} : {}}>
                        <button onClick={() => onSkillClickHandler(index)}><h2>{skill.header}</h2></button>
                        <div className={skill.isOpen ? styles.showText : ''}>{skill.text}</div>
                    </li>
                ))
            }
            <li>
                <button><h2>Storytelling</h2></button>
                <div>

                </div>
            </li>
        </ul>
    )
}
