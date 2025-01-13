import { Button } from "@/app/components/shared/button";
import { Field } from "@/app/components/shared/field";
import Input from "@/app/components/shared/input";
import { PasswordInput } from "@/app/components/shared/password-input";
import { SelectInput } from "@/app/components/shared/select-input";
import webStorageKeyEnum from "@/app/enums/web-storage-key.enum";
import getAllowedCountries from "@/app/helpers/getAllowedCountries";
import { entitlementPayload } from "@/app/helpers/request";
import { sortObjectArrayByProperty } from "@/app/helpers/sortObjectArrayByProperty";
import intellicoreService from "@/app/services/intellicore.service";
import WebStorageService from "@/app/services/webstorage.service";
import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";

type StateDetails = {
  value?: number;
  label?: string;
  id: number;
  stateCode: number;
  stateName: string;
  countryId: number;
  countryCode: string;
  stateTax: string;
};

type CountryDetails = {
  value: number;
  label?: string;
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
  countryStateDetails: StateDetails[];
};

const Signup = () => {
  const navigate = useNavigate();
  const [countryOptions, setCountryOptions] = useState<CountryDetails[]>([]);
  const [stateOptions, setStateOptions] = useState<StateDetails[]>([]);

  const [signupForm, setSignupForm] = useState<{
    email: string;
    country: CountryDetails | null;
    state: StateDetails | null;
    password: string;
  }>({
    email: "",
    country: null,
    state: null,
    password: "",
  });

  useEffect(() => {
    intellicoreService.getCounteriesWithStates().then((res) => {
      // console.log(res.data, "countries with states");
      let { data } = res as { data: CountryDetails[] };
      data?.forEach((country: CountryDetails) => {
        country.countryStateDetails = sortObjectArrayByProperty(
          country?.countryStateDetails,
          "stateName"
        );
        country.countryStateDetails = country?.countryStateDetails.map(
          (state: StateDetails) => ({
            ...state,
            value: state.id,
            label: state.stateName,
          })
        );
        country.value = country.id;
        country.label = country.countryName || "";
      });
      // console.log(data, "DATA");
      const sortedCountries = sortObjectArrayByProperty(data, "countryName");
      setCountryOptions(sortedCountries);
    });
  }, []);

  useEffect(() => {
    const selectedCountry = countryOptions.find(
      (country) => country.id === signupForm.country?.value
    );
    console.log(selectedCountry, "on select selectedCountry");
    if (
      selectedCountry &&
      (selectedCountry.countryStateDetails ?? []).length > 0
    ) {
      setStateOptions(selectedCountry.countryStateDetails);
    } else {
      setStateOptions([]);
    }
  }, [signupForm.country?.value]);

  const handleCountryChange = (country: CountryDetails) => {
    console.log(country, "on select country");
    setStateOptions([]);
    setSignupForm({
      ...signupForm,
      country: country,
      state: null,
    });
  };

  const handleSubmit = () => {
    intellicoreService.getEntitlementByEmail(signupForm.email).then((res) => {
      const {
        data: { entitlement },
      } = res as { data: any };
      // console.log(entitlement, "res");

      if (entitlement) {
        navigate("/auth/login");
        return;
      }

      // Other wise create entitlement
      const countryDetail = countryOptions.find(
        (country) => country.id === signupForm.country?.value
      );

      const stateDetail = stateOptions.find(
        (state) => state.id === signupForm.state?.value
      );
      const payload = {
        email: signupForm.email,
        countryId: countryDetail?.id,
        countryCode: countryDetail?.countryCode,
      } as entitlementPayload;

      if (stateDetail?.id) {
        payload.countryStateDetailId = stateDetail.id;
        payload.stateCode = stateDetail?.stateCode;
      }

      intellicoreService.createEntitlement(payload).then((res: any) => {
        console.log(res, "create entitlement res");
        const { token } = res?.data;

        if (token) {
          WebStorageService.setItem(webStorageKeyEnum.ENTITLEMENT_TOKEN, token);
        }

        // navigate("/auth/login");
      });
    });
  };
  // console.log(import.meta.env, "env.VITE_RELEASESTAGE");  
  // console.log(countryOptions, "countryOptions");
  // console.log(signupForm, "Signup form");

  return (
    <Flex
      // marginTop={"30px"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      px={"10"}
    >
      <Text fontSize={"3xl"} marginBottom={"10px"}>
        Sign Up Account
      </Text>
      <Text textStyle={"sm"} fontWeight={"light"} textAlign={"center"}>
        Enter your personal data to create your account
      </Text>
      <Stack gap={"4"} width={"full"} marginTop={"20px"}>
        <Field required label={"Email"}>
          <Input
            required
            type="email"
            name="email"
            value={signupForm.email}
            placeholder={"eg. johnfrans@gmail.com"}
            onChange={(e) => {
              setSignupForm({
                ...signupForm,
                email: e.target.value,
              });
            }}
          />
        </Field>
        <Field required label={"Country"} helperText={"Select your country"}>
          <SelectInput
            onChange={handleCountryChange}
            // getOptionLabel={(option) => option.label}
            // getOptionValue={(option) => option.value}
            options={countryOptions.map((country) => ({
              value: country.id,
              label: country.countryName,
            }))}
            placeholder={"Choose a country"}
            value={signupForm.country || null}
            isLoading={!countryOptions.length}
          />
        </Field>
        {stateOptions.length > 0 && (
          <Field required label={"State"} helperText={"Select your state"}>
            <SelectInput
              onChange={(e) => {
                setSignupForm({
                  ...signupForm,
                  state: e,
                });
              }}
              options={stateOptions.map((state) => ({
                value: state.id,
                label: state.stateName,
              }))}
              placeholder={"Choose a state"}
              value={signupForm.state || null}
            />
          </Field>
        )}
        <Field
          required
          label={"Password"}
          helperText="Must be atleast 8 characters"
        >
          <PasswordInput
            name="password"
            placeholder={"Enter your password"}
            value={signupForm.password}
            onChange={(e) => {
              setSignupForm({
                ...signupForm,
                password: e.target.value,
              });
            }}
          />
        </Field>
      </Stack>

      <Button
        onClick={handleSubmit}
        width={"5/6"}
        py={7}
        marginTop={"24px"}
        isPrimary
      >
        Sign Up
      </Button>

      <Flex marginTop={"20px"}>
        <Text marginRight={"5px"} textStyle={"sm"}>
          Already have an account?
        </Text>
        <Link to="/auth/login">
          <Text color={"secondary"} textStyle={"sm"}>
            Login
          </Text>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Signup;
