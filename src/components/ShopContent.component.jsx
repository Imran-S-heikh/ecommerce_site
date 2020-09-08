import React from 'react'
import { Typography, MenuList, MenuItem, Box, ListItemSecondaryAction, IconButton, Menu, Button, Popover, Paper, ButtonGroup } from '@material-ui/core'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import CropSquareIcon from '@material-ui/icons/CropSquare';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import { useRef } from 'react';
import { useState } from 'react';
import { assets, checkStatus } from '../utils';
import Showcase from './Showcase.component';
import ShopCard from '../molecules/ShopCard.mole';
import SortIcon from '@material-ui/icons/Sort';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { sideDrawerState } from '../recoil/atoms';
import LazySkeleton from './LazySkeleton.component';
import { useEffect } from 'react';
import { getProducts } from '../request/product.request';


const xxx = [
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
    const [shopItems,setShopItems] = useState([]);

    useEffect(()=>{
        // const fetchProducts = async ()=>{
        //     const response = await getProducts();
        //     if(checkStatus(response)){
        //         setShopItems(response.data.products)
        //         console.log(response)
        //     }
        // }
        // fetchProducts()
        setShopItems(
            [
                {
                    "rating": "4.5",
                    "name": "Premier Cropped Skinny Jean", "brand": "GAP", "price": "380.00",
                    "image": {
                        "small": [assets.product[0]],
                        "card": [assets.product[0]],
                        "original": [assets.product[0]]
                    },
                    _id: "8374832fd347",
                    "currentPrice": 445,
                    "basePrice": 330,
                    "productType": "jeans",
                    "catagory": "Men",
                    "productCode": "ML--oo",
                    "title": "The best Product IN This current World",
                    "selectedSize": ['X', 'M', 'L'],
                    "varient": true,
                    "varientCode": "ML"
                },
                {
                    "rating": "3.5",
                    "name": "East Hampton Fleece Hoodie", "brand": "GAP", "price": "440.00",
                    "image": {
                        "small": [assets.product[1]],
                        "card": [assets.product[1]],
                        "original": [assets.product[1]]
                    },
                    _id: "8374832sf9347",
                    "currentPrice": 445,
                    "basePrice": 330,
                    "productType": "jeans",
                    "catagory": "Men",
                    "productCode": "ML--oo",
                    "title": "The best Product IN This current World",
                    "selectedSize": ['X', 'M', 'L'],
                    "varient": true,
                    "varientCode": "ML"
                },
                {
                    "rating": "5.0",
                    "name": "Relaxed-Fit Cotton Shirt", "brand": "GUESS", "price": "480.00",
                    "image": {
                        "small": [assets.product[2]],
                        "card": [assets.product[2]],
                        "original": [assets.product[2]]
                    },
                    _id: "83748wer329347",
                    "currentPrice": 445,
                    "basePrice": 330,
                    "productType": "jeans",
                    "catagory": "Men",
                    "productCode": "ML--oo",
                    "title": "The best Product IN This current World",
                    "selectedSize": ['X', 'M', 'L'],
                    "varient": true,
                    "varientCode": "ML"
                },
                {
                    "rating": "4.0", "name": "Tailored Fit Mesh-Panel Polo",
                    "brand": "ZARA", "price": "400.00",
                    "image": {
                        "small": [assets.product[3]],
                        "card": [assets.product[3]],
                        "original": [assets.product[3]]
                    },
                    _id: "83748ase329347",
                    "currentPrice": 445,
                    "basePrice": 330,
                    "productType": "jeans",
                    "catagory": "Men",
                    "productCode": "ML--oo",
                    "title": "The best Product IN This current World",
                    "selectedSize": ['X', 'M', 'L'],
                    "varient": true,
                    "varientCode": "ML"
                },
                {
                    "rating": "3.0",
                    "name": "Slim Fit Cotton Oxford Shirt", "brand": "LEVI'S",
                    "price": "500.00",
                    "image": {
                        "small": [assets.product[4]],
                        "card": [assets.product[4]],
                        "original": [assets.product[4]]
                    },
                    _id: "8374weryh8329347",
                    "currentPrice": 445,
                    "basePrice": 330,
                    "productType": "jeans",
                    "catagory": "Men",
                    "productCode": "ML--oo",
                    "title": "The best Product IN This current World",
                    "selectedSize": ['X', 'M', 'L'],
                    "varient": true,
                    "varientCode": "ML"
                },
                {
                    "rating": "4.5",
                    "name": "Faxon Canvas Low-Top Sneaker", "brand": "ZARA", "price": "460.00",
                    "image": {
                        "small": [assets.product[5]],
                        "card": [assets.product[5]],
                        "original": [assets.product[5]]
                    },
                    _id: "8374832ujyt9347",
                    "currentPrice": 445,
                    "basePrice": 330,
                    "productType": "jeans",
                    "catagory": "Men",
                    "productCode": "ML--oo",
                    "title": "The best Product IN This current World",
                    "selectedSize": ['X', 'M', 'L'],
                    "varient": true,
                    "varientCode": "ML"
                },
                {
                    "rating": "4.5",
                    "name": "Viscose-Cashmere Scarf", "brand": "LACOSTE", "price": "440.00",
                    "image": {
                        "small": [assets.product[6]],
                        "card": [assets.product[6]],
                        "original": [assets.product[6]]
                    },
                    _id: "83748jyth329347",
                    "currentPrice": 445,
                    "basePrice": 330,
                    "productType": "jeans",
                    "catagory": "Men",
                    "productCode": "ML--oo",
                    "title": "The best Product IN This current World",
                    "selectedSize": ['X', 'M', 'L'],
                    "varient": true,
                    "varientCode": "ML"
                },
                {
                    "rating": "4.5", "name": "Plaid Cotton Oxford Shirt", "brand": "LEVI'S",
                    "price": "20.00",
                    "image": {
                        "small": [assets.product[7]],
                        "card": [assets.product[7]],
                        "original": [assets.product[7]]
                    },
                    _id: "83748fhtr329347",
                    "currentPrice": 445,
                    "basePrice": 330,
                    "productType": "jeans",
                    "catagory": "Men",
                    "productCode": "ML--oo",
                    "title": "The best Product IN This current World",
                    "selectedSize": ['X', 'M', 'L'],
                    "varient": true,
                    "varientCode": "ML"
                }
            ]
            
        )
    },[]);

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
            <Box my={4}>
                {shopItems.length !== 0? 
                    <Showcase 
                    component={
                        <ShopCard width="100%"/>
                    }
                    items={shopItems}
                    title={null}
                    breakPoints={breakPoints}

                />:
                <LazySkeleton breakPoints={breakPoints} items={8} width="100%" height={380} />
                }
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
