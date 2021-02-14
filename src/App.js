import { Toolbar } from '@material-ui/core'
import React, { useState } from 'react'
import { Form, Navbar, Todolist } from './components'

const App = () => {
    const [todolist, setTodolist] = useState([])

    const handleAddTodo = ((todo) => {
        console.log('handleAddTodo in App.js')
        console.log(`${todo} received from Form.js`)

        setTodolist([...todolist, todo])
    })

    const removeTodo = ((itemToRemove) => {
        console.log('removeTodo in App.js')
        console.log(`${itemToRemove} received from Todolist.js`)
        setTodolist(todolist.filter((todo) => todo !== itemToRemove))
    })


    console.log(todolist)

    return (
        <div>
            <Navbar />
            <Toolbar />
            <Form handleAddTodo={handleAddTodo} />
            <br />
            <Todolist todolist={todolist} removeTodo={removeTodo} />
        </div>
    )
}

export default App
