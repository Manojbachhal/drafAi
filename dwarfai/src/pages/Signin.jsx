import React from 'react'
import { Box, Button, Input } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
function Signin() {
    return (
        <Box style={{
            background: '#F7F9FC'
        }}>

            <Box width={'30%'} m={'auto'} style={{
                background: 'white'
            }} p={'6'}>
                <Box align='center' mt={'8'}>
                    <h1 className='gradient' p={'5'}>GymGenie</h1>
                    <h3 style={{
                        fontWeight: '700',
                        fontSize: '2rem',
                        lineHeight: '2rem',
                        margin: '10px 0px'
                    }}>Sign in</h3>
                    <p>Don't have an account?  <Link to='sign-up' >Sign Up</Link> </p>

                </Box>
                <Box mt={'8'}>
                    <p style={{ margin: '7px 0px', fontWeight: '700', color: '#4B5563' }}> Email</p>
                    <Input variant='outline' background={'white'} color={'black'} />

                    <br />
                    <br />

                    <p style={{ margin: '7px 0px', fontWeight: '700', color: '#4B5563' }}>Password</p>
                    <Input variant='outline' background={'white'} color={'black'} />

                    <br />
                    <br />
                    <Button colorScheme='messenger' p={'5'} width={'100%'}>Sign In</Button>

                    <br />
                    <p align='center' style={{
                        margin: '20px 0px '
                    }}>Forgot password?</p>
                </Box>

            </Box >
        </Box>
    )
}

export default Signin