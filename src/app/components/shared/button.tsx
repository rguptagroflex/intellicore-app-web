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
      isPrimary,
      isSecondary,
      isOutlined,
      ...rest
    } = props;

    const base = {
      display: "flex",
      outline: "none",
      focusRing: "none",
      _hover: {
        borderColor: "transparent",
      },
    };
    const primary = { bg: "bg.primary", color: "fg.primary" };
    const secondary = { bg: "bg.secondary", color: "fg.secondary" };
    const outline = {
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
        css={styles}
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
