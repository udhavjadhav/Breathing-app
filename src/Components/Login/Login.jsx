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
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from 'axios';
import { useState } from 'react';
// import { validEmail, validPassword } from './Regex';

import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={10} ref={ref} variant="filled" {...props} />;
  });


const theme = createTheme();

    
export default function Login() {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [emailErr, setEmailErr] = useState(false);
    // const [pwdError, setPwdError] = useState(false);
    const [open, setOpen] = React.useState(false);
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

    const handleSubmit = async (event) => {

        // if (!validEmail.test(email)) {
        //     setEmailErr(true);
        // }
        // if (!validPassword.test(password)) {
        //     setPwdError(true);
        // }
        
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const payload = ({
            email: data.get('email'),
            password: data.get('password'),
        });
        setOpen(true);
        // console.log(payload);

        const options = {
            url: 'http://localhost:2000/login',
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json;charset=UTF-8'
            },
            data: payload
          };
          
          const response = await axios(options);
          console.log(response.data);
          if(response.status === 200){
            // User auth success
            console.log('user logged in successfully');
            window.localStorage.setItem('token', response.data);
            Navigate('/welcome');
          }
          else{
            // Failed
            console.log('login failed')
          }
    };
    const Navigate = useNavigate()
    const handleBack = () =>{
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
                    <ArrowBackIcon onClick={handleBack}  className='shadow' fontSize='large' style={{marginTop:'2.5vh', borderRadius:'45px', padding:'5px', cursor:'pointer'}}/>
                    <Box
                        sx={{
                            marginTop: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <div className="icon">
                            <img style={{ height: '10vh', width: '10vh', marginBottom: '2vh', borderRadius: '50%', border: '2px solid blue', padding: '10px' }} src="/assets/logo.png" />
                        </div>


                        <Typography component="h1" variant="h5" fontWeight='bolder'>
                            Welcome Back!
                        </Typography>

                       <Button sx={{ m: 2, p: 1.5, borderRadius: '45px', fontWeight: 'bolder' }} variant='contained' fullWidth ><img style={{ height: '30px', marginRight: '15px' }} src='/assets/facebbok.png'></img> Continue with Facebook</Button>

                        <Button sx={{ p: 1.5, borderRadius: '45px', fontWeight: 'bolder' }} variant='outlined'  fullWidth><img style={{ height: '30px', marginRight: '15px' }} src='/assets/google.png'></img> Continue with Google</Button>

                        <Typography sx={{ m: 2, color: 'gray' }} component="h1" fontWeight='bolder'>
                            OR LOG IN WITH EMAIL
                        </Typography>

                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 0 }}>
                            <Grid container spacing={2}>

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
                                {/* {pwdError && <p style={{ color: 'red' }}>Required valid password!</p>} */}
                                </Grid>

                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, p: 1.5, borderRadius: '45px', fontWeight: 'bolder' }}
                            >
                                LOG IN
                            </Button>
                          
                            <Grid item>
                                <Link to={'#'} >
                                <p className='text-center'>{"Forget Password"}</p>
                                </Link>
                               <span  style={{marginLeft:'12vh'}}>New user? </span>
                                <Link to={'/signup'} variant="body2">
                                <span style={{fontWeight:'bolder'}}>{" SIGN UP"}</span> 
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