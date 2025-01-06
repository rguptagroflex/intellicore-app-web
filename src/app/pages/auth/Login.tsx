import { Box, Image, Text } from "@chakra-ui/react";
import logo1 from "@/assets/intellicore/logo1.svg";

const Login = () => {
  return (
    <Box
      css={{
        bgColor: "bg.tertiary",
        minHeight: "100vh",
        width: "100vw",
        paddingTop: "40px",
        paddingLeft: "10px",
        display: "flex",
      }}
    >
      <Box
        borderTopRadius={"150px"}
        flex={"1"}
        bgColor={"bg.secondary"}
        display={{ base: "none", lg: "flex" }}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Image
          src={logo1}
          width={"120px"}
          height={"120px"}
          objectFit={"contain"}
          marginBottom={"1rem"}
        />
        <Text fontWeight={"normal"} fontSize={"2xl"}>
          Get Started with Us
        </Text>
        <Text
          width={"224px"}
          fontWeight={"normal"}
          textAlign={"center"}
          fontSize={"sm"}
          className="input-font"
        >
          Complete these easy steps to register your account
        </Text>
      </Box>
      <Box flex={"1"}></Box>
    </Box>
  );
};

export default Login;
