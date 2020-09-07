import React from 'react'
import Showcase from '../components/Showcase.component'
import { assets } from '../utils'
import CartItem from '../components/CartItem.component'
import { Container, Typography, Box } from '@material-ui/core'
import { useRecoilValue } from 'recoil'
import { userCartState } from '../recoil/user/user.atoms'
import Hide from '../molecules/Hide.mole'
import { cartState } from '../recoil/user/user.selector'
import { useSetRecoilState } from 'recoil'

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

    const cart = useRecoilValue(cartState);
    const setUserCart = useSetRecoilState(userCartState);

    const handleItemDelete = (id)=>{
        setUserCart(pre=>pre.filter(item=> item._id !== id))
    }

    const handleAdd = (id)=>{
        setUserCart(pre=>{
            const product = pre.filter(item=>item._id === id)
            return [...pre,product[0]]
        })
    }

    const handleRemove = (id)=>{
        let onlyOne = true;
        setUserCart(pre=>pre.filter((item,i,arr)=> {
            if(item._id === id && onlyOne){
                onlyOne = false;
                return false
            }
            return true
        }))
    }

    return (
        <div>
            <Container maxWidth="lg">
                <Hide hide={cart.products.length === 0} fallback={
                    <Box p={6}>
                        <Typography align="center" variant="h4" color="textSecondary">
                            No Products To Show
                        </Typography>
                    </Box>
                }>
                    <Showcase
                        items={cart.products}
                        title="Shoping Cart"
                        component={<CartItem handleRemove={handleRemove} handleAdd={handleAdd} handleDelete={handleItemDelete} />}
                        breakPoints={{ xs: 12, sm: 12, md: 12, lg: 12 }}
                    />
                    <Box my={2}>
                        <Typography component="h1" variant="h5" align="right">
                            Total: ${cart.totalPrice}
                        </Typography>
                    </Box>
                </Hide>

            </Container>

        </div>
    )
}
