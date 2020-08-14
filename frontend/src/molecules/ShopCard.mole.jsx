import React from 'react'
import image from '../assets/Faxon_Chambray_Low-Top_Sneaker_9_600x.jpg'
import { Card, CardHeader, CardMedia, IconButton, CardActions, makeStyles, fade, CardActionArea, Typography, Button, CardContent, Box, Avatar, ButtonBase } from '@material-ui/core'
import VisibilityIcon from '@material-ui/icons/Visibility';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import Rating from '@material-ui/lab/Rating';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';

const createClasses = makeStyles(theme => ({
    actions: {
        display: 'flex',
        position: 'absolute',
        flexDirection: 'column',
        opacity: 0,
        right: 0,
        transition: 'opacity 300ms',
        zIndex: 1,

        '& > *': {
            marginLeft: '0 !important',
            backgroundColor: fade(theme.palette.grey[400], .5),
            marginBottom: 8,
            transition: 'all 300ms',
            '&:hover': {
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.common.white
            }

        },
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    container: {
        position: 'relative',
        margin: 'auto',
        '&:hover $actions': {
            opacity: 1
        },
        '&:hover $cartButton': {
            opacity: 1,
        }
    },
    brand: {
        fontSize: 12,
        color: theme.palette.grey[500],
        textAlign: 'center'
    },
    name: {
        fontSize: 12
    },
    price: {
        fontWeight: 'bold'
    },
    small: {
        width: theme.spacing(4),
        height: theme.spacing(4)
    },
    varientColor: {
        border: `2px solid transparent`,
        borderRadius: 4,
        transition: 'all 300ms',
        '&:hover': {
            border: `2px solid ${theme.palette.primary.main}`
        },
        '&:first-child': {
            borderColor: theme.palette.primary.main
        },
        '&:not(:last-child)': {
            marginRight: 3
        }
    },
    varientSize: {
        borderRadius: 2,
        transition: 'all 300ms',
        width: 25,
        height: 25,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white
        },
        '&:first-child': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white
        },
        '&:not(:last-child)': {
            marginRight: 3
        }
    },
    cartButton: {
        opacity: 0,
        marginTop: 15,
        transition: 'all 300ms',
        position: 'relative',

    },
    cardContent: {
        textAlign: 'center',
        backgroundColor: theme.palette.common.white,
        transition: 'all 300ms',
        paddingBottom: '0 !important',
        '$container:hover &': {
            [theme.breakpoints.up('sm')]: {
                transform: 'translateY(-50px)'
            }
        }
    },
    cardMedia: {
        height: 'auto',
        width: '100%',
        // [theme.breakpoints.down('xs')]: {
        //     height: 250,
        // }
    }
}))

export default function ShopCard({width= 280}) {

    const classes = createClasses()


    return (
        <Card className={classes.container} style={{width: width}}>
            <CardActions className={classes.actions} >
                <IconButton>
                    <VisibilityIcon />
                </IconButton>
                <IconButton>
                    <FavoriteIcon />
                </IconButton>
                <IconButton>
                    <CompareArrowsIcon />
                </IconButton>
            </CardActions>
            <CardActionArea>
                <CardMedia component="img" classes={{ media: classes.cardMedia }} image={image} />
            </CardActionArea>
            <CardContent className={classes.cardContent}>
                <Typography className={classes.brand}>
                    <span style={{ display: 'block' }}>Levis</span>
                    <Rating value={4} size="small" />
                </Typography>
                <Typography className={classes.name}>
                    Slim Fit Cotton Oxford Shirt
                </Typography>
                <Typography className={classes.price}>
                    $567
                </Typography>
                <Box >
                    <ButtonBase className={classes.varientColor}>
                        <Avatar variant="rounded" src={image} />
                    </ButtonBase>
                    <ButtonBase className={classes.varientColor}>
                        <Avatar variant="rounded" src={image} />
                    </ButtonBase>
                    <ButtonBase className={classes.varientColor}>
                        <Avatar variant="rounded" src={image} />
                    </ButtonBase>
                </Box>
                {/* <Box style={{display: 'flex',justifyContent: 'center',marginTop: 15}}>
                    <ButtonBase className={classes.varientSize}>
                        H
                    </ButtonBase>
                    <ButtonBase className={classes.varientSize}>
                        M
                    </ButtonBase>
                </Box>
                <Box style={{display: 'flex',justifyContent: 'center',marginTop: 15}}>
                    <ButtonBase className={classes.varientSize} style={{width: 'max-content',padding: '0 4px'}}>
                        cotton
                    </ButtonBase>
                    <ButtonBase className={classes.varientSize} style={{width: 'max-content',padding: '0 4px'}}>
                        silk
                    </ButtonBase>
                </Box> */}
                <Box display={{ xs: 'none', md: 'block' }} className={classes.cartButton}>
                    <Button style={{ position: 'absolute', width: 'max-content', transform: 'translate(-50%,0)' }} startIcon={<ShoppingBasketOutlinedIcon />} variant="contained" color="primary">Add To Cart</Button>
                </Box>
                <Box display={{ xs: 'block', md: 'none' }}  style={{ margin: '15px 0' }}>
                    <Button startIcon={<ShoppingBasketOutlinedIcon />} variant="contained" color="primary">Add To Cart</Button>
                    <Box>
                        <IconButton>
                            <VisibilityIcon />
                        </IconButton>
                        <IconButton>
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton>
                            <CompareArrowsIcon />
                        </IconButton>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    )
}
