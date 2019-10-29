import React, { Component } from 'react';
import  MKShoppingBag from './MKShoppingBag.jpg';

class ShoppingBag extends Component {
    render() {
        return (
            <div>
                <a href="/shoppingbag"><img src={MKShoppingBag}/></a>
            </div>
        )
    }
}



export default ShoppingBag;