import React from 'react'
import { useState } from 'react'
import '../style.css'

function List({todos}) {
    
    const handleCheck = (e) => {e.target.style.textDecoration = 'line-through'}
    
  return (
    <div>

        <button>Check All</button>

        {todos.map((todo,index) => (
          <li className='madde' key={index}>
            <span onClick={handleCheck}>{todo.name}</span> 
            <span>{todo.status}</span>
          </li>
        ))}
    </div>
  )
}

export default List