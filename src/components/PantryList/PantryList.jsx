import React, {Component} from 'react';
import InventoryEditForm from '../InventoryEditForm/InventoryEditForm';

class PantryList extends Component {
    state = {
        isEditing: false,
        edit: ''
    }

    handleShowEdit = (id) => {
        console.log(id)
        this.setState({
            isEditing: !this.state.isEditing,
            edit: id
        })
        console.log(this.state.edit)
    }

    removeEditForm = () => {
        this.setState({
            isEditing: false
        })
    }

    render() {
        return (
            <div>
                <p key={this.props.id}>
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
                        handleUpdate={this.props.handleUpdate}
                    />
                : null}
            </p>
            </div>
        )
    }
}

export default PantryList;