import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IconButton, makeStyles, Box } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';


const createStyles = makeStyles(theme => ({
    dot: {
        '& > li > button:before': {
            fontSize: 15
        }
    }
}))

const NextButton = ({ onClick }) => {
    return (
        <Box display={{ xs: 'none', sm: 'block' }}>
            <IconButton onClick={onClick} style={{ position: 'absolute', right: 30, top: '50%' }}>
                <ChevronRightIcon />
            </IconButton>
        </Box>
    )
}

const PrevButton = ({ onClick }) => {
    return (
        <Box display={{ xs: 'none', sm: 'block' }}>
            <IconButton onClick={onClick} style={{ position: 'absolute', left: 30, top: '50%', zIndex: 5555 }}>
                <ChevronLeftIcon />
            </IconButton>
        </Box>

    )
}



export default function Carousel({ component, data }) {

    const classes = createStyles()

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextButton />,
        prevArrow: <PrevButton />,
        appendDots: (dots) =>
            <div style={{ position: 'absolute', bottom: 10 }}>
                <ul className={classes.dot} >{dots}</ul>
            </div>
    };

    return (
        <Slider {...settings}>
            {data.map((item,i) =>
                React.cloneElement(component, {...item,key: i})
            )}
        </Slider>
    )
}
