import React, {Component} from 'react';
import PantryList from '../../components/PantryList/PantryList';
import InventoryForm from '../../components/InventoryForm/InventoryForm';
import styles from './PantryPage.module.css';

class PantryPage extends Component {
    render() {
        var pantryInventory = this.props.inventories.filter((item) => {
            return(item.location === 'Pantry');
        })
        var pantryList = pantryInventory.map((item, idx) => {
            return(
                <PantryList 
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
                <h3 className={styles.Font}>What's in the Pantry?</h3>
                <table className={styles.Center}>
                    <thead>
                        <tr>
                        <th></th>
                        <th>Item Name:</th>
                        &nbsp;&nbsp;
                        <th>Staple:</th>
                        &nbsp;&nbsp;
                        <th>Qty:</th>
                        &nbsp;&nbsp;
                        <th>Location:</th>
                        &nbsp;&nbsp;
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                            {pantryList}
                    </tbody>
                </table>
                <InventoryForm 
                {...this.props}
                />
            </div>
        )
    }
}

export default PantryPage;