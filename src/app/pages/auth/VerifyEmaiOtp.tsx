import { Button } from "@/app/components/shared/button";
import { Field } from "@/app/components/shared/field";
import { PinInput } from "@/app/components/shared/pin-input";
import webStorageKeyEnum from "@/app/enums/web-storage-key.enum";
import intellicoreService from "@/app/services/intellicore.service";
import WebStorageService from "@/app/services/webstorage.service";
import { Box, Fieldset, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";

const VerifyEmaiOtp = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState<Array<string>>([]);

  useEffect(() => {
    if (WebStorageService.getItem(webStorageKeyEnum.LOGIN_TOKEN)) {
      navigate("/");
    }
  }, []);

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const otpString = otp.join("");
    if (otpString.length < 4) return;

    intellicoreService.verifyEmailOtp(otpString).then((res: any) => {
      console.log(res, "Res for OTP");
      const { loginToken } = res;
      if (loginToken) {
        WebStorageService.setItem(webStorageKeyEnum.LOGIN_TOKEN, loginToken);
        WebStorageService.setItem(
          webStorageKeyEnum.LOGIN_TOKEN_START_TIME,
          new Date().getTime()
        );
        WebStorageService.removeItem(webStorageKeyEnum.REGISTRATION_TOKEN);
        WebStorageService.removeItem(webStorageKeyEnum.ENTITLEMENT_TOKEN);
        navigate("/");
      } else {
      }
      // console.log(res);
    });

    console.log(otp);
  };

  return (
    <Flex
      // marginTop={"30px"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      px={"10"}
    >
      <Box
        textAlign={"center"}
        width={"4/6"}
        fontSize={"3xl"}
        marginBottom={"10px"}
        textWrap={"wrap"}
        mb={"34px"}
      >
        <Text>Enter the OTP sent to your</Text>
        <Text> E-mail address</Text>
      </Box>
      <form onSubmit={handleSubmit}>
        <Fieldset.Root
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          width={"fit-content"}
          size="lg"
          maxW="md"
        >
          <Fieldset.Content>
            <Field
              label={"OTP"}
              required
              css={{
                "& .chakra-field__label": {
                  width: "full",
                },
              }}
            >
              <PinInput
                otp
                size={"lg"}
                type={"numeric"}
                value={otp}
                onValueChange={(e) => setOtp(e.value)}
                count={4}
              />
            </Field>
          </Fieldset.Content>
        </Fieldset.Root>
        <Button
          type="submit"
          width={"full"}
          py={7}
          marginTop={"24px"}
          isPrimary
        >
          Submit
        </Button>
      </form>

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

export default VerifyEmaiOtp;
