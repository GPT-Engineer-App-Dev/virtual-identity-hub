import { Container, Text, VStack, Box, Heading, Button, Image, HStack, IconButton } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Index = () => {
  const [background, setBackground] = useState("");

  useEffect(() => {
    const colors = ["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#4B0082", "#8B00FF"];
    let colorIndex = 0;

    const changeBackground = () => {
      setBackground(colors[colorIndex]);
      colorIndex = (colorIndex + 1) % colors.length;
    };

    const intervalId = setInterval(changeBackground, 3000); // Change color every 3 seconds

    return () => clearInterval(intervalId);
  }, []);
  return (
    <Container
      centerContent
      maxW="container.md"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      bg={background}
      transition="background-color 1s ease"
    >
      <VStack spacing={8}>
        <Box textAlign="center">
          <Image
            borderRadius="full"
            boxSize="150px"
            src="https://via.placeholder.com/150"
            alt="Profile Image"
            mb={4}
          />
          <Heading as="h1" size="2xl" mb={2}>John Doe</Heading>
          <Text fontSize="lg" color="gray.600">Full Stack Developer</Text>
        </Box>
        <Text fontSize="md" textAlign="center" maxW="600px">
          Hi, I'm John Doe, a passionate full stack developer with expertise in building scalable web applications. I love to explore new technologies and continuously improve my skills.
        </Text>
        <HStack spacing={4}>
          <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" as="a" href="https://github.com" target="_blank" />
          <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" as="a" href="https://linkedin.com" target="_blank" />
          <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" as="a" href="https://twitter.com" target="_blank" />
        </HStack>
        <Button colorScheme="blue" size="lg">Get in Touch</Button>
      </VStack>
    </Container>
  );
};

export default Index;