import React, {Component} from 'react';
import InventoryEditForm from '../InventoryEditForm/InventoryEditForm';

class Inventory extends Component {
    state = {
        isEditing: false,
        edit: ''
    }

    handleShowEdit = (id) => {
        console.log(this.state.isEditing)
        console.log(id)
        this.setState({
            isEditing: !this.state.isEditing,
            edit: id
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
                onClick={() => this.handleShowEdit(this.props.id)}
                >Edit</button>
                {this.state.isEditing === true ? 
                    <InventoryEditForm 
                        {...this.props}
                        {...this.state}
                    />
                : null}
            </li>
            </div>
            // <Edit 
            //  {...this.props}
            // />
        )
    }
}

export default Inventory;