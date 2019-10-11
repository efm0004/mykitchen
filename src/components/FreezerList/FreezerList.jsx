import React, {Component} from 'react';
import InventoryEditForm from '../InventoryEditForm/InventoryEditForm';

class FreezerList extends Component {
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
        console.log(this.props)
        return (
            <div>
                <div key={this.props.id}>
                <button className="btn btn-default" onClick={() => this.props.handleDelete(this.props.id, this.props._id)}>Delete</button>
                <p>Item Name:  {this.props.name}</p> 
                <p>Staple?  {this.props.staple}</p> 
                <p>Qty: {this.props.quantity}</p>
                <p>
                    Donde?  {this.props.location}
                </p> 
                <button 
                    className="btn btn-default"
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
            </div>
            </div>
        )
    }
}

export default FreezerList;