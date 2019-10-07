import React from 'react';
import {Box, Heading, Text} from "grommet/es6";
const HomeContent = () => {
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
        <Box
          className={"gradient-border"}
          id={"box"}
          pad={{
            top: "small",
            horizontal: "small",
            bottom: "small"
          }}
          style={{border: "1.5px solid black", borderRadius: "10px 0px 0px 0px"}}
          height={"medium"}
          width={"63%"}
          // basis={"2/4"}
          margin={"xsmall"}
          elevation={"xlarge"}
          gap="small"
          overflow="auto"
          animation={"fadeIn"}
          background={undefined}
        >
          <Box animation={"slideLeft"} elevation={"medium"}
               style={{border: "2px solid white"}} height={"xlarge"} overflow={"auto"} margin={"small"} alignContent={"center"}>
            <Heading margin={"xsmall"} level={"3"}>Mission Statement</Heading>
            <Text color="black" size="small" margin={"xsmall"} pad={"xsmall"} >
              My journey into programming took the scenic route. I've spent a lot of time dabbling in
              the technical. I became a power user of computers and software, through in audio engineering,
              but never delved so far in that I ended up programming. Roughly two years ago, I decided to try and
              wring the most out of my technical inclinations, began studying networking engineering, security, and they all pointed
              to a need to understand programs. So I decided to do just that.
              Fast forward to now, and I'm a well rounded Full Stack Developer, via Lambda School.
              Programming never let me go.
            </Text>
          </Box>
          <Box animation={"slideRight"} style={{border: "2px solid black"}} size="medium" basis={"medium"} alignContent={"center"} margin={"small"}>
            <Text  color="light-3"  size={"small"} margin={"small"}>
              With this knowledge, I hope to help strengthen the bridge and bond,
              between the arts and technology, as they are more intertwined than I
              believe we realize or appreciate, as a species and society.
            </Text>
          </Box>
        </Box>
        <Box
          className={"gradient-border"}
          id={"box"}
          pad={{
            top: "small",
            horizontal: "small",
            bottom: "small"
          }}
          height={"medium"}
          margin={"xsmall"}
          width={"34%"}
          // basis={"1/3"}
          elevation={"large"}
          gap="small"
          overflow="auto"
          background={undefined}
          animation={"fadeIn"}
          style={{border: "1.5px solid black", borderRadius: "0px 10px 0px 0px"}}
        >

          <Box margin={"xsmall"} pad={"xsmall"}
               border={"dark-5"} height={"large"} overflow={"auto"} animation={"slideRight"} width={"medium"}>
            <Heading margin={"xsmall"} level={"3"}>Skill Stack</Heading>
            <Text color="black" size="small">
              <ul>
                <li>
                  Javascript
                  <ul>
                    <li>
                      React
                    </li>
                    <li>
                      Node/Express
                    </li>
                    <ul>
                    </ul>
                  </ul>
                </li>
                <li>
                  CSS
                  <ul>
                    <li>
                      SCSS
                    </li>
                    <li>
                      LESS
                    </li>
                  </ul>
                </li>
                <li>
                  SQL
                </li>
                <li>Testing</li>
                <li>Version Control</li>
                <li>Agile</li>
                <li>Deployment
                <ul>
                  <li>Heroku</li>
                  <li>CD Via Github</li>
                </ul>
                </li>
                <li>GraphQL</li>
                <li>Functional Programming
                  <ul>
                  <li>Elm</li>
                  <li>
                    Lisp Family Languages
                    <ul>
                    <li>Clojure/Script</li>
                    </ul>
                  </li>
                  </ul>
                </li>

              </ul>
            </Text>
          </Box>
          <Box>
            <Text color="dark-4" size="small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore
            </Text>
          </Box>
        </Box>
        <Box
        pad={{
          top: "small",
          horizontal: "small",
          bottom: "small"
        }}
        className={"gradient-border"}
        id={"box"}
        height={"30%"}
        margin={"xsmall"}
        // width={"medium"}
        basis={"full"}
        elevation={"large"}
        gap="small"
        overflow="auto"
        animation={"fadeIn"}
        background={undefined}
        style={{border: "1.5px solid black", marginBottom: "95px", borderRadius: "0px 0px 10px 10px"}}
      >
        <Heading className={"hover-washed-blue"} level={4} truncate={true}>Hobbies, Interests, Curio's</Heading>
        <Box animation={"slideRight"} alignContent={"center"}
             style={{display: "flex", flexDirection: "row",}}
        >

        </Box>
      </Box>

      </Box>
    </>
  );
};

export default HomeContent;
