import React from 'react'
import { Container, Grid, Typography, makeStyles } from '@material-ui/core'
import ShopCard from '../molecules/ShopCard.mole';

const createStyles = makeStyles(theme => ({
    header: {
        margin: '40px 0',
        '& > *': {
            textAlign: 'center'
        }
    }
}))

export default function Showcase({ items,component,title,subTitle,breakPoints,spacing }) {

    const classes = createStyles();


    return (
        <Container maxWidth="lg">
            <div className={classes.header}>
                <Typography variant="h5">
                    {title}
                </Typography>
                <Typography>
                    {subTitle}
                </Typography>
            </div>
            <Grid container justifyContent="center" spacing={spacing || 2}>
                {items.map(item =>
                    <Grid item xs={breakPoints?.xs || 12} sm={breakPoints?.sm || 4} md={breakPoints?.md || 3}>
                        {console.log({component,item})}
                        {React.cloneElement(component,item)}
                    </Grid>
                )}
            </Grid>
        </Container>
    )
}
