import React, {Component} from 'react';
import {Brush} from "grommet-icons/es6";
import {Anchor} from "grommet/es6";

class AppsContent extends Component {
  render() {
    return (
      <div>
        <Anchor href={"https://frozen-reaches-27902.herokuapp.com/"} label={"Immutable Gallery"} reverse color={"#AEC6E2"} icon={<Brush color={"#AACDD7"}/>}/>
        <article className="mw6 center bg-white br3 pa2 mv2 ba b--near-black">
          <div className="tc">
              <h1 className="f4">Aunalytix</h1>
              <hr className="mw3 bb bw1 b--black-10"/>
          </div>
          <p className="lh-copy pa3 center f6 black-70">
            Aunalytix will target creative artists (currently audio-focused), who are tired of not having access to data regarding their music,
            due to the nature of the environment in which said data is generated, and likewise, consumers of said art,
            who are also tired of having the same experience with their data.
            The goal of this application is to strike up a synergy between the needs and roles of artists,
            and their supporters, via the user-centric data handling principles this application will enforce.
          </p>
        </article>
      </div>
    );
  }
}

export default AppsContent;