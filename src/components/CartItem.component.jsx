import React from 'react'
import { Container, Box, IconButton, Typography, ButtonGroup, Button, Divider, Avatar } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';


export default function CartItem({ image, price, name, }) {
    return (
        <>
            <Box py={2}>
                <Box display="flex" alignItems="center">
                    <Box>
                        <Avatar style={{width: 100,height: 125}} variant="square" src={image} alt="cart image" />
                    </Box>
                    <Box flexDirection={{ xs: 'column', md: 'row' }} mx={2} flexGrow={1} display="flex" justifyContent="space-between" alignItems={{ xs: 'left', md: 'center' }}>
                        <Typography gutterBottom component="div">
                            <Typography gutterBottom>{name}</Typography>
                            <Typography color="textSecondary">Color Black</Typography>
                        </Typography>
                        <Typography gutterBottom variant="subtitle1">{price}</Typography>
                        <Box mb={1}>
                            <ButtonGroup variant="outlined">
                                <Button>
                                    <RemoveIcon />
                                </Button>
                                <Button>
                                    5
                            </Button>
                                <Button>
                                    <AddIcon />
                                </Button>
                            </ButtonGroup>
                        </Box>
                        <Typography align="right" gutterBottom variant="h6">{price}</Typography>
                    </Box>
                    <Box>
                        <Box mt={-1}>
                            <IconButton>
                                <DeleteIcon />
                            </IconButton>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Divider />
        </>
    )
}
