import React from 'react'
import './Welcome.css'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
function Welcome() {
    const Navigate = useNavigate();
    const handleClick = () =>{
        Navigate('/')
    }
    return (
        <>
            <div className='container d-flex w-75'>
                <div className="icon mb-2">
                    <img className='logo' src="src/assets/logo.png" />
                </div>
                <div className="container text-center mt-4">
                    <h1 id='wish'>Hi Udhav, Welcome</h1><br />
                    <h6 id='text'>Explore the app, Find some peace of mind to prepare for meditation</h6>
                </div>
                <img className='welcomeimg' src="src/assets/welcome.webp" alt="" />

            </div>
            <div className="container mt-3 w-50">
                <Button onClick={handleClick} id='btn'  variant='contained'  fullWidth >GET STARTED</Button>
            </div>
        </>

    )
}

export default Welcome
