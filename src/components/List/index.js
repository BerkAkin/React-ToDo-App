import React from 'react'
import { useState, useEffect } from 'react';
function List({todos, setTodos, filter}) {


    const filteredTodos =
    filter === "active"
      ? todos.filter((todo) => !todo.status)
      : filter === "completed"
      ? todos.filter((todo) => todo.status)
      : todos;


    const onDelete = (id) => {
        const newTodos = todos.filter((todo) => todo.id !== id)
        setTodos(newTodos)
    }

    const onCheck = (id) =>{
        const newTodos = todos.map((todo) => { 
            if(todo.id === id){
                todo.status = !todo.status
            }
            return todo
        })
        setTodos(newTodos)
    }


  return (
    <>
        {
            filteredTodos.map((todo) => {
                return (
                    <li key={todo.id} className={todo.status ? "completed" : ""}>
                        <div className="view">
                            <input onChange={()=>onCheck(todo.id)} checked={todo.status} className="toggle" type="checkbox" />
                            <label>{todo.text}</label>
                            <button onClick={()=>onDelete(todo.id)} className="destroy"></button>
                        </div>
                    </li>
                   
                )
            })
        }

    </>
  )
}

export default List