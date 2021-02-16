import React from 'react'
import { Toolbar } from '@material-ui/core'
import { Form, Navbar, Todolist } from '../components'



const Home = () => {
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

export default Home
