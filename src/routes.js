import React from 'react'
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import {ToastContainer} from 'react-toastify';
import Header from './components/Header_Footer/header';
import Footer from './components/Header_Footer/footer';
import SignIn from './components/Signin';
import Home from './components/Home/index';
import 'react-toastify/dist/ReactToastify.css';

const Routes = (props) => {

  console.log(props)
  return (
    <BrowserRouter> 
    <Header user={props.user}/>
      <Switch> 
        <Route path="/sign_in" exact component={SignIn} />
        <Route path= "/" exact component={Home} />
      </Switch>
      <ToastContainer />
      <Footer/>
    </BrowserRouter>

  )
}

export default Routes