import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import {useTheme} from "@mui/material/styles";
import {AuthContext} from './Context/AuthContext';
import {useContext, useState} from "react";

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            {/*Edit this*/}
            <Link color="inherit" href="https://mui.com/">
                St. Yared Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();



export default function SignInSide() {
    const navigate = useNavigate();
    const theme = useTheme();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);
    const [formSubmitted, setFormSubmitted] = useState(false);



    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                const { token, userId, username,role } = await response.json();
                login(token, userId, username,role === 'ADMIN');
                navigate('/admin/dashboard');
            } else if (response.status === 404) {
                console.error('Endpoint not found. Status:', response.status);
                // Handle 404-specific logic here
            } else {
                console.error('Login failed. Status:', response.status);
                // Handle other errors here
            }

        } catch (error) {
            console.error('An error occurred:', error);
        }
    };
    const handleAddEvent = () => {
        // Add the new event to the events array
        setFormSubmitted(true);

    };
    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '70vh' , justifyContent:'center' }}>
                <CssBaseline />
                {/*after successful login*/}
                {formSubmitted && (
                    <Box sx={{ backgroundColor: 'lightgreen', color: 'black' }}>
                        Event added successfully!
                    </Box>
                )}
                <Grid
                    sx={{backgroundColor: 'lavender',borderRadius:'10px'
                    }}
                    item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 2,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleLogin} sx={{ mt: 1 }}>


                            <TextField
                                onChange={(e) => setUsername(e.target.value)}
                                value={username}
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                autoComplete="username"
                                autoFocus
                                size="small"

                            />
                            <TextField
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                size="small"

                            />
                            {/*<FormControlLabel*/}
                            {/*    control={<Checkbox value="remember" color="primary" />}*/}
                            {/*    label="Remember me"*/}
                            {/*/>*/}
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                {/*<Grid item xs>*/}
                                {/*    <Link href="#" variant="body2">*/}
                                {/*        Forgot password?*/}
                                {/*    </Link>*/}
                                {/*</Grid>*/}
                                {/*<Grid item>*/}
                                {/*    <Link href="/register" variant="body2">*/}
                                {/*        {"Don't have an account? Sign Up"}*/}
                                {/*    </Link>*/}
                                {/*</Grid>*/}
                            </Grid>
                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}