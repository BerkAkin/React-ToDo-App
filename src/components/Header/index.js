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

const onSubmitForm = (e) => {
  e.preventDefault();
}

  return (
    <div>
         <header className="header">
                <h1>Yapılacaklar</h1>
                <form onSubmit={onSubmitForm}>
                    <input onKeyDown={onEnter} onChange={handleChange} value={todoText.text} className="new-todo" placeholder="Ne yapıyorsun?" />
                </form>
            </header>
    </div>
  )
}

export default Header