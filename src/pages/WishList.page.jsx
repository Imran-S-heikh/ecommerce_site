import React from 'react'
import Showcase from '../components/Showcase.component'
import { assets } from '../utils'
import CartItem from '../components/CartItem.component'
import { Container, Typography, Box } from '@material-ui/core'
import { useRecoilValue, useRecoilState } from 'recoil'
import { userCartState, userWishListState } from '../recoil/user/user.atoms'
import Hide from '../molecules/Hide.mole'
import { useSetRecoilState } from 'recoil'
import { useEffect } from 'react'


export default function WishList() {

    const [wishList,setWishList] = useRecoilState(userWishListState);
    const setCartItem = useSetRecoilState(userCartState);

    

    const addToCart = (item)=>{
        setCartItem((prev)=>[...prev,item])
    }

    return (
        <div>
            <Container maxWidth="lg">
                <Hide hide={wishList.length === 0} fallback={
                    <Box p={6}>
                        <Typography align="center" variant="h4" color="textSecondary">
                            Your Wish List Is Empty
                        </Typography>
                    </Box>
                }>
                    <Showcase
                        items={wishList}
                        title="Wish To Buy"
                        component={<CartItem wishCart={true} handler={addToCart}/>}
                        breakPoints={{ xs: 12, sm: 12, md: 12, lg: 12 }}
                    />
                </Hide>

            </Container>

        </div>
    )
}
