import React, { Component } from 'react';
import  MKDishwasher from './MKDishwasher.jpg';
import styles from './Dishwasher.module.css';

class Dishwasher extends Component {
    render() {
        return (
            <div className={styles.Dishwasher}>
                <a href="/comingsoon"><img src={MKDishwasher}/></a>
            </div>

        )
    }
}


export default Dishwasher;