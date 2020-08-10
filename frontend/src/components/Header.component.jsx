import React, { useState } from 'react'
import { AppBar, Toolbar, IconButton, makeStyles, MenuList, MenuItem, Container, Menu, ClickAwayListener, Box, Tooltip } from '@material-ui/core'
import logo from '../assets/logo.png'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import PersonIcon from '@material-ui/icons/Person';
import TuneIcon from '@material-ui/icons/Tune';
import Search from '../molecules/Search.mole';
import { useRecoilState } from 'recoil';
import { searchOpenState, mainDrawerState } from '../recoil/atoms';
import NavMenu from '../molecules/NavMenu.mole';
import MenuIcon from '@material-ui/icons/Menu';
import MainDrawer from '../molecules/MainDrawer.mole';

const createStyle = makeStyles(theme => ({
    mainHeader: {
        backgroundColor: theme.palette.common.white,
        display: 'flex',
        flexDirection: 'row'
    },
    regular: {
        minHeight: 52
    },
    list: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'end',
        alignItems: 'center',
        [theme.breakpoints.up('md')]: {
            flexGrow: 1
        }
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down('md')]: {
            justifyContent: 'space-between'
        }
    },
    icon: {
        fontSize: 25
    },
    logo: {
        [theme.breakpoints.down('md')]: {
            margin: 'auto',
            marginBottom: 18,

        }
    }

}));


export default function Header() {

    const classes = createStyle();

    const [searchOpen, setSearchOpen] = useRecoilState(searchOpenState);
    const [drawerOpen, setDrawerOpen] = useRecoilState(mainDrawerState);
    const [anchorEl, setAnchorEl] = useState(null);


    return (
        <React.Fragment>
            <AppBar className={classes.mainHeader} >
                <Container maxWidth="lg" className={classes.container}>
                    <Box display={{ xs: 'block', md: 'none' }}>
                        <IconButton onClick={() => setDrawerOpen(true)}>
                            <MenuIcon className={classes.icon} />
                        </IconButton>
                    </Box>
                    <Toolbar classes={{ regular: classes.regular }}>
                        <img className={classes.logo} src={logo} />
                    </Toolbar>
                    <Box display={{ xs: 'none', md: 'flex' }}>
                        <NavMenu />
                    </Box>
                    <div className={[classes.list]}>
                        <div className="">
                            <Tooltip title="Search" arrow>
                                <IconButton onClick={() => setSearchOpen(!searchOpen)}>
                                    <SearchIcon className={classes.icon} />
                                </IconButton>
                            </Tooltip>
                        </div>
                        <div className="">
                            <Tooltip title="Cart" arrow>
                                <IconButton>
                                    <ShoppingBasketIcon className={classes.icon} />
                                </IconButton>
                            </Tooltip>
                        </div>
                        <Box display={{ xs: 'none', md: 'block' }} className="">
                            <Tooltip title="My Account" arrow>
                                <IconButton>
                                    <PersonIcon className={classes.icon} />
                                </IconButton>
                            </Tooltip>
                        </Box>
                        <Box display={{ xs: 'none', md: 'block' }} style={{ position: 'relative' }}>
                            <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
                                <Tooltip title="Settings" arrow>
                                    <IconButton onClick={e => setAnchorEl(e.currentTarget)}>
                                        <TuneIcon className={classes.icon} />
                                    </IconButton>
                                </Tooltip>
                            </ClickAwayListener>
                            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)}>
                                <MenuItem onClick={(e) => console.log(e)}>Hello</MenuItem>
                                <MenuItem>Hello</MenuItem>
                            </Menu>
                        </Box>
                    </div>
                </Container>
            </AppBar>
            <Search />
            <MainDrawer />
        </React.Fragment>
    )
}
