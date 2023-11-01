import React from 'react'


function Header({todoText, setTodoText, todos, setTodos, error, setError}) {



const handleChange = (e) =>{
  setTodoText({...todoText, 'text':e.target.value, 'id': Math.random()});
} 
const onEnter = (e)=>{
    if(e.key === 'Enter'){
      if(e.target.value===""){
        setError('Boş giriş yapılamaz !');
        return
      }
      setTodos([...todos, todoText]);
      setTodoText({...todoText, 'text':''})
      setError("");
  }

  
}

const onSubmitForm = (e) => {
  e.preventDefault();
}


  return (
    <div>
         <header className="header">
                <h1>Yapılacaklar</h1>
                
                <small style={{color:'red',display:'flex',justifyContent:'center',fontWeight:600}}>{error}</small>
                <form onSubmit={onSubmitForm}>
                    <input onKeyUp={(e)=>onEnter(e)} onChange={handleChange} value={todoText.text} className="new-todo" placeholder="Ne yapıyorsun?" />
                </form>
            </header>
    </div>
  )
}

export default Header