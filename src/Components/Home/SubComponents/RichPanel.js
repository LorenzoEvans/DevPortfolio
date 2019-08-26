
import {AccordionPanel, Box, Heading} from "grommet";
import React, { Component } from "react";

class RichPanel extends Component {
  state = {
    hovering: false
  };

  renderPanelTitle = () => {
    const { icon, label } = this.props;
    const { hovering } = this.state;
    return (
      <Box
        direction="row"
        align="center"
        gap="small"
        pad={{ horizontal: "small" }}
      >
        {icon}
        <Heading level={4} color={hovering ? "#ac9bb4" : "light-4"}>
          {label}
        </Heading>
      </Box>
    );
  };

  render() {
    const { children } = this.props;
    return (
      <AccordionPanel
        label={this.renderPanelTitle()}
        onMouseOver={() => this.setState({ hovering: true })}
        onMouseOut={() => this.setState({ hovering: false })}
        onFocus={() => this.setState({ hovering: true })}
        onBlur={() => this.setState({ hovering: false })}
      >
        {children}
      </AccordionPanel>
    );
  }
}

export default RichPanel