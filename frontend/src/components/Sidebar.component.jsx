import React from 'react'
import ControlledAccordion from '../molecules/ControlledAccordion.mole'
import { Typography, Box, List, ListItem, Divider, ButtonBase, Button, Slider } from '@material-ui/core'
import Color from '../molecules/Color.mole'
import Size from '../molecules/Size.mole'
import { useState } from 'react'



export default function Sidebar() {

    const [priceRange,setPriceRange] = useState([60,800])

   

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
                    Colors
                </Typography>

            }>
                <div style={{display: 'flex',flexWrap: 'wrap'}}>
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
                <div style={{display: 'flex',flexWrap: 'wrap'}}>
                    <Size size="S"/>
                    <Size size="L"/>
                    <Size size="M"/>
                    <Size size="A"/>
                </div>

            </ControlledAccordion>
            <ControlledAccordion title={
                <Typography component="span">
                    Prize
                </Typography>

            }>
                
                <Slider
                    value={priceRange}
                    min={0}
                    max={1000}
                    aria-labelledby="range-slider"
                    onChange={(e,v)=>setPriceRange(v)}
                    valueLabelDisplay="auto"
                    marks={[
                        {
                            value: 0,
                            label: '0'
                        },
                        {
                            value: 1000,
                            label: '1k'
                        }
                    ]}

                />

            </ControlledAccordion>
        </Box>
    )
}
