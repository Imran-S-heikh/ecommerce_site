import React from 'react'
import { Snackbar, Backdrop, CircularProgress } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert';
import { useRecoilState } from 'recoil';
import { alertSnackbarState, loaderState } from '../recoil/atoms';

export default function Defaults() {

    const [alertSnackbar,setAlertSnackbar] = useRecoilState(alertSnackbarState);
    const [loader,setLoader] = useRecoilState(loaderState);

    const snackbarClose = ()=>{
        setAlertSnackbar({...alertSnackbar,open: false,message: ''})
    }

    return (
        <div>
            <Snackbar onClose={snackbarClose} open={alertSnackbar.open} autoHideDuration={alertSnackbar?.time || 3000}>
                <MuiAlert onClose={snackbarClose} elevation={6} variant="filled" severity={alertSnackbar?.severity || 'info'}>
                    {alertSnackbar.message}
                </MuiAlert>
            </Snackbar>
            <Backdrop style={{zIndex: 15}} open={loader}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    )
}
