import logo from './logo.svg';
import './App.css';
import React, { Component, useState } from 'react'
import ProductList from './components/productlist'; 
import Navbar from './components/navbar';
function App() {

const product=[
  {Name :'Lost Scraps of love that i found again',
   Price :300,
   Quantity:1,
  },
  {Name :'Shiva Triology',
   Price :450,
   Quantity:1,
  },
  {Name :'Girl on the train',
   Price :500,
   Quantity:1,
  },
]
let [productList,setProductList]=useState(product);

const increment=(index)=>{
  
  let newProductList=[...productList];
  // console.log(newProductList);
  newProductList[index].Quantity++;
  // console.log(newProductList);
  setProductList(newProductList);
}



const decrement=(index)=>{
  
  let newProductList=[...productList];
  // console.log(newProductList);
  newProductList[index].Quantity=newProductList[index].Quantity>1?newProductList[index].Quantity-1:newProductList[index].Quantity;
  // console.log(newProductList);
  setProductList(newProductList);
}



  return (
    <div className="App">
      <Navbar></Navbar>
      <div className='mt-3'>
      <ProductList products={productList} incrementit={increment} decrementit={decrement}></ProductList>
      </div>
    </div>
  );
}

export default App;
