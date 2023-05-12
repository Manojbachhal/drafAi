import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function WorkoutCard({ img, txt, heading, btnText }) {
  return (
    <Card>
      <CardBody>
        <Image src={img} alt="weight loss" borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{heading}</Heading>
          <Text>{txt}</Text>
        </Stack>
        <Divider />
        <CardFooter style={{ padding: "1.25rem 0" }}>

          <Button variant="solid" colorScheme="blue" onClick={() => {
            let data = JSON.parse(localStorage.getItem('Workout')) || [];
            data = [...data, { img, txt, heading }]
            localStorage.setItem('Workout', JSON.stringify(data));
          }}>
            {btnText}
          </Button>

        </CardFooter>
      </CardBody>
    </Card>
  );
}
