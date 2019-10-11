import React, {Component} from 'react';
import styles from './InventoryEditForm.module.css';

class InventoryEditForm extends Component {
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
          [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.removeEditForm();
        this.props.handleUpdate(this.props._id, this.state)
    }

    render() {
        return (
            <div className={styles.InventoryEditForm}>
                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <div className="col-sm-12">
                        <label>Location:
                            <select onChange={this.handleChange} name="location" value={this.state.location}>
                                <option value="Freezer">Freezer</option>
                                <option value="Fridge">Fridge</option>
                                <option value="Pantry">Pantry</option>
                            </select>
                        </label>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <label onChange={this.handleChange}>Staple?
                            <select onChange={this.handleChange} name="staple" value={this.state.staple}>
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>
                            </select>
                        </label> 
                    </div> 
                </div>
                <div className="form-group"> 
                    <div className="col-sm-12">
                        <label>Quantity:
                            <select onChange={this.handleChange} name="quantity" value={this.state.quantity}>
                                <option value="Low">Low</option>
                                <option value="Med">Medium</option>
                                <option value="High">High</option>
                            </select>
                        </label>  
                    </div>
                </div>
                <button className="btn btn-default">Update Item</button>
                </form>
            </div>
        )
    }
}

export default InventoryEditForm;