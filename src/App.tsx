import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputField from './components/InputField'
import {Todo} from './model'
import TodoList from './components/TodoList'

const App : React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([])  

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if(todo) {
      setTodos([...todos,{id:Date.now(), todo:todo, isDone:false}])
      setTodo("");
    }
  };


  return (
      <div className='App'>
        <span className='heading'>TASKIFY</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList todos={todos} setTodos={setTodos}/>
      </div>
  )
}

export default App
