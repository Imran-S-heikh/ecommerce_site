import React from 'react'
import { Grid, Container, Box, Breadcrumbs, Link, makeStyles } from '@material-ui/core'
import Sidebar from '../components/Sidebar.component'
import ShopContent from '../components/ShopContent.component'
import { useState } from 'react'
import MainDrawer from '../molecules/MainDrawer.mole'
import { useRecoilState } from 'recoil'
import { sideDrawerState } from '../recoil/atoms'

const createStyles = makeStyles(theme => ({
    sideBar: {
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    }
}))

export default function Shop() {

    const classes = createStyles()
    const [sideBarOpen, setSideBarOpen] = useRecoilState(sideDrawerState);

    return (
        <div>
            <Container maxWidth="lg">
                <Box my={3}>
                    <Breadcrumbs>
                        <Link color="inherit">
                            Home
                            </Link>
                        <Link color="inherit">
                            Treanding
                            </Link>
                        <Link color="textPrimary">
                            Men Hoody
                            </Link>
                    </Breadcrumbs>
                </Box>
                <Grid container spacing={2}>
                    <Grid className={classes.sideBar} item xs={0} md={2}>
                        <Box mt={6}>
                            <Sidebar />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={10}>
                        <ShopContent />
                    </Grid>
                </Grid>
            </Container>
            <MainDrawer open={sideBarOpen} setOpen={setSideBarOpen}>
                <Sidebar />
            </MainDrawer>
        </div>
    )
}
