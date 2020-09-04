import React from 'react'
import MakeProduct from './MakeProduct.component'
import { useRecoilState } from 'recoil'
import { updateProductState, loaderState, alertSnackbarState } from '../recoil/atoms'
import { catchAsync, checkStatus, extractFilter } from '../utils'
import { updateProduct } from '../request/product.request'
import { useSetRecoilState } from 'recoil'


export default function EditProduct() {
    const [product,setProduct] = useRecoilState(updateProductState)
    const setLoader = useSetRecoilState(loaderState);
    const setAlert = useSetRecoilState(alertSnackbarState);

    const handleUpdate = catchAsync(async(updatedProduct)=>{
        setLoader(true);
        updatedProduct.imageObject = product.image;
        const response = await updateProduct(extractFilter(updatedProduct,product),product._id)
        setLoader(false)
        if(checkStatus(response)){
            setAlert({open: true,message: 'Product Updated Successfully',severity: 'success'})
        }else{
            setAlert({open: true,message: 'Failed To Update The Product',severity: 'error'})
        }
    })
    return (
        <>
            <MakeProduct {...product} title="Update Product" buttonTitle="Update Product"  getProduct={handleUpdate}/>
        </>
    )
}
