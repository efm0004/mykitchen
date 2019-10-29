import React, {Component} from 'react'; 

class ShoppingBagPage extends Component {
    state = {
        location: 'ShoppingBag'
    }

    render() {

        return (
            <div>
                <h1>I am the ShoppingBagPage!</h1>
            </div> 
        )
    }

}

//At this point, you should be working while checking in on 
//what is being rendered in the browser

//still TO DO: 
//set up backend for ShoppingList
//set up ShoppingListForm
//set up ShoppingListEditForm
//update this file with function - see example from Inventory
//      in App.js
//styling!

export default ShoppingBagPage;