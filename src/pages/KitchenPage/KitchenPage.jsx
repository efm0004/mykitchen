import React, { Component } from 'react';
import './KitchenPage.css';
import Freezer from '../../components/Freezer/Freezer';
import Fridge from '../../components/Fridge/Fridge';
import Pantry from '../../components/Pantry/Pantry';
import ShoppingBag from '../../components/ShoppingBag/ShoppingBag';
import Dishwasher from '../../components/Dishwasher/Dishwasher';
import CounterTop from '../../components/CounterTop/CounterTop';
import Recipes from '../../components/Recipes/Recipes';
import MenuBoard from '../../components/MenuBoard/MenuBoard';

const KitchenPage = () => {
    return (
        <div className="KitchenPage">
            <div className="Bag">
                <ShoppingBag />
            </div>
            <div className="Refridgerator">
                <Freezer />
                <Fridge />
            </div>
            <div className="Pantry">
                <Pantry />
            </div>
            <div className="Counter">
                <MenuBoard />
                <Recipes />
                <CounterTop />
                <Dishwasher />
            </div>
        </div>
    )
}

export default KitchenPage;