import React, { Component } from 'react';

class InventoryForm extends Component {
    state = {
        name: '',
        staple: false,
        quantity: 'Med',
        location: 'Freezer',
        // user: this.props.user
    }

    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleAddInventory({...this.state})
        this.setState({ 
            name: '',
            staple: false,
            quantity: 'Med',
            location: 'Freezer'
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
            </form>
            </div>
        )
    }
}

export default InventoryForm;

