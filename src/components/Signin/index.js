import React , { useState } from 'react';

import { CircularProgress } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import {firebase} from '../../firebase';

import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignIn = (props) => {
    const [loading, setLoading] = useState(false)

    const formik = useFormik({
        initialValues:{
            email:'',
            password:''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid Email Address')
                .required('The email is required'),
            password:Yup.string()
                .required('The password is required')
        }),
        onSubmit: (values) =>{
            setLoading(true)
            submitForm(values)
        }
    })

  const submitForm =(values)=>{

    firebase.auth().signInWithEmailAndPassword(values.email, values.password).then(()=>{

     props.history.push()

    }).catch((error)=>{

   setLoading(false)


    })
  }
    return(
        <div className="container">
            <div className="signin_wrapper" style={{margin:'100px'}}>

                <form onSubmit={formik.handleSubmit}>
                    <h2>Please Login</h2>
                    <input
                        name="email"
                        placeholder="Enter your Email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    { formik.touched.email && formik.errors.email ?
                        <div className="error_label">
                            {formik.errors.email}
                        </div>
                    :null}


                    <input
                        name="password"
                        placeholder="Enter your Password"
                        type="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    />
                    { formik.touched.password && formik.errors.password ?
                        <div className="error_label">
                            {formik.errors.password}
                        </div>
                    :null}

                    
                        {loading ?
                            <CircularProgress color="secondary" className="progress"/>
                        :
                            <button type="submit">Login</button>
                        }

                 
                </form>

            </div>
        </div>
    )

}

export default SignIn