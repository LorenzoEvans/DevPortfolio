import React, {Component} from 'react';
import {Box} from "grommet/es6";

class WritingContent extends Component {
  render() {
    return (
      <>
        <Box
          overflow="auto"
          height={"100vh"}
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
        </Box>

      </>
    );
  }
}

export default WritingContent;