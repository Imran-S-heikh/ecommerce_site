import React from 'react'
import MakeProduct from './MakeProduct.component';

export default function CreateProduct() {
    const handleProduct = (product)=>{
        console.log(product);
    }
    return (
        <>
            <MakeProduct getProduct={handleProduct} />
        </>
    )
}
