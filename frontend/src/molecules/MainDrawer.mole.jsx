import React from 'react'
import { useRecoilState } from 'recoil'
import { mainDrawerState } from '../recoil/atoms'
import { Drawer, makeStyles, ClickAwayListener, Divider, Button, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import NavMenu from './NavMenu.mole';

const createStyles = makeStyles(theme => ({
    mainContainer: {
        width: 270
    },
    container: {
        margin: 10
    },
    closeButton: {
        color: theme.palette.grey[400]
    }
    
}))

export default function MainDrawer() {
    const classes = createStyles();
    const [drawerOpen, setDrawerOpen] = useRecoilState(mainDrawerState);

    return (
        <Drawer open={drawerOpen}>
            <ClickAwayListener onClickAway={()=>setDrawerOpen(false)}>
                <div className={classes.mainContainer} >
                    <div className={classes.container}>
                        <Button onClick={()=>setDrawerOpen(false)} startIcon={<CloseIcon/>} fullWidth className={classes.closeButton} >
                            Close
                        </Button>
                    </div>
                    <Divider/>
                    <div className={classes.container}>
                        <NavMenu styleProp={{flxd: 'column',py: 10, fz: 12}} showIcon={true}/>
                    </div>
                </div>
            </ClickAwayListener>
        </Drawer>
    )
}
