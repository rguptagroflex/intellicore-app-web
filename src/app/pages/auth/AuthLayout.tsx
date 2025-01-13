import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { Outlet } from "react-router";
import bg from "../../../assets/bg/auth-bg.png";
import logo1 from "../../../assets/intellicore/logo1.svg";

const AuthLayout = () => {
  // useEffect(() => {

  // }, []);

  const FirstColumn = () => {
    return (
      <Flex
        display={{ base: "none", lg: "flex" }}
        borderTopRadius={"150px"}
        // marginTop={"40px"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        backgroundImage={`url(${bg})`}
        backgroundRepeat={"no-repeat"}
        backgroundSize={"cover"}
      >
        <Image
          src={logo1}
          alt="logo"
          css={{
            width: "115px",
            objectFit: "contain",
            marginBottom: "19px",
          }}
        />
        <Text fontSize={"2xl"}>Get Started with Us</Text>
        <Text
          fontSize={"sm"}
          width={"200px"}
          textAlign={"center"}
          marginBottom={"16px"}
        >
          Complete these easy steps to register your account
        </Text>
        <Flex
          flexDirection={"column"}
          spaceY={"10px"}
          color={"fg.input"}
          width={"250px"}
          paddingX={"10px"}
          paddingY={"5px"}
          borderRadius={"20px"}
          textAlign={"center"}
          className="input-font"
        >
          <Box
            backgroundColor={"bg.input/68"}
            px={"10px"}
            py={"12px"}
            borderRadius={"10px"}
          >
            1. Sign up your account
          </Box>
          <Box
            backgroundColor={"bg.input/68"}
            px={"10px"}
            py={"12px"}
            borderRadius={"10px"}
          >
            2. Set up your workspace
          </Box>
          <Box
            backgroundColor={"bg.input/68"}
            px={"10px"}
            py={"12px"}
            borderRadius={"10px"}
          >
            3. Set up your profile
          </Box>
        </Flex>
      </Flex>
    );
  };

  return (
    <Grid
      templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
      background={"bg.tertiary"}
      height={"100%"}
      paddingTop={"40px"}
      paddingLeft={{ base: "0px", lg: "13px" }}
    >
      <FirstColumn />
      <Outlet />
    </Grid>
  );
};

export default AuthLayout;
