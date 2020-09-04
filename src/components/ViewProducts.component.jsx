import React, { useState } from 'react'
import { Box, Typography, TableContainer, Table, TableHead, TableRow, TableCell, Container, TableBody, Avatar, Button } from '@material-ui/core'
import { assets, routes, checkStatus } from '../utils'
import Rating from '@material-ui/lab/Rating'
import EditIcon from '@material-ui/icons/Edit';
import { useRecoilState } from 'recoil';
import { updateProductState, dashboardRouteState } from '../recoil/atoms';
import { useSetRecoilState } from 'recoil';
import { useEffect } from 'react';
import { getProducts } from '../request/product.request';


const showcaseItems = [
    {
        "rating": "4.5",
        "name": "Premier Cropped Skinny Jean", "brand": "GAP", "price": "380.00",
        "image": assets.product[0],
        "currentPrice": 445,
        "basePrice": 330,
        "productType": "jeans",
        "catagory": "Men",
        "productCode": "ML--oo",
        "title": "The best Product IN This current World",
        "selectedSize": ['X','M','L'],
        "varient": true,
        "varientCode": "ML"
    },
    {
        "rating": "3.5",
        "name": "East Hampton Fleece Hoodie", "brand": "GAP", "price": "440.00",
        "image": assets.product[1],
        "currentPrice": 445,
        "basePrice": 330,
        "productType": "jeans",
        "catagory": "Men",
        "productCode": "ML--oo",
        "title": "The best Product IN This current World",
        "selectedSize": ['X','M','L'],
        "varient": true,
        "varientCode": "ML"
    },
    {
        "rating": "5.0",
        "name": "Relaxed-Fit Cotton Shirt", "brand": "GUESS", "price": "480.00",
        "image": assets.product[2],
        "currentPrice": 445,
        "basePrice": 330,
        "productType": "jeans",
        "catagory": "Men",
        "productCode": "ML--oo",
        "title": "The best Product IN This current World",
        "selectedSize": ['X','M','L'],
        "varient": true,
        "varientCode": "ML"
    },
    {
        "rating": "4.0", "name": "Tailored Fit Mesh-Panel Polo",
        "brand": "ZARA", "price": "400.00",
        "image": assets.product[3],
        "currentPrice": 445,
        "basePrice": 330,
        "productType": "jeans",
        "catagory": "Men",
        "productCode": "ML--oo",
        "title": "The best Product IN This current World",
        "selectedSize": ['X','M','L'],
        "varient": true,
        "varientCode": "ML"
    },
    {
        "rating": "3.0",
        "name": "Slim Fit Cotton Oxford Shirt", "brand": "LEVI'S",
        "price": "500.00",
        "image": assets.product[4],
        "currentPrice": 445,
        "basePrice": 330,
        "productType": "jeans",
        "catagory": "Men",
        "productCode": "ML--oo",
        "title": "The best Product IN This current World",
        "selectedSize": ['X','M','L'],
        "varient": true,
        "varientCode": "ML"
    },
    {
        "rating": "4.5",
        "name": "Faxon Canvas Low-Top Sneaker", "brand": "ZARA", "price": "460.00",
        "image": assets.product[5],
        "currentPrice": 445,
        "basePrice": 330,
        "productType": "jeans",
        "catagory": "Men",
        "productCode": "ML--oo",
        "title": "The best Product IN This current World",
        "selectedSize": ['X','M','L'],
        "varient": true,
        "varientCode": "ML"
    },
    {
        "rating": "4.5",
        "name": "Viscose-Cashmere Scarf", "brand": "LACOSTE", "price": "440.00",
        "image": assets.product[6],
        "currentPrice": 445,
        "basePrice": 330,
        "productType": "jeans",
        "catagory": "Men",
        "productCode": "ML--oo",
        "title": "The best Product IN This current World",
        "selectedSize": ['X','M','L'],
        "varient": true,
        "varientCode": "ML"
    },
    {
        "rating": "4.5", "name": "Plaid Cotton Oxford Shirt", "brand": "LEVI'S",
        "price": "20.00",
        "image": assets.product[7],
        "currentPrice": 445,
        "basePrice": 330,
        "productType": "jeans",
        "catagory": "Men",
        "productCode": "ML--oo",
        "title": "The best Product IN This current World",
        "selectedSize": ['X','M','L'],
        "varient": true,
        "varientCode": "ML"
    }
]

export default function ViewProducts() {

    const setProduct = useSetRecoilState(updateProductState);
    const setRoute   = useSetRecoilState(dashboardRouteState);
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        (async ()=>{
            const response = await getProducts('?page=1&limit=15');
            if(checkStatus(response)){
                setProducts(response.data.products)
            }
        })()
    },[])

    const handleEdit = (product)=>{
        setProduct({...product,productImage: product.image.original.map(i=>({src:i}))});
        setRoute(routes.EDIT_PRODUCT);
    }

    return (
        <div>
            <Box my={2}>
                <Typography variant="h4" align="center">
                    View Products
                </Typography>
                <Container maxWidth="lg">
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Image</TableCell>
                                    <TableCell>Price</TableCell>
                                    <TableCell>Rating</TableCell>
                                    <TableCell>Brand</TableCell>
                                    <TableCell>View</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {products.map((item)=>(
                                    <TableRow key={item.key}>
                                        <TableCell>{item.name}</TableCell>
                                        <TableCell>
                                            <Avatar variant="square" src={item.image.small[0]} />
                                        </TableCell>
                                        <TableCell>{item.price}</TableCell>
                                        <TableCell>
                                            <Rating
                                                value={item.rating}
                                                precision={0.5}
                                                readOnly
                                                size="small"
                                            />
                                        </TableCell>
                                        <TableCell>{item.brand}</TableCell>
                                        <TableCell>
                                            <Button onClick={()=>handleEdit(item)} startIcon={
                                                <EditIcon/>
                                            } variant="outlined">
                                                Edit
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Container>
            </Box>
        </div>
    )
}
