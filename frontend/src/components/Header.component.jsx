import React, { useState } from 'react'
import { AppBar, Toolbar, IconButton, makeStyles, MenuItem, Container, ClickAwayListener, Box, Tooltip, Badge, List, ListItem, Menu, MenuList, ListItemIcon, Typography, ListItemText } from '@material-ui/core'
import logo from '../assets/logo.png'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import PersonIcon from '@material-ui/icons/Person';
import TuneIcon from '@material-ui/icons/Tune';
import Search from '../molecules/Search.mole';
import { useRecoilState } from 'recoil';
import { searchOpenState, mainDrawerState, cartDrawerState } from '../recoil/atoms';
import NavMenu from '../molecules/NavMenu.mole';
import MenuIcon from '@material-ui/icons/Menu';
import MainDrawer from '../molecules/MainDrawer.mole';
import MenuContainer from '../molecules/MenuContainer.mole';
import CartPreview from '../molecules/CartPreview.mole';
import EnhancedEncryptionIcon from '@material-ui/icons/EnhancedEncryption';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Link, useHistory } from 'react-router-dom';


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
        justifyContent: 'flex-end',
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
        fontSize: 25,

    },
    button: {
        '&:hover $icon,&:focus': {
            color: theme.palette.primary.main
        }
    },
    logo: {

        [theme.breakpoints.down('md')]: {
            margin: 'auto',
            marginBottom: 18,

        }
    },
    listIcon: {
        minWidth: 'max-content',
        marginRight: 10
    }

}));


export default function Header() {

    const classes = createStyle();

    const [searchOpen, setSearchOpen] = useRecoilState(searchOpenState);
    const [drawerOpen, setDrawerOpen] = useRecoilState(mainDrawerState);
    const [cartDrawerOpen, setCartDrawerOpen] = useRecoilState(cartDrawerState);
    const [settingsOpen, setSettingsOpen] = useState(false);
    const [personOpen, setPersonOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);


    const history = useHistory();


    return (
        <React.Fragment>
            <AppBar className={classes.mainHeader}>
                <Container maxWidth="lg" className={classes.container}>
                    <Box display={{ xs: 'block', md: 'none' }}>
                        <IconButton className={classes.button} onClick={() => setDrawerOpen(true)}>
                            <MenuIcon className={classes.icon} />
                        </IconButton>
                    </Box>
                    <Toolbar classes={{ regular: classes.regular }}>
                        <img className={classes.logo} src={logo} alt="logo" />
                    </Toolbar>
                    <Box display={{ xs: 'none', md: 'flex' }}>
                        <NavMenu />
                    </Box>
                    <div className={classes.list}>
                        <div className="">
                            <Tooltip title="Search" arrow>
                                <IconButton className={classes.button} onClick={() => setSearchOpen(!searchOpen)}>
                                    <SearchIcon className={classes.icon} />
                                </IconButton>
                            </Tooltip>
                        </div>
                        <Box display={{ xs: 'none', md: 'block' }} style={{ position: 'relative' }}>
                            <ClickAwayListener onClickAway={() => setCartOpen(false)}>
                                <Tooltip title="Cart" arrow>
                                    <IconButton onClick={() => setCartOpen(!cartOpen)} className={classes.button}>
                                        <Badge badgeContent={4}  color="primary">
                                            <ShoppingBasketIcon className={classes.icon} />
                                        </Badge>
                                    </IconButton>
                                </Tooltip>
                            </ClickAwayListener>
                            <MenuContainer open={cartOpen}>
                                <CartPreview />
                            </MenuContainer>
                        </Box>
                        <Box display={{ xs: 'block', md: 'none' }}>
                            <Tooltip title="Cart" arrow>
                                <IconButton onClick={() => setCartDrawerOpen(!cartOpen)} className={classes.button}>
                                    <Badge badgeContent={4} color="primary">
                                        <ShoppingBasketIcon className={classes.icon} />
                                    </Badge>
                                </IconButton>
                            </Tooltip>
                        </Box>

                        <Box display={{ xs: 'none', md: 'block' }} style={{ position: 'relative' }}>
                            <ClickAwayListener onClickAway={() => setPersonOpen(false)}>
                                <Tooltip title="My Account" arrow>
                                    <IconButton className={classes.button} onClick={() => setPersonOpen(!personOpen)}>
                                        <PersonIcon className={classes.icon} />
                                    </IconButton>
                                </Tooltip>
                            </ClickAwayListener>
                            <MenuContainer open={personOpen}>
                                <MenuList dense>
                                    <MenuItem onClick={()=>history.push('/signin')}>
                                        <ListItemIcon classes={{root: classes.listIcon}}>
                                            <EnhancedEncryptionIcon/>
                                        </ListItemIcon>
                                        <ListItemText>
                                            Login
                                        </ListItemText>
                                    </MenuItem>
                                    <MenuItem onClick={()=>history.push('/signup')}>
                                        <ListItemIcon classes={{root: classes.listIcon}}>
                                            <PersonIcon/>
                                        </ListItemIcon>
                                        <ListItemText>
                                            Register
                                        </ListItemText>
                                    </MenuItem>
                                    <MenuItem onClick={()=>history.push('/cart')}>
                                        <ListItemIcon classes={{root: classes.listIcon}}>
                                            <ShoppingBasketIcon/>
                                        </ListItemIcon>
                                        <ListItemText>
                                            View Cart
                                        </ListItemText>
                                    </MenuItem>
                                    <MenuItem onClick={()=>history.push('/signin')}>
                                        <ListItemIcon classes={{root: classes.listIcon}}>
                                            <FavoriteBorderIcon/>
                                        </ListItemIcon>
                                        <ListItemText>
                                            Wish List
                                        </ListItemText>
                                    </MenuItem>
                                </MenuList>
                            </MenuContainer>
                        </Box>
                        <Box display={{ xs: 'none', md: 'block' }} style={{ position: 'relative' }}>
                            <ClickAwayListener onClickAway={() => setSettingsOpen(false)}>
                                <Tooltip title="Settings" arrow>
                                    <IconButton className={classes.button} onClick={() => setSettingsOpen(!settingsOpen)}>
                                        <TuneIcon className={classes.icon} />
                                    </IconButton>
                                </Tooltip>
                            </ClickAwayListener>
                            <MenuContainer open={settingsOpen}>
                                <MenuItem onClick={(e) => console.log(e)}>Hello</MenuItem>
                                <MenuItem>Hello</MenuItem>
                            </MenuContainer>
                        </Box>
                    </div>
                </Container>
            </AppBar>
            <Search />
            <MainDrawer open={drawerOpen} setOpen={setDrawerOpen}>
                <NavMenu styleProp={{ flxd: 'column', py: 10, fz: 12 }} showIcon={true} />
            </MainDrawer>
            <MainDrawer open={cartDrawerOpen} setOpen={setCartDrawerOpen}>
                <CartPreview />
            </MainDrawer>
            <div style={{width: '100%',height: 52,visibility: 'hidden'}}>!!Fixer!!</div>
        </React.Fragment>
    )
}
