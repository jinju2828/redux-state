import React, { Component } from 'react';
import './App.css';

import Button from './components/Button';
import Counter from './components/Counter';
import Option from './components/Option';

class App extends Component {
  render(){
    return(
        <div>
          <Counter store = {this.props.store} />
          <Option store = {this.props.store} />
          <Button store = {this.props.store} />
        </div>
    );
  }
}

export default App;
