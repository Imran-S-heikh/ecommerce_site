import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core'
import { useState } from 'react';
import { createRef } from 'react';
import { useRef } from 'react';

const createStyles = makeStyles(theme => ({
    root: {

    },
    imageContainer: {
        width: '100%',
        overflow: 'hidden',
        margin: 'auto'

    },
    image: {
        width: '100%',
        transition: 'scale 100ms'
    }
}))

export default function Magnifier({ image }) {

    const imageZoom = useRef(1);
    const origin = useRef({ x: 50, y: 50 });
    const offset = useRef({x:0,y:0});

    const imageRef = createRef();
    const containerRef = createRef();

    const classes = createStyles();

    const handleZoom = (e) => {
        const newZom = imageZoom.current + (e.deltaY * -.1);
        if (newZom >= 1 && newZom <= 4) {
            setZoom(newZom)
        }

        e.preventDefault();
    }

    const setZoom = (zoom)=>{
        imageZoom.current = zoom;
        imageRef.current.style.transform = `scale(${zoom})`
    }

    useEffect(()=>{
        offset.current = {x: containerRef.current.getBoundingClientRect().x,y: containerRef.current.getBoundingClientRect().y}
    },[])


    const handleMouseMove = (e) => {
        const x = e.clientX - offset.current.x;
        const y = e.clientY - offset.current.y;

        imageRef.current.style.transformOrigin = `${x}px ${y}px`;
        
    }

    return (
        <div ref={containerRef}>
            <div  onWheel={handleZoom} onMouseMoveCapture={handleMouseMove} onMouseLeave={() => setZoom(1)} onMouseOver={() => setZoom(2)} className={classes.imageContainer}>
                <img
                    ref={imageRef}
                    className={classes.image} src={image} alt="product" />
            </div>
        </div>
    )
}
