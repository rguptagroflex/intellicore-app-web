import {
  AspectRatio,
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";
import logo1 from "@/assets/intellicore/logo1.svg";
import { Outlet } from "react-router";

const AuthColumn = () => {
  return (
    <Grid
      templateColumns={{ lg: "repeat(2, 1fr)" }}
      bgColor="black"
      w="100%"
      minH="100vh"
    >
      <GridItem
        colSpan={{ base: 0, lg: 1 }}
        display={{ base: "none", lg: "flex" }}
      >
        <Flex
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          gap={5}
          h="full"
          w="full"
          mt="60px"
          borderTopRadius="150px"
          bgColor="secondary"
          // bgAttachment="fixed"
          // bgImg="url(@/assets/background.jpg)"
        >
          <Image
            src={logo1}
            boxSize="100px"
            objectFit="contain"
            borderRadius="full"
          />
          <Flex flexDir="column" alignItems="center" my={3}>
            <Text fontSize="30px">Get Started with Us</Text>
            <Text fontFamily="Manrope" maxW="250px" textAlign="center">
              Complete these easy steps to register your account
            </Text>
          </Flex>

          <Flex flexDir="column" gap={4} w="1/2">
            <Flex
              w="full"
              gapX={5}
              bgColor="white"
              borderRadius="2xl"
              px={10}
              py={5}
              align="center"
            >
              <AspectRatio w="30px" ratio={1}>
                <Box
                  bgColor="black"
                  color="white"
                  borderRadius="full"
                  textAlign="center"
                >
                  1.
                </Box>
              </AspectRatio>
              <Text
                w="full"
                textAlign="center"
                fontFamily="Manrope"
                color="black"
              >
                Sign up your account
              </Text>
            </Flex>
            <Flex
              w="full"
              gapX={5}
              bgColor="bg.input"
              borderRadius="2xl"
              px={10}
              py={5}
              align="center"
            >
              <AspectRatio w="30px" ratio={1}>
                <Box
                  bgColor="fg.primary"
                  color="black"
                  borderRadius="full"
                  textAlign="center"
                >
                  2.
                </Box>
              </AspectRatio>
              <Text w="full" textAlign="center" fontFamily="Manrope">
                Set up your workspace
              </Text>
            </Flex>
            <Flex
              w="full"
              gapX={5}
              bgColor="bg.input"
              borderRadius="2xl"
              px={10}
              py={5}
              align="center"
            >
              <AspectRatio w="30px" ratio={1}>
                <Box
                  bgColor="fg.primary"
                  color="black"
                  borderRadius="full"
                  textAlign="center"
                >
                  3.
                </Box>
              </AspectRatio>
              <Text w="full" textAlign="center" fontFamily="Manrope">
                Set up your profile
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </GridItem>
      <Outlet />
    </Grid>
  );
};

export default AuthColumn;
