import React from 'react';
import styles from "../styles/Shade.module.scss";

const Shade = ({children, disableOnHover}) => {
    return (
        <div className={styles.shadeWrapper}>
            <div className={disableOnHover ? styles.shadeWithHover : styles.shade}/>
            {children}
        </div>
    );
};

export default Shade;