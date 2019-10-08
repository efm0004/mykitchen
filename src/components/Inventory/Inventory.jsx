import React from 'react';

const Inventory = ({ name, staple, quantity, location, handleDelete, id}) => {
        return (
            <li key={id}>
                <button onClick={() => handleDelete(id)}>Delete</button>
                <p>Item Name:  {name}</p> 
                <p>Staple?  {staple}</p> 
                <p>Qty: {quantity}</p>
                <p>Donde?  {location}</p> 
            </li>
        )
}

export default Inventory;