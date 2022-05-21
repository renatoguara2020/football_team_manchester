import React from 'react';
import { AppBar, Toolbar, Button } from '@material-ui/core'
import CityLogo from '../Utils/Button';
import { Link } from 'react-router-dom';
import {Fragment} from 'react';
import {firebase} from '../../firebase';
import {showSuccessToast, showErrorToast} from '../Utils/tools'

const Header = ({user}) => {

    const logoutHandler = ()=>{

   firebase.auth().signOut().then(()=>{showSuccessToast('Good Bye!!!!')}).catch(error=>{alert("error")})
    }
    return(
        <AppBar
            position="fixed"
            style={{
                backgroundColor:'#98c5e9',
                boxShadow:'none',
                paddin:'10px 0',
                borderBottom:'2px solid #00285e'
            }}
        >
            <Toolbar style={{ display:'flex' }}>
                <div style={{ flexGrow: 1 }}>
                    <div className="header_logo" >
                        <CityLogo link={true} linkto={'/'} width="70px" height="70px" />
                    </div>
                </div>

                <Link to="/the_team">
                    <Button color="inherit">The team</Button>
                </Link>
                <Link to="/the_matches">
                    <Button color="inherit">Matches</Button>
                </Link>


                { user  ?
                <Fragment>    
                <Link to="/dashboard">
                    <Button color="inherit">Dashboard</Button>
                </Link>


                 <Button color="inherit" onClick={()=>logoutHandler()}>Logout</Button>
           
             </Fragment>
                :null
            }
            </Toolbar>
        </AppBar> 
    )
}

export default Header;