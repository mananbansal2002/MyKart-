import React from 'react';
import Product from './product';
function ProductList(props) {
    return (
    props.products.map((product,i)=>{
        return <Product key={i} product={product} index={i} decrementit={props.decrementit} incrementit={props.incrementit}></Product>
    })
    );
}

export default ProductList;