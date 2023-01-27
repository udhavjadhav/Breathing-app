import React from 'react'
import './FirstPage.css'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid';
function FirstPage() {
 
    return (
            <div className='container d-flex '>
                <div className="icon">
                    <img className='logo' src="src/assets/logo.png" />
                </div>
                <div className="container text-center">
                    <img className='welcomeimg' src="src/assets/relax5.webp" alt="" />
                    <h1 id='wish'>Breathings</h1><br />
                    <h6 id='text'>Mindful Breathing app</h6>
                </div>

            <div className="container mt-5 w-50">
                <Grid item>
                    <Link to='/signup'>
                        <Button id='btn' variant='contained' fullWidth >SIGN UP</Button>
                    </Link>
                    <Link to={'/login'} variant="body2">
                        <p className='text-center mt-2'>Already have account? {" LOGIN"}</p>
                    </Link>
                </Grid>
            </div>
        </div>

    )
}

export default FirstPage
