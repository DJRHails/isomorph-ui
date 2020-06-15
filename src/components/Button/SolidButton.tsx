import React from "react";
import { ButtonProps, BaseButton } from "./BaseButton";
import styled from "styled-components";
import css from "@styled-system/css";

export const StyledSolidButton = styled(BaseButton)(
  css({
    "&": {
      color: "var(--text-color)",
      backgroundColor: "white",
      zIndex: 0,
      transition: "all 150ms ease",
    },
    "&:hover": {
      boxShadow: "md",
    },
    "&:hover::before": {
      opacity: 0.9,
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "black",
    },
    "&::before": {
      content: "''",
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 1,
      height: "100%",
      width: "100%",
      backgroundColor: "var(--button-color)",
      pointerEvents: "none",
    },
  })
);

export const SolidButton: React.FC<ButtonProps> = ({
  buttonColor = "brand",
  textColor = "white",
  ...props
}: ButtonProps) => (
  <StyledSolidButton buttonColor={buttonColor} textColor={textColor} {...props} />
);