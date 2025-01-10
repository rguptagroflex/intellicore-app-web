import * as React from "react";
import type { ButtonProps as ChakraButtonProps } from "@chakra-ui/react";
import {
  AbsoluteCenter,
  Button as ChakraButton,
  Span,
  Spinner,
  useRecipe,
} from "@chakra-ui/react";
import { buttonRecipe } from "@/styles/recipes/button.recipe";

interface ButtonLoadingProps {
  loading?: boolean;
  loadingText?: React.ReactNode;
}

interface CustomButtonProps {
  isPrimary?: true | boolean;
  isSecondary?: boolean;
  isOutlined?: boolean;
}

export interface ButtonProps
  extends ChakraButtonProps,
    ButtonLoadingProps,
    CustomButtonProps {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(props, ref) {
    const {
      loading,
      disabled,
      loadingText,
      children,
      size,
      isPrimary = true,
      isSecondary,
      isOutlined,
      css,
      ...rest
    } = props;

    const base: ChakraButtonProps = {
      py: 5,
      px: 5,
      display: "flex",
      outline: "none",
      focusRing: "none",
      borderWidth: "0",
      borderRadius: "13px",
      // _hover: {
      //   borderColor: "transparent",
      // },
    };
    const primary: ChakraButtonProps = {
      bg: "bg.primary",
      color: "fg.primary",
      _hover: {
        bg: "bg.secondary",
        color: "fg.secondary",
      },
    };
    const secondary: ChakraButtonProps = {
      bg: "bg.secondary",
      color: "fg.secondary",
      _hover: {
        bg: "bg.primary",
        color: "fg.primary",
      },
    };
    const outline: ChakraButtonProps = {
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: isPrimary ? "primary" : "secondary",
    };

    const styles = {
      ...base,
      ...(isPrimary && primary),
      ...(isSecondary && secondary),
      ...(isOutlined && outline),
    };

    return (
      <ChakraButton
        css={{ ...styles, ...css }}
        disabled={loading || disabled}
        ref={ref}
        {...rest}
      >
        {loading && !loadingText ? (
          <>
            <AbsoluteCenter display="inline-flex">
              <Spinner size="inherit" color="inherit" />
            </AbsoluteCenter>
            <Span opacity={0}>{children}</Span>
          </>
        ) : loading && loadingText ? (
          <>
            <Spinner size="inherit" color="inherit" />
            {loadingText}
          </>
        ) : (
          children
        )}
      </ChakraButton>
    );
  }
);
