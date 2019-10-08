import React from 'react';
import MKMenuBoard from './MKMenuBoard.jpg';
import styles from './MenuBoard.module.css';

const MenuBoard = () => (
    <div className={styles.MenuBoardImage}>
            <a href="/comingsoon"><img src={MKMenuBoard}/></a>
    </div>
)


export default MenuBoard;