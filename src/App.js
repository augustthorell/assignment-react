import React, { useState } from 'react'
import List from './components/List'
import Form from './components/Form'
import GoogleSearch from './components/GoogleSearch'
import uuid from 'react-uuid'

const App = () => {

  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])

  const handleSubmit = (e) => {
    setTodos([...todos, { text: input, completed: false, id: uuid() }])
    setInput('')
    e.preventDefault()
  }

  const handleChange = (newTodo) => {
    setInput(newTodo)
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((el) => el.id !== id))
  }

  const completeTodo = (id) => {
    setTodos(todos.map((item) => {
      if (item.id === id) {
        return {
          ...item, completed: !item.completed
        }
      } else {
        return {
          ...item
        }
      }
    }))
  }

  return (
    <>
      <GoogleSearch />
      <Form
        input={input}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />

      <List
        todos={todos}
        deleteTodo={deleteTodo}
        completeTodo={completeTodo}
      />

    </>
  )
}

export default App

