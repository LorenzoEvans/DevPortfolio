import {FormAdd, FormSubtract} from "grommet-icons/es6";
import React from "react";
import {Box, Text} from "grommet/es6";

const theme = {
  global: {
    edgeSize: {
      small: "8px"
    },
    elevation: {
      light: {
        small: "0px 1px 5px rgba(12, 67, 170, 0.50)",
        medium: "0px 3px 8px rgba(32, 34, 112, 0.50)"
      }
    }
  },
  tabs: {
    borderBottom: undefined,
    border: undefined,
    gap: "110px",
    justify: "start",
    width: "100%",
    elevation: "10px",
    paddingTop: "5px"
  },
  anchor: {
    textDecoration: "none",
    hover: {
      textDecoration: "none"
    }
  },
  tab: {
    active:{
      color: "light-4",
    },
    border: undefined,
    // pad: {
    //   bottom: "light-2",
    //   horizontal: "small",
    //   borderBottomStyle: undefined,
    //   border: undefined
    // },
    hover: {
      border: "light-2",
      color: "#BEA49F"
    }
  }
};

const RichTabTitle = ({ icon, label }) => (
  <Box direction="row" align="center" gap="small" margin="small">
    {icon}
    <Text size="xsmall">
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
    border: {
    color: "none",
    side: "none"
    }
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