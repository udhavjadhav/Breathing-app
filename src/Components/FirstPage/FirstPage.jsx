import React from 'react'
import './FirstPage.css'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid';
function FirstPage() {
 
    return (
            <div className='d-flex' id='first'>
                <div className="icon">
                    <img className='logo' src="src/assets/logo.png" />
                </div>
                <div className="container text-center">
                    <img className='welcomeimg' src="src/assets/relax5.webp" alt="" />
                    <h1 id='wish'>Breathings</h1><br />
                    <h6 id='text'>Mindful Breathing app</h6>
               </div>

            {/* <div className="container mt-2"> */}
                <Grid item>
                    <Link to='/signup'>
                        <Button id='signup' variant='contained' >SIGN UP</Button>
                        {/* <button id='btn' className='btn btn-outline-primary'>SIGN UP</button> */}
                    </Link>
                    Already have an account? 
                    <Link to={'/login'} variant="body2">
                    <span style={{fontWeight:'bolder'}}>{" LOG IN"}</span>
                    </Link>
                </Grid>
                </div>
            // </div>
    )
}

export default FirstPage
