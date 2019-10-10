import React, {Component} from 'react';

class FreezerList extends Component {
    render() {
        var freezerInventory = this.props.inventories.filter((item) => {
            return(item.location === 'Freezer');
        })

        var freezerList = freezerInventory.map((item, idx) => {
            return(
                <div key={idx}>
                    <p>{item.name}</p>
                </div>
            )
        })
        console.log(this.props.inventories)
        return (
            <div>
                <h3>What's in the Freezer?</h3>
                {freezerList}
            </div>
        )
    }
}

export default FreezerList;