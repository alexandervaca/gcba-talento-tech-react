import React from 'react'
import Product from './Product'

const ProductList = ({products, addToCart}) => {
  return (
    <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-evenly'}}>
      {products.map(product =>(
        <Product key={product.id} product={product} addToCart={addToCart}/>
      ))}
    </div>
  )
}

export default ProductList
