import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import MKFreezer from './MKFreezer.jpg';
import styles from "./Freezer.module.css";

class Freezer extends Component {
    render() {
        return (
            <div>
                    <a href="/freezer"><img src={MKFreezer} className={styles.Freezer}/></a>
            </div>

        );
    }

}


export default Freezer;