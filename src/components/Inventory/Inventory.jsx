import React from 'react';

const Inventory = ({ name, staple, quantity, location, id}) => {
        return (
            <li key={id}>
                <button>X</button>
                <p>Item Name: {name}</p> 
                <p>Staple? {staple}</p> 
                <p>Qty: {quantity}</p>
                <p>Donde?{location}</p> 
            </li>
        )
}

export default Inventory;