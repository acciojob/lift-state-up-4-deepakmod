import React, { useState } from 'react';
import Child from './Child.js';

function Parent(){
  const [items,setItems]=useState([]);
  const [itemName,setItemName]=useState("");
  const [itemPrice,setItemPrice]=useState("");

  function addItem() {
    if (itemName && itemPrice) {
      const newItem = {
        name: itemName,
        price: itemPrice
      };
      setItems([...items, newItem]);
      setItemName('');
      setItemPrice('');
    }
    
  }

  function removeItem(index) {
    let updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
    }

  return(
    <div className='parent'>
      <h1>Parent Component</h1>

      <label htmlFor="itemName" >Item Name:</label>
      <input type="text" id="itemName" onChange={(e)=>setItemName(e.target.value)}/>

      <label htmlFor="itemPrice" >Item Price:</label>
      <input type="number" id="itemPrice" onChange={(e)=>setItemPrice(e.target.value)}/>

      <button onClick={addItem}>Add Item</button>
      <h1>Child Component</h1>
      {
        items.map((item,index)=>(
          <ul>
          <Child key={index} item={item} onDelete={()=>{removeItem(index)}}/>
          </ul>
        ))
      }

    </div>
  )
}

export default Parent;