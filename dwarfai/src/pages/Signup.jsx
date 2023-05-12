import React, { useState } from 'react'
import { Box, Button, FormControl, FormErrorMessage, Input } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
function Signup() {
    let [user, setUser] = useState({
        email: '',
        password: '',
        Cpassword: ''
    })
    const redirect = useNavigate();
    const isError = user.password !== user.Cpassword

    return (
        <Box style={{
            background: '#F7F9FC'
        }}>

            <Box width={'30%'} m={'auto'} style={{
                background: 'white'
            }} p={'6'}>
                <Box align='center' mt={'8'}>
                    <h3 style={{
                        fontWeight: '700',
                        fontSize: '2rem',
                        lineHeight: '2rem',
                        margin: '10px 0px'
                    }}>Sign up for an account</h3>
                    <p>Have an account already?   <Link to='/sign-in' >Sign in</Link> </p>

                </Box>
                <Box mt={'8'}>

                    <p style={{ margin: '7px 0px', fontWeight: '700', color: '#4B5563' }}>First Name</p>
                    <Input variant='outline' background={'white'} color={'black'} />

                    <br />
                    <br />

                    <p style={{ margin: '7px 0px', fontWeight: '700', color: '#4B5563' }}>Last Name</p>
                    <Input variant='outline' background={'white'} color={'black'} />

                    <br />
                    <br />

                    <p style={{ margin: '7px 0px', fontWeight: '700', color: '#4B5563' }}>Email</p>
                    <Input variant='outline' type='email' background={'white'} color={'black'} onChange={(e) => { setUser({ ...user, email: e.target.value }) }} />

                    <br />
                    <br />

                    <p style={{ margin: '7px 0px', fontWeight: '700', color: '#4B5563' }}>Password</p>
                    <Input variant='outline' type='password' background={'white'} color={'black'} onChange={(e) => { setUser({ ...user, password: e.target.value }) }} />

                    <br />
                    <br />
                    <FormControl isInvalid={isError}>
                        <p style={{ margin: '7px 0px', fontWeight: '700', color: '#4B5563' }}>Confirm Password</p>
                        <Input variant='outline' type='password' background={'white'} color={'black'} onChange={(e) => { setUser({ ...user, Cpassword: e.target.value }) }} />
                        {
                            isError ? <FormErrorMessage>Password is not Matched.</FormErrorMessage> : ' '
                        }
                        <br />
                        <br />

                        <Button colorScheme='messenger' p={'5'} width={'100%'} onClick={() => {
                            if (user.password === user.Cpassword) {
                                let data = JSON.parse(localStorage.getItem("UserData")) || [];
                                // console.log(data)
                                data = [...data, user];
                                // console.log(data)
                                localStorage.setItem("UserData", JSON.stringify(data))
                                redirect('/sign-in')
                            }
                        }}>Sign Up</Button>
                    </FormControl>

                    <br />
                    <p align='center' style={{
                        margin: '20px 0px '
                    }}>Forgot password?</p>
                </Box>

            </Box >
        </Box>
    )
}

export default Signup