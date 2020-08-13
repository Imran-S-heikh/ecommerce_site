import React from 'react'
import { Button, makeStyles } from '@material-ui/core'

const createStyles = makeStyles(theme => ({
    center: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        zIndex: 2
    },
    img: {
        width: '100%', 
        height: '100%',
        transition: 'all 300ms',
        '$container:hover &':{
            transform: 'scale(1.3)'
        },
    },
    container: {
        position: 'relative',
        overflow: 'hidden',
        '&:before': {
            content: `''`,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0)',
            zIndex: 1,
            position: 'absolute',
            transition: 'all 300ms',

        },
        '&:hover': {
            '&:before': {
                backgroundColor: 'rgba(0,0,0,.5)',
            }
        }
    }
}))

export default function LinkGallaryItem({ image }) {

    const classes = createStyles()

    return (
        <div className={classes.container}>
            <img src={image} className={classes.img} alt="" />
            <Button color="primary" className={classes.center} variant="contained">Women</Button>
        </div>
    )
}
