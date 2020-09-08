import React from 'react'
import MakeProduct from './MakeProduct.component';
import { catchAsync } from '../utils';
import { createProduct } from '../request/product.request';
import { useSetRecoilState } from 'recoil';
import { loaderState, alertSnackbarState } from '../recoil/atoms';

export default function CreateProduct() {

    const setLoader = useSetRecoilState(loaderState);
    const setAlert = useSetRecoilState(alertSnackbarState);


    const handleProduct = catchAsync(async(product)=>{
        console.log(product)
        setLoader(true);
        const response = await createProduct(product);
        setLoader(false)
        console.log(response)
        if(response.data.status === 'success'){
            setAlert({open: true,message: 'Product Created Successfully',severity: 'success'})
        }else{
            setAlert({open: true,message: response.data.message,severity: 'error'})
        }
        
    });
    return (
        <>
            <MakeProduct pageTitle="Create Product" buttonTitle="Create Product" getProduct={handleProduct} />
        </>
    )
}
