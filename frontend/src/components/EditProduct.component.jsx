import React from 'react'
import MakeProduct from './MakeProduct.component'
import { useRecoilState } from 'recoil'
import { updateProductState } from '../recoil/atoms'

export default function EditProduct() {
    const [product,setProduct] = useRecoilState(updateProductState)

    const handleUpdate = (updatedProduct)=>{
        setProduct(updatedProduct);
    }
    return (
        <>
            <MakeProduct {...product} productImage={[{src: product.image}]} getProduct={handleUpdate}/>
        </>
    )
}
