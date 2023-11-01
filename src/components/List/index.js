import React from 'react'
import { useState } from 'react';
function List({todos, setTodos, filter}) {


  

    const filteredTodos =
    filter === "active"
      ? todos.filter((todo) => todo.status === false)
      : filter === "completed"
      ? todos.filter((todo) => todo.status === true)
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


    const onLabelClick = (id) =>{

        let tr = todos.some((todo)=>todo.editable===true)

        if(!tr){
            todos.map((todo)=>{
                if(todo.id === id){
                    todo.editable = !todo.editable  
                    setEditText(todo.text)
                }
            })
        }
        setTodos([...todos])
    }




    const [editText,setEditText] = useState('')

    const onEditChange = (e) =>{
            setEditText(e.target.value)
        
    }




    const handleChange = (e , id) => {
        const obje = todos.find(todo=>todo.id === id)
        if(e.key === 'Enter'){
            obje.text = editText
            obje.editable = !obje.editable;
            setEditText('')
            if(obje.status === true){
                obje.status = !obje.status
            } 
            setTodos([...todos])
        }
        if(e.key ==='Escape'){
            obje.editable = !obje.editable;
            setTodos([...todos])
            console.log("edit kapandı")
        }
        
    
    }


  return (
    <>
        {
            filteredTodos.map((todo) => {
                return (
                    <li key={todo.id} className={todo.status ? "completed" : ""}>
                        <div className="view">
                            <input onChange={()=>onCheck(todo.id)} checked={todo.status} className="toggle" type="checkbox" />
                            {
                            todo.editable 
                            ? 
                            <input onKeyUp={(e)=>handleChange(e,todo.id)} onChange={onEditChange} value={editText} autoFocus spellCheck="false"/> 
                            : 
                            <label onClick={()=>onLabelClick(todo.id)}>{todo.text}</label>
                            }
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