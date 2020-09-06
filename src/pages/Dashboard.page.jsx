import React from 'react'
import { makeStyles, AppBar, Toolbar, Drawer, CssBaseline, Box, Paper, Typography, IconButton, useTheme, Avatar, Badge } from '@material-ui/core'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import ControlledAccordion from '../molecules/ControlledAccordion.mole';
import StopIcon from '@material-ui/icons/Stop';
import MenuIcon from '@material-ui/icons/Menu';
import DashboardDrawer from '../components/DashboardDrawer.component';
import clsx from 'clsx';
import { useRecoilState } from 'recoil';
import { dashDrawerState, searchOpenState } from '../recoil/atoms';
import { useEffect } from 'react';
import DashboardRoutes from '../components/DashboardRoutes.component';
import { assets } from '../utils';
import { green } from '@material-ui/core/colors';
import SearchIcon from '@material-ui/icons/Search';
import Search from '../molecules/Search.mole';

const drawerWidth = 270;


const createStyles = makeStyles(theme => ({
    root: {
        display: 'flex'
    },

    contentRoot: {
        flexGrow: 1,
        marginTop: 60
    },
    shift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    appBar: {
        zIndex: 8
    },
    menuIcon: {
        fontSize: 30
    },
    toolbarRegular: {
        minHeight: 50
    },
    badgeColor: {
        backgroundColor: theme.palette.success.light,
        top: 6
    },
    avatar: {
        height: theme.spacing(4),
        width: theme.spacing(4)
    },
    searchIcon: {
        '&:hover': {
            color: theme.palette.primary.main
        }
    }
}))



export default function Dashboard() {

    const classes = createStyles();
    const [dashDrawer, setDashDrawer] = useRecoilState(dashDrawerState);
    const [searchOpen, setSearchOpen] = useRecoilState(searchOpenState);


    const theme = useTheme();

    useEffect(() => {
        theme.palette.type = 'dark'
    }, []);

    return (
        <div className={classes.root}>
            <AppBar
                position="fixed"
                className={clsx({
                    [classes.shift]: dashDrawer,
                    [classes.appBar]: !dashDrawer
                })}
                color="inherit"

            >
                <Toolbar classes={{ regular: classes.toolbarRegular }}>
                    <Box display="flex" justifyContent="space-between" flexGrow={1}>
                        <Box display={dashDrawer ? 'none' : 'block'}>
                            <IconButton onClick={() => setDashDrawer(true)}>
                                <MenuIcon className={classes.menuIcon} />
                            </IconButton>
                        </Box>
                        <Box ml="auto">
                            <IconButton onClick={()=>setSearchOpen(true)} className={classes.searchIcon}>
                                <SearchIcon/>
                            </IconButton>
                            <IconButton>
                                <Badge classes={{badge: classes.badgeColor}} variant="dot" size>
                                    <Avatar className={classes.avatar} src={assets.avatar[0]} />
                                </Badge>
                            </IconButton>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
            <DashboardDrawer />
            <div className={classes.contentRoot}>
                <DashboardRoutes />
            </div>
            {/* <Search/> */}
        </div>
    )
}
