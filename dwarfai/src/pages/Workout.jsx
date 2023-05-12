import { Box, Container, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import "./Workout.css";
import WorkoutCard from "../components/WorkoutCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Workout() {
  return (
    <>
      <Navbar />
      <Box style={{
        position: 'relative',
        top: '4rem'
      }}>
        <Container
          id="workout-heading"
          maxW="80vw"
          style={{ textAlign: "center" }}
        >
          <Heading as={"h1"} size="3xl" noOfLines={1}>
            Generate your next
          </Heading>
          <Heading as={"h1"} size="3xl" noOfLines={1}>
            <span className="workout-magicfont">workout</span> routine in
          </Heading>
          <Heading as={"h1"} size="3xl" noOfLines={1}>
            seconds 💪
          </Heading>
          <Text
            fontSize={"md"}
            style={{
              color: "rgb(100 116 139)",
              opacity: "1",
              margin: "1.25rem 0",
            }}
          >
            201,537 workout routines generated so far.
          </Text>
        </Container>
        <SimpleGrid
          maxW="90vw"
          style={{ margin: "auto", marginBottom: "4rem" }}
          spacing={4}
          templateColumns="repeat(3, 1fr)"
        >
          {cardData.map((element) => {
            return (
              <WorkoutCard
                img={element.img}
                txt={element.txt}
                heading={element.heading}
                btnText={"Add To Profile!"}
              />
            );
          })}
        </SimpleGrid>
      </Box>
      <Footer />
    </>
  );
}

var cardData = [
  {
    img: "https://images.pexels.com/photos/2247179/pexels-photo-2247179.jpeg",
    txt: "If you’re trying to lose weight faster, don’t look beyond these easy to do exercises that need no equipment but a little will power.",
    heading: "Weight Loss Exercises",
  },
  {
    img: "https://images.pexels.com/photos/3755826/pexels-photo-3755826.jpeg",
    txt: "Are you a beginner who wants to build muscle and strength but doesn’t know where to begin? We’ll help you get started with these five simple muscle building exercises.",
    heading: "Muscle Building Exercises",
  },
  {
    img: "https://images.pexels.com/photos/685531/pexels-photo-685531.jpeg",
    txt: "Every workout plan should include strength training — and bigger muscles are just one of the health benefits you’ll reap.",
    heading: "Strength Exercises",
  },
];
