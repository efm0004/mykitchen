import React, {Component} from 'react';
import {Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
// import {read} from 'fs';
import LoginPage from '../src/pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';
import NavBar from '../src/components/NavBar/NavBar';
import userService from '../src/utils/userService';
import KitchenPage from '../src/pages/KitchenPage/KitchenPage';
import InventoryForm from './components/InventoryForm/InventoryForm';
import ComingSoon from './components/ComingSoon/ComingSoon';
import Inventory from './components/Inventory/Inventory';
import InventoryEditForm from './components/InventoryEditForm/InventoryEditForm';

class App extends Component {
  state = {
    user: userService.getUser(),
    inventories: [],
  }

  componentDidMount = () => {
    getAll().then(results => {
        this.setState({
            inventories: results
        })
    })
}

  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  handleAddInventory = ({ name, staple, quantity, location }) => {
    const url = "http://localhost:3001/api/inventory";
    const options = {
        method: 'POST',
        headers: {
            "content-type" : "application/json"
        },
        body: JSON.stringify({name, staple, quantity, location})
    }
      handleFetch(url, options).then(results => {
        this.setState({
            inventories: [...this.state.inventories, results]
        })
    })
  }

  handleDelete = (id, _id) => {
    const url = `/api/inventory/${id}`;
    const options = {
      method: 'DELETE',
      headers: {
        "content-type" : "application/json"
      },
      body: JSON.stringify({id: _id})
    }

    handleFetch(url, options).then(() => {
      let newState = this.state.inventories.filter(item => {
        return item._id != _id
      })
      this.setState({
        inventories: [...newState]
      })
    })
  }

  handleUpdate = (id, body) => {
    console.log(id, body)
    const url = `http://localhost:3001/api/inventory/edit/${id}`
    const options = {
      method: 'PUT',
      headers: {
        "content-type" : "application/json"
      },
      body: JSON.stringify(body)
    }

    handleFetch(url, options).then(() => {
      getAll().then(results => {
        this.setState({
          inventories: [...results],
          isEditing: false
        })
      })
    })
  }

  render() {
    const currentInventory = this.state.inventories.map((item, idx) => {
      return (
          <Inventory 
              edit={this.state.edit}
              isEditing={this.state.isEditing}
              key={idx}
              name={item.name}
              staple={item.staple}
              quantity={item.quantity}
              location={item.location}
              inventories={item.inventories}
              handleDelete={this.handleDelete}
              handleUpdate={this.handleUpdate}
              // handleChange={this.handleChange}
              id={idx}
              _id={item._id}
          />
      );
  })
    
  
    //TODO : move to it's own component and make pretty
    //repeat for fridge and pantry
    var freezerInventory = this.state.inventories.filter((item) => {
      console.log(item.location === "Freezer")
      return (item.location === 'Freezer');

    })

    var freezerList = freezerInventory.map((item, idx) => {
      return(

        <div key={idx}>
          <p>{item.name}</p>
        </div>
        
      )
    })

    //end TO DO

    return (
      <div className="App">
        <header className="App-header">
        <NavBar 
          user={this.state.user}
          handleLogout={this.handleLogout}
        />
        </header>
        <KitchenPage />
        <Switch>
          <Route path='/login' render={({history}) =>
            <LoginPage 
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          } />
          <Route path='/signup' render={({history}) =>
            <SignupPage 
              history={history}
              handleSignupOrLogin={this.handleSignuporLogin}
            />
          } />
          <Route path='/comingsoon' render={() =>
            <ComingSoon />
          }
          />
          />
          <Route path='/freezer' render={({history}) =>
            <InventoryForm 
              history={history}
              inventory={this.state.inventories}
              handleAddInventory={this.handleAddInventory}
            />
        } />
          <Route path='/edit_item' render={() =>
            <InventoryEditForm 
              inventory={this.state.inventories}
            />
        }/>
        </Switch>
        <div>
          <ul>
            {currentInventory}
          </ul>
          <ul>
            {freezerList}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;

async function handleFetch(url, options){
  const stream = await fetch(url, options)
  const json = await stream.json()
  return await json
}

async function getAll() {
  const url = "/api/inventory"
  const initialFetch = await fetch(url)
  const fetchJSON = await initialFetch.json();
  return await fetchJSON;
}

// async function handleAdd(url, options){
//   const initialFetch = await fetch(url, options)
//   const fetchJSON = await initialFetch.json();
//   return await fetchJSON;
// }