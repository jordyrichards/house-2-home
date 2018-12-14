import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage';
import ShopPage from './pages/shop';
import PaintAndDec from './pages/paint-and-dec';
import Contact from './pages/contact';
import NavBar from './components/navbar';

class App extends Component {
  render() {
    return (
      <div>
      <NavBar />
        <Router>
          <div className="App">
            <Route exact path="/" component={HomePage} />
            <Route exact path="/shop" component={ShopPage} />
            <Route exact path="/paint-and-dec" component={PaintAndDec} />
            <Route exact path="/contact" component={Contact} />
         </div>
        </Router>                
      </div>
    );
  }
}

export default App;
