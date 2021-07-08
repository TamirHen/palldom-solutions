import React, {useRef} from 'react';
import styles from '../styles/CardsGrid.module.scss'
import HorizontalScroll from "react-scroll-horizontal";
import Fade from "react-reveal/Fade";


const CardsGrid = ({children}) => {
        const cardsGrid = useRef();

        // const onWheel = e => {
        //     e.preventDefault();
        //     const container = cardsGrid.current;
        //     const containerScrollPosition = cardsGrid.current.scrollLeft;
        //
        //     container.scrollTo({
        //         top: 0,
        //         left: containerScrollPosition + e.deltaY,
        //         behaviour: "smooth"
        //     });
        // };

        return (
            <div className={styles.cardsGrid} ref={cardsGrid}>
                {/*<HorizontalScroll*/}
                {/*    reverseScroll*/}
                {/*    className={styles.horizontalScroll}*/}
                {/*>*/}
                {children}
                {/*</HorizontalScroll>*/}
            </div>
        );
    }
;

export default CardsGrid;


// import React from 'react';
// import styles from '../styles/CardsGrid.module.scss'
// import ScrollMenu from 'react-horizontal-scrolling-menu';
// import Fade from "react-reveal/Fade";
//
//
// const CardsGrid = ({children}) => {
//         return (
//             <div className={styles.cardsGrid}>
//                 <ScrollMenu
//                     transition={2}
//                     wrapperStyle={{width: '100%'}}
//                     menuStyle={{width: '100%'}}
//                     data={children}
//                 />
//             </div>
//         );
//     }
// ;
//
// export default CardsGrid;
