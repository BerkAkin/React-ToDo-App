import React from 'react'
import Header from '../Header'
import List from '../List'
import Filter from '../Filter'
import { useState } from 'react'
import { PropTypes } from 'prop-types'
import '../style.css'


function Index() {


    const [todoText,setTodoText] = useState({
        'text':'',
        'id':Math.random(),
        'status':false,
        'editable':false
      })

      //state e fonksiyon verip varsa todoyu initial state olarak yoksa boş dizi aç şeklinde tanımlıyoruz
    const [todos,setTodos] = useState(() => {
        return JSON.parse(localStorage.getItem("todos")) || [] 
      })


    const [filter,setFilter] = useState('all')

    const setAllCompleted = () =>{
        setTodos(
            todos.map((todo) => 
                todo.status ? todo : {...todo, status: !todo.status}
            )
        )
    }

    const [error,setError] = useState('')
      

  return (
    <div>
        <section className="todoapp">
           <Header error={error} setError={setError} todoText={todoText} setTodoText={setTodoText} todos={todos} setTodos={setTodos}/>
            <section className="main">
                <input className="toggle-all" type="checkbox" />
                <label onClick={setAllCompleted} htmlFor="toggle-all"> Mark all as complete</label>
                <ul  className="todo-list">
                    <List todos={todos} setTodos={setTodos} filter={filter} setFilter={setFilter} setError={setError}/>
                </ul>
            </section>
            <Filter setTodos={setTodos} todos={todos} filter={filter} setFilter={setFilter}/>
        </section>
    </div>
  )
}




Header.propTypes = {
    todoText: PropTypes.object.isRequired,
    setTodoText: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired,
    setTodos: PropTypes.func.isRequired,
    error: PropTypes.string.isRequired,
    setError: PropTypes.func.isRequired,
}

List.propTypes = {
    filter: PropTypes.string.isRequired,
    setFilter: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired,
    setTodos: PropTypes.func.isRequired,
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    setFilter: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired,
    setTodos: PropTypes.func.isRequired,
}




export default Index