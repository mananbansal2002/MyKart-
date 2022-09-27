import React, { Component } from 'react';
function Product(props) {
    console.log(props)
    return ( 
        <>
        <div className='row m-4'>
 <h5 className='col-3 text-start'> {props.product.Name} 
 <span className="ms-3 badge bg-primary">Rs. {props.product.Price}</span>
 </h5>
<div className="col-3">
 <div className="btn-group" role="group" aria-label="Basic outlined example">
  <button type="button" className="btn btn-outline-danger" onClick={()=>{props.decrementit(props.index)}}>-</button>
  <button type="button" className="btn btn-outline-primary">{props.product.Quantity}</button>
  <button type="button" className="btn btn-outline-success" onClick={()=>{props.incrementit(props.index)}}>+</button>
</div>
</div>

<div className='col-3'>
    <h5>
 <span className="ms-3 badge bg-secondary">Rs. {props.product.Quantity*props.product.Price}</span>
</h5>
</div>


 </div>
         </>
     );
}

export default Product;