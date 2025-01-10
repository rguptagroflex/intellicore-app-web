import { Button } from "@/app/components/shared/button";
import { Field } from "@/app/components/shared/field";
import Input from "@/app/components/shared/input";
import { PasswordInput } from "@/app/components/shared/password-input";
import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router";

const Login = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  console.log(loginForm, "Login form");

  return (
    <Flex
      // marginTop={"30px"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      px={"10"}
    >
      <Text fontSize={"3xl"} marginBottom={"10px"}>
        Welcome to Intellicore
      </Text>
      <Text textStyle={"sm"} fontWeight={"light"} textAlign={"center"}>
        Enter your Login Credentials to Login
      </Text>
      <Stack gap={"4"} width={"full"} marginTop={"20px"}>
        <Field required label={"Email"}>
          <Input
            required
            type="email"
            value={loginForm.email}
            placeholder={"eg. johnfrans@gmail.com"}
            onChange={(e) => {
              setLoginForm({
                ...loginForm,
                email: e.target.value,
              });
            }}
          />
        </Field>
        <Field required label={"Password"}>
          <PasswordInput
            placeholder={"Enter your password"}
            value={loginForm.password}
            onChange={(e) => {
              setLoginForm({
                ...loginForm,
                password: e.target.value,
              });
            }}
          />
        </Field>
      </Stack>

      <Button width={"5/6"} py={7} marginTop={"24px"} isPrimary>
        Log In
      </Button>

      <Flex marginTop={"20px"}>
        <Text marginRight={"5px"} textStyle={"sm"}>
          Don't have an account?
        </Text>
        <Link to="/auth/sign-up">
          <Text color={"secondary"} textStyle={"sm"}>
            Sign Up
          </Text>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Login;
