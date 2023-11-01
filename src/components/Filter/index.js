import React from 'react'
import { useState, useEffect } from 'react'

function Filter({filter, setFilter, todos, setTodos }) {

    const [count,setCount] =useState(0);
    useEffect(()=>{
        setCount(todos.filter(todo => todo.status === false).length)
    },[todos])

    const handleClearAll = () => {
        setTodos(todos.filter(todo => todo.status === false))
    }

  return (
    <>
            <footer className="footer">
                <span className="todo-count">
                    <strong>{count} </strong>
                    İş Kaldı
                </span>

                <ul className="filters">
                    <li>
                        <a onClick={() => setFilter('all')} className={filter === 'all' ? 'selected' : ''}>Tümü</a>
                    </li>
                    <li>
                        <a onClick={() => setFilter('active')} className={filter === 'active' ? 'selected' : ''}>Aktif</a> 
                    </li>
                    <li>
                        <a onClick={() => setFilter('completed')} className={filter === 'completed' ? 'selected' : ''}>Tamamlananlar</a>
                    </li>
                </ul>

                <button onClick={handleClearAll} className="clear-completed">
                    Temizle
                </button>
            </footer>
    </>
  )
}

export default Filter