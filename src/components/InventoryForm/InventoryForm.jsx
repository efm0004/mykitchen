import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import KitchenPage from '../../pages/KitchenPage/KitchenPage';

class InventoryPage extends Component {
    state = {
        name: '',
        staple: false,
        quantity: 'Med',
        location: 'Freezer'
    }

    componentDidMount = () => {
        getAll().then(results => {
            console.log(results)
            this.setState({
                inventories: results
            })
        })
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
            console.log(results)
            this.setState({
                inventories: [...this.state.inventories, results]
            })
        })

    }

    render() {
        // const currentInventory = this.state.inventory.map((inventories) => {
        //     return (inventories.name);
        // })
        return (
            <div>
            <h1>Inventory</h1>
            {/* <div>
                {this.state.inventories.map((inventory) =>
                    <Link 
                        to={'/'}
                        key={inventory.name}
                    />
                    {inventory.name}
                )}
            </div> */}
            {/* <KitchenPage /> */}
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

export default InventoryPage;

//these function assist in calling and posting data from the express API
async function getAll() {
    const url = "http://localhost:3001/api/inventory"
    const initialFetch = await fetch(url)
    const fetchJSON = await initialFetch.json()
    return await fetchJSON
}

async function handleAdd(url, options){
    const initialFetch = await fetch(url, options)
    const fetchJSON = await initialFetch.json()
    return await fetchJSON
}