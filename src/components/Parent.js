import React, { useState } from 'react';
import Child from './Child.js';

function Parent(){
  const [cart,setCart]=useState([]);
  const [itemName,setItemName]=useState("");
  const [itemPrice,setItemPrice]=useState("");

  function addItem() {
    if (itemName && itemPrice) {
      const newItem = {
        name: itemName,
        price: itemPrice
      };
      setCart([...cart, newItem]);
      setItemName('');
      setItemPrice('');
    }
    
  }

  function removeItem(index) {
    let updatedcart = [...cart];
    updatedcart.splice(index, 1);
    setCart(updatedcart);
    }

  return(
    <div className='parent'>
      <h1>Parent Component</h1>

      <label htmlFor="itemName" >Item Name:</label>
      <input type="text" id="itemName" onChange={(e)=>setItemName(e.target.value)}/>

      <label htmlFor="itemPrice" >Item Price:</label>
      <input type="number" id="itemPrice" onChange={(e)=>setItemPrice(e.target.value)}/>

      <button onClick={addItem}>Add Item</button>

      <Child cart={cart} onDelete={removeItem}/>

    </div>
  )
}

export default Parent;