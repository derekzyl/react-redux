import logo from './logo.svg';
import './App.css';
import React from 'react'
import { Provider } from 'react-redux';
import store from './redux/store'
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import CakeContainer from './components/cake-container'
import HooksCakeContainer from './components/hooks-cake-container'
import IceContainer from './components/ice-container';
import NewCakeContainer from './components/new-cake-container'
import ItemContainer from './components/item-container';


class App extends React.Component{
  render(){
    return(
      <Provider store={store}>
      <div>
        <HooksCakeContainer/>
        <CakeContainer/>
        <IceContainer/>
        <NewCakeContainer/>
        <ItemContainer cake/>
        <ItemContainer/>

    </div>
    </Provider>
    )
  }
}



export default App;
