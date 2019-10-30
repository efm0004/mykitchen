import React, { Component } from 'react'; 

class ShoppingForm extends Component {
    state = {
        name: '',
        staple: 'No',
        quantity: 'Med', 
        location: 'Pantry'
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //this.props.handleAddShopping({...this.state})
        //this.setState({
            //name: '',
            //staple: 'No',
            //quantity: 'Med',
            //location: 'Pantry'
        //})
    }

    render() {
        return (
            <div>
                <hr/>
                <header className="header-footer">Add an Item</header>
                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input onChange={this.handleChange} type="name" placeholder="Item Name" value={this.state.name} name="name" />
                        </div>
                    </div>
                {/* <div className="form-group">
                    <div className="col-sm-12">
                        <label>
                            <select onChange={this.handleChange} name="location">
                                <option value="Freezer">Freezer</option>
                                <option value="Fridge">Fridge</option>
                                <option value="Pantry">Pantry</option>
                            </select>
                        </label>
                    </div>
                </div> */}
                <button className="btn btn-default">Add Item</button>
            </form>
            </div>
        )
    }
}

export default ShoppingForm;