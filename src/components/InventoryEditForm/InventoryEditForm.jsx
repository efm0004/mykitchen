import React, {Component} from 'react';

class InventoryEditForm extends Component {

    handleChange = (e) => {
        this.setState({
          // Using ES2015 Computed Property Names
          [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <div>
                I am an Edit Form!
                <form onSubmit={this.handleUpdate}>
                {/* <input onChange={this.handleChange} type="name" placeholder="Item Name" value={this.state.name} name="name" /> */}
                <label>Location:
                    <select onChange={this.handleChange} name="location">
                        <option value="Freezer">Freezer</option>
                        <option value="Fridge">Fridge</option>
                        <option value="Pantry">Pantry</option>
                    </select>
                </label>
                <label>Staple?
                    <input type="checkbox" placeholder="False" name="staple" />
                </label>  
                <label>Quantity:
                    <select onChange={this.handleChange} name="quantity">
                        <option value="Low">Low</option>
                        <option value="Med">Medium</option>
                        <option value="High">High</option>
                    </select>
                </label>  
                <button >Update Item</button>
                </form>
            </div>
        )
    }
}

export default InventoryEditForm;