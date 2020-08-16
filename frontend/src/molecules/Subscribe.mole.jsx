import React from 'react'
import { Container, AppBar, Typography, InputBase, IconButton, Button, makeStyles, Box, Accordion, AccordionSummary, AccordionDetails, Input } from '@material-ui/core'
import SocialIcons from './SocialIcons.mole';

import { useState } from 'react';
import ControlledAccordion from './ControlledAccordion.mole';


const createStyles = makeStyles(theme => ({
    root: {

        // maxWidth: '40%'

        // padding: '15px 0'
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 0'

    },
    inputContainer: {
        backgroundColor: theme.palette.common.white,
        display: 'flex',
        borderRadius: 4,
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            flexGrow: 1,
            maxWidth: '80%',
            margin: 'auto',
            '& $btn': {
                marginTop: 6,
                borderRadius: 4,
                backgroundColor: theme.palette.primary.main,

                '&:hover': {
                    backgroundColor: theme.palette.primary.dark
                }
            }

        }
    },
    btn: {
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        borderRadius: '0 4px 4px 0',
        paddingLeft: '20px',
        paddingRight: '20px',
        '&:hover': {
            backgroundColor: theme.palette.common.black
        }
    },
    input: {
        [theme.breakpoints.up('md')]: {
            paddingLeft: 10,
            flexGrow: 1,
            borderRadius: 4
        }
    }
}))

const SubscribeInput = ({ root, input, btn }) => {
    return (
        <div className={root}>
            <Input className={input} placeholder="Subscribe with email" />
            <Button className={btn}>Join Us</Button>
        </div>
    )
}


export default function Subscribe() {

    const classes = createStyles();

    return (
        <React.Fragment>
            <Box display={{ xs: 'none', md: 'block' }}>
                <AppBar position="sticky" component="div">
                    <Container maxWidth="lg">
                        <div className={classes.root}>
                            <Typography>
                                Be IN Touch With us
                    </Typography>
                            <div style={{ flexGrow: 1, maxWidth: '40%' }}>
                                <SubscribeInput root={classes.inputContainer} input={classes.input} btn={classes.btn} />
                            </div>
                            <div className="">
                                <SocialIcons />
                            </div>
                        </div>
                    </Container>
                </AppBar>
            </Box>
            <Box display={{ xs: 'block', md: 'none' }}>
                <ControlledAccordion title="Be In Touch With Us">
                    <SubscribeInput root={classes.inputContainer} input={classes.input} btn={classes.btn} />
                </ControlledAccordion>
            </Box>
        </React.Fragment>
    )
}
