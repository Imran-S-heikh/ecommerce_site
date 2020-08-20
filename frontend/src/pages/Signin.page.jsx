import React from 'react'
import { Container, Paper, Typography, Button, Grid, Box, TextField, makeStyles, Link } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

export default function Signin() {

    const history = useHistory();

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
                                    <Button onClick={()=>history.push('/signup')}  color="primary" variant="outlined">
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
                                    <TextField label="Email Address" required fullWidth style={{ marginBottom: 10 }} />
                                    <TextField label="Password" required fullWidth />
                                </Box>
                                <Button variant="outlined" color="primary">
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
