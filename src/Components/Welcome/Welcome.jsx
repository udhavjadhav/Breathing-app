import React from 'react'
import './Welcome.css'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function Welcome() {
    const Navigate = useNavigate();
    const handleClick = () => {
        Navigate('/')
    }
    return (
        <div className='welcome'>
            <div className='container'>
                <div className="icon2 mb-2 text-center">
                    <img className='logo' src="src/assets/logo.png" />
                </div>
                <div className="container text-center mt-4">
                    <h1 id='wish'>Hi Dear, Welcome</h1><br />
                    <p className='para text-primary'>Explore the app, Find some peace of mind to prepare for meditation !!</p>
                    <img className='welcomeimg' src="src/assets/welcome.webp" alt="" />
                </div>
                <div className="container text-center">
                    <Button onClick={handleClick}
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ maxWidth: '70%', mt: 5, mb: 2, p: 2, borderRadius: '45px', fontWeight: 'bolder' }}
                    >
                        GET STARTED
                    </Button>
                </div>
                {/* <Button onClick={handleClick} id='btn'  variant='contained'  fullWidth >GET STARTED</Button> */}
            </div>

        </div>

    )
}

export default Welcome
