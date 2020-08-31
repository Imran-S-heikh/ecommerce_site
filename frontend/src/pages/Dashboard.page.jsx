import React from 'react'
import { makeStyles, AppBar, Toolbar, Drawer, CssBaseline, Box, Paper, Typography, IconButton } from '@material-ui/core'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import ControlledAccordion from '../molecules/ControlledAccordion.mole';
import StopIcon from '@material-ui/icons/Stop';
import MenuIcon from '@material-ui/icons/Menu';
import DashboardDrawer from '../components/DashboardDrawer.component';
import clsx from 'clsx';
import { useRecoilState } from 'recoil';
import { dashDrawerState } from '../recoil/atoms';

const drawerWidth = 270;


const createStyles = makeStyles(theme => ({
    root: {
        display: 'flex'
    },

    contentRoot: {
        marginTop: 52,
        flexGrow: 1
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
        zIndex: 99999
    },
    menuIcon: {
        fontSize: 30
    }
}))



export default function Dashboard() {

    const classes = createStyles();
    const [dashDrawer, setDashDrawer] = useRecoilState(dashDrawerState);

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
                <Toolbar>
                    <Box display={dashDrawer ? 'none': 'block'}>
                        <IconButton onClick={() => setDashDrawer(true)}>
                            <MenuIcon className={classes.menuIcon} />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <DashboardDrawer />
            <div className={classes.contentRoot}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe alias sint modi tenetur esse facilis. Facilis, totam quis repudiandae nesciunt officia minus obcaecati blanditiis officiis sint vero explicabo a repellendus.
                </p>
            </div>
        </div>
    )
}
