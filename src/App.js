import React, { useContext } from 'react'
import Home from './pages/Home'
import Loader from "react-loader-spinner";
import { AppContext } from './AppContext'
import Login from './pages/Login'


const App = () => {
    const { isLoggedIn } = useContext(AppContext)

    console.log(isLoggedIn)

    return (
        <>
            {isLoggedIn === false ? <Login />
                : isLoggedIn === true ? <Home />
                    : <Loader
                        type="Puff"
                        color="#00BFFF"
                        height={100}
                        width={100}
                    />}
        </>
    )
}

export default App
