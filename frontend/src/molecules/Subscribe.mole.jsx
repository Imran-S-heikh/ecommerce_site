import React from 'react'
import { Container, AppBar, Typography, InputBase, IconButton, Button, makeStyles } from '@material-ui/core'


const createStyles = makeStyles(theme=>({
    root: {
        backgroundColor: theme.palette.common.white,
        borderRadius: 4,
        display: 'flex',
        // maxWidth: '40%'

        // padding: '15px 0'

    },
    btn: {
        backgroundColor: theme.palette.grey[900],
        color: theme.palette.common.white,
        borderRadius: '0 4px 4px 0',
        '&:hover': {
            backgroundColor: theme.palette.common.black
        }
    },
    input: {
        paddingLeft: 10,
        flexGrow: 1,
    }
}))


export default function Subscribe() {

    const classes = createStyles();

    return (
        <div className={classes.root}>
            <InputBase className={classes.input} placeholder="Subscribe with email" />
            <Button className={classes.btn}>Join Us</Button>
        </div>
    )
}
