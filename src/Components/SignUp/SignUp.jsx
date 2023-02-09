import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
// import {ValidName, validEmail, validPassword } from '../Login/Regex';
// import { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const theme = createTheme();
export default function SignUp() {
    const [open, setOpen] = React.useState(false);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [emailErr, setEmailErr] = useState(false);
    // const [pwdError, setPwdError] = useState(false);
    // const [nameError, setNameError] = useState('');
    // const [error, setError] = useState("");
    const handleSubmit = async (event) => {

        // if(!ValidName.test(name) ){
        //     setNameError('Required valid name!');
        // }
        // if (!validEmail.test(email)) {
        //     setEmailErr(true);
        // }
        // if (!validPassword.test(password)) {
        //     setPwdError(true);
        // }
        if(email == '' || password == ''){
            setOpen(false);
        }
        else{
            setOpen(true);
        }
        
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const ActualData = {
            name: data.get('name'),
            email: data.get('email'),
            password: data.get('password'),
        }
        
        console.log(ActualData);

        const options = {
            url: 'http://localhost:2000/signup',
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data: ActualData
        };

        const response = await axios(options)
        console.log(response);

        if (response.status === 200) {
            window.localStorage.setItem('token', response.data);
            Navigate('/login');
        }
    };
    const Navigate = useNavigate()
    const handleBack = () => {
        Navigate('/firstpage')
    }

    return (
        <>
            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar anchorOrigin={{
                    vertical: "top",
                    horizontal: "center"
                }} open={open} autoHideDuration={3000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                        Please Enter Valid Details!
                    </Alert>
                </Snackbar>
            </Stack>
            <div className="container">

                <ThemeProvider theme={theme}>
                    <Container component="main" maxWidth="xs" >
                        <CssBaseline />
                        <ArrowBackIcon onClick={handleBack} className='shadow' fontSize='large' style={{ marginTop: '2vh', borderRadius: '45px', padding: '5px', cursor: 'pointer' }} />
                        <Box
                            sx={{
                                marginTop: 0,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <div className="icon">
                                <img style={{ height: '10vh', width: '10vh', marginBottom: '1vh', borderRadius: '50%', border: '2px solid blue', padding: '10px' }} src="/assets/logo.png" />
                            </div>

                            <Typography component="h1" variant="h5" fontWeight='bolder'>
                                Create your account
                            </Typography>

                            <Button sx={{ m: 1.5, p: 1.5, borderRadius: '45px', fontWeight: 'bolder' }} variant='contained' fullWidth ><img style={{ height: '30px', marginRight: '20px' }} src='/assets/facebbok.png'></img> Continue with Facebook</Button>

                            <Button sx={{ p: 1.5, borderRadius: '45px', fontWeight: 'bolder' }} variant='outlined' fullWidth><img style={{ height: '30px', marginRight: '15px' }} src='/assets/google.png'></img> Continue with Google</Button>

                            <Typography sx={{ m: 2, color: 'gray' }} component="h1" fontWeight='bolder'>
                                OR LOG IN WITH EMAIL
                            </Typography>

                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 0 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={12}>
                                        <TextField
                                            autoComplete="name"
                                            name="name"
                                            required
                                            fullWidth
                                            id="name"
                                            label="Name"
                                            autoFocus

                                        />
                                        {/* <p style={{ color: 'red' }}>{nameError}</p> */}
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            autoComplete="email"
                                        />
                                        {/* {emailErr && <p style={{ color: 'red' }}>Required valid email address!</p>} */}
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField

                                            required
                                            fullWidth
                                            name="password"
                                            label="Password"
                                            type="password"
                                            id="password"
                                            autoComplete="new-password"
                                        />
                                        {/* <p>Password must contains, (uppercase, lowercase, special characters, numbers!)</p>
                                <p>Length of password must be atleast 8 character</p> */}
                                        {/* {pwdError && <p style={{ color: 'red' }}>Required valid password!</p>} */}
                                    </Grid>

                                </Grid>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 2, mb: 2, p: 1.5, borderRadius: '45px', fontWeight: 'bolder' }}
                                >
                                    GET STARTED
                                </Button>
                                {/* <p style={{color:'red', textAlign:'center'}}>{error}</p> */}
                                <Grid item>
                                    <span style={{ marginLeft: '5vh' }}>Already have an account? </span>
                                    <Link to={'/login'} variant="body2">
                                        <span style={{ fontWeight: 'bolder' }} className='text-center'>{"LOG IN"}</span>
                                    </Link>
                                </Grid>

                            </Box>
                        </Box>
                    </Container>
                </ThemeProvider>
            </div>
        </>
    );
}