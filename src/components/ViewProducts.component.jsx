import React, { useState } from 'react'
import { Box, Typography, TableContainer, Table, TableHead, TableRow, TableCell, Container, TableBody, Avatar, Button, TableFooter, TablePagination } from '@material-ui/core'
import { assets, routes, checkStatus, catchAsync } from '../utils'
import Rating from '@material-ui/lab/Rating'
import EditIcon from '@material-ui/icons/Edit';
import { useRecoilState } from 'recoil';
import { updateProductState, dashboardRouteState } from '../recoil/atoms';
import { useSetRecoilState } from 'recoil';
import { useEffect } from 'react';
import { getProducts } from '../request/product.request';
import Hide from '../molecules/Hide.mole';
import LazySkeleton from './LazySkeleton.component';


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
        "selectedSize": ['X', 'M', 'L'],
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
        "selectedSize": ['X', 'M', 'L'],
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
        "selectedSize": ['X', 'M', 'L'],
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
        "selectedSize": ['X', 'M', 'L'],
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
        "selectedSize": ['X', 'M', 'L'],
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
        "selectedSize": ['X', 'M', 'L'],
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
        "selectedSize": ['X', 'M', 'L'],
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
        "selectedSize": ['X', 'M', 'L'],
        "varient": true,
        "varientCode": "ML"
    }
]

export default function ViewProducts() {

    const setProduct = useSetRecoilState(updateProductState);
    const setRoute = useSetRecoilState(dashboardRouteState);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [total,setTotal] = useState(-1);

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        fetchData()
    }, [page,rowsPerPage])



    const fetchData = catchAsync(async () => {
        setLoading(true)
        const response = await getProducts(`?page=${page}&limit=${rowsPerPage}`);
        if (checkStatus(response)) {
            setProducts(response.data.products)
            setTotal(response.data.total)
        }
        console.log(response)
        setLoading(false)
    })

    const handleEdit = (product) => {
        setProduct({ ...product, productImage: product.image.original.map(i => ({ src: i })) });
        setRoute(routes.EDIT_PRODUCT);
    }

    const handleRowsPerPAge = event => {
        setRowsPerPage(event.target.value)
        setPage(1);
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
                                <Hide hide={loading} fallback={
                                    <TableRow>
                                        <TableCell colSpan={6}>
                                            <LazySkeleton breakPoints={{ xs: 12 }} items={rowsPerPage} height={50} />
                                        </TableCell>
                                    </TableRow>
                                }>
                                    {products.map((item) => (
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
                                                <Button onClick={() => handleEdit(item)} startIcon={
                                                    <EditIcon />
                                                } variant="outlined">
                                                    Edit
                                            </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </Hide>
                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TablePagination
                                        rowsPerPageOptions={[5, 10, 15]}
                                        rowsPerPage={rowsPerPage}
                                        page={page -1}
                                        onChangePage={(_, nxt) => setPage(nxt)}
                                        onChangeRowsPerPage={handleRowsPerPAge}
                                        count={total}
                                    />
                                </TableRow>
                            </TableFooter>
                        </Table>
                    </TableContainer>

                </Container>
            </Box>
        </div>
    )
}
