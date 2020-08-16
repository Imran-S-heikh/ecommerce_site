import React from 'react'
import { makeStyles, ListItem, ListItemText, ListItemAvatar, ListItemSecondaryAction, Typography, IconButton } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import shoe from '../assets/shoe.jpg'



const createStyles = makeStyles(theme => ({
    color: {
        fontSize: 12,
        color: theme.palette.grey[500]
    },
    price: {
        fontWeight: 'bold'
    },
    priceContainer: {
        fontSize: 14
    }
}));

export default function PreviewCartItem() {

    const classes = createStyles();

    return (
        <ListItem ContainerComponent="div">
            <ListItemAvatar>
                <img style={{width: 80}} src={shoe} alt="shoe"/>
            </ListItemAvatar>
            <ListItemText style={{ width: 'max-content',padding: '0 30px' }}>
                <Typography>
                    Back Gown Issd
                </Typography>
                <Typography className={classes.color}>
                    Green
                </Typography>
                <Typography className={classes.priceContainer}>
                    1 x <span className={classes.price}>$680</span>
                </Typography>
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton>
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}
