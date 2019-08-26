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
  box: {
    elevation: {
      "light": {
        "none": "none",
        "xsmall": "0px 1px 2px rgba(0, 0, 0, 0.20)",
        "small": "0px 2px 4px rgba(0, 0, 0, 0.20)",
        "medium": "0px 4px 8px rgba(0, 0, 0, 0.20)",
        "large": "0px 8px 16px rgba(0, 0, 0, 0.20)",
        "xlarge": "0px 12px 24px rgba(0, 0, 0, 0.20)"
      },
      "dark": {
      }
    }
  },
  tabs: {
    borderBottomWidth: "medium",
    background: "light-5",
    border: undefined,
    gap: "110px",
    justify: "start",
    width: "100%",
    header: {
      background: undefined,
    },
    paddingTop: "5px"
  },
  anchor: {
    textDecoration: "none",
    hover: {
      textDecoration: "none"
    }
  },
  tab: {
    background: "transparent",
    color: "#582C49",
    active:{
      color: "#E2B3A9",
    },
    border: undefined,
    pad: {
      bottom: "light-2",
      horizontal: "small",
      borderBottomStyle: {
        width: "20px"
      },
      // border: undefined
    },
    hover: {
      border: "light-2",
      color: "#E2B3A9"
    }
  }
};

module.exports = {theme};