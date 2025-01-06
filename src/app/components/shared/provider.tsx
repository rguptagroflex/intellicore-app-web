"use client";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";
import { system } from "@/styles/theme";

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      {/* <ChakraProvider value={defaultSystem}> */}
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
