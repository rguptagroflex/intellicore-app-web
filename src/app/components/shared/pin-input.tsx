import { PinInput as ChakraPinInput, Group } from "@chakra-ui/react";
import * as React from "react";

export interface PinInputProps extends ChakraPinInput.RootProps {
  rootRef?: React.Ref<HTMLDivElement>;
  count?: number;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  attached?: boolean;
}

export const PinInput = React.forwardRef<HTMLInputElement, PinInputProps>(
  function PinInput(props, ref) {
    const { count = 4, inputProps, rootRef, attached, ...rest } = props;

    const defaultStyle: PinInputProps = {
      height: "50px",
      width: "50px",
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
      <ChakraPinInput.Root ref={rootRef} {...rest}>
        <ChakraPinInput.HiddenInput ref={ref} {...inputProps} />
        <ChakraPinInput.Control>
          <Group attached={attached}>
            {Array.from({ length: count }).map((_, index) => (
              <ChakraPinInput.Input
                css={defaultStyle}
                key={index}
                index={index}
              />
            ))}
          </Group>
        </ChakraPinInput.Control>
      </ChakraPinInput.Root>
    );
  }
);
