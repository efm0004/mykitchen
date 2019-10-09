import React, { Component } from 'react';

class InventoryForm extends Component {
    state = {
        name: '',
        staple: false,
        quantity: 'Med',
        location: 'Freezer',
        inventories: []
    }

    handleChange = (e) => {
        this.setState({
          // Using ES2015 Computed Property Names
          [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //where I need to have a fetch to hit Express route 
        //to create new item
        const url = "http://localhost:3001/api/inventory";
        const options = {
            method: 'POST',
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify({
                name: this.state.name, 
                staple: this.state.staple, 
                quantity: this.state.quantity, 
                location: this.state.location 
            })
        }
        handleAdd(url, options).then(results => {
            this.setState({
                inventories: [...this.state.inventories, results]
            })
        })

    }

    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} type="name" placeholder="Item Name" value={this.state.name} name="name" />
                <label>
                    <select onChange={this.handleChange} name="location">
                        <option value="Freezer">Freezer</option>
                        <option value="Fridge">Fridge</option>
                        <option value="Pantry">Pantry</option>
                    </select>
                </label>
                <button>Add Item</button>
                {/* <input type="staple" placeholder="False" name="staple" />
                <input type="quantity" placeholder="Med" name="quantity"/> */}
            </form>
            </div>
        )
    }
}

export default InventoryForm;

//these function assist in calling and posting data from the express API

async function handleAdd(url, options){
    const initialFetch = await fetch(url, options)
    const fetchJSON = await initialFetch.json();
    return await fetchJSON;
}