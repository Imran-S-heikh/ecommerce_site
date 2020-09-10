import React, { useEffect } from 'react'
import { Dialog, Typography, Box, useTheme } from '@material-ui/core'
import { useHistory, useParams, Redirect } from 'react-router-dom';
import { updateOrder } from '../request/order.request';
import { catchAsync, checkStatus } from '../utils';
import { useSetRecoilState } from 'recoil';
import { alertSnackbarState } from '../recoil/atoms';

export default function PaymentSuccess(props) {
    const history = useHistory();
    const { orderId } = useParams();
    const setAlert = useSetRecoilState(alertSnackbarState);

    
    
    useEffect(()=>{
        console.log(orderId)
        console.log(props.params)
        if(orderId){
            catchAsync(async()=>{
                const response = await updateOrder({ paymentStatus: 'paid' }, orderId);
                if(checkStatus(response)){
                    setAlert({open: true,message: 'payment successful',severity: 'success'})
                }else{
                    setAlert({open: true,message: response.data.message,severity: 'error'})
                    console.log(response.data)
                }
            })()
        }
    },[orderId]);

    // if(!id)return <Redirect to="/" />
    
    return (
        <div>
            <Dialog open={true} onClose={()=>history.push('/')}>
                <Box m={3}>
                    <Typography align="center" style={{color: "green"}} gutterBottom variant="h5">Payment Was Successful</Typography>
                    <Typography align="center" variant="h4" gutterBottom color="textSecondary">Thank You For Being With Us</Typography>
                    <Typography align="center" color="error" color="primary">Your Product Will be delivered within Three Working days</Typography>
                </Box>
            </Dialog>
        </div>
    )
}
