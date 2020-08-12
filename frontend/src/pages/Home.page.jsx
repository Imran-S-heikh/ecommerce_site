import React from 'react';
import { makeStyles } from '@material-ui/core';
import Header from '../components/Header.component';
import Carousel from '../components/Carousel.component';
import slideOne from '../assets/slide-1.png';
import slideTwo from '../assets/slide-2.png';
import HeroItem from '../molecules/HeroItem.mole';


const createStyle = makeStyles(theme => ({

}))

export default function Home() {



    return (
        <div>
            <div className="">
                <Header />
            </div>
            <div>
                <Carousel component={<HeroItem/>} data={[{image:slideOne},{image: slideTwo}]} />
            </div>
        </div>
    )
}
