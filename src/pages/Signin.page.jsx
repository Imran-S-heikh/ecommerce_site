import React from 'react'
import { Container, Paper, Typography, Button, Grid, Box, TextField, makeStyles, Link } from '@material-ui/core'
import { useHistory, Redirect } from 'react-router-dom'
import { useRecoilState, useSetRecoilState } from 'recoil';
import { userState } from '../recoil/user/user.atoms';
import { useState } from 'react';
import { catchAsync } from '../utils';
import { userLogin } from '../request/user.requset';
import { alertSnackbarState, loaderState } from '../recoil/atoms';
import { useEffect } from 'react';

export default function Signin() {

    const history = useHistory();
    const [user, setUser] = useRecoilState(userState);
    const setAlertSnackbar = useSetRecoilState(alertSnackbarState);
    const setLoader = useSetRecoilState(loaderState);
    const [email, setEmail] = useState('imran@gmail.com');
    const [password, setPassword] = useState('12345678');


    if (user) {
        setAlertSnackbar({ open: true, message: 'You are Already Logged In', severity: 'info' })
        return <Redirect to="/home" />
    }



    const handleLogin = catchAsync(async () => {
        setLoader(true);
        const response = await userLogin({ email, password })

        if (response.data.status === 'success') {
            setUser(response.data.user);
            setLoader(false)
            setAlertSnackbar({ open: true, message: 'Logged In Successfully', time: 4000, severity: 'success' })
        }
    });


    return (
        <Box my={6}>
            <Typography variant="h3" align="center" gutterBottom>Already Registered?</Typography>
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Paper>
                            <Box p={4}>
                                <Typography variant="h5" gutterBottom>
                                    New Costomer
                                </Typography>
                                <Typography variant="subtitle2" color="textSecondary">
                                    By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.
                                </Typography>
                                <Box mt={3}>
                                    <Button onClick={() => history.push('/signup')} color="primary" variant="outlined">
                                        Create an Account
                                    </Button>
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper>
                            <Box p={4}>
                                <Box>
                                    <Typography variant="h5" gutterBottom>
                                        Login
                                    </Typography>
                                    <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                                        If you have an account with us, please log in.
                                </Typography>
                                </Box>
                                <Box my={3} width="70%">
                                    <TextField value={email} onChange={e => setEmail(e.currentTarget.value)} label="Email Address" required fullWidth style={{ marginBottom: 10 }} />
                                    <TextField value={password} onChange={e => setPassword(e.currentTarget.value)} label="Password" required fullWidth />
                                </Box>
                                <Button onClick={handleLogin} variant="outlined" color="primary">
                                    Login
                                </Button>
                                <Typography component="div" variant="subtitle2" color="priamry" align="right">
                                    <Link>Lost Your Password?</Link>
                                </Typography>
                            </Box>

                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
