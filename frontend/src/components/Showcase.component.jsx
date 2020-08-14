import React from 'react'
import { Container, Grid, Typography, makeStyles } from '@material-ui/core'
import ShopCard from '../molecules/ShopCard.mole';

const createStyles = makeStyles(theme=>({
    header: {
        margin: '40px 0',
        '& > *': {
            textAlign: 'center'
        }
    }
}))

export default function Showcase() {
    
    const classes = createStyles();


    return (
        <Container maxWidth="lg">
            <div className={classes.header}>
                <Typography variant="h5">
                    Best Seller
                </Typography>
                <Typography>
                    Top Products Of This Week
                </Typography>
            </div>
            <Grid container justifyContent="center" spacing={2}>
                <Grid item xs={12} sm={4} md={3}>
                    <ShopCard width="95%"/>
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <ShopCard width="95%"/>
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <ShopCard width="95%"/>
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <ShopCard width="95%"/>
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <ShopCard width="95%"/>
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <ShopCard width="95%"/>
                </Grid>
            </Grid>
        </Container>
    )
}
