import React, {Component} from 'react';

import anime from 'animejs';


const myRef = React.createRef();
const labelRef = React.createRef();

const animation = anime({
  targets: 'shape',
  left: '240px',
  backgroundColor: "#FFF",
  borderRadius: ["0%", "50%"],
  easing: 'easeInOutQuad'
})

class Container extends Component {

  componentDidUpdate(prevProps, prevState, snapshot) {
    const xFrom = this.props.alteredPosition ? "-10em" : "10em";
    const yFrom = this.props.alteredPosition ? "-2em" : "2em";

    const basicTimeline = anime.timeline();
    basicTimeline
      .add({
        targets: myRef.current,
        translateX: [xFrom, 0],
        duration: 500,
        easing: "easeOutSine"
      })
      .add({
        targets: labelRef.current,
        translateY: [yFrom, 0],
        duration: 500,
        easing: "easeOutSine",
        offset: "0"
      });
  }

  render() {
    const positionClass = this.props.alteredPosition ? " otherPosition" : "";
    return (
      <div ref={myRef} className={"box" + positionClass}>
        <div ref={labelRef} className={"label" + positionClass}>
          Hey there
        </div>
      </div>
    );
  }
}

class Animation extends React.Component {
  state = { alteredPosition: true };

  render() {
    return (
      <div className="App">
        <button
          onClick={() =>
            this.setState({ alteredPosition: !this.state.alteredPosition })
          }
        >
          Toggle
        </button>
        <Container alteredPosition={this.state.alteredPosition} />
      </div>
    );
  }
}

export default Animation;