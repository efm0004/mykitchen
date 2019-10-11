import React, {Component} from 'react';
import FridgeList from '../../components/FridgeList/FridgeList';
import InventoryForm from '../../components/InventoryForm/InventoryForm';
import styles from './FridgePage.module.css';

class FridgePage extends Component {
    render() {
        var fridgeInventory = this.props.inventories.filter((item) => {
            return(item.location === 'Fridge');
        })
        var fridgeList = fridgeInventory.map((item, idx) => {
            return(
                <FridgeList 
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
                <h3 className={styles.Font}>What's in the Fridge?</h3>
                <table>
                    <thead>
                        <tr>
                        <th></th>
                        <th>Item Name:</th>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <th>Staple:</th>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <th>Qty:</th>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <th>Location:</th>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                            {fridgeList}
                    </tbody>
                </table>
                <InventoryForm 
                {...this.props}
                />
            </div>
        )
    }
}

export default FridgePage;