import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Order from './pages/order';
import Sidebar from './componants/sidebar';
import ShopProfile from './pages/shopProfile';
import AddItem from './pages/addItem';
import Inventory from './pages/inventory';
import UpdateItem from './pages/updateItem';

function App() {
  

  return (
    <Router>
      <Sidebar />
      <Switch>

        {/* <Route path='/' excat component={HomePage}/>
       <Route path='/profile' excat component={ShopProfile}/> */}

        <Route path="/profile"><ShopProfile /></Route>
        <Route path="/additem"><AddItem/></Route>
        <Route exact path="/"><Order /></Route>
        <Route path="/inventory"><Inventory/></Route>
        <Route path="/updateitem:id"><UpdateItem/></Route>

      </Switch>
    </Router>
  );
}

export default App;
