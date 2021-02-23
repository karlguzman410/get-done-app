import React, { useState, useEffect } from 'react'
import { database } from './firebase'
import firebase from 'firebase'
import { auth } from './firebase'

const AppContext = React.createContext()

function ContextProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [todolist, setTodolist] = useState([])
    const [isLoggedIn, setIsLoggedIn] = useState(false)



    console.log(currentUser)

    const handleSignUp = (formData) => {
        console.log('handleSignUp()')
        console.log(formData)
        signup(formData)
    }

    const handleSignIn = (formData) => {
        console.log('handleSignIn()')
        console.log(formData)
        signin(formData)
    }

    const handleLogout = (event) => {
        event.preventDefault()
        console.log('handleLogout() called')
        console.log(`Logout user: ${currentUser.displayName}`)
        auth.signOut()
            .then(() => {
                console.log('Logout successful')
                setIsLoggedIn(false)
            })
            .catch((error) => {
                console.log(error.code)
                console.log(error.message)
            })
    }

    const signin = (formData) => {
        auth.signInWithEmailAndPassword(formData.email, formData.password)
            .then((userCredential) => {
                let user = userCredential.user
                console.log(`Sign in user: ${user.displayName}`)
                setCurrentUser(user)
                console.log('Sign in successful')
                setIsLoggedIn(true)
            })
    }

    const signup = (formData) => {
        console.log('signup')
        console.log(`Email ${formData.email}, Password: ${formData.password}`)
        auth.createUserWithEmailAndPassword(formData.email, formData.password)
            .then((userCredential) => {
                let user = userCredential.user
                user.updateProfile({
                    displayName: `${formData.firstName} ${formData.lastName}`
                }).then(() => {
                    setCurrentUser(user)
                    console.log('Sign up successful')
                    setIsLoggedIn(true)
                }).catch((error) => {
                    console.log(error.code)
                    console.log(error.message)
                })
            })
            .catch((error) => {
                console.log('Sign up Error')
                console.log(error.code)
                console.log(error.message)
            })
    }



    console.log(`isLoggedIn: ${isLoggedIn}`)

    //we are receiving the todo.id from Todolist.js

    const handleAddTodo = ((todo) => {
        //add this object to the database collection
        //in this case, the object has key 'todo'
        database.collection(`${currentUser.displayName}'s todos`).add({
            todo: todo,
            //to add the timestamp for every object added to our db collection
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
    })

    const removeTodo = ((todo) => {
        console.log('removeTodo in App.js')
        console.log(`${todo} received from Todolist.js`)
        //deleting from firebase db
        database.collection(`${currentUser.displayName}'s todos`).doc(todo).delete()
    })

    const updateTodo = ((edit, editId) => {
        console.log('updateTodo in App.js')
        console.log(`${editId} Received from Todolist.js `)
        database.collection(`${currentUser.displayName}'s todos`).doc(editId).update({ todo: edit })
    })

    return (
        <AppContext.Provider value={{ currentUser, handleSignUp, handleSignIn, isLoggedIn, todolist, handleAddTodo, removeTodo, updateTodo, setTodolist, handleLogout }}>
            {children}
        </AppContext.Provider>
    )


}


export { ContextProvider, AppContext }
