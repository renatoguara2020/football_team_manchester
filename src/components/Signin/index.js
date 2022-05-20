import React,{useState} from 'react';
import {CircularProgress} from '@material-ui/core';
import {Redirect}  from 'react-router-dom';
import {useFormik} from 'formik';
import *  as Yup  from 'yup';

const SignIn = () => {

    const formik = useFormik({

        initialValues:{
            email:'',
            password: '',
        },
        validationSchema: Yup.object({
        
            email: Yup.string().email('Invalid email Address').required('This Email is Required!'),
            password: '',

        }),
        onSubmit: (values) =>{


        }
    })

  return (
    <h1>
      <h3>Login</h3>
    </h1>
  )
}

export default SignIn
