import React from 'react';
import { makeStyles, Box, Container, Grid } from '@material-ui/core';
import Header from '../components/Header.component';
import Carousel from '../components/Carousel.component';
import slideOne from '../assets/slide-1.png';
import slideTwo from '../assets/slide-2.png';
import HeroItem from '../molecules/HeroItem.mole';
import LinkGallary from '../components/LinkGallary.component';
import Showcase from '../components/Showcase.component';
import image1 from '../assets/Faxon_Chambray_Low-Top_Sneaker_9_600x.jpg'
// import image2 from '../assets/Faxon_Chambray_Low-Top_Sneaker_Featured_280x.jpg'
import ShopCard from '../molecules/ShopCard.mole';
import LinkGallaryItem from '../molecules/LinkGallaryItem.mole';
import BigButton from '../molecules/BigButton.mole';



const createStyle = makeStyles(theme => ({

}))

const showcaseItems = [
    {
        "rating": "4.6",
        "name": "Premier Cropped Skinny Jean", "brand": "GAP", "price": "$380.00",
        "image": "https://cdn.shopify.com/s/files/1/0130/5041/3114/products/Premier_Cropped_Skinny_Jean_13_8d64f29d-9ef1-4cb1-9fa6-6193c913ccd0_100x.jpg"
    },
    {
        "rating": "4.571428571428571",
        "name": "East Hampton Fleece Hoodie", "brand": "GAP", "price": "$440.00",
        "image": "https://cdn.shopify.com/s/files/1/0130/5041/3114/products/Featherweight_Pima_Hoodie_4_e2b11fbc-2853-488d-a075-f8bf63034128_100x.jpg"
    },
    {
        "rating": "5.0",
        "name": "Relaxed-Fit Cotton Shirt", "brand": "GUESS", "price": "$480.00",
        "image": "https://cdn.shopify.com/s/files/1/0130/5041/3114/products/Relaxed-Fit_Cotton_Shirt_1_cb5951bf-ef65-4d30-84f4-f42135a58f69_100x.jpg"
    },
    {
        "rating": "0.0", "name": "Tailored Fit Mesh-Panel Polo",
        "brand": "ZARA", "price": "$400.00",
        "image": "https://cdn.shopify.com/s/files/1/0130/5041/3114/products/Tailored_Fit_Mesh-Panel_Polo_4_fba54f8e-368e-4537-92ff-03fef8a6c09c_100x.jpg"
    },
    {
        "rating": "0.0",
        "name": "Slim Fit Cotton Oxford Shirt", "brand": "LEVI'S",
        "price": "$500.00",
        "image": "https://cdn.shopify.com/s/files/1/0130/5041/3114/products/Relaxed-Fit_Cotton_Shirt_4_211x.jpg"
    },
    {
        "rating": "0.0",
        "name": "Faxon Canvas Low-Top Sneaker", "brand": "ZARA", "price": "$460.00",
        "image": "https://cdn.shopify.com/s/files/1/0130/5041/3114/products/Faxon_Chambray_Low-Top_Sneaker_Featured_211x.jpg"
    },
    {
        "rating": "5.0",
        "name": "Viscose-Cashmere Scarf", "brand": "LACOSTE", "price": "$440.00",
        "image": "https://cdn.shopify.com/s/files/1/0130/5041/3114/products/Viscose-Cashmere_Scarf_4_211x.jpg"
    },
    {
        "rating": "5.0", "name": "Plaid Cotton Oxford Shirt", "brand": "LEVI'S",
        "price": "$20.00",
        "image": "https://cdn.shopify.com/s/files/1/0130/5041/3114/products/Ocean-Wash_Linen_Sport_Shirt_bf3d7287-c8bf-458e-bd19-8d583a4760d6_150x.jpg"
    }
]

export default function Home() {



    return (
        <div style={{ marginBottom: 300 }}>
            <div className="">
                <Header />
            </div>
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
                    items={showcaseItems}
                    component={<ShopCard />}
                />
            </div>
            <div className="">
                <Container maxWidth="lg" style={{ marginTop: 40 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={4}>
                            <LinkGallaryItem image="https://cdn.shopify.com/s/files/1/0130/5041/3114/files/demo01_10_423x.jpg">
                                <BigButton title="Autumn 2019" subTitle="NEW ARRIVALS" />
                            </LinkGallaryItem>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <LinkGallaryItem image="https://cdn.shopify.com/s/files/1/0130/5041/3114/files/demo01_11_423x.png">
                                <BigButton title="Autumn 2019" subTitle="NEW ARRIVALS" />
                            </LinkGallaryItem>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <LinkGallaryItem image="https://cdn.shopify.com/s/files/1/0130/5041/3114/files/demo01_09_423x.jpg">
                                <BigButton title="Autumn 2019" subTitle="NEW ARRIVALS" />
                            </LinkGallaryItem>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    )
}
