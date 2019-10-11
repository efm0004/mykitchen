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
        return (
            <tr key={this.props.id}>
                <td>
                <button className="btn btn-default" onClick={() => this.props.handleDelete(this.props.id, this.props._id)}>Delete</button>
                </td>
                <td>{this.props.name}</td> 
                &nbsp;&nbsp;
                <td> {this.props.staple}</td> 
                &nbsp;&nbsp;
                <td>{this.props.quantity}</td>
                &nbsp;&nbsp;
                <td>
                {this.props.location}
                </td> 
                &nbsp;&nbsp;
                <td>
                &nbsp;&nbsp;
                <button 
                    className="btn btn-default"
                    value={this.props.id} 
                    onClick={() => this.handleShowEdit(this.props.id)}>
                    {this.state.isEditing === false ? "Edit" : "Cancel"}
                </button>
                </td>
                
                {this.state.isEditing === true ? 
                    <InventoryEditForm 
                        {...this.props}
                        removeEditForm={this.removeEditForm}
                        handleUpdate={this.props.handleUpdate}
                    />
                : null}
                </tr>
            
        )
    }
}

export default FreezerList;