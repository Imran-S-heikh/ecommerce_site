import React from 'react'
import { Typography, MenuList, MenuItem, Box, ListItemSecondaryAction, IconButton, Menu, Button, Popover, Paper, ButtonGroup } from '@material-ui/core'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Pagination from '@material-ui/lab/Pagination/Pagination';
import CropSquareIcon from '@material-ui/icons/CropSquare';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import { useRef } from 'react';
import { useState } from 'react';
import { assets, checkStatus, queryBuilder } from '../utils';
import Showcase from './Showcase.component';
import ShopCard from '../molecules/ShopCard.mole';
import SortIcon from '@material-ui/icons/Sort';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { sideDrawerState, shopQueryState } from '../recoil/atoms';
import LazySkeleton from './LazySkeleton.component';
import { useEffect } from 'react';
import { getProducts } from '../request/product.request';
import Hide from '../molecules/Hide.mole';


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

const single = { xs: 12, sm: 12, md: 6, lg: 6 }
const double = { xs: 12, sm: 6, md: 6, lg: 4 }
const max = { xs: 12, sm: 6, md: 4, lg: 3 }

export default function ShopContent() {

    const [anchorEl, setAnchorEl] = useState(null);
    const [limitEl, setLimitEl] = useState(null);
    const [breakPoints, setBreakPoints] = useState(max);
    const setSideBarOpen = useSetRecoilState(sideDrawerState)
    const [shopItems, setShopItems] = useState([]);
    const [shopQuery, setShopQuery] = useRecoilState(shopQueryState);
    const [loading, setLoading] = useState(true)
    const [totalProducts,setTotalProducts] = useState(-1);

    useEffect(() => {
        fetchProducts()
    }, []);

    useEffect(() => {
        fetchProducts()
    }, [shopQuery])

    const fetchProducts = async () => {
        setLoading(true)
        const response = await getProducts(queryBuilder(shopQuery));
        setLoading(false)
        if (checkStatus(response)) {
            setShopItems(response.data.products)
            setTotalProducts(response.data.total)
            console.log(response)
        }
    }

    const handleLimit = (limit)=>{
        setShopQuery({...shopQuery,limit: limit})
    }

    return (
        <div>
            <Box display="flex" justifyContent="space-between" className="">
                <Typography variant="h5">
                    Mens(19)
                </Typography>
                <Box display={{ xs: 'none', md: 'block' }} className="">

                    <ButtonGroup>
                        <Button
                            onClick={e => setAnchorEl(e.currentTarget)}
                            endIcon={
                                <KeyboardArrowDownIcon />
                            }>
                            Featured
                        </Button>
                        <Button onClick={() => setBreakPoints(single)}>
                            <CropSquareIcon />
                        </Button>
                        <Button onClick={() => setBreakPoints(double)}>
                            <ViewModuleIcon />
                        </Button>
                        <Button onClick={() => setBreakPoints(max)}>
                            <ViewComfyIcon />
                        </Button>
                    </ButtonGroup>
                </Box>
                <Box display={{ xs: 'block', md: 'none' }}>
                    <Button
                        startIcon={
                            <SortIcon />
                        }
                        onClick={() => setSideBarOpen(true)}
                    >
                        Filter
                    </Button>
                </Box>
            </Box>
            <Box my={4}>
                <Hide hide={loading} fallback={
                    <LazySkeleton breakPoints={breakPoints} items={shopQuery.limit} width="100%" height={380} />
                }>
                    <Showcase
                        component={
                            <ShopCard width="100%" />
                        }
                        items={shopItems}
                        title={null}
                        breakPoints={breakPoints}

                    />
                </Hide>
            </Box>
            <Box mb={3} display="flex" justifyContent="center">
                    <Button 
                        style={{textTransform: 'capitalize'}} 
                        onClick={(e)=>setLimitEl(e.currentTarget)}
                        endIcon={<KeyboardArrowDownIcon/>}
                    >
                        Product Per Page - {shopQuery.limit}
                    </Button>
                    <Menu
                        anchorEl={limitEl}
                        open={Boolean(limitEl)}
                        onClose={()=>setLimitEl(null)}
                        value={shopQuery.limit}
                        
                    >
                        {[8,16,32].map(item=>
                            <MenuItem onClick={()=>handleLimit(item)}>{item}</MenuItem>
                        )}
                    </Menu>
                    <Pagination defaultPage page={shopQuery.page} onChange={(_,next)=>setShopQuery({...shopQuery,page: next})}  count={Math.ceil(totalProducts/shopQuery.limit)} />
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
