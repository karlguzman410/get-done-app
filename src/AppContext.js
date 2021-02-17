import React, { useState, useEffect } from 'react'
import database from './firebase'
import firebase from 'firebase'

const AppContext = React.createContext()

function ContextProvider({ children }) {
    const [todolist, setTodolist] = useState([])
    const [isLoggedIn, setIsLoggedIn] = useState(true)

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

    console.log(`isLoggedIn: ${isLoggedIn}`)

    //we are receiving the todo.id from Todolist.js

    const handleAddTodo = ((todo) => {
        //add this object to the database collection
        //in this case, the object has key 'todo'
        database.collection('todos').add({
            todo: todo,
            //to add the timestamp for every object added to our db collection
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
    })

    const removeTodo = ((todo) => {
        console.log('removeTodo in App.js')
        console.log(`${todo} received from Todolist.js`)
        //deleting from firebase db
        database.collection('todos').doc(todo).delete()
    })

    const updateTodo = ((edit, editId) => {
        console.log('updateTodo in App.js')
        console.log(`${editId} Received from Todolist.js `)
        database.collection('todos').doc(editId).update({ todo: edit })
    })

    return (
        <AppContext.Provider value={{ isLoggedIn, todolist, handleAddTodo, removeTodo, updateTodo }}>
            {children}
        </AppContext.Provider>
    )


}


export { ContextProvider, AppContext }
