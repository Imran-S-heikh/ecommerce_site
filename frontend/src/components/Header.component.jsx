import React, { useState } from 'react'
import { AppBar, Toolbar, IconButton, makeStyles, MenuList, MenuItem, Container } from '@material-ui/core'
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
    }
}))

export default function Header() {

    const classes = createStyle();

    const [searchOpen,setSearchOpen] = useRecoilState(searchOpenState);


    return (
        <Container maxWidth="lg">
            <AppBar className={classes.mainHeader} >
            <Toolbar classes={{ regular: classes.regular }}>
                <img src={logo} />
            </Toolbar>
            <MenuList className={classes.list}>
                <MenuItem className={classes.listItem}>
                    Home
                </MenuItem>
                <MenuItem className={classes.listItem}>
                    Shop
                </MenuItem>
                <MenuItem className={classes.listItem}>
                    Blog
                </MenuItem>
                <MenuItem className={classes.listItem}>
                    Women
                </MenuItem>
                <MenuItem className={classes.listItem}>
                    Men
                </MenuItem>
            </MenuList>
            <MenuList className={{...classes.list,alignSelf: 'end'}}>
                <IconButton onClick={()=>setSearchOpen(!searchOpen)}>
                    <SearchIcon />
                </IconButton>
                <IconButton>
                    <ShoppingBasketIcon />
                </IconButton>
                <IconButton>
                    <PersonIcon />
                </IconButton>
                <IconButton>
                    <TuneIcon />
                </IconButton>
            </MenuList>
        </AppBar>
        <Search/>
        </Container>
    )
}
