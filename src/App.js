import { Toolbar } from '@material-ui/core'
import React from 'react'
import { Form, Navbar, Todolist } from './components'


const App = () => {

    return (
        <div>
            <Navbar />
            <Toolbar />
            <Form />
            <br />
            <Todolist />
        </div>
    )
}

export default App
