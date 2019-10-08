import React, { Component } from 'react';
import styles from './KitchenPage.module.css';
import Freezer from '../../components/Freezer/Freezer';
import Fridge from '../../components/Fridge/Fridge';
import Pantry from '../../components/Pantry/Pantry';
import ShoppingBag from '../../components/ShoppingBag/ShoppingBag';
import Dishwasher from '../../components/Dishwasher/Dishwasher';
import CounterTop from '../../components/CounterTop/CounterTop';
import Recipes from '../../components/Recipes/Recipes';
import MenuBoard from '../../components/MenuBoard/MenuBoard';

class KitchenPage extends Component {
    handleClick = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div className={styles.KitchenPage}>
                <div className={styles.ShoppingBag}>
                    <ShoppingBag />
                </div>
                <div className={styles.Refridgerator}>
                    <Freezer />
                    <Fridge />
                </div>
                <div className={styles.Pantry}>
                    <Pantry />
                </div>
                <div className={styles.Counter}>
                    <MenuBoard />
                    <Recipes />
                    <CounterTop />
                    <Dishwasher />
                </div>
            </div>
        )
    }
}

export default KitchenPage;