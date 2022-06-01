import React from 'react'
import Product from './../Product/Product'
import './ProductList.css'
import { products } from './../../data'

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Create & inspire. It's GYAN</h1>
                <p className="pl-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio minus commodi eum fugiat explicabo? Ducimus eveniet blanditiis est itaque fugiat quis explicabo voluptas at quisquam similique! Quam similique dignissimos officiis.
                </p>
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