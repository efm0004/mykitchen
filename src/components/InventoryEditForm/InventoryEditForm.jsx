import React, {Component} from 'react';

class InventoryEditForm extends Component {
    //insert state & componentDidMount
    state = {
        location: '',
        staple: '',
        quantity: ''
    }

    componentDidMount = () => {
        this.setState({
            location: this.props.location,
            staple: this.props.staple,
            quantity: this.props.quantity
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
        this.props.handleUpdate(this.props._id, this.state)
    }

    render() {
        return (
            <div>
                I am an Edit Form!
                <form onSubmit={this.handleSubmit}>
                {/* <input onChange={this.handleChange} type="name" placeholder="Item Name" value={this.state.name} name="name" /> */}
                <label>Location:
                    <select onChange={this.handleChange} name="location" value={this.state.location}>
                        <option value="Freezer">Freezer</option>
                        <option value="Fridge">Fridge</option>
                        <option value="Pantry">Pantry</option>
                    </select>
                </label>
                <label onChange={this.handleChange}>Staple?
                    <input type="checkbox" name="staple" />
                </label>  
                <label>Quantity:
                    <select onChange={this.handleChange} name="quantity" value={this.state.quantity}>
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