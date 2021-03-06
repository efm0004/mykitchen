import React, {Component} from 'react';
import InventoryEditForm from '../InventoryEditForm/InventoryEditForm';

class Inventory extends Component {
    state = {
        isEditing: false,
        edit: ''
    }

    handleShowEdit = (id) => {
        this.setState({
            isEditing: !this.state.isEditing,
            edit: id
        })
    }

    removeEditForm = () => {
        this.setState({
            isEditing: false
        })
    }
    
    render() {
        return (
            <div>
            <li key={this.props.id}>
                <button onClick={() => this.props.handleDelete(this.props.id, this.props._id)}>Delete</button>
                <p>Item Name:  {this.props.name}</p> 
                <p>Staple?  {this.props.staple}</p> 
                <p>Qty: {this.props.quantity}</p>
                <p>
                    Donde?  {this.props.location}
                </p> 
                <button 
                    value={this.props.id} 
                    onClick={() => this.handleShowEdit(this.props.id)}>
                    {this.state.isEditing === false ? "Edit" : "Cancel"}
                </button>
                {this.state.isEditing === true ? 
                    <InventoryEditForm 
                        {...this.props}
                        removeEditForm={this.removeEditForm}
                    />
                : null}
            </li>
            </div>
        )
    }
}

export default Inventory;