import React from 'react'
import Showcase from '../components/Showcase.component'
import { assets } from '../utils'
import CartItem from '../components/CartItem.component'
import { Container, Typography, Box } from '@material-ui/core'

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
    }
]

export default function Cart() {
    return (
        <div>
            <Container maxWidth="lg">
                <Showcase
                    items={showcaseItems}
                    title="Shoping Cart"
                    component={<CartItem />}
                    breakPoints={{ xs: 12,sm:12, md: 12, lg: 12 }}
                />
                <Box my={2}>
                    <Typography component="h1" variant="h5" align="right">
                        Total: $1270
                    </Typography>
                </Box>
            </Container>

        </div>
    )
}
