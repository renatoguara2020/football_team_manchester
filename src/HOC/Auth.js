import React from 'react'
import {Redirect}  from 'react-router-dom';
import {firebase}  from '../firebase';

const AuthGuard = (Component) => {

    class AuthHOC extends React.Component {

        authCheck = () =>{
          const user = firebase.auth().currentUser;


          if(user){
         
               return <Component/>

          }else{
            return <Redirect to='/Home'/>

          }

        }
 
    render(){
   
        return this.authCheck();

    }

        

    }
    return AuthHOC;
  
}

export default AuthGuard;
