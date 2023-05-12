import React, { useState } from 'react'
import { Button, ButtonGroup, position } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
function Profile() {
    let [data, setData] = useState(JSON.parse(localStorage.getItem('Workout')) || [])
    return (
        <>
            <Navbar />

            <div style={{

                position: 'relative',
                top: '5rem',
                height: '90vh'
            }}>
                <h1 style={{ fontWeight: "800", fontSize: "4.25rem" }}>Favorite</h1>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3,1fr)',
                    gap: '20px',
                }}>
                    {data.map((ele, index) => {
                        return (

                            <div >
                                <img src={ele.img} alt="" />
                                <h2>{ele.heading}</h2>
                                <ButtonGroup>
                                    <Button variant="solid" colorScheme="red" onClick={() => {
                                        let temp = data.filter((ele, i) => {
                                            return i != index;
                                        })
                                        setData(temp);
                                        localStorage.setItem('Workout', JSON.stringify(temp))
                                    }}>
                                        Remove
                                    </Button>
                                    <Button variant="solid" colorScheme="blue" disable={true}>
                                        View More
                                    </Button>
                                </ButtonGroup>
                            </div>
                        )
                    })}

                </div>

            </div >
            <Footer />
        </>

    )
}

export default Profile