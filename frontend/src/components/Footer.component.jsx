import React from 'react'
import { AppBar, Container, Typography, makeStyles } from '@material-ui/core'
import SocialIcons from '../molecules/SocialIcons.mole'
import Subscribe from '../molecules/Subscribe.mole';

const createStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 0'
    }
}))

export default function Footer() {

    const classes = createStyles();

    return (
        <AppBar position="sticky">
            <Container maxWidth="lg">
                <div className={classes.root}>
                    <Typography>
                        Be IN Touch With us
                    </Typography>
                    <div style={{flexGrow: 1,maxWidth: '40%'}}>
                       <Subscribe/> 
                    </div>
                    <div className="">
                        <SocialIcons />
                    </div>
                </div>
            </Container>
        </AppBar>
    )
}
