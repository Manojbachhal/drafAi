import { Box, Button, Flex, Input } from '@chakra-ui/react'
import React from 'react'

function Footer() {
    return (
        <Box background={'#0F172A'}>
            <Box display={'flex'} justifyContent={'space-evenly'} height={'200px'} pt={7} style={{ color: 'white' }}>
                <Box>
                    <h6 style={{
                        fontWeight: 'bold'
                    }}>SUPPORT</h6>
                    <p>Pricing</p>
                </Box>


                <Box>
                    <h6 style={{
                        fontWeight: 'bold'
                    }}>COMPANY</h6>
                    <p>About</p>
                </Box>


                <Box>
                    <h6 style={{
                        fontWeight: 'bold'
                    }}>LEGAL</h6>
                    <p>Privacy</p>
                    <p>Terms</p>
                </Box>


                <Box>
                    <h6 style={{
                        fontWeight: 'bold', paddingBottom: '10px'

                    }}>SUBSCRIBE TO OUR NEWSLETTER</h6>
                    <p style={{
                        paddingBottom: '10px'
                    }}>The latest news, articles, and resources, sent to your inbox weekly.</p>


                    <Flex p={3} gap={'20px'}>
                        <Input background={'white'} color={'black'} />
                        <Button colorScheme='messenger' p={'5'} >Subscribe</Button>
                    </Flex>
                </Box>
            </Box>
            <hr></hr>
            <Box p={5} style={{
                color: 'white'
            }}>
                <p>2023 GymGenie. All rights reserved.</p>
            </Box>
        </Box >
    )
}

export default Footer