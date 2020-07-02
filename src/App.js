import React from 'react';
import './App.css';
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import HomePage from './Components/HomePage.js'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import SendEmail from './Components/SendEmail'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/send-email" component={SendEmail} />
      </Switch>
      <Footer />
    </BrowserRouter>
  
  );
}

export default App;
