import React from 'react'
import { makeStyles, Box, Tooltip,ButtonBase, fade } from '@material-ui/core'

const createStyles = makeStyles(theme => ({
    root: {
        backgroundColor: fade(theme.palette.primary.main,.3),
        width: 30,
        height: 30,
        display: 'flex',
        margin: 2,
        '& > *': {
            margin: 'auto'
        },
        '&:hover': {
           backgroundColor: theme.palette.primary.main,
           color: theme.palette.primary.contrastText
        }
    }
}))

export default function Size({onClick,size}) {

    const classes = createStyles();

    return (
        <ButtonBase onClick={onClick} className={classes.root}>
            {size}
        </ButtonBase>
    )
}
