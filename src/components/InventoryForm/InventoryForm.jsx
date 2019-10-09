import React, { Component } from 'react';

class InventoryForm extends Component {
    state = {
        name: '',
        staple: false,
        quantity: 'Med',
        location: 'Freezer',
    }

    handleChange = (e) => {
        this.setState({
          // Using ES2015 Computed Property Names
          [e.target.name]: e.target.value
        });
    }

    //keep handleSubmit for preventDefault
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleAddInventory({...this.state})
        this.setState({ 
            name: '',
            staple: false,
            quantity: 'Med',
            location: 'Freezer'
        })
        console.log({...this.state})
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

