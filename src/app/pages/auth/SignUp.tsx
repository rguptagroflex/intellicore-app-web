import { Button, Flex, Input, MenuTrigger, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { PasswordInput } from "@/app/components/shared/password-input";
import { useNavigate } from "react-router";
import { MenuContent, MenuItem, MenuRoot } from "@/app/components/shared/menu";
import { Field } from "@/app/components/shared/field";

interface Country {
  id: number;
  countryName: string;
  countryCode: number;
  continent: string;
  countryTax: string;
  taxCategory: string;
  currency: string;
  taxRegulation: string;
  countryIso2: string;
  countryIso3: string;
  countryStateDetails: Array<State>;
}

interface State {
  id: string;
  stateCode: number;
  stateName: string;
  countryId: number;
  countryCode: string;
  stateTax: string;
}

const SignUp = () => {
  const navigate = useNavigate();

  const [countries, setCountries] = useState<Country[]>();
  const [selectedCountry, setSelectedCountry] = useState<Country>();
  const [selectedState, setSelectedState] = useState<State>();

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const promise = await fetch(
          "https://qa.groflexerp.com/identityapi/countries"
        );
        const response = await promise.json();
        console.log(response);
        setCountries(response.data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    console.log(selectedCountry, selectedState);
  }, [selectedCountry, selectedState]);

  return (
    <Flex
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      gap={5}
      w="50%"
      p={20}
    >
      <Text fontSize="30px">Sign Up Account</Text>
      <Text textAlign="center" mb={5}>
        Enter your personal data to create your account
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
      {countries?.length && (
        <Flex flexDir="column" w="full" gapY={2}>
          <Field label="Country" required>
            <MenuRoot
              onSelect={(value) => {
                console.log(value);
                console.log(value.value);
                setSelectedCountry(
                  countries.find((c) => c.countryName === value.value)
                );
              }}
            >
              <MenuTrigger asChild px={5} pt={5} pb={9}>
                <Input
                  borderRadius="2xl"
                  placeholder="Select your country"
                  bg="bg.input"
                  _placeholder={{ color: "fg.placeholder" }}
                  value={
                    selectedCountry && selectedCountry.countryName
                      ? selectedCountry.countryName
                      : undefined
                  }
                />
              </MenuTrigger>
              <MenuContent>
                {countries.length &&
                  countries.map((country) => (
                    <MenuItem key={country.id} value={country.countryName}>
                      {country.countryName}
                    </MenuItem>
                  ))}
              </MenuContent>
            </MenuRoot>
          </Field>
        </Flex>
      )}
      {selectedCountry ? (
        selectedCountry.countryStateDetails.length > 0 ? (
          <Flex flexDir="column" w="full" gapY={2}>
            <Field label="State / Province">
              <MenuRoot
                onSelect={(value) => {
                  console.log(value);
                  console.log(value.value);
                  setSelectedState(
                    selectedCountry.countryStateDetails.find(
                      (s) => s.stateName === value.value
                    )
                  );
                }}
              >
                <MenuTrigger asChild px={5} pt={5} pb={9}>
                  <Input
                    readOnly
                    borderRadius="2xl"
                    placeholder="Select your state/province"
                    bg="bg.input"
                    userSelect="none"
                    _placeholder={{ color: "fg.placeholder" }}
                    value={selectedState?.stateName || ""}
                  />
                </MenuTrigger>
                <MenuContent>
                  {selectedCountry.countryStateDetails.map((state) => (
                    <MenuItem key={state.id} value={state.stateName}>
                      {state.stateName}
                    </MenuItem>
                  ))}
                </MenuContent>
              </MenuRoot>
            </Field>
          </Flex>
        ) : (
          <Flex flexDir="column" w="full" gapY={2}>
            <Field label="State / Province">
              <Input
                borderRadius="2xl"
                px={5}
                py={7}
                placeholder="Enter your state/province"
                bg="bg.input"
                _placeholder={{ color: "fg.placeholder" }}
              />
            </Field>
          </Flex>
        )
      ) : null}
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
        w="5/6"
        py={7}
        mt={5}
      >
        Sign Up
      </Button>

      <Text fontSize="sm">
        Already have an account?{" "}
        <Text
          as="span"
          color="fg.link"
          cursor="pointer"
          onClick={() => {
            navigate("/auth/login");
          }}
        >
          Log in
        </Text>
      </Text>
    </Flex>
  );
};

export default SignUp;
