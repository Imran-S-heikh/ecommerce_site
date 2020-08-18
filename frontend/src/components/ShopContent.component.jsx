import React from 'react'
import { Typography, MenuList, MenuItem, Box, ListItemSecondaryAction, IconButton, Menu, Button, Popover, Paper, ButtonGroup } from '@material-ui/core'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import CropSquareIcon from '@material-ui/icons/CropSquare';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import { useRef } from 'react';
import { useState } from 'react';
import { assets } from '../utils';
import Showcase from './Showcase.component';
import ShopCard from '../molecules/ShopCard.mole';
import SortIcon from '@material-ui/icons/Sort';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { sideDrawerState } from '../recoil/atoms';


const showcaseItems = [
    {
        "rating": "4.6",
        "name": "Premier Cropped Skinny Jean", "brand": "GAP", "price": "$380.00",
        "image": assets.product[0]
    },
    {
        "rating": "4.571428571428571",
        "name": "East Hampton Fleece Hoodie", "brand": "GAP", "price": "$440.00",
        "image": assets.product[1]
    },
    {
        "rating": "5.0",
        "name": "Relaxed-Fit Cotton Shirt", "brand": "GUESS", "price": "$480.00",
        "image": assets.product[2]
    },
    {
        "rating": "0.0", "name": "Tailored Fit Mesh-Panel Polo",
        "brand": "ZARA", "price": "$400.00",
        "image": assets.product[3]
    },
    {
        "rating": "0.0",
        "name": "Slim Fit Cotton Oxford Shirt", "brand": "LEVI'S",
        "price": "$500.00",
        "image": assets.product[4]
    },
    {
        "rating": "0.0",
        "name": "Faxon Canvas Low-Top Sneaker", "brand": "ZARA", "price": "$460.00",
        "image": assets.product[5]
    },
    {
        "rating": "5.0",
        "name": "Viscose-Cashmere Scarf", "brand": "LACOSTE", "price": "$440.00",
        "image": assets.product[6]
    },
    {
        "rating": "5.0", "name": "Plaid Cotton Oxford Shirt", "brand": "LEVI'S",
        "price": "$20.00",
        "image": assets.product[7]
    }
]

const single = {xs: 12,sm:12,md:6,lg: 6}
const double = {xs: 12,sm:6,md:6,lg: 4}
const max = {xs: 12,sm:6,md:4,lg: 3}

export default function ShopContent() {

    const [anchorEl, setAnchorEl] = useState(null);
    const [breakPoints,setBreakPoints] = useState(max);
    const setSideBarOpen = useSetRecoilState(sideDrawerState)

    return (
        <div>
            <Box display="flex" justifyContent="space-between" className="">
                <Typography variant="h5">
                    Mens(19)
                </Typography>
                <Box display={{xs: 'none',md: 'block'}} className="">

                    <ButtonGroup>
                        <Button
                            onClick={e => setAnchorEl(e.currentTarget)}
                            endIcon={
                                <KeyboardArrowDownIcon />
                            }>
                            Featured
                        </Button>
                        <Button onClick={()=>setBreakPoints(single)}>
                            <CropSquareIcon />
                        </Button>
                        <Button onClick={()=>setBreakPoints(double)}>
                            <ViewModuleIcon />
                        </Button>
                        <Button onClick={()=>setBreakPoints(max)}>
                            <ViewComfyIcon />
                        </Button>
                    </ButtonGroup>
                </Box>
                <Box display={{xs: 'block',md: 'none'}}>
                    <Button 
                        startIcon={
                            <SortIcon/>
                        }
                        onClick={()=>setSideBarOpen(true)}
                    >
                        Filter
                    </Button>
                </Box>
            </Box>
            <Box mt={2}>
                <Showcase 
                    component={
                        <ShopCard width="100%"/>
                    }
                    items={showcaseItems}
                    title={null}
                    breakPoints={breakPoints}

                />
            </Box>
            <Popover anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }} anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
                <Paper>
                    <MenuList>
                        <MenuItem>Hello</MenuItem>
                        <MenuItem>Hello</MenuItem>
                        <MenuItem>Hello</MenuItem>
                    </MenuList>
                </Paper>
            </Popover>
        </div>
    )
}
