import {FormAdd, FormSubtract} from "grommet-icons/es6";
import React from "react";
import {Box, Text} from "grommet/es6";
import { deepMerge } from 'grommet/utils'
import { grommet } from 'grommet/themes'
import { css } from "styled-components";

const theme = deepMerge(grommet, {
  global: {
    edgeSize: {
      small: "10px"
    },
    elevation: {
      light: {
        small: "0px 1px 5px rgba(0, 0, 0, 0.50)",
        medium: "0px 3px 8px rgba(0, 0, 0, 0.50)"
      }
    }
  },
  tab: {
    active: {
      background: "dark-1",
      color: "#aca19c"
    },
    background: "dark-3",
    border: undefined,
    color: "white",
    hover: {
      background: "#aca19c"
    },
    margin: undefined,
    pad: {
      bottom: undefined,
      horizontal: "small"
    },
    extend: ({ theme }) => css`
      border-radius: ${theme.global.control.border.radius};
      box-shadow: ${theme.global.elevation.light.small};
    `
  },
  tabs: {
    gap: "medium",
    header: {
      extend: ({ theme }) => css`
        padding: ${theme.global.edgeSize.small};
        box-shadow: ${theme.global.elevation.light.medium};
      `
    },
  }
})

const RichTabTitle = ({ icon, label }) => (
  <Box direction="row" align="center" gap="small" margin="small">
    {icon}
    <Text size="medium">
      <strong>{label}</strong>
    </Text>
  </Box>
);

const SubtractForm = () => (
  <FormSubtract color={"#AACDD7"}/>
);

const AddForm = () => (
  <FormAdd color={"#E2B3A9"}/>
);

const richAccordionTheme = {
  accordion: {
    icons: {
      collapse: SubtractForm,
      expand: AddForm
    },
    textDecoration: "none",
  }
};

const spinning = (
  <svg
    version="1.1"
    viewBox="0 0 32 32"
    width="32px"
    height="32px"
    fill="#333333"
  >
    <path
      opacity=".25"
      d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"
    />
    <path d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z">
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 16 16"
        to="360 16 16"
        dur="0.8s"
        repeatCount="indefinite"
      />
    </path>
  </svg>
);

const loading = (
  <Box align="center" justify="center" style={{ height: "100px" }}>
    {spinning}
  </Box>
);


export {theme, richAccordionTheme, RichTabTitle, loading};