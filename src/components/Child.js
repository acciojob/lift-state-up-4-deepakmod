import React from 'react';

function Child({key,item,onDelete}){
    return(
        <div className='child'>
            <li>{item.name}-${item.price}
            <button onClick={()=>{onDelete(key)}}>Delete</button>
            </li>
        </div>
    )
}

export default Child