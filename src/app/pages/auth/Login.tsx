import { Button } from "@/app/components/shared/button";
import { Field } from "@/app/components/shared/field";
import Input from "@/app/components/shared/input";
import { PasswordInput } from "@/app/components/shared/password-input";
import webStorageKeyEnum from "@/app/enums/web-storage-key.enum";
import intellicoreService from "@/app/services/intellicore.service";
import WebStorageService from "@/app/services/webstorage.service";
import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  console.log(loginForm, "Login form");

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(loginForm);

    intellicoreService
      .getEntitlementByEmail(loginForm.email)
      .then((res: any) => {
        const {
          data: { entitlement },
        } = res as { data: any };
        if (!entitlement) {
          navigate("/auth/sign-up");
          return;
        } else {
          intellicoreService
            .login(loginForm.email, loginForm.password)
            .then((res: any) => {
              if (res.meta.email) {
                navigate("/auth/sign-up");
              } else {
                WebStorageService.setItem(
                  webStorageKeyEnum.LOGIN_TOKEN,
                  res.data.token
                );
                navigate("/");
              }
            });
        }
      });
  };

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
      <form
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        onSubmit={handleSubmit}
      >
        <Stack gap={"4"} width={"5/6"} marginTop={"20px"}>
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

        <Button type="submit" width={"5/6"} py={7} marginTop={"24px"} isPrimary>
          Log In
        </Button>
      </form>

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
