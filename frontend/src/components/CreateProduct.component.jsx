import React from 'react'
import { makeStyles, Box, TextField, Grid, Paper, Typography } from '@material-ui/core'

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
]

export default function CreateProduct() {

    const classes = createStyles()

    return (
        <div className={classes.root}>
            <Box mt={2}>
                <Typography gutterBottom={3} align="center" component="h2" variant="h4">Create Product</Typography>
            </Box>
            <Box display="flex" justifyContent="center" mx="auto">
                <Box style={{width: '45%'}}>
                    <img style={{width: '100%'}} src="https://cdn.shopify.com/s/files/1/0130/5041/3114/products/Featherweight_Pima_Hoodie_4_e2b11fbc-2853-488d-a075-f8bf63034128_2048x2048.jpg" alt=""/>
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
                                    SelectProps={{native: true}} 
                                    label="Brand"  
                                >
                                    {brands.map(brand=>
                                        <option key={brand.value} value={brand.value}>{brand.label}</option>
                                    )}
                                </TextField>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField label="Product Code" fullWidth />
                            </Grid>
                            
                        </Grid>
                    </Paper>
                </Box>
            </Box>
        </div>
    )
}
