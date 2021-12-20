import React from "react";
import {
  Box,
  Heading,
  Container,
  Image,
  Button,
  InputGroup,
  Input,
  InputRightElement,
  Text
} from "@chakra-ui/react";
import NotificationBell from "../public/assets/notification-bell.svg";
import ShoppingCart from "../public/assets/shopping-cart.svg";
// import pageImage from "../../assets/groceryImage.jpg";

const LandingPage = () => {
  const property = {
    ShoppingCartImage: ShoppingCart,
    // blueColour:
  };
  return (
    <main>
      <Box
        bgImage="url('/assets/groceryImage.jpg')"
        h="100vh"
        w="100vw"
        bgRepeat="no-repeat"
        position="relative"
        bgBlendMode="overlay"
        backgroundSize="cover"
      >
        <Container maxW="container.lg">
          <Box d="flex" justifyContent="space-between" pt="5">
            <Heading as="h3" size="md" color="#0000FF">
              shopurban
            </Heading>
            <Box d="flex" w="100" justifyContent="space-between">
              {/* <Box>
                <Image src={property.ShoppingCartImage} alt="cart" />
              </Box>
              <Box>
                <Image src={NotificationBell} alt="cart" />
              </Box> */}
              <Box
                borderRadius="50"
                w="10"
                h="10"
                mx="2"
                alignContent="center"
                justifyContent="center"
                d="flex"
                alignItems="center"
                color="white"
                p="3"
                backgroundColor="#48BB78"
              >
                P
              </Box>
              <Box>
                <Button colorScheme="blue" variant="outline">
                  Start Selling
                </Button>
              </Box>
            </Box>
          </Box>
          <Box top="0" left="0" bottom="0" h="450px" d="flex" justifyContent="center" alignItems="center">
            <Container maxW='container.md' centerContent={true}>
              <Box>
                <Heading as="h1" color="whiteAlpha.900">Relax, Finding An Agent Just Got Easier</Heading>
                <Text textAlign="center" color="whiteAlpha.900" my="2">Recieve proposals from best agents for free</Text>
                <InputGroup size="md">
                  <Input placeholder="Enter a Suburb" color="whiteAlpha.900"/>
                  <InputRightElement width="4rem">
                    <Button
                      h="2.5rem"
                      colorScheme="green"
                      w="90px"
                      px="18px"
                      size="lg"
                    >Search</Button>
                  </InputRightElement>
                </InputGroup>
              </Box>
            </Container>
          </Box>
        </Container>
      </Box>
    </main>
  );
};

export default LandingPage;
