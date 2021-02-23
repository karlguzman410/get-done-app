import React, { useState } from 'react'
import { database } from './firebase'
import firebase from 'firebase'
import { auth } from './firebase'

const AppContext = React.createContext()

function ContextProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [todolist, setTodolist] = useState([])
    const [isLoggedIn, setIsLoggedIn] = useState(null)


    const handleSignUp = (formData) => {
        console.log('handleSignUp()')
        console.log(formData)
        signup(formData)
    }

    const handleSignIn = (formData) => {
        console.log('handleSignIn()')
        signin(formData)
    }

    const handleLogout = (event) => {
        event.preventDefault()
        auth.signOut()
    }

    const signin = (formData) => {
        auth.signInWithEmailAndPassword(formData.email, formData.password)
            .then((userCredential) => {
                console.log(userCredential)
            })
            .catch((error) => {
                console.log((error.code))
                console.log((error.message))
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


    // auth status changes
    auth.onAuthStateChanged(user => {
        if (user) {
            setCurrentUser(user)
            setIsLoggedIn(true)
        } else {
            console.log('User logged out')
            setIsLoggedIn(false)
        }
    })

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
        <AppContext.Provider value={{ currentUser, handleSignUp, handleSignIn, todolist, handleAddTodo, removeTodo, updateTodo, setTodolist, handleLogout, isLoggedIn }}>
            {children}
        </AppContext.Provider>
    )


}


export { ContextProvider, AppContext }
