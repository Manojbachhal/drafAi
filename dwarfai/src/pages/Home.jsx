import { Box, Flex, Button, Text } from "@chakra-ui/react";
import React from "react";
import "./Home.css";
import { CheckIcon } from '@chakra-ui/icons'
import { color } from "framer-motion";


function Home() {
    return (
        <Box m={2}>
            <h1 style={{ fontWeight: "800", fontSize: "4.25rem" }}>
                {" "}
                Get <span className="gradient_Home">fit</span> with{" "}
                <span className="gradient_Home">AI</span>{" "}
            </h1>
            <Flex>
                <Box width="50%">
                    <p className="p_black">
                        Introducing GymGenie: tailored workout routines for{" "}
                        <span className="p_gradient">you </span>{" "}
                    </p>
                    <p className="p_black">✨ Just Released ✨ </p>
                    <Box pt={5}>
                        <p
                            style={{
                                fontWeight: "700",
                                fontSize: "1.5rem",
                                lineHeight: "2rem",
                                color: "#0369A1",
                            }}
                        >
                            GymGenie MealPlan 🥗{" "}
                        </p>
                        <p className="p_black">
                            Supercharge your personalized workout with AI-powered meal plans
                            tailored to your fitness goals
                        </p>
                    </Box>
                    <Box pt={5}>
                        <p
                            style={{
                                fontWeight: "700",
                                fontSize: "1.5rem",
                                lineHeight: "2rem",
                                color: "#10B981",
                            }}
                        >
                            MacroTracker ✏️{" "}
                        </p>
                        <p className="p_black">
                            Effortlessly enter your food and snacks and get an instant
                            analysis of calories, protein, carbohydrates, and fats
                        </p>
                    </Box>
                    <Box pt={5}>
                        <p>1,128,537 workout routines generated so far.</p>
                        <p>No credit card required.</p>
                    </Box>
                    <button className="getstarted_button">Get started</button>
                </Box>
                <Box width="50%">
                    <h1 style={{ fontSize: "8rem", textAlign: "center" }}>🧞‍♂️</h1>
                </Box>
            </Flex>


            <Box height={'430px'} pt={7}>
                <Box style={{ textAlign: "center" }}>
                    <h1 style={{ fontWeight: "800", fontSize: "3rem" }}>
                        Trusted by people across the world
                    </h1>
                    <p style={{ color: "gray", fontSize: "2rem" }}>
                        GymGenie has helped people in USA, India, Canada, UAE, and 80 more
                        countries
                    </p>
                </Box>


                <Flex
                    mt={5}
                    style={{ justifyContent: "space-evenly", textAlign: "center" }}
                >
                    <Box width={"33%"} boxShadow="md" p="6" rounded="md" bg="white" style={{
                        border: '1px solid lightgray'
                    }}>
                        <h1 className="card_gradient" style={{ fontWeight: "700" }}>
                            100%
                        </h1>
                        <p style={{ color: "gray" }}>Completion</p>
                    </Box>


                    <Box width={"33%"} boxShadow="md" p="6" rounded="md" bg="white" style={{
                        border: '1px solid lightgray'
                    }}>
                        <h1 className="card_gradient" style={{ fontWeight: "700" }}>
                            24/7
                        </h1>
                        <p style={{ color: "gray" }}>Delivery</p>
                    </Box>


                    <Box width={"33%"} boxShadow="md" p="6" rounded="md" bg="white" style={{
                        border: '1px solid lightgray'
                    }}>
                        <h1 className="card_gradient" style={{ fontWeight: "700" }}>
                            100K
                        </h1>
                        <p style={{ color: "gray" }}>Workout routines generated</p>
                    </Box>
                </Flex>
            </Box>


            <Box style={{
                background: '#0F172A',
                margin: '0'
            }}> <Box align='center' pt={6}>
                    <Box >
                        <Text fontSize='3xl' color={'gray.500'}>PRICING</Text>
                    </Box>

                    <Box>
                        <Text fontSize='5xl' color={'white'} fontWeight={'700'}>The Right Place For Your Fitness Goals</Text>
                    </Box>

                    <Box>
                        <Text fontSize='3xl' color={'gray.500'}>Work towards the best version of you.</Text>
                    </Box>


                </Box>

                <Flex
                    mt={5}
                    style={{ justifyContent: "space-evenly", gap: '20px', padding: '20px' }}
                >
                    <Box width={"50%"} boxShadow="md" p="6" rounded="md" bg="white" style={{
                        marginBottom: '-76px'
                    }}>
                        <span style={{
                            color: '#54549E', background: '#C7D2FE', borderRadius: '17px', padding: ' 5px 10px'
                        }}>Standard</span>
                        <h1 style={{ fontWeight: "700", fontSize: "4rem" }}>
                            $0 <sub style={{ fontSize: '20px', color: 'gray' }}>/mo</sub>
                        </h1>
                        <p style={{
                            color: "gray", fontSize: "1.5rem", lineHeight: '2rem'
                        }}>Free user plan</p>
                        <p style={{
                            marginTop: '20px'
                        }}> <CheckIcon style={{
                            backgroundColor: '#16A34A',
                            padding: '5px',
                            fontSize: '25px',
                            borderRadius: '13px',
                            color: 'white',
                        }} /> <span style={{
                            fontSize: "1.5rem", lineHeight: '2rem', paddingLeft: '10px'
                        }}> 1 Free Workout Routine Generated a Month</span></p>
                        <p style={{
                            marginTop: '20px'
                        }}> <CheckIcon style={{
                            backgroundColor: '#16A34A',
                            padding: '5px',
                            fontSize: '25px',
                            borderRadius: '13px',
                            color: 'white',
                        }} /> <span style={{
                            fontSize: "1.5rem", lineHeight: '2rem', paddingLeft: '10px'
                        }}> Get A New Workout Routine In Seconds</span></p>
                        <button className="started" style={{
                            marginTop: '100px'
                        }} >Get Started</button>
                    </Box>

                    <Box width={"50%"} boxShadow="md" p="6" rounded="md" bg="white" style={{
                        marginBottom: '-76px'
                    }}>
                        <span style={{
                            color: '#54549E', background: '#C7D2FE', borderRadius: '17px', padding: ' 5px 10px'
                        }}>PREMIUM</span>


                        <h1 style={{ fontWeight: "700", fontSize: "4rem" }}>
                            $2.99 <sub style={{ fontSize: '20px', color: 'gray' }}>/mo</sub>
                        </h1>


                        <p style={{
                            color: "gray", fontSize: "1.5rem", lineHeight: '2rem'
                        }}>Access to upcoming new features 👀</p>


                        <p style={{
                            marginTop: '20px'
                        }}> <CheckIcon style={{
                            backgroundColor: '#16A34A',
                            padding: '5px',
                            fontSize: '25px',
                            borderRadius: '13px',
                            color: 'white',
                        }} /> <span style={{
                            fontSize: "1.5rem", lineHeight: '2rem', paddingLeft: '10px'
                        }}> No Limit on Workout Routines Generated</span></p>


                        <p style={{
                            marginTop: '20px'
                        }}> <CheckIcon style={{
                            backgroundColor: '#16A34A',
                            padding: '5px',
                            fontSize: '25px',
                            borderRadius: '13px',
                            color: 'white',
                        }} /> <span style={{
                            fontSize: "1.5rem", lineHeight: '2rem', paddingLeft: '10px'
                        }}> Access to GymGenie Meal Plan</span></p>

                        <p style={{
                            marginTop: '20px'
                        }}> <CheckIcon style={{
                            backgroundColor: '#16A34A',
                            padding: '5px',
                            fontSize: '25px',
                            borderRadius: '13px',
                            color: 'white',
                        }} /> <span style={{
                            fontSize: "1.5rem", lineHeight: '2rem', paddingLeft: '10px'
                        }}> Access to MacroTracker</span></p>
                        <button className="started" >Get Started</button>
                    </Box>

                </Flex>
                <Box height={'200px'} background={'white'} width={'100%'}></Box>
            </Box >
        </Box >
    );
}

export default Home;
