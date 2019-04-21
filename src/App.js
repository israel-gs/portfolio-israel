import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bulma/css/bulma.css'
import './style/global.scss'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './views/Home'
import Contact from './views/Contact'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
