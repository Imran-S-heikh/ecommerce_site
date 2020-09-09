import React from 'react'
import { makeStyles, Box, Container, Grid, Typography, Button, TextField, Stepper, Step, StepLabel, StepContent, IconButton, useTheme, Paper, Divider, List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core';
import Hide from '../molecules/Hide.mole';
import { ReactComponent as StripeLogoSlate } from '../assets/stripe-logo-slate.svg';
import { ReactComponent as StripeLogoWhite } from '../assets/stripe-logo-white.svg';
import { ReactComponent as PoweredByStripe } from '../assets/powered_by_stripe.svg';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';


export default function Checkout() {
    const theme = useTheme();
    return (
        <div>
            <Box my={3}>
                <Typography align="center" variant="h3">Checkout</Typography>
            </Box>

            <Container maxWidth="md">

                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <form>
                            <Stepper orientation="vertical" activeStep={1}>
                                {['Delivery', 'Payment'].map((label, i) =>
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                        <StepContent>
                                            <Hide hide={true}>
                                                <Grid container spacing={2}>
                                                    <Grid xs={12} item>
                                                        <TextField size="small" variant="outlined" fullWidth label="Email" type="email" required />
                                                    </Grid>
                                                    <Grid xs={6} item>
                                                        <TextField size="small" variant="outlined" fullWidth label="First Name" type="text" required />
                                                    </Grid>
                                                    <Grid xs={6} item>
                                                        <TextField size="small" variant="outlined" fullWidth label="Last Name" type="text" required />
                                                    </Grid>
                                                    <Grid xs={12} item>
                                                        <TextField size="small" variant="outlined" fullWidth label="Address" type="text" required />
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
                                                        >
                                                            {['Country-1', 'Country-2', 'Country-3'].map(country =>
                                                                <option key={country} value={country}>{country}</option>
                                                            )}
                                                        </TextField>
                                                    </Grid>
                                                    <Grid xs={6} item>
                                                        <TextField size="small" variant="outlined" fullWidth label="Phone" type="tel" required />
                                                    </Grid>
                                                    <Grid xs={6} item>
                                                        <TextField size="small" variant="outlined" fullWidth label="State" type="text" required />
                                                    </Grid>
                                                    <Grid xs={6} item>
                                                        <TextField size="small" variant="outlined" fullWidth label="Zip Code" type="number" required />
                                                    </Grid>
                                                </Grid>
                                            </Hide>
                                            <Hide hide={false}>
                                                <Box>
                                                    <Typography variant="h6" align="center">Select Payment Method</Typography>
                                                    <Box my={2}>
                                                        <Button startIcon={<LocalShippingIcon />} style={{ marginRight: 10 }} variant="outlined">Cash On Delivery</Button>
                                                        <Button color="primary" variant="outlined">
                                                            {theme.palette.type === 'light' ?
                                                                <StripeLogoSlate height={25} /> :
                                                                <StripeLogoWhite height={25} />
                                                            }
                                                        </Button>
                                                    </Box>
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
                                    <Typography  > $3410</Typography>
                                </Box>
                                <Box display="flex" justifyContent="space-between">
                                    <Typography color="textSecondary" variant="subtitle1" >Products:</Typography>
                                    <Typography  > x10</Typography>
                                </Box>
                                <Box display="flex" justifyContent="space-between">
                                    <Typography color="textSecondary" variant="subtitle1" >Tax:</Typography>
                                    <Typography  > 0</Typography>
                                </Box>
                                <Box display="flex" justifyContent="space-between">
                                    <Typography color="textSecondary" variant="subtitle1" >Delivery Charge:</Typography>
                                    <Typography  > $5</Typography>
                                </Box>
                                <Box my={2}>
                                    <Divider />
                                </Box>
                                <Box display="flex" justifyContent="space-between">
                                    <Typography color="textSecondary" variant="h6" >Total Price:</Typography>
                                    <Typography variant="h6" > $3415</Typography>
                                </Box>
                            </Box>
                        </Paper>
                        <Box mt={2}>
                            <Paper>
                                <List>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar variant="square" src="https://res.cloudinary.com/dicqc1ntj/image/upload/v1599570444/gb8ks5ktaxbnvbgoqlqj.jpg" />
                                        </ListItemAvatar>
                                        <ListItemText>
                                            <Typography>
                                                Ladies Gown
                                        </Typography>
                                            <Typography color="textSecondary">
                                                10 x 360
                                        </Typography>
                                        </ListItemText>
                                    </ListItem>
                                    <Divider/>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar variant="square" src="https://res.cloudinary.com/dicqc1ntj/image/upload/v1599570444/gb8ks5ktaxbnvbgoqlqj.jpg" />
                                        </ListItemAvatar>
                                        <ListItemText>
                                            <Typography>
                                                Ladies Gown
                                        </Typography>
                                            <Typography color="textSecondary">
                                                10 x 360
                                        </Typography>
                                        </ListItemText>
                                    </ListItem>
                                    <Divider/>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar variant="square" src="https://res.cloudinary.com/dicqc1ntj/image/upload/v1599570444/gb8ks5ktaxbnvbgoqlqj.jpg" />
                                        </ListItemAvatar>
                                        <ListItemText>
                                            <Typography>
                                                Ladies Gown
                                        </Typography>
                                            <Typography color="textSecondary">
                                                10 x 360
                                        </Typography>
                                        </ListItemText>
                                    </ListItem>
                                </List>
                            </Paper>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
