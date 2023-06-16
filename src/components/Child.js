import React from 'react';

function Child({cart,onDelete}){
    return(

        <div className='child'>
        <h1>Child Component</h1>
        <ul>
        {
          cart.map((item,index)=>(
            <li>{item.name} - ${item.price}
            <button onClick={()=>{onDelete(index)}}>Delete</button>
            </li>
          ))
        }
        </ul>
      </div>

        
    )
}

export default Child