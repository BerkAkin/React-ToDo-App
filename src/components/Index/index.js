import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import List from '../List'
import Filter from '../Filter'
import { useState } from 'react'
import '../style.css'


function Index() {

    const [todoText,setTodoText] = useState({
        'text':'',
        'id':Math.random(),
        'status':false,
        'editable':false
      })

    const [todos,setTodos] = useState([])
    const [filter,setFilter] = useState('all')

    const setAllCompleted = () =>{
        setTodos(
            todos.map((todo) => 
                todo.status ? todo : {...todo, status: !todo.status}
            )
        )
    }
      

  return (
    <div>
        <section className="todoapp">
           <Header todoText={todoText} setTodoText={setTodoText} todos={todos} setTodos={setTodos}/>
            <section className="main">
                <input className="toggle-all" type="checkbox" />
                <label onClick={setAllCompleted} htmlFor="toggle-all"> Mark all as complete</label>
                <ul  className="todo-list">
                    <List todos={todos} setTodos={setTodos} filter={filter} setFilter={setFilter}/>
                </ul>
            </section>
            <Filter setTodos={setTodos} todos={todos} filter={filter} setFilter={setFilter}/>
        </section>
        <Footer/>
    </div>
  )
}

export default Index