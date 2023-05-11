import React from 'react'
import { Route, Routes } from 'react-router'
import Signin from '../pages/Signin'
import Home from '../pages/Home'
import Signup from '../pages/Signup'

function Rouer() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sign-in' element={<Signin />} />
            <Route path='/sign-up' element={<Signup />} />
        </Routes>
    )
}

export default Rouer