import React, { Component } from 'react';
import './App.css';
import GlobalStyles from './componentes/Styles/GlobalStyles'
import { Layout } from './componentes/Layout';

class App extends Component{
  render(){
    return <div>
    <h1><Layout /></h1>
    <GlobalStyles />
 </div>
  }
}

export default App;
