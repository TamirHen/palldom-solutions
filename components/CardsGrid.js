// import React from 'react';
// import styles from '../styles/CardsGrid.module.scss'
// import HorizontalScroll from "react-scroll-horizontal";
// import Fade from "react-reveal/Fade";
//
//
// const CardsGrid = ({children}) => {
//         return (
//             <div className={styles.cardsGrid}>
//                 <HorizontalScroll
//                     reverseScroll
//                     className={styles.horizontalScroll}
//                 >
//                     <Fade right big>
//                         {children}
//                     </Fade>
//                 </HorizontalScroll>
//             </div>
//         );
//     }
// ;
//
// export default CardsGrid;
import React from 'react';
import styles from '../styles/CardsGrid.module.scss'
import ScrollMenu from 'react-horizontal-scrolling-menu';
import Fade from "react-reveal/Fade";


const CardsGrid = ({children}) => {
        return (
            <div className={styles.cardsGrid}>
                <ScrollMenu
                    transition={2}
                    wrapperStyle={{width: '100%'}}
                    menuStyle={{width: '100%'}}
                    data={children}
                />
            </div>
        );
    }
;

export default CardsGrid;
