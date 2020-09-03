import React from 'react'
import MakeProduct from './MakeProduct.component';
import { catchAsync } from '../utils';
import { createProduct } from '../request/product.request';

export default function CreateProduct() {
    const handleProduct = catchAsync(async(product)=>{
        const response = await createProduct(product);
        console.log(response.data) 
    });
    return (
        <>
            <MakeProduct title="Create Product" buttonTitle="Create Product" getProduct={handleProduct} />
        </>
    )
}
