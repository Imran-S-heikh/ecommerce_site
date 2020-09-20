import { Box, Button, ButtonGroup, Checkbox, Container, Dialog, Divider, FormControlLabel, Grid, IconButton, MenuItem, Paper, TextField, Tooltip, Typography } from '@material-ui/core'
import FileCopyIcon from '@material-ui/icons/FileCopy';
import React, { useEffect, useState } from 'react'
import AddIcon from '@material-ui/icons/Add';

import CreateCoupon from '../molecules/CreateCoupon.mole';
import { catchAsync, checkStatus } from '../utils';
import { getCoupons } from '../request/other.request';

export default function Coupon() {
    const [newCouponOpen, setNewCouponOpen] = useState(false);
    const [coupons, setCoupons] = useState([]);
    const [clipText, setClipText] = useState('');

    useEffect(() => {
        catchAsync(async () => {
            const response = await getCoupons();
            if (checkStatus(response)) {
                setCoupons(response.data.doc.coupons)
            }
        })()
    }, [])

    const handleCopy = (code) => {
        setClipText(code);
        navigator.clipboard.writeText(code);
    }

    return (
        <div>
            <Box m={2} display="flex" justifyContent="space-between">
                <Box></Box>
                <Typography variant="h4" align="center">Coupons</Typography>
                <Box>
                    <Button onClick={() => setNewCouponOpen(true)} variant="outlined" startIcon={<AddIcon color="primary" />}>Add New Coupon</Button>
                </Box>
            </Box>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    {coupons.map(item =>
                        <Grid key={item.code} item xs={3}>
                            <Paper>
                                <Box p={3}>
                                    <Box display="flex" justifyContent="space-between" alignItems="center">
                                        <Typography align="center" variant="h6">{item.code}</Typography>
                                        <Tooltip title="Copy" arrow={true}>
                                            <IconButton color={clipText === item.code ? 'primary' : 'default'} onClick={() => handleCopy(item.code)}>
                                                <FileCopyIcon style={{ width: 15, height: 15 }} />
                                            </IconButton>
                                        </Tooltip>
                                    </Box>
                                    <Divider />
                                </Box>
                            </Paper>
                        </Grid>
                    )}
                </Grid>
            </Container>
            <CreateCoupon newCouponOpen={newCouponOpen} setNewCouponOpen={setNewCouponOpen} setCoupons={setCoupons} />
        </div>
    )
}
