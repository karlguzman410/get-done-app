import React, { useContext } from 'react'
import { Toolbar } from '@material-ui/core'
// import { Form, Navbar, Todolist } from './components'
import { AppContext } from '../AppContext'



const Home = () => {
    const { todolist } = useContext(AppContext)
    return (
        <div>
            {/* <Navbar />
            <Toolbar /> */}
            {/* <Form handleAddTodo={handleAddTodo} />
            <br />
            <Todolist todolist={todolist} removeTodo={removeTodo} updateTodo={updateTodo} /> */}
        </div>
    )
}

export default Home
