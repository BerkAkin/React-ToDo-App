import React from 'react'
function Header({todoText, setTodoText, todos, setTodos}) {

const handleChange = (e) =>{
  setTodoText({...todoText, 'text':e.target.value, 'id': Math.random()});
} 
const onEnter = (e)=>{
  if(e.key === 'Enter'){
    setTodos([...todos, todoText]);
    setTodoText({...todoText, 'text':''});
  }
}

  return (
    <div>
         <header className="header">
                <h1>Todos</h1>
                <form>
                    <input onKeyDown={onEnter} onChange={handleChange} value={todoText.text} className="new-todo" placeholder="What needs to be done?" />
                </form>
            </header>
    </div>
  )
}

export default Header