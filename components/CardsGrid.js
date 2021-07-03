import React from 'react';
import styles from '../styles/CardsGrid.module.scss'


const CardsGrid = ({children}) => {

    return (
        <div className={styles.cardsGrid} >
            {children}
        </div>
    );
};

export default CardsGrid;