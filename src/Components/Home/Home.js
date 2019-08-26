import React, { Component } from 'react'
import './Home.css'
import {
Grommet,
Box,
Button,
AccordionPanel,
Heading,
Accordion,
Anchor,
Grid,
Tabs,
Text,
ThemeContext,
Tab,
InfiniteScroll,
Clock } from 'grommet'
import { Apps, Aggregate, StatusInfo, Github, Twitter, Linkedin, ContactInfo, Bookmark, Home, Brush, Notes, Music, FormAdd, FormSubtract } from 'grommet-icons'

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

const RichTabTitle = ({ icon, label }) => (
  <Box direction="row" align="center" gap="xsmall" margin="xsmall">
    {icon}
    <Text size="small">
      <strong>{label}</strong>
    </Text>
  </Box>
);

const SubtractForm = () => (
  <FormSubtract color={"#AACDD7"}/>
);

const AddForm = () => (
<FormAdd color={"#E2B3A9"}/>
)
const richAccordionTheme = {
  accordion: {
    icons: {
      collapse: SubtractForm,
      expand: AddForm
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
class HomePage extends Component {
 constructor(props) {
   super(props)
   this.state = {
      tabs: ['About', 'Projects', 'Writing', 'Art', 'Contact'],
      position: 'left',
      visible: false,
      highlightLoaded: false,
   }
 }



  render() {
  const { highlightLoaded } = this.state;
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
      const BGG = "linear-gradient(170deg, #6F7983 -20%,  #0c1f36 -20%, #4d4d4d -20%, #0d0a18, #707479,  #637181, rgb(51, 40, 68))"
    return (
      <div>
        <Grommet theme={theme}>
        <Box elevation="40px" style={{display: "flex", flexDirection: "row", height: "100vh",}} >
          <Box
          background={BGG}
          style={{height: "100%", borderImage: "linear-gradient(to right, #582C49, #6F7983)"}}
          border={{color: "#cdcdcd",
          size: "large",
          style: 'inset'}}
          width={"400px"} overflow={"auto"}>

            <Box fill direction="row" color={"light-2"}>
              <Box basis="medium" border={undefined} >
                <Box
                  border={"bottom"}
                  background={"transparent"}
                  as="header"
                  pad={{ horizontal: "small" }}
                  style={{display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center"}}
                >

                  <Heading level={3}
                  style={{fontFamily: "Bungee Shade",
                  color: "#837883", textShadow: "1.5px 1.5px 3.50px #74b5be",
                  marginBottom: "30px"}}>
                    <strong>#0xLE</strong>
                  </Heading>
                  <Clock type={"digital"} size={"small"} style={{color: "#BEA49F"}}/>
                </Box>
                <ThemeContext.Extend value={richAccordionTheme}>
                  <Accordion
                    multiple
                    onActive={activeIndexes => {
                      if (activeIndexes.includes(1)) {
                        // give sometime to emulate an async call
                        setTimeout(() => {
                          this.setState({ highlightLoaded: true });
                        }, 1000);
                      }
                    }}
                  >
                    <RichPanel icon={<StatusInfo color="#E2B3A9" />} label="About">
                      <Box
                        pad={{
                          bottom: "small",
                          horizontal: "small",
                          top: "small",
                        }}
                        gap="xsmall"
                      >
                        <Box gap="xsmall">
                          <Text color="light-3">
                            <strong>Purpose</strong>
                          </Text>
                          <Text>
                            Used for general announcements like new releases,
                            trainings...
                          </Text>
                        </Box>
                        <Box gap="xsmall">
                          <Text color="light-3">
                          </Text>
                        </Box>
                      </Box>
                    </RichPanel>
                      <RichPanel
                        icon={<Bookmark color="#E2B3A9" />}
                        label="Highlights"
                      >
                        {highlightLoaded ? (
                          <Box
                            pad={{
                              bottom: "small",
                              horizontal: "small",
                              top: "small"
                            }}
                            gap="small"
                            overflow="auto"
                            style={{ maxHeight: "400px" }}
                          >
                            <Text color="light-3">

                            </Text>
                            <Text>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                              sed do eiusmod tempor incididunt ut labore et dolore
                            </Text>
                            <Text>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                              sed do eiusmod tempor incididunt ut labore et dolore
                            </Text>
                            <Text>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                              sed do eiusmod tempor incididunt ut labore et dolore
                            </Text>
                            <Text>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                              sed do eiusmod tempor incididunt ut labore et dolore
                            </Text>
                            <Text>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                              sed do eiusmod tempor incididunt ut labore et dolore
                            </Text>
                          </Box>
                        ) : (
                          loading
                        )}
                      </RichPanel>
                    <RichPanel
                      icon={<ContactInfo color="#E2B3A9" />}
                      label="Contact Info"
                    >
                      <Box
                        pad={{
                          bottom: "small",
                          horizontal: "small",
                          top: "small"
                        }}
                        gap="medium"
                      >
                        <Anchor reverse color={"#AEC6E2"} textDecoration={undefined} href="https://github.com/LorenzoEvans" label="Github" icon={<Github color={"#AACDD7"} />}/>
                          <Anchor  label={"Twitter"} reverse color={"#AEC6E2"} icon={<Twitter color={"#AACDD7"} />}/>
                          <Anchor label={"LinkedIn"} reverse color={"#AEC6E2"} icon={<Linkedin color={"#AACDD7"}/>}/>
                      </Box>
                    </RichPanel>
                  </Accordion>
                </ThemeContext.Extend>
              </Box>
            </Box>
          </Box>
          <Tabs className={"nav-tabs"} children={[<Clock type={"digital"}/>]} style={{width: "100%"}}>
            <Tab title={<RichTabTitle label={"Home"} icon={<Home color={"dark-1"} size={"20px"}/>}/>} style={{marginTop: "20px", width: "105px" ,borderRight: "2px solid black", borderTop: "2px solid black", borderWidth: "4px", borderBottomWidth: "4px"}}>
              <Box pad="small" background={"light-3"}>One</Box>
            </Tab>
            <Tab title={<RichTabTitle icon={<Apps color={"dark-1"}size={"20px"}/>} label={"Apps"}/>} style={{marginTop: "20px", width: "105px" ,borderBottom: "2px solid black", borderLeft: "2px solid black", borderWidth: "4px", borderBottomWidth: "4px"}}>
              <Box
                direction="row"
                border={{ color: 'brand', size: 'small' }}
                pad="medium"
              >
                <Box pad="small" background="dark-3" />
                <Box pad="medium" background="light-3" />
              </Box>
            </Tab>
            <Tab title={<RichTabTitle label={"Art"} icon={<Brush color={"dark-1"} size={"20px"}/>}/>} style={{marginTop: "20px", width: "105px" , borderRight: "2px solid black", borderTop: "2px solid black", borderWidth: "4px", borderBottomWidth: "4px"}}>
              <Box pad="small">Three</Box>
            </Tab>
            <Tab title={<RichTabTitle label={"Writing"} icon={<Notes color={"dark-1"} size={"20px"}/>}/>}  style={{marginTop: "20px", width: "105px" ,borderLeft: "2px solid black", borderTop: "2px solid black", borderWidth: "4px", borderBottomWidth: "4px"}}>
              <Box pad="small">Four</Box>
            </Tab>
            <Tab title={<RichTabTitle label={"Music"} icon={<Music color={"dark-1"} size={"20px"}/>}/>}  style={{marginTop: "20px", width: "105px" ,borderRight: "2px solid black", borderBottom: "2px solid black", borderWidth: "4px", borderBottomWidth: "4px"}}>
              <Box pad="small">Five</Box>
            </Tab>
          </Tabs>
        </Box>
        </Grommet>
      </div>
    );
  }
}

export default HomePage
