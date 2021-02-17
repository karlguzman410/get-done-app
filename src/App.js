import React, { useContext, useState } from 'react'
import Home from './pages/Home'
import { AppContext } from './AppContext'
import Login from './pages/Login'


const App = () => {
    const { isLoggedIn } = useContext(AppContext)
    // const [isLoggedIn, setIsLoggedIn] = useState(false)
    return (
        <div>
            {isLoggedIn ? <Home /> : <Login />}
        </div>
    )
}

export default App
