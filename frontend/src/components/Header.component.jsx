import React, { useState } from 'react'
import { AppBar, Toolbar, IconButton, makeStyles, MenuList, MenuItem, Container, Menu, ClickAwayListener } from '@material-ui/core'
import logo from '../assets/logo.png'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import PersonIcon from '@material-ui/icons/Person';
import TuneIcon from '@material-ui/icons/Tune';
import Search from '../molecules/Search.mole';
import { useRecoilState } from 'recoil';
import { searchOpenState } from '../recoil/atoms';

const createStyle = makeStyles(theme => ({
    mainHeader: {
        backgroundColor: theme.palette.common.white,
        display: 'flex',
        flexDirection: 'row'
    },
    regular: {
        minHeight: 52
    },
    listItem: {
        color: '#191919',
        fontSize: 14
    },
    list: {
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1
    },
    container: {
        display: 'flex',
        flexDirection: 'row'
    },
    icon: {
        fontSize: 25
    },
    selected: {
        color: theme.palette.primary.main,
        '&$selected': {
            backgroundColor: 'transparent'
        }
    }
}));

const navItems = ['home', 'shop', 'blog', 'women', 'men']

export default function Header() {

    const classes = createStyle();

    const [searchOpen, setSearchOpen] = useRecoilState(searchOpenState);
    const [selected, setSelected] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleNavClick = (event, index) => {
        setSelected(index)
    }


    return (
        <React.Fragment>
            <AppBar className={classes.mainHeader} >
                <Container maxWidth="lg" className={classes.container}>
                    <Toolbar classes={{ regular: classes.regular }}>
                        <img src={logo} />
                    </Toolbar>
                    <MenuList className={classes.list}>
                        {navItems.map((item, i) =>
                            <MenuItem
                                key={i}
                                onClick={e => handleNavClick(e, i)}
                                className={[classes.listItem]}
                                selected={i === selected}
                                classes={{ selected: classes.selected }}
                            >
                                {item.toUpperCase()}
                            </MenuItem>
                        )}
                    </MenuList>
                    <div className={[classes.list]} style={{ justifyContent: 'end' }}>
                        <div className="">
                            <IconButton onClick={() => setSearchOpen(!searchOpen)}>
                                <SearchIcon className={classes.icon} />
                            </IconButton>
                        </div>
                        <div className="">
                            <IconButton>
                                <ShoppingBasketIcon className={classes.icon} />
                            </IconButton>
                        </div>
                        <div className="">
                            <IconButton>
                                <PersonIcon className={classes.icon} />
                            </IconButton>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
                                <IconButton onClick={e => setAnchorEl(e.currentTarget)}>
                                    <TuneIcon className={classes.icon} />
                                </IconButton>
                            </ClickAwayListener>
                            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)}>
                                <MenuItem onClick={(e)=>console.log(e)}>Hello</MenuItem>
                                <MenuItem>Hello</MenuItem>
                            </Menu>
                        </div>
                    </div>
                </Container>
            </AppBar>
            <Search />
        </React.Fragment>
    )
}
