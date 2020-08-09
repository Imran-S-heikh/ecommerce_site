import React from 'react'
import { Drawer, InputBase, Container, IconButton, makeStyles, Divider, Typography } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import { useState } from 'react';

const createStyles = makeStyles(theme => ({
    search: {
        position: 'relative'
    },
    searchIcon: {
        position: 'absolute',
        right: 10,
        zIndex: 1
    },
    input: {
        fontSize: 30,
        color: theme.palette.common.black,
        paddingRight: 60
    },
    content: {
        margin: '40px 0 40px 0'
    },
    icon:{ fontSize: 30 }
}))

export default function Search({ open }) {

    const classes = createStyles()
    const [searchKey,setSearchKey] = useState('');

    return (
        <Drawer open={true} anchor="top">
            <Container maxWidth="md">
                <div className={classes.content}>
                    <div style={{display: 'flex',flexDirection: 'row',justifyContent: 'space-between'}}>
                        <Typography style={{color: 'lightgray'}}>
                            What are you looking for?
                        </Typography>
                        <IconButton style={{marginRight: 15}}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <IconButton>
                                <SearchIcon className={classes.icon} />
                            </IconButton>
                        </div>
                        <InputBase onChange={e=>setSearchKey(e.target.value)} value={searchKey} placeholder="Search Products..." classes={{ root: classes.input }} fullWidth />
                    </div>
                    <Divider style={{ marginTop: 10 }} />
                </div>
            </Container>
        </Drawer>
    )
}
