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
import Freezer from './components/Freezer/Freezer';

class App extends Component {
  state = {
    user: userService.getUser(),
    inventories: []
  }

  componentDidMount = () => {
    getAll().then(results => {
        console.log('hello there foodstuffs ', results)
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

  handleDelete = (id) => {
    let newState = this.state.inventories.filter(
      item => this.state.inventories[id] !== item
    )
    this.setState({
      inventories: newState
    })
  }

  render() {
    const currentInventory = this.state.inventories.map((item, idx) => {
      return (
          <Inventory 
              key={idx}
              name={item.name}
              staple={item.staple}
              quantity={item.quantity}
              location={item.location}
              inventories={item.inventories}
              handleDelete={this.handleDelete}
              id={idx}
          />
      );
  })
    
  
    //Third attempt
    // var freezerInventory = this.state.inventories.filter((item) => {
    //   return (item.location === 'Freezer');
    // })

    //Second attempt
    // const freezerInventory = this.state.inventories.filter(item => item.location === 'Freezer')
    
    
    //First attempt
    // const freezerInventory = this.state.inventories.filter((item, idx) => {
    //   return (
    //     <Freezer 
    //       key={idx}
    //       name={item.name}
    //       staple={item.staple}
    //       quantity={item.quantity}
    //       location={item.location}
    //       inventories={item.inventories}
    //       id={idx}
    //     />
    //   )
    // })

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
            />
        } />
        </Switch>
        <div>
          <ul>
            {currentInventory}
          </ul>
          <ul>
            {/* {freezerInventory} */}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;

async function getAll() {
  const url = "http://localhost:3001/api/inventory"
  const initialFetch = await fetch(url)
  const fetchJSON = await initialFetch.json();
  return await fetchJSON;
}