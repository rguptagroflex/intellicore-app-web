import { Input as ChakraInput, InputProps } from "@chakra-ui/react";
import React from "react";

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  function Input(props, ref) {
    const { className, css, ...rest } = props;

    const style: InputProps = {
      py: 7,
      px: 4,
      backgroundColor: "bg.input",
      color: "fg.primary",
      border: "none",
      borderRadius: "13px",
      _placeholder: {
        color: "fg.placeholder",
      },
      _focus: {
        outline: "none",
        // outline: "1px solid",
        // outlineColor: "fg.input",
      },
    };

    return (
      <ChakraInput
        ref={ref}
        css={{ ...style, ...css }}
        className={`input-font ${className}`}
        {...rest}
      />
    );
  }
);

export default React.memo(Input);
