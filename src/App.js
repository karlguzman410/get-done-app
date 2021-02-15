import { Toolbar } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { Form, Navbar, Todolist } from './components'
import database from './firebase'
import firebase from 'firebase'

const App = () => {
    const [todolist, setTodolist] = useState([])

    //fetch todos from firebase upon mounting
    useEffect(() => {
        //sort by timestamp, descending -> when the object or 'todo' created in the firebase 
        database.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            // console.log(snapshot.docs.map(doc => doc.data()))
            // on database snapshot, map throught the 'docs'. For each 'doc', return the 'todo'
            //              <--this will return an array of object we can use to setTodolist-->

            // console.log(snapshot.docs.map(doc => ({
            //     id: doc.id,
            //     todo: doc.data().todo
            // })))
            setTodolist(snapshot.docs.map(doc => ({
                id: doc.id,
                todo: doc.data().todo
            })))
        })
    }, [])


    const handleAddTodo = ((todo) => {
        console.log('handleAddTodo in App.js')
        console.log(`${todo} received from Form.js`)
        //add this object to the database collection
        //in this case, the object has key 'todo'
        database.collection('todos').add({
            todo: todo,
            //to add the timestamp for every object added to our db collection
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
    })

    //we are receiving the todo.id from Todolist.js
    const removeTodo = ((todo) => {
        console.log('removeTodo in App.js')
        console.log(`${todo} received from Todolist.js`)
        //deleting from firebase db
        database.collection('todos').doc(todo).delete()
    })

    return (
        <div>
            <Navbar />
            <Toolbar />
            <Form handleAddTodo={handleAddTodo} />
            <br />
            {/* {Object.keys(todolist).map(todo => (
                <p key={todolist[todo].id}>{todolist[todo].todo}</p>
            ))} */}
            <Todolist todolist={todolist} removeTodo={removeTodo} />
        </div>
    )
}

export default App
