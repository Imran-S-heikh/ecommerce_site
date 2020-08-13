import React from 'react'
import LinkGallaryItem from '../molecules/LinkGallaryItem.mole'
import { Grid } from '@material-ui/core'
import linkImg1 from '../assets/demo01_03_312x.jpg';
import linkImg2 from '../assets/demo01_04_312x.jpg';
import linkImg3 from '../assets/demo01_05_312x.jpg';
import linkImg4 from '../assets/demo01_06_312x.jpg';
import linkImg5 from '../assets/demo01_07_312x.jpg';
import linkImg6 from '../assets/demo01_08_644x.jpg';

export default function LinkGallary() {
    return (
        <div style={{ margin: 15 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Grid container spacing={2} >
                        <Grid item xs={12} sm={6}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <LinkGallaryItem image={linkImg1} />
                                </Grid>
                                <Grid item xs={12}>
                                    <LinkGallaryItem image={linkImg2} />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <LinkGallaryItem image={linkImg4} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <LinkGallaryItem image={linkImg3} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <LinkGallaryItem image={linkImg5} />
                        </Grid>
                        <Grid item xs={12}>
                            <LinkGallaryItem image={linkImg6} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
