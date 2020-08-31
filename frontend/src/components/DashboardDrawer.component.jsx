import React, { useState } from 'react'
import { Drawer, IconButton, makeStyles, Typography, Box, ListItemIcon, ListItem, ListItemText, List, fade, MenuList, MenuItem } from '@material-ui/core'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import ControlledAccordion from '../molecules/ControlledAccordion.mole';
import StopIcon from '@material-ui/icons/Stop';
import ControlledAccordionBlack from '../molecules/ControlledAccordion.variant.mole';
import { ReactComponent as DashIcon } from '../assets/svgs/rectangle.svg';
import { ReactComponent as TshirtIcon } from '../assets/svgs/tshirt.svg';
import PeopleIcon from '@material-ui/icons/People';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import { useRecoilState } from 'recoil';
import { dashDrawerState, dashboardRouteState } from '../recoil/atoms';
import clsx from 'clsx';
import AddIcon from '@material-ui/icons/Add';
import UpdateIcon from '@material-ui/icons/Update';
import ViewListIcon from '@material-ui/icons/ViewList';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import TimelapseIcon from '@material-ui/icons/Timelapse';
import WebIcon from '@material-ui/icons/Web';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import { routes } from '../utils';




const drawerWidth = 270;

const createStyles = makeStyles(theme => ({
    drawerHeader: {
        display: 'flex',
        color: theme.palette.common.white,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#1A1A27'
    },
    drawerRoot: {
        backgroundColor: '#1E1E2D',
        zIndex: 6
    },
    accordionPaper: {
        backgroundColor: '#1A1A27 !important',
        color: 'white',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    drawerClose: {
        width: theme.spacing(9),
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    white: {
        color: fade(theme.palette.primary.contrastText, .7),

    },
    menuItem: {
        '&:hover > $white': {
            color: theme.palette.primary.main,
        }
    }
}))



export default function DashboardDrawer() {
    const classes = createStyles();
    const [selected, setSelected] = useState('Dashboard');
    const [drawerOpen, setDrawerOpen] = useRecoilState(dashDrawerState)
    const [route,setRoute] = useRecoilState(dashboardRouteState);

    return (
        <Drawer
            className={
                clsx({
                    [classes.drawerOpen]: drawerOpen,
                    [classes.drawerClose]: !drawerOpen
                })
            }
            classes={{
                paper: clsx(classes.drawerRoot, {
                    [classes.drawerOpen]: drawerOpen,
                    [classes.drawerClose]: !drawerOpen
                })
            }}
            variant="permanent"
        >
            <div className={classes.drawerPaper}>
                <div style={{ width: drawerWidth }}>
                    <div className={classes.drawerHeader}>
                        <Box ml={2}>
                            <Typography style={{ fontWeight: 'bold' }} component="h5" align="center" variant="h5" color="inherit">
                                WooKie
                            </Typography>
                        </Box>
                        <IconButton onClick={() => setDrawerOpen(!drawerOpen)} color="primary">
                            <KeyboardArrowRightIcon />
                        </IconButton>
                    </div>
                    <Box mt={2}>
                        <ControlledAccordionBlack onClick={(title) => {
                            setSelected(title);
                            setRoute(routes.DASHBOARD)
                            }} 
                            selected={selected} 
                            title="Dashboard" 
                            startIcon={<DashIcon />} />
                        <ControlledAccordionBlack onClick={(title) => setSelected(title)} selected={selected} title="Products" startIcon={<TshirtIcon />}>
                            <MenuList color="textPrimary">
                                <MenuItem onClick={()=>setRoute(routes.CREATE_PRODUCT)} className={classes.menuItem} button={true} >
                                    <ListItemIcon className={classes.white}>
                                        <AddIcon />
                                    </ListItemIcon>
                                    <ListItemText className={classes.white}>
                                        Create A Product
                                </ListItemText>
                                </MenuItem>
                                <MenuItem className={classes.menuItem} button={true} >
                                    <ListItemIcon className={classes.white}>
                                        <UpdateIcon />
                                    </ListItemIcon>
                                    <ListItemText className={classes.white}>
                                        Update Product
                                </ListItemText>
                                </MenuItem>
                                <MenuItem className={classes.menuItem} button={true} >
                                    <ListItemIcon className={classes.white}>
                                        <ViewListIcon />
                                    </ListItemIcon>
                                    <ListItemText className={classes.white}>
                                        See All Products
                                </ListItemText>
                                </MenuItem>
                            </MenuList>
                        </ControlledAccordionBlack>
                        <ControlledAccordionBlack onClick={(title) => setSelected(title)} selected={selected} title="Management" startIcon={<PeopleIcon />}>
                            <MenuList color="textPrimary">
                                <MenuItem className={classes.menuItem} button={true} >
                                    <ListItemIcon className={classes.white}>
                                        <AddIcon />
                                    </ListItemIcon>
                                    <ListItemText className={classes.white}>
                                        Make Moderator
                                </ListItemText>
                                </MenuItem>
                                <MenuItem className={classes.menuItem} button={true} >
                                    <ListItemIcon className={classes.white}>
                                        <UpdateIcon />
                                    </ListItemIcon>
                                    <ListItemText className={classes.white}>
                                        Update User
                                    </ListItemText>
                                </MenuItem>
                                <MenuItem className={classes.menuItem} button={true} >
                                    <ListItemIcon className={classes.white}>
                                        <ViewListIcon />
                                    </ListItemIcon>
                                    <ListItemText className={classes.white}>
                                        See All Admins
                                </ListItemText>
                                </MenuItem>
                            </MenuList>
                        </ControlledAccordionBlack>
                        <ControlledAccordionBlack onClick={(title) => setSelected(title)} selected={selected} title="Orders" startIcon={<AddShoppingCartIcon />}>
                            <MenuList color="textPrimary">
                                <MenuItem className={classes.menuItem} button={true} >
                                    <ListItemIcon className={classes.white}>
                                        <NewReleasesIcon />
                                    </ListItemIcon>
                                    <ListItemText className={classes.white}>
                                        New Orders
                                </ListItemText>
                                </MenuItem>
                                <MenuItem className={classes.menuItem} button={true} >
                                    <ListItemIcon className={classes.white}>
                                        <AssignmentTurnedInIcon />
                                    </ListItemIcon>
                                    <ListItemText className={classes.white}>
                                        Completed Orders
                                    </ListItemText>
                                </MenuItem>
                                <MenuItem className={classes.menuItem} button={true} >
                                    <ListItemIcon className={classes.white}>
                                        <TimelapseIcon />
                                    </ListItemIcon>
                                    <ListItemText className={classes.white}>
                                        Pending Orders
                                </ListItemText>
                                </MenuItem>
                            </MenuList>
                            SettingsApplicationsIcon
                        </ControlledAccordionBlack>
                        <ControlledAccordionBlack onClick={(title) => setSelected(title)} selected={selected} title="Profile" startIcon={<PersonIcon />} />
                        <ControlledAccordionBlack onClick={(title) => setSelected(title)} selected={selected} title="Settings" startIcon={<SettingsIcon />}>
                            <MenuList color="textPrimary">
                                <MenuItem className={classes.menuItem} button={true} >
                                    <ListItemIcon className={classes.white}>
                                        <SettingsApplicationsIcon />
                                    </ListItemIcon>
                                    <ListItemText className={classes.white}>
                                        General Settings
                                </ListItemText>
                                </MenuItem>
                                <MenuItem className={classes.menuItem} button={true} >
                                    <ListItemIcon className={classes.white}>
                                        <WebIcon />
                                    </ListItemIcon>
                                    <ListItemText className={classes.white}>
                                        Site properties
                                </ListItemText>
                                </MenuItem>
                            </MenuList>
                        </ControlledAccordionBlack>
                    </Box>
                </div>
            </div>
        </Drawer>
    )
}
