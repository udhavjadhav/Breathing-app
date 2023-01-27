import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const theme = createTheme();

export default function SignUp() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <div className="container p-5">

            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs" >
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <div className="icon">
                            <img style={{ height: '10vh', width: '10vh', marginBottom: '2vh', borderRadius:'50%' , border:'2px solid blue', padding:'10px'}} src="../../src/assets/logo.png" />
                        </div>


                        <Typography component="h1" variant="h5" fontWeight='bolder'>
                           Create your account
                        </Typography>

                        <Button sx={{ m: 3, p: 1.5, borderRadius: '45px', fontWeight: 'bolder' }} variant='contained' fullWidth ><img style={{ height: '30px', marginRight: '20px' }} src='src/assets/facebbok.png'></img> Continue with Facebook</Button>

                        <Button sx={{ p: 1.5, borderRadius: '45px', fontWeight: 'bolder' }} variant='outlined' borderRadius='16px' fullWidth><img style={{ height: '30px', marginRight: '15px' }} src='src/assets/google.png'></img> Continue with Google</Button>

                        <Typography sx={{ m: 4, color: 'gray' }} component="h1" fontWeight='bolder'>
                            OR LOG IN WITH EMAIL
                        </Typography>

                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="firstName"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="Name"
                                        autoFocus

                                    />
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
                                sx={{ mt: 4, mb: 2, p: 1.5, borderRadius: '45px', fontWeight: 'bolder' }}
                            >
                                GET STARTED
                            </Button>
                            <Grid item>
                                <Link to={'/login'} variant="body2">
                                <p className='text-center'>Already have account? {"LOG IN"}</p> 
                                </Link>
                            </Grid>

                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </div>
    );
}