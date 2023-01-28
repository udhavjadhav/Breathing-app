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
const theme = createTheme();

export default function Login() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };
    const Navigate = useNavigate()
    const handleBack = () =>{
        Navigate('/firstpage')
    }

    return (
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
                            <img style={{ height: '10vh', width: '10vh', marginBottom: '2vh', borderRadius: '50%', border: '2px solid blue', padding: '10px' }} src="../../src/assets/logo.png" />
                        </div>


                        <Typography component="h1" variant="h5" fontWeight='bolder'>
                            Welcome Back!
                        </Typography>

                        <Button sx={{ m: 2, p: 1.5, borderRadius: '45px', fontWeight: 'bolder' }} variant='contained' fullWidth ><img style={{ height: '30px', marginRight: '20px' }} src='src/assets/facebbok.png'></img> Continue with Facebook</Button>

                        <Button sx={{ p: 1.5, borderRadius: '45px', fontWeight: 'bolder' }} variant='outlined'  fullWidth><img style={{ height: '30px', marginRight: '15px' }} src='src/assets/google.png'></img> Continue with Google</Button>

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
    );
}