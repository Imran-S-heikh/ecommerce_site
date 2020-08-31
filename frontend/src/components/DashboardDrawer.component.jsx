import React, { useState } from 'react'
import { Drawer, IconButton, makeStyles, Typography, Box } from '@material-ui/core'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import ControlledAccordion from '../molecules/ControlledAccordion.mole';
import StopIcon from '@material-ui/icons/Stop';
import ControlledAccordionBlack from '../molecules/ControlledAccordion.variant.mole';
import  { ReactComponent as DashIcon } from '../assets/svgs/rectangle.svg';
import  { ReactComponent as TshirtIcon } from '../assets/svgs/tshirt.svg';
import PeopleIcon from '@material-ui/icons/People';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import { useRecoilState } from 'recoil';
import { dashDrawerState } from '../recoil/atoms';
import clsx from 'clsx';




const drawerWidth = 270;

const createStyles = makeStyles(theme=>({
    drawerHeader: {
        display: 'flex',
        color: theme.palette.common.white,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#1A1A27'
    },
    drawerRoot: {
        backgroundColor: '#1E1E2D'
    },
    accordionPaper: {
        backgroundColor: '#1A1A27 !important',
        color: 'white',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width',{
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }) 
    },
    drawerClose: {
        width: theme.spacing(9),
        overflowX: 'hidden',
        transition: theme.transitions.create('width',{
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    }
}))



export default function DashboardDrawer() {
    const classes = createStyles();
    const [selected,setSelected] = useState('Dashboard');
    const [drawerOpen,setDrawerOpen] = useRecoilState(dashDrawerState)

    return (
        <Drawer 
            className={
                clsx({
                        [classes.drawerOpen]: drawerOpen,
                        [classes.drawerClose]: !drawerOpen
                })
            } 
            classes={{paper: clsx(classes.drawerRoot,{
                [classes.drawerOpen]: drawerOpen,
                [classes.drawerClose]: !drawerOpen
            })}}
            variant="permanent" 
        >
        <div className={classes.drawerPaper}>
            <div style={{width: drawerWidth}}>
                <div className={classes.drawerHeader}>
                    <Typography style={{ fontWeight: 'bold' }} component="h5" align="center" variant="h5" color="inherit">
                        WooKie
                    </Typography>
                    <IconButton onClick={()=>setDrawerOpen(!drawerOpen)} color="primary">
                        <KeyboardArrowRightIcon />
                    </IconButton>
                </div>
                <Box mt={2}>
                    <ControlledAccordionBlack onClick={(title)=>setSelected(title)} selected={selected} title="Dashboard" startIcon={<DashIcon/>}>
                        <p>Thsi is p</p>
                    </ControlledAccordionBlack>
                    <ControlledAccordionBlack onClick={(title)=>setSelected(title)} selected={selected} title="Products" startIcon={<TshirtIcon/>}>
                        <p>Thsi is p</p>
                    </ControlledAccordionBlack>
                    <ControlledAccordionBlack onClick={(title)=>setSelected(title)} selected={selected} title="Management" startIcon={<PeopleIcon/>}>
                        <p>Thsi is p</p>
                    </ControlledAccordionBlack>
                    <ControlledAccordionBlack onClick={(title)=>setSelected(title)} selected={selected} title="Orders" startIcon={<AddShoppingCartIcon/>}>
                        <p>Thsi is p</p>
                    </ControlledAccordionBlack>
                    <ControlledAccordionBlack onClick={(title)=>setSelected(title)} selected={selected} title="Profile" startIcon={<PersonIcon/>}>
                        <p>Thsi is p</p>
                    </ControlledAccordionBlack>
                    <ControlledAccordionBlack onClick={(title)=>setSelected(title)} selected={selected} title="Settings" startIcon={<SettingsIcon/>}>
                        <p>Thsi is p</p>
                    </ControlledAccordionBlack>
                </Box>
            </div>
        </div>
    </Drawer>
    )
}
