import React from 'react'
import { makeStyles, Box, TextField, Grid, Paper, Typography, FormGroup, FormControlLabel, Switch, Checkbox, FormControl, FormLabel, Divider, IconButton, Popover, Button, ClickAwayListener } from '@material-ui/core'
import Color from '../molecules/Color.mole';
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';
import Hide from '../molecules/Hide.mole';
import Carousel from './Carousel.component';
import ImageUpload from './ImageUpload.component';
import { useEffect } from 'react';
import ImageIcon from '@material-ui/icons/Image';

const createStyles = makeStyles(theme => ({
    root: {
        margin: 'auto',
        marginBottom: theme.spacing(4),
        width: '80%',
        [theme.breakpoints.down('sm')]: {
            width: "100vw"
        }
    },
    paper: {
        padding: theme.spacing(3),
        width: '100%'
    },
    center: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)'
    },
    image: {
        width: 200
    },
    labelFix: {
        marginTop: 3
    }
}));

const brands = [
    {
        value: 'nike',
        label: 'Nike'
    },
    {
        value: 'kelvin-klein',
        label: 'Kelvin Klein'
    },
    {
        value: 'wow-product',
        label: 'Wow Product'
    }
];

const catagories = [
    {
        value: 'men',
        label: 'Men'
    },
    {
        value: 'women',
        label: 'Women'
    },
    {
        value: 'child',
        label: 'Child'
    },
    {
        value: 'men-and-women',
        label: 'Men and Women'
    }
];

const types = [
    {
        value: 'shoe',
        label: 'Shoe'
    },
    {
        value: 'jacket',
        label: 'Jacket'
    },
    {
        value: 'jeans',
        label: 'Jeans'
    },
    {
        value: 'gown',
        label: 'Ladies Gown'
    }
];

const sizes = ['XS', 'X', 'M', 'L', 'XL'];
const cropSizes = [
    {
        value: [200, 500],
        label: 'Card'
    },
    {
        value: [400, 800],
        label: 'Preview'
    },
    {
        value: [40, 40],
        label: 'Tiny'
    }
]
const initialColors = [
    {
        value: 'red',
        label: 'Red'
    },
    {
        value: 'grey',
        label: 'Grey'
    },
    {
        value: 'black',
        label: 'Black'
    }
]

