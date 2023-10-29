import React from 'react'
import { useState } from 'react'
function Form({setTodos, todos}) {

    const [form,setForm] = useState({'name':'','status':false});

    const addTodo = (tod) => {
        setTodos([...todos,tod])
    }
   
    const onChangeInput = (e) => {
        setForm({'name': e.target.value,'status':false});
      }
    const prev = (e)=>{
        e.preventDefault();
        addTodo(form);
        setForm({'name': '','status':false});
    }
    
    console.log(todos)

  return (
    <div>   
        <form onSubmit={prev}>
            <input value={form.name} onChange={onChangeInput} />
            <button>Add Todo</button>
        </form>
    </div>
  )
}

export default Form