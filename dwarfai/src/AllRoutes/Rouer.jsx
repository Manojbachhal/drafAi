import React from 'react'
import { Route, Routes } from 'react-router'
import Signin from '../pages/Signin'
import Home from '../pages/Home'
import Signup from '../pages/Signup'
import Settings from '../pages/Settings'

function Rouer() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sign-in' element={<Signin />} />
            <Route path='/sign-up' element={<Signup />} />
            <Route path='/settings' element={<Settings />} />
        </Routes>
    )
}

export default Rouer