import React, { useState } from 'react';
import { makeStyles, Box, Container, Grid, Typography, Button } from '@material-ui/core';
import Header from '../components/Header.component';
import Carousel from '../components/Carousel.component';
import slideOne from '../assets/slide-1.png';
import slideTwo from '../assets/slide-2.png';
import HeroItem from '../molecules/HeroItem.mole';
import LinkGallary from '../components/LinkGallary.component';
import Showcase from '../components/Showcase.component';
import ShopCard from '../molecules/ShopCard.mole';
import LinkGallaryItem from '../molecules/LinkGallaryItem.mole';
import BigButton from '../molecules/BigButton.mole';
import BlogCard from '../molecules/BlogCard.mole';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { assets, catchAsync, checkStatus } from '../utils';
import Footer from '../components/Footer.component';
import LazySkeleton from '../components/LazySkeleton.component';
import { getAllUser } from '../request/user.requset';
import { useEffect } from 'react';
import { getProducts } from '../request/product.request';



const createStyles = makeStyles(theme => ({
    instaIcon: {
        color: theme.palette.common.white
    }
}))



function Home() {

    const classes = createStyles();
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        (async()=>{
            const response = await getProducts();
            if(checkStatus(response)){
                setProducts(response.data.products)
            }
        })()
    },[]);

    return (
        <div>
            <div>
                <Carousel component={<HeroItem />} data={[{ image: slideOne }, { image: slideTwo }]} />
            </div>
            <div className="">
                <LinkGallary />
            </div>
            <div className="">
                <Showcase
                    title="Best Products"
                    subTitle="Top Products OF This Week"
                    items={products}
                    component={<ShopCard />}
                />
            </div>
            <div className="">
                <Container maxWidth="lg" style={{ marginTop: 40 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={4}>
                            <LinkGallaryItem image={assets.collection[0]}>
                                <BigButton title="Autumn 2019" subTitle="NEW ARRIVALS" />
                            </LinkGallaryItem>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <LinkGallaryItem image={assets.collection[1]}>
                                <BigButton title="Autumn 2019" subTitle="NEW ARRIVALS" />
                            </LinkGallaryItem>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <LinkGallaryItem image={assets.collection[2]}>
                                <BigButton title="Autumn 2019" subTitle="NEW ARRIVALS" />
                            </LinkGallaryItem>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div className="">
                <Showcase
                    title="TRENDING"
                    subTitle="Top Wishes Of This Week"
                    items={products}
                    component={<ShopCard />}
                    fallback={<LazySkeleton width="100%" height={400} breakPoints={{ xs: 12, md: 4,lg:3 }} items={8}/>}

                />
            </div>
            <div className="">
                <Showcase
                    title="Latest From Our Blog"
                    subTitle="THE FRESHEST AND MOST EXCITING NEWS"
                    items={[
                        { image: assets.blog[0] },
                        { image: assets.blog[1] },
                        { image: assets.blog[2] }
                    ]}
                    component={<BlogCard />}
                    breakPoints={{ xs: 12, md: 4,lg:4 }}
                    fallback={<LazySkeleton width="100%" height={250} breakPoints={{ xs: 12, md: 4,lg:4 }} items={3}/>}
                />
            </div>
            <div className="">
                <Showcase
                    title={
                        <>
                            <Typography color="primary" style={{ fontSize: 'inherit' }} component="span">
                                @Follow
                            </Typography >
                            <span> us on</span>
                        </>
                    }
                    subTitle="Instagram"
                    items={assets.insta.map(item => ({ image: item }))}
                    component={
                        <LinkGallaryItem hover={true}>
                            <Box className={classes.instaIcon}>
                                <VisibilityIcon  />
                            </Box>
                        </LinkGallaryItem>
                    }
                    spacing="0"
                    breakPoints={{ xs: 6, md: 2,lg:2 }}
                />
            </div>
        </div>
    )
}


export default React.memo(Home);
