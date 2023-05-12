import React from 'react';
import Todos from './components/Todos';
import todo from './models/todo';
import NewTodo from './components/NewTodo';
import { useState } from 'react';

function App() {
  
  const onAddTodo=(text:string)=>{
    const newTodo = new todo(text)
    setTodoList((prev)=>prev?.concat(newTodo))
  }
  const onRemoveTodo=(todo:todo)=>{
    setTodoList(prev=>{
      const newTodo = prev.filter(item=> item!==todo);
      return newTodo;
    });
  }

  const [todoList,setTodoList] = useState<todo[]>([])
  return (
    <div className="App">
      <NewTodo addTodo={onAddTodo}/>
      <Todos removeTodo={onRemoveTodo} items={todoList}/>
    </div>
  );
}

export default App;
