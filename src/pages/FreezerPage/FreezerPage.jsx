import React, {Component} from 'react';
import FreezerList from '../../components/FreezerList/FreezerList';
import InventoryForm from '../../components/InventoryForm/InventoryForm';

class FreezerPage extends Component {
    render() {
        return (
            <div>
                <FreezerList 
                {...this.props}
                />
                <InventoryForm 
                {...this.props}
                />
            </div>
        )
    }
}

export default FreezerPage;