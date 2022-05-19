import React from 'react'
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import Header from './components/Header_Footer/header';
import Footer from './components/Header_Footer/footer';
import Home from './components/Home/index';

const Routes = () => {
  return (
    <BrowserRouter> 
    <Header/>
      <Switch> 
        <Route path= "/" exact component={Home} />
      </Switch>
      <Footer/>
    </BrowserRouter>

  )
}

export default Routes