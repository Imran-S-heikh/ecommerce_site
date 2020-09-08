import React, { useRef } from 'react'
import ControlledAccordion from '../molecules/ControlledAccordion.mole'
import { Typography, Box, List, ListItem, Divider, ButtonBase, Button, Slider } from '@material-ui/core'
import Color from '../molecules/Color.mole'
import Size from '../molecules/Size.mole'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { shopQueryState } from '../recoil/atoms'
import { useIsInit } from '../customHooks'



export default function Sidebar() {

    const [priceRange, setPriceRange] = useState([60, 8000])
    const [sortby, setSortby] = useState('')
    const setShopQuery = useSetRecoilState(shopQueryState);
    const isInit = useIsInit();
    const timer = useRef();

    useEffect(() => {
        if (!isInit) {
            setShopQuery(pre => {
                return {
                    ...pre,
                    sort: sortby
                }
            })
        }
    }, [sortby])


    useEffect(() => {
        if (!isInit) {
            clearTimeout(timer.current);
            timer.current = setTimeout(() => {
                setShopQuery(pre => {
                    console.log(pre)
                    return {
                        ...pre,
                        'price[lte]': priceRange[1],
                        'price[gte]': priceRange[0],
                    }
                })
                console.log(priceRange)
            }, 600)
        }
    }, [priceRange])



    return (
        <Box>
            <ControlledAccordion title={
                <Typography component="span">
                    Catagories
                </Typography>
            }>
                <List dense={true} >
                    <ListItem button={true}>
                        Men
                        </ListItem>
                    <ListItem button={true}>
                        Women
                        </ListItem>
                    <ListItem button={true}>
                        Trending
                        </ListItem>
                    <ListItem button={true}>
                        Generic
                        </ListItem>
                </List>
            </ControlledAccordion>
            <ControlledAccordion title={
                <Typography component="span">
                    Product Type
                </Typography>
            }>

                <List dense={true} >
                    <ListItem button={true}>
                        Dress
                    </ListItem>
                    <ListItem button={true}>
                        Jeans
                    </ListItem>
                    <ListItem button={true}>
                        Polo
                    </ListItem>
                    <ListItem button={true}>
                        Shirt
                        </ListItem>
                    <ListItem button={true}>
                        Jeans
                    </ListItem>
                </List>
            </ControlledAccordion>
            <ControlledAccordion title={
                <Typography component="span">
                    Sort By
                </Typography>
            }>

                <List dense={true} >
                    {/* <ListItem button={true}>
                        Popularity
                    </ListItem> */}
                    {/* <ListItem button={true}>
                        Latest
                    </ListItem> */}
                    <ListItem onClick={() => setSortby('-price')} button={true}>
                        Highest Price
                    </ListItem>
                    <ListItem onClick={() => setSortby('price')} button={true}>
                        Lowest Price
                    </ListItem>
                </List>
            </ControlledAccordion>
            <ControlledAccordion title={
                <Typography component="span">
                    Price
                </Typography>

            }>

                <Slider
                    value={priceRange}
                    min={0}
                    max={10000}
                    aria-labelledby="range-slider"
                    onChange={(e, v) => setPriceRange(v)}
                    valueLabelDisplay="auto"
                    marks={[
                        {
                            value: 0,
                            label: '0'
                        },
                        {
                            value: 5000,
                            label: '5k'
                        },
                        {
                            value: 10000,
                            label: '10k'
                        }
                    ]}

                />

            </ControlledAccordion>
            <ControlledAccordion title={
                <Typography component="span">
                    Colors
                </Typography>

            }>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    <Color color="red" />
                    <Color color="blue" />
                    <Color color="green" />
                    <Color color="orange" />

                </div>

            </ControlledAccordion>
            <ControlledAccordion title={
                <Typography component="span">
                    Size
                </Typography>

            }>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    <Size size="S" />
                    <Size size="L" />
                    <Size size="M" />
                    <Size size="A" />
                </div>

            </ControlledAccordion>
        </Box>
    )
}
