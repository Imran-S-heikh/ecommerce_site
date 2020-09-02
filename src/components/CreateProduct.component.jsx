import React from 'react'
import MakeProduct from './MakeProduct.component';

export default function CreateProduct() {
    const handleProduct = (product)=>{
        console.log(product);
    }
    return (
        <>
            <MakeProduct title="Create Product" buttonTitle="Create Product" getProduct={handleProduct} />
        </>
    )
}
