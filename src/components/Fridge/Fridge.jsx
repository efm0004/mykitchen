import React, { Component} from 'react';
import styles from './Fridge.module.css';
import MKFridge from './MKFridge.jpg';

class Fridge extends Component {
    render() {
        return (
            <div>
                <a href="/fridge"><img src={MKFridge} className={styles.Fridge}/></a>
            </div>
        )
    }
}

export default Fridge;