import React from 'react'
import Product from './../Product/Product'
import './ProductList.css'
import { products } from './../../data'

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Conference Publications</h1>

            </div>
            <div className="pl-list">
                {products.map((product) => (
                    <Product key={product.id} img={product.img} link={product.link} />
                ))}
            </div>
        </div>
    )
}

export default ProductList