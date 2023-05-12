import React from 'react'
import { Button, Flex } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import './Navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
    let isLoggedin = JSON.parse(localStorage.getItem('isLoggedin'))
    return (
        <Flex style={{
            boxShadow: '-1px 10px 18px -9px rgba(0,0,0,0.75)', width: '100%',
            height: '75px', justifyContent: 'space-between',
            alignItems: 'center', position: 'fixed',
            background: 'white', marginTop: '-10px', zIndex: '99999'
        }} >
            <Flex width="80%" style={{ alignItems: 'center', justifyContent: 'inherit' }}>
                <h1 className='gradient'>GymGenie</h1>
                <Link to='/' >Home</Link>
                <Link to='/profile'>Profile</Link>
                <Link to='/workout'>Workout <span className='span'>NEW!</span></Link>
                <Link>MacroTracker<span className='span'>NEW!</span></Link>
                <Link to='/settings'>Settings </Link>
            </Flex>
            <Box>
                <Button disable={isLoggedin}> <Link to={'/sign-in'} > Sign In </Link></Button>
                <Button colorScheme='blue'> <Link to={'/sign-up'}>Sign Up</Link></Button>

            </Box>
        </Flex>

    )
}

export default Navbar