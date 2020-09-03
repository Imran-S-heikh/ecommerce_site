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
        setLoader(true);
        const response = await createProduct(product);
        setLoader(false)
        if(response.data.status === 'success'){
            setAlert({open: true,message: 'Product Created Successfully',severity: 'success'})
        }else{
            setAlert({open: true,message: 'Failed To Create Product',severity: 'error'})
        }
        
    });
    return (
        <>
            <MakeProduct title="Create Product" buttonTitle="Create Product" getProduct={handleProduct} />
        </>
    )
}