export default function CreateProduct() {

    const classes = createStyles();
    const [colors, setColors] = useState(initialColors);
    const [productImage, setProductImage] = useState([]);
    const [colorPopoverOpen, setColorPopover] = useState(false);
    const [newColor, setNewColor] = useState({ label: null, value: null });

    useEffect(() => {
        console.log(productImage)
    }, [productImage])

    const handleFile = (file, url) => {
        setProductImage([...productImage, { src: url }])
    }

    return (
        <div className={classes.root}>
            <Box mt={2}>
                <Typography gutterBottom={3} align="center" component="h2" variant="h4">Create Product</Typography>
            </Box>
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <Box mx="auto" width={400}>
                        {productImage.length === 0 ?
                            <Box height={470}>
                                <Paper>
                                    <Box justifyContent="center" alignItems="center" height={470} display="flex" m="auto">
                                        <Box>
                                            <ImageIcon style={{fontSize: 150}} />
                                            <Typography>
                                                Upload Product Image
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Paper>
                            </Box> :
                            <Carousel
                                component={
                                    <img width="100%" />
                                }
                                data={productImage}
                            />
                        }
                    </Box>
                    <Box mt={3} mx="auto" width={400}>
                        <Paper>

                            <Box p={3}>
                                <Box mb={2}>
                                    <FormControl>
                                        <FormLabel>Select Crop Sizes</FormLabel>
                                        <FormGroup row>
                                            {cropSizes.map(size => (
                                                <FormControlLabel
                                                    key={size.label}
                                                    classes={{ label: classes.labelFix }}
                                                    control={
                                                        <Checkbox color="primary" />
                                                    }
                                                    label={size.label}
                                                />
                                            ))}
                                        </FormGroup>
                                    </FormControl>
                                </Box>
                                <ImageUpload fullWidth onUpload={handleFile} />
                            </Box>
                        </Paper>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <TextField label="Product Name" fullWidth />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField label="Title" fullWidth />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField type="number" label="Price" fullWidth />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField type="number" label="Quantiry" fullWidth />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField type="number" label="Current Price" fullWidth />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField type="number" label="Base Price" fullWidth />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    select fullWidth
                                    SelectProps={{ native: true }}
                                    label="Brand"
                                >
                                    {brands.map(brand =>
                                        <option key={brand.value} value={brand.value}>{brand.label}</option>
                                    )}
                                </TextField>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField label="Product Code" fullWidth />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    select fullWidth
                                    SelectProps={{ native: true }}
                                    label="Catagory"
                                >
                                    {catagories.map(catagory =>
                                        <option key={catagory.value} value={catagory.value}>{catagory.label}</option>
                                    )}
                                </TextField>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    select fullWidth
                                    SelectProps={{ native: true }}
                                    label="Product Type"
                                >
                                    {types.map(type =>
                                        <option key={type.value} value={type.value}>{type.label}</option>
                                    )}
                                </TextField>
                            </Grid>
                            <Grid item xs={6}>
                                <Box mt={2}>
                                    <FormGroup>
                                        <FormControlLabel
                                            control={
                                                <Switch color="primary" />
                                            }
                                            label="Varient"
                                            labelPlacement="start"
                                            style={{ justifyContent: 'space-between', marginLeft: 1 }}

                                        />
                                    </FormGroup>
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField label="Varient Code" fullWidth />
                            </Grid>
                            <Grid item xs={12}>
                                <Divider />
                                <Box mt={1}>
                                    <FormControl>
                                        <FormLabel>Select Sizes</FormLabel>
                                        <FormGroup row>
                                            {sizes.map(size => (
                                                <FormControlLabel
                                                    key={size}
                                                    classes={{ label: classes.labelFix }}
                                                    control={
                                                        <Checkbox color="primary" />
                                                    }
                                                    label={size}
                                                />
                                            ))}
                                        </FormGroup>
                                    </FormControl>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Divider />
                                <Box mt={1}>
                                    <FormControl>
                                        <FormLabel>Select Colors</FormLabel>
                                        <FormGroup row>
                                            {colors.map(color => (
                                                <FormControlLabel
                                                    key={color.value}
                                                    control={
                                                        <Box mt={1} ml={1}>
                                                            <Color label={color.label} color={color.value} />
                                                        </Box>
                                                    }
                                                />
                                            ))}
                                            <Box style={{ marginLeft: -10 }}>
                                                <IconButton onClick={() => setColorPopover(true)}>
                                                    <AddIcon />
                                                </IconButton>
                                            </Box>
                                        </FormGroup>
                                    </FormControl>
                                </Box>
                            </Grid>
                        </Grid>

                        <Box mt={3}>
                            <Button color="primary" fullWidth variant="contained">Create Product</Button>
                        </Box>
                    </Paper>
                </Grid>
                <Hide open={colorPopoverOpen}>
                    <Box className={classes.center}>
                        <ClickAwayListener onClickAway={() => setColorPopover(false)}>
                            <Paper style={{ padding: 20 }}>
                                <Typography gutterBottom variant="h6">
                                    Give a color name or hex value
                        </Typography>
                                <Box>
                                    <TextField label="Color Label" onChange={e => setNewColor({ ...newColor, label: e.currentTarget.value })} />
                                    <Box width={10} display="inline-block" />
                                    <TextField label="Color Value" onChange={e => setNewColor({ ...newColor, value: e.currentTarget.value })} />
                                </Box>
                                <Box mt={2}>
                                    <Button onClick={() => {
                                        setColorPopover(false);
                                        if (newColor.label && newColor.value) {
                                            setColors([...colors, newColor])
                                        }
                                    }}
                                        color="primary"
                                        fullWidth variant="contained"
                                    >
                                        Submit
                                    </Button>
                                </Box>
                            </Paper>
                        </ClickAwayListener>
                    </Box>
                </Hide>
            </Grid>

        </div>
    )
}
