import React from 'react'
import { makeStyles, Box, TextField, Grid, Paper, Typography, FormGroup, FormControlLabel, Switch, Checkbox, FormControl, FormLabel, Divider, IconButton, Popover, Button, ClickAwayListener } from '@material-ui/core'
import Color from '../molecules/Color.mole';
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';
import Hide from '../molecules/Hide.mole';

const createStyles = makeStyles(theme => ({
    root: {
        // display: 'flex',
        // flexGrow: 1,
        // margin: 'auto',
        // height: '100%',
        // width: '100%'
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
    const [colorPopoverOpen, setColorPopover] = useState(false);
    const [newColor, setNewColor] = useState({ name: null, value: null });

    return (
        <div className={classes.root}>
            <Box mt={2}>
                <Typography gutterBottom={3} align="center" component="h2" variant="h4">Create Product</Typography>
            </Box>
            <Box display="flex" justifyContent="center" mx="auto" position="relative">
                <Box style={{ width: '45%' }}>
                    <img style={{ width: '100%' }} src="https://cdn.shopify.com/s/files/1/0130/5041/3114/products/Featherweight_Pima_Hoodie_4_e2b11fbc-2853-488d-a075-f8bf63034128_2048x2048.jpg" alt="" />
                </Box>
                <Box width={400}>
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
                                                            <Color label={color.lebel} color={color.value} />
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
                </Box>
                <Hide open={colorPopoverOpen}>
                    <Box className={classes.center}>
                        <ClickAwayListener onClickAway={() => setColorPopover(false)}>
                            <Paper style={{ padding: 20 }}>
                                <Typography gutterBottom variant="h6">
                                    Give a color name or hex value
                        </Typography>
                                <Box>
                                    <TextField label="Color Label" onChange={e => setNewColor({ ...newColor, name: e.currentTarget.value })} />
                                    <Box width={10} display="inline-block" />
                                    <TextField label="Color Value" onChange={e => setNewColor({ ...newColor, value: e.currentTarget.value })} />
                                </Box>
                                <Box mt={2}>
                                    <Button onClick={() => {
                                        setColorPopover(false);
                                        if (newColor.name && newColor.value) {
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
            </Box>

        </div>
    )
}
