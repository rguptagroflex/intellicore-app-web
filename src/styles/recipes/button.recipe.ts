"use client";

import { defineRecipe } from "@chakra-ui/react";

export const buttonRecipe = defineRecipe({
  base: {
    display: "flex",
    outline: "none",
    focusRing: "none",
  },
  variants: {
    visual: {
      primary: { bg: "bg.primary", color: "fg.primary" },
      secondary: { bg: "bg.secondary", color: "fg.secondary" },
      outline: {
        borderWidth: "1px",
        borderColor: "colors.primary",
      },
    },
    size: {
      sm: { padding: "4", fontSize: "12px" },
      lg: { padding: "8", fontSize: "24px" },
    },
  },
  defaultVariants: {
    visual: "primary",
    size: "lg",
  },
});
