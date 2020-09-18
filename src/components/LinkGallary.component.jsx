import React from 'react'
import LinkGallaryItem from '../molecules/LinkGallaryItem.mole'
import { Box, Grid } from '@material-ui/core'
import link_image from '../assets/link_image.jpg';
import link_long from '../assets/link_long.jpg';
import link_hori from '../assets/link_hori.jpg';

export default function LinkGallary() {
    return (
        <div style={{ margin: 15 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Grid container spacing={2} >
                        <Grid item xs={12} sm={6}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <LinkGallaryItem image={link_image} />
                                </Grid>
                                <Grid item xs={12}>
                                    <LinkGallaryItem image={link_image} />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <LinkGallaryItem image={link_long} height={260*2 + 15} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <LinkGallaryItem image={link_image} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <LinkGallaryItem image={link_image} />
                        </Grid>
                        <Grid item xs={12}>
                            {/* <Box maxHeight={260}> */}
                                <LinkGallaryItem image={link_hori} />
                            {/* </Box> */}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
