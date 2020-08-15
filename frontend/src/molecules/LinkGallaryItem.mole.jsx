import React from 'react'
import { Button, makeStyles, Box } from '@material-ui/core'

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
        '$container:hover &': {
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
    },
    hoverClass: {
        opacity: 0,
        transition: 'all 300ms',
        '$container:hover &': {
            opacity: 1
        }
    }
}))

export default function LinkGallaryItem({ image, children,hover }) {

    const classes = createStyles()

    return (
        <div className={classes.container}>
            <img src={image} className={classes.img} alt="" />
            <Box className={[classes.center,hover && classes.hoverClass]}>
                {children ? children : <Button color="primary"  variant="contained">Women</Button>}
            </Box>
        </div>
    )
}
