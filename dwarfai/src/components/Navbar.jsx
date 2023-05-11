import React from 'react'
import { Button, Flex } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import './Navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <Flex style={{ boxShadow: '-1px 10px 18px -9px rgba(0,0,0,0.75)', width: '100%', height: '75px', justifyContent: 'space-between', alignItems: 'center' }} >
            <Flex width="80%" style={{ alignItems: 'center', justifyContent: 'inherit' }}>
                <h1 className='gradient'>GymGenie</h1>
                <p>Home</p>
                <p>About</p>
                <p>Pricing</p>
                <p>Gym genie MealPlan <span className='span'>NEW!</span></p>
                <p>MacroTracker<span className='span'>NEW!</span></p>
            </Flex>
            <Box>
                <Button> <Link to={'/sign-in'}> Sign In </Link></Button>
                <Button colorScheme='blue'> <Link to={'/sign-up'}>Sign Up</Link></Button>

            </Box>
        </Flex>

    )
}

export default Navbar