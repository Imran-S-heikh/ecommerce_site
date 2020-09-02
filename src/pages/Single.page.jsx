import React, { useRef } from 'react'
import Header from '../components/Header.component'
import Footer from '../components/Footer.component'
import Magnifier from '../molecules/Magnifier.mole'
import { assets } from '../utils'
import { Container, Breadcrumbs, Link, Grid, Box, Menu, MenuItem, MenuList, Typography, ButtonBase, Avatar, ButtonGroup, Button, IconButton, FormControlLabel, Checkbox, FormGroup } from '@material-ui/core'
import Carousel from '../components/Carousel.component'
import Keyvalue from '../molecules/Keyvalue.mole'
import Rating from '@material-ui/lab/Rating'
import VarientColor from '../molecules/VarientColor.mole'
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const img = 'https://cdn.shopify.com/s/files/1/0130/5041/3114/products/Featherweight_Pima_Hoodie_4_e2b11fbc-2853-488d-a075-f8bf63034128_2048x2048.jpg'; 

export default function Single() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <div>
            <div className="">
                <Container>
                    <div style={{ padding: '15px 0' }}>
                        <Breadcrumbs>
                            <Link color="inherit">
                                Home
                            </Link>
                            <Link color="inherit">
                                Treanding
                            </Link>
                            <Link color="textPrimary">
                                Men Hoody
                            </Link>
                        </Breadcrumbs>
                        <div className="">
                            <Grid container spacing={4}>
                                <Grid item xs={12} md={6}>
                                    <Grid container>
                                        <Grid style={{ display: matches ? 'none' : 'initial' }} item xs={2}>
                                            <div>
                                                <MenuList open={true} >
                                                    <MenuItem>
                                                        <img style={{ width: '100%' }} src="https://cdn.shopify.com/s/files/1/0130/5041/3114/products/Featherweight_Pima_Hoodie_4_e2b11fbc-2853-488d-a075-f8bf63034128_2048x2048.jpg" alt="" />
                                                    </MenuItem>
                                                    <MenuItem>
                                                        <img style={{ width: '100%' }} src="https://cdn.shopify.com/s/files/1/0130/5041/3114/products/Featherweight_Pima_Hoodie_4_e2b11fbc-2853-488d-a075-f8bf63034128_2048x2048.jpg" alt="" />
                                                    </MenuItem>
                                                    <MenuItem>
                                                        <img style={{ width: '100%' }} src="https://cdn.shopify.com/s/files/1/0130/5041/3114/products/Featherweight_Pima_Hoodie_4_e2b11fbc-2853-488d-a075-f8bf63034128_2048x2048.jpg" alt="" />
                                                    </MenuItem>
                                                    <MenuItem>
                                                        <img style={{ width: '100%' }} src="https://cdn.shopify.com/s/files/1/0130/5041/3114/products/Featherweight_Pima_Hoodie_4_e2b11fbc-2853-488d-a075-f8bf63034128_2048x2048.jpg" alt="" />
                                                    </MenuItem>
                                                </MenuList>
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} md={10} className="">
                                            <Carousel component={<Magnifier />} customStyle={{buttonDots: {bottom: -60},buttonNext: {display: 'none'},buttonPrev: {display: 'none'}}} data={[{ image: img},{ image: 'https://cdn.shopify.com/s/files/1/0130/5041/3114/products/Featherweight_Pima_Hoodie_7270f97f-f554-4568-bf1a-30e7490a5a92_2048x2048.jpg?v=1570224584'}]} />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <div className="">
                                        <Keyvalue items={{ Sku: 567, Availability: '1 in stock' }} />
                                    </div>
                                    <Box mt={5}>
                                        <Typography variant="h4">
                                            East Hampton Fleece Hoodie
                                        </Typography>
                                        <Typography color="primary" variant="h4">
                                            $677
                                        </Typography>
                                        <Typography color="textSecondary">
                                            Tax Included
                                        </Typography>
                                    </Box>
                                    <Box mt={5} display="flex" alignItems="center">
                                        <Rating value={4} readOnly={true} />
                                        <Link style={{ margin: '5px 0 0 5px', cursor: 'pointer' }} >
                                            7 reviews
                                        </Link>
                                    </Box>
                                    <Box mt={5}>
                                        <Keyvalue items={{
                                            Color: <Typography component="span" color="primary">
                                                Black
                                            </Typography>
                                        }} />
                                        <Box >
                                            <VarientColor image="https://cdn.shopify.com/s/files/1/0130/5041/3114/products/Featherweight_Pima_Hoodie_4_e2b11fbc-2853-488d-a075-f8bf63034128_2048x2048.jpg" />
                                            <VarientColor image="https://cdn.shopify.com/s/files/1/0130/5041/3114/products/Featherweight_Pima_Hoodie_4_e2b11fbc-2853-488d-a075-f8bf63034128_2048x2048.jpg" />
                                            <VarientColor image="https://cdn.shopify.com/s/files/1/0130/5041/3114/products/Featherweight_Pima_Hoodie_4_e2b11fbc-2853-488d-a075-f8bf63034128_2048x2048.jpg" />
                                        </Box>
                                    </Box>
                                    <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} mt={5}>
                                        <ButtonGroup size="large" fullWidth>
                                            <Button>
                                                <RemoveIcon />
                                            </Button>
                                            <Button color="primary">
                                                4
                                            </Button>
                                            <Button>
                                                <AddIcon />
                                            </Button>
                                        </ButtonGroup>
                                        <div style={{ width: 20, height: 20 }} />
                                        <Button size="large" fullWidth variant="contained" color="primary">Add To Cart</Button>
                                    </Box>
                                    <Box mt={3}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    color="primary"
                                                />
                                            }
                                            label="I agree with the terms and conditions "
                                        />
                                    </Box>
                                    <div className="">
                                        <Button size="large" fullWidth variant="contained" color="textSecondary">
                                            Buy Now
                                        </Button>
                                    </div>

                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}
