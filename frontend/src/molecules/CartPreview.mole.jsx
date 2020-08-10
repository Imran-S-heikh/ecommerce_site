import React from 'react'
import PreviewCartItem from './PreviewCartItem.mole'
import { Divider, Box, Typography, Button } from '@material-ui/core'

export default function CartPreview() {
    return (
        <div>
            <div className="list">
                <PreviewCartItem />
                <PreviewCartItem />
            </div>
            <Divider />
            <Box display="flex" justifyContent="space-between" p={2}>
                <Typography style={{ fontWeight: 'bold' }}>
                    Total Price:
                </Typography>
                <Typography style={{ fontWeight: 'bold' }}>
                    $680
                </Typography>
            </Box>
            <Box width="80%" margin="auto">
                <Button style={{ padding: '10px 0'}} color='primary' variant="contained" fullWidth>Proceed To Checkout</Button>
            </Box>
            <Button color='primary' fullWidth>View Cart</Button>
        </div>
    )
}
