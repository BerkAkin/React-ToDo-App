import React from 'react'
import Form from './Form'
import List from './List'
import {useState} from 'react'

function Todos() {
  const [todos,setTodos] = useState([
    {
      'name':'Learn React',
      'status':false
    },
    {
      'name':'Learn Redux',
      'status':false
    }
  ])

  return (
    <div>
      <Form setTodos = {setTodos} todos ={todos}/>
      <List todos={todos}/>
    </div>
  )
}

export default Todos