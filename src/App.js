import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import Cart from './components/Cart';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Default from './components/Default';
import Home from './components/Home';
import Modal from './components/Modal';
import Footer from './components/Footer';

import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import Editprofile from './components/Editprofile';
import ProductList2 from './components/ProductList2';

class App extends Component {
  render(){
    return (
      <React.Fragment>
      
       <Navbar/>
       <Switch>
        
         <Route exact path="/" component={ProductList}/>
         <Route path="/details" component={Details}/>
         <Route path="/cart" component={Cart}/>
         <Route path="/produk" component={ProductList2}/>
         <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/editprofile" component={Editprofile} />
            <Route exact path="/profile" component={Profile} />
         <Route component={Default}/>

       </Switch>
       <Footer/>
      <Modal/>
      </React.Fragment>


    );

  }
 
}

export default App;
