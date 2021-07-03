import React from 'react';
import styles from '../styles/CardsGrid.module.scss'
import HorizontalScroll from "react-scroll-horizontal";


const CardsGrid = ({children}) => {

    return (
        <div className={styles.cardsGrid}>
            <HorizontalScroll
                reverseScroll
                className={styles.horizontalScroll}
            >
                {children}
            </HorizontalScroll>
        </div>
    );
};

export default CardsGrid;