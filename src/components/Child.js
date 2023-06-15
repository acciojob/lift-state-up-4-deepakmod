import React from 'react';

function Child({key,item,onDelete}){
    return(
        <li>{item.name}-${item.price}
        <button onClick={()=>{onDelete(key)}}>Delete</button>
        </li>
    )
}

export default Child