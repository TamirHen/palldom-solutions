import React from 'react';
import styles from "../styles/Shade.module.scss";

const Shade = ({children}) => {
    return (
        <div className={styles.shadeWrapper}>
            <div className={styles.shade}/>
            {children}
        </div>
    );
};

export default Shade;