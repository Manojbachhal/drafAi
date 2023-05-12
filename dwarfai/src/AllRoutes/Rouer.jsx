import React from 'react'
import { Route, Routes } from 'react-router'
import Signin from '../pages/Signin'
import Home from '../pages/Home'
import Signup from '../pages/Signup'
import Settings from '../pages/Settings'
import Profile from '../pages/Profile'

function Rouer() {
    let isLoggedin = JSON.parse(localStorage.getItem('isLoggedin'))
    console.log(typeof (isLoggedin))
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sign-in' element={<Signin />} />
            <Route path='/sign-up' element={<Signup />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/profile' element={isLoggedin == true ? <Profile /> : <Signin />} />
        </Routes>
    )
}

export default Rouer