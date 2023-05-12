import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Box, Button, Input } from '@chakra-ui/react';
import './Settings.css'
function Settings() {
    let loginuser = JSON.parse(localStorage.getItem("CurrentUSer"));
    let [password, setUser] = useState("");
    let [newpassword, setPass] = useState("");
    let [newEmail, setEmail] = useState("");
    let [check, setcheck] = useState(false);
    let [check1, setcheck1] = useState(false);
    return (
        <>
            <Navbar />
            <Box style={{ position: 'relative', top: '5rem' }}>
                <h1 style={{ fontWeight: '800', fontSize: '4rem' }}> Hi {loginuser.email}</h1>
                <h2 className="gradient" style={{
                    textAlign: 'center'
                }}>Change your deails Here</h2>

                <h1 style={{ fontWeight: '800', fontSize: '2rem' }} onClick={() => {
                    document.getElementById('password').classList.toggle('changepass_block')
                }} > Change Password</h1>

                <h1 style={{ fontWeight: '800', fontSize: '2rem' }} onClick={() => {
                    document.getElementById('Email').classList.toggle('changeEmail_block')
                }} > Change Email</h1>




                <Box p={5} className='changepass' id='password' >

                    <Box w={'25%'} style={{ display: !check ? 'block' : 'none' }}  >
                        <p style={{ margin: '7px 0px', fontWeight: '700', color: '#4B5563' }}>Enter Current Password</p>
                        <Input variant='outline' type='password' background={'white'} color={'black'} onChange={(e) => { setUser(e.target.value) }} />
                        <Button colorScheme='messenger' mt={'5'} p={'5'} width={'100%'} onClick={() => {
                            if (password === loginuser.password) {

                                setcheck(true);
                                console.log(check)
                            }
                        }}>Submit</Button>
                    </Box>
                    <Box w={'25%'} style={{ display: check ? 'block' : 'none' }}>
                        <p style={{ margin: '7px 0px', fontWeight: '700', color: '#4B5563' }}>Enter New Password</p>
                        <Input variant='outline' type='password' background={'white'} color={'black'} onChange={(e) => { setPass(e.target.value) }} />
                        <Button colorScheme='messenger' mt={'5'} p={'5'} width={'100%'} onClick={() => {
                            if (password === loginuser.password) {
                                let data = JSON.parse(localStorage.getItem("UserData"));
                                data.map(ele => {
                                    if (ele.email === loginuser.email) {
                                        ele.password = newpassword
                                        ele.Cpassword = newpassword
                                    }
                                })
                                console.log(data)
                                localStorage.setItem("UserData", JSON.stringify(data));
                                localStorage.setItem("CurrentUSer", JSON.stringify({
                                    email: loginuser.email, password: newpassword
                                }));

                            }
                        }}>Submit</Button>
                    </Box>
                </Box>


                {/* email */}

                <Box p={5} className='changeEmail' id='Email' >

                    <Box w={'25%'} style={{ display: !check1 ? 'block' : 'none' }}  >
                        <p style={{ margin: '7px 0px', fontWeight: '700', color: '#4B5563' }}>Enter Current Password</p>
                        <Input variant='outline' type='password' background={'white'} color={'black'} onChange={(e) => { setUser(e.target.value) }} />
                        <Button colorScheme='messenger' mt={'5'} p={'5'} width={'100%'} onClick={() => {
                            if (password === loginuser.password) {

                                setcheck1(true);
                                console.log(check)
                            }
                        }}>Submit</Button>
                    </Box>
                    <Box w={'25%'} style={{ display: check1 ? 'block' : 'none' }}>
                        <p style={{ margin: '7px 0px', fontWeight: '700', color: '#4B5563' }}>Enter New Email</p>
                        <Input variant='outline' type='email' background={'white'} color={'black'} onChange={(e) => { setEmail(e.target.value) }} />
                        <Button colorScheme='messenger' mt={'5'} p={'5'} width={'100%'} onClick={(e) => {
                            if (password === loginuser.password) {
                                let data = JSON.parse(localStorage.getItem("UserData"));
                                data.map(ele => {
                                    if (ele.email === loginuser.email) {
                                        ele.email = newEmail

                                    }
                                })
                                // console.log(data)
                                localStorage.setItem("UserData", JSON.stringify(data));
                                localStorage.setItem("CurrentUSer", JSON.stringify({
                                    email: newEmail, password: loginuser.password
                                }));

                            }
                        }}>Submit</Button>
                    </Box>

                </Box>

            </Box >
            {/* <Footer /> */}
        </>
    )
}

export default Settings