import { Flex, GridItem, Input, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { PasswordInput } from "@/app/components/shared/password-input";
import { Button } from "@/app/components/shared/button";
import { Field } from "@/app/components/shared/field";

const Login = () => {
  const navigate = useNavigate();
  return (
    <GridItem colSpan={1}>
      <Flex
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        gap={5}
        p={{ base: 10, md: 14, lg: 20 }}
      >
        <Text fontSize="30px">Welcome Back!</Text>
        <Text textAlign="center" mb={5}>
          Enter your credentials to log in
        </Text>

        <Flex flexDir="column" w="full" gapY={2}>
          <Field label="Email" required>
            <Input
              borderRadius="2xl"
              px={5}
              py={7}
              placeholder="eg. johnfrans@gmail.com"
              bg="bg.input"
              _placeholder={{ color: "fg.placeholder" }}
            />
          </Field>
        </Flex>
        <Flex flexDir="column" w="full" gapY={2}>
          <Field
            label="Password"
            helperText="Must be at least 8 characters"
            required
          >
            <PasswordInput
              borderRadius="2xl"
              px={5}
              py={7}
              placeholder="Enter your password"
              bg="bg.input"
              _placeholder={{ color: "fg.placeholder" }}
            />
          </Field>
        </Flex>

        <Button
          borderRadius="2xl"
          bg="secondary"
          color="fg.secondary"
          _hover={{ bg: "primary", color: "fg.primary" }}
          transition="all 0.1s ease"
          w="5/6"
          py={7}
          mt={5}
        >
          Log In
        </Button>

        <Text fontSize="sm">
          Don't have an account?{" "}
          <Text
            as="span"
            color="fg.link"
            cursor="pointer"
            onClick={() => {
              navigate("/auth/signup");
            }}
          >
            Sign Up
          </Text>
        </Text>
      </Flex>
    </GridItem>
  );
};

export default Login;
