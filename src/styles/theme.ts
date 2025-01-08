import {
  createSystem,
  defaultConfig,
  defineConfig,
} from "@chakra-ui/react";

const tokens = {
  colors: {
    brand: {
      50: { value: "#244133" },
      100: { value: "#90BD88" },
      200: { value: "#4B845C" },
      300: { value: "#4C7C56" },
      400: { value: "#437554" },
      600: { value: "#30384C" },
      700: { value: "#8A99AB" },
      800: { value: "#EFF9F0" },
      900: { value: "#E4E4E6" },
      950: { value: "#FFFFFF" },
      1000: { value: "#000000" },
    },
  },
};

const semanticTokens = {
  colors: {
    primary: {
      value: { _light: "{colors.brand.50}", _dark: "{colors.brand.50}" },
      description: "Primary color",
    },
    secondary: {
      value: { _light: "{colors.brand.100}", _dark: "{colors.brand.100}" },
      description: "Secondary color",
    },
    bg: {
      primary: {
        value: { _light: "{colors.brand.50}", _dark: "{colors.brand.50}" },
        description: "Primary Background color",
      },
      secondary: {
        value: {
          _light: "{colors.brand.100}",
          _dark: "{colors.brand.100}",
        },
        description: "Secondary Background color",
      },
      tertiary: {
        value: {
          _light: "{colors.brand.1000}",
          _dark: "{colors.brand.1000}",
        },
        description: "Tertiary Background color",
      },
      input: {
        value: {
          _light: "{colors.brand.700}",
          _dark: "{colors.brand.700}",
        },
        description: "Input Background color",
      },
    },
    fg: {
      primary: {
        value: {
          _light: "{colors.brand.950}",
          _dark: "{colors.brand.950}",
        },
        description: "Primary Foreground/Text color",
      },
      secondary: {
        value: {
          _light: "{colors.brand.1000}",
          _dark: "{colors.brand.1000}",
        },
        description: "Secondary Foreground/Text color",
      },
      tertiary: {
        value: {
          _light: "{colors.brand.800}",
          _dark: "{colors.brand.800}",
        },
        description: "Secondary Foreground/Text color",
      },
    },
  },
};

const customConfig = defineConfig({
  theme: {
    tokens,
    semanticTokens,
  },
});

export const system = createSystem(defaultConfig, customConfig);
