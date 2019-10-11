import React, {Component} from 'react';
import FreezerList from '../../components/FreezerList/FreezerList';
import InventoryForm from '../../components/InventoryForm/InventoryForm';
import styles from './FreezerPage.module.css';

class FreezerPage extends Component {
    state = {
        location: 'Freezer'
    }
    render() {
        var freezerInventory = this.props.inventories.filter((item) => {
            return(item.location === 'Freezer');
        })
        var freezerList = freezerInventory.map((item, idx) => {
            return(
                <FreezerList 
                // edit={this.state.edit}
                // isEditing={this.state.isEditing}
                key={idx}   
                name={item.name}
                staple={item.staple}
                quantity={item.quantity}
                location={item.location}
                inventories={item.inventories}
                handleDelete={this.props.handleDelete}
                handleUpdate={this.props.handleUpdate}
                id={idx}
                _id={item._id}
                // user={this.state.user}
                />
            )
        })
        return (
            <div>
                <h3 className={styles.Font}>What's in the Freezer?</h3>
                {freezerList}
                <InventoryForm 
                {...this.props}
                />
            </div>
        )
    }
}

export default FreezerPage;