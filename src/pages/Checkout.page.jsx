import React, { useState } from 'react'
import { makeStyles, Box, Container, Grid, Typography, Button, TextField, Stepper, Step, StepLabel, StepContent, IconButton, useTheme, Paper, Divider, List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core';
import Hide from '../molecules/Hide.mole';
import { ReactComponent as StripeLogoSlate } from '../assets/stripe-logo-slate.svg';
import { ReactComponent as StripeLogoWhite } from '../assets/stripe-logo-white.svg';
import { ReactComponent as PoweredByStripe } from '../assets/powered_by_stripe.svg';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { checkoutRequest } from '../request/product.request';
import { catchAsync, checkStatus } from '../utils';
import { useRecoilValue, useRecoilState } from 'recoil';
import { cartState } from '../recoil/user/user.selector';
import { useSetRecoilState } from 'recoil';
import { alertSnackbarState } from '../recoil/atoms';
import { Redirect } from 'react-router-dom';
import { userState } from '../recoil/user/user.atoms';
import { useEffect } from 'react';
import { useRef } from 'react';

const stripe_key = 'pk_test_51HPJo6IvWIe2khAihM3N4JnnVCeShsbEZv9qyCVFumpX2msHAjqWkqJ7mumtwpJbBRxkdZTq5vWwxXOhXuKX1IUc003JLceeIC';
const stripe_promise = loadStripe(stripe_key);

const data = {
    "products": [
        {
            "id": "5f57821920046b12c2b83315",
            "quantity": 1
        },
        {
            "id": "5f51ca081b1b4e1475106e7b",
            "quantity": 3
        }
    ],
    "country": "Bangladesh",
    "state": "Khulna",
    "paymentMethod": "cash-on-delivery",
    "address": "Udaypur,Mollahat",
    "email": "imransheikhsadi2@gmail.com"
}

export default function Checkout() {
    const theme = useTheme();
    const cart = useRecoilValue(cartState);
    const setAlert = useSetRecoilState(alertSnackbarState);
    const [activeStep, setActiveStep] = useState(0);
    const [user, setUser] = useRecoilState(userState);
    const [address, setAddress] = useState('')
    const [country, setCountry] = useState('Country-1')
    const [state, setState] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [phone, setPhone] = useState()

    const fromRef = useRef();

    useEffect(() => {
        console.log(user)
    })

    if(!user){
        setAlert({open: true,message: 'Please Login for Checkout'})
        return <Redirect to="/" />
    }

    if(cart.products.length === 0){
        setAlert({open: true,message: 'You Don\'t have product for Checkout'})
        return <Redirect to="/shop" />
    }

    const handleStripePayment = catchAsync(async () => {
        const data = {
            products: cart.products.map(product=>({id: product._id,quantity: product.count})) ,
            country,
            state,
            paymentMethod: 'stripe',
            address,
            email: user?.email
        }
        const stripe = await stripe_promise;
        const response = await checkoutRequest(data);

        if(checkStatus(response) && stripe){
            const result = await stripe.redirectToCheckout({
                sessionId: response.data.session.id
            });
        }

    })

    const handleSubmit = (event) => {
        event.preventDefault()
        nextStep()

    }

    const nextStep = () => {
        setActiveStep(activeStep + 1)
    }

    const previousStep = () => {
        setActiveStep(activeStep - 1)
    }

    return (
        <div>
            <Box my={3}>
                <Typography align="center" variant="h3">Checkout</Typography>
            </Box>

            <Container maxWidth="md">

                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <form ref={fromRef} onSubmit={handleSubmit}>
                            <Stepper orientation="vertical" activeStep={activeStep}>
                                {['Delivery', 'Payment'].map((label, i) =>
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                        <StepContent>
                                            <Hide hide={!(activeStep === 0)}>
                                                <Grid container spacing={2}>
                                                    <Grid xs={12} item>
                                                        <TextField value={user?.email} size="small" variant="outlined" fullWidth label="Email" type="email" required />
                                                    </Grid>
                                                    <Grid xs={12} item>
                                                        <TextField value={user?.name} size="small" variant="outlined" fullWidth label="Name" type="text" required />
                                                    </Grid>
                                                    {/* <Grid xs={6} item>
                                                        <TextField size="small" variant="outlined" fullWidth label="Last Name" type="text" required />
                                                    </Grid> */}
                                                    <Grid xs={12} item>
                                                        <TextField value={address} onChange={(e) => setAddress(e.currentTarget.value)} size="small" variant="outlined" fullWidth label="Address" type="text" required />
                                                    </Grid>
                                                    {/* <Grid xs={12} item>
                                                    <TextField size="small" variant="outlined" fullWidth label="Address(2)" type="text" required />
                                                </Grid> */}
                                                    <Grid xs={6} item>
                                                        <TextField
                                                            size="small"
                                                            variant="outlined"
                                                            select fullWidth
                                                            label="Country"
                                                            type="number"
                                                            required
                                                            SelectProps={{ native: true }}
                                                            value={country}
                                                            onChange={e => setCountry(e.currentTarget.value)}
                                                        >
                                                            {['Country-1', 'Country-2', 'Country-3'].map(country =>
                                                                <option key={country} value={country}>{country}</option>
                                                            )}
                                                        </TextField>
                                                    </Grid>
                                                    <Grid xs={6} item>
                                                        <TextField value={phone} onChange={e => setPhone(e.currentTarget.value)} size="small" variant="outlined" fullWidth label="Phone" type="tel" required />
                                                    </Grid>
                                                    <Grid xs={6} item>
                                                        <TextField value={state} onChange={e => setState(e.currentTarget.value)} size="small" variant="outlined" fullWidth label="State" type="text" required />
                                                    </Grid>
                                                    <Grid xs={6} item>
                                                        <TextField value={zipCode} onChange={e => setZipCode(e.currentTarget.value)} size="small" variant="outlined" fullWidth label="Zip Code" type="number" required />
                                                    </Grid>
                                                </Grid>

                                            <Box mb={-4} mt={2} display="flex" justifyContent="end">
                                                <Button color="primary" onClick={() => { fromRef.current.requestSubmit() }}>Next</Button>
                                            </Box>
                                            </Hide>
                                            <Hide hide={!(activeStep === 1)}>
                                                <Box>
                                                    <Typography variant="h6" align="center">Select Payment Method</Typography>
                                                    <Box my={2}>
                                                        <Button startIcon={<LocalShippingIcon />} style={{ marginRight: 10 }} variant="outlined">Cash On Delivery</Button>
                                                        <Button onClick={handleStripePayment} color="primary" variant="outlined">
                                                            {theme.palette.type === 'light' ?
                                                                <StripeLogoSlate height={25} /> :
                                                                <StripeLogoWhite height={25} />
                                                            }
                                                        </Button>
                                                    </Box>
                                                    <Button onClick={previousStep} color="primary">Previous</Button>
                                                </Box>
                                            </Hide>
                                        </StepContent>
                                    </Step>
                                )}
                            </Stepper>

                        </form>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper>
                            <Box p={4}>
                                <Box display="flex" justifyContent="space-between">
                                    <Typography color="textSecondary" variant="subtitle1" >SubTotal:</Typography>
                                    <Typography  > ${cart.totalPrice}</Typography>
                                </Box>
                                <Box display="flex" justifyContent="space-between">
                                    <Typography color="textSecondary" variant="subtitle1" >Products:</Typography>
                                    <Typography  > x{cart.totalQuantity}</Typography>
                                </Box>
                                <Box display="flex" justifyContent="space-between">
                                    <Typography color="textSecondary" variant="subtitle1" >Tax:</Typography>
                                    <Typography  > 0</Typography>
                                </Box>
                                <Box display="flex" justifyContent="space-between">
                                    <Typography color="textSecondary" variant="subtitle1" >Delivery Charge:</Typography>
                                    <Typography  > 0</Typography>
                                </Box>
                                <Box my={2}>
                                    <Divider />
                                </Box>
                                <Box display="flex" justifyContent="space-between">
                                    <Typography color="textSecondary" variant="h6" >Total Price:</Typography>
                                    <Typography variant="h6" > ${cart.totalPrice}</Typography>
                                </Box>
                            </Box>
                        </Paper>
                        <Box mt={2}>
                            <Paper>
                                <List>
                                    {cart.products.map(product =>
                                        <React.Fragment key={product._id}>
                                            <ListItem>
                                                <ListItemAvatar>
                                                    <Avatar variant="square" src={product.image.small[0]} />
                                                </ListItemAvatar>
                                                <ListItemText>
                                                    <Typography>
                                                        {product.name}
                                                    </Typography>
                                                    <Typography color="textSecondary">
                                                        {product.count} x {product.price}
                                                    </Typography>
                                                </ListItemText>
                                            </ListItem>
                                            <Divider />
                                        </React.Fragment>
                                    )}
                                </List>
                            </Paper>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
