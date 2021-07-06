import React from 'react';
import styles from '../styles/CardsGrid.module.scss'
import HorizontalScroll from "react-scroll-horizontal";
import Fade from "react-reveal/Fade";


const CardsGrid = ({children}) => {
        return (
            <div className={styles.cardsGrid}>
                <HorizontalScroll
                    reverseScroll
                    className={styles.horizontalScroll}
                >
                    <Fade right big>
                        {children}
                    </Fade>
                </HorizontalScroll>
            </div>
        );
    }
;

export default CardsGrid;
