import React, {Component} from 'react';
import {Brush} from "grommet-icons/es6";
import {Anchor} from "grommet/es6";

class AppsContent extends Component {
  render() {
    return (
      <div>
        <article className="mw6 center bg-near-white br3 pa2 mv3 ba b--moon-gray bw2 bg-animate grow animate hover-bg-near-black hover-washed-blue" >
          <h1 className="f4 hover-washed-green tc">Aunalytix</h1>
          <p className="lh-copy pa3 center f6 hover-washed-blue ">
            ******add image******
            Aunalytix will target creative artists (currently audio-focused), who are tired of not having access to data regarding their music,
            due to the nature of the environment in which said data is generated, and likewise, consumers of said art,
            who are also tired of having the same experience with their data.
            The goal of this application is to strike up a synergy between the needs and roles of artists,
            and their supporters, via the user-centric data handling principles this application will enforce.
          </p>
        </article>
        <article className="mw6 center bg-near-white br3 pa2 mv3 ba b--moon-gray bw2 bg-animate grow animate hover-bg-near-black hover-washed-blue" >
          <h1 className="f4 hover-washed-green tc">Immutable Gallery</h1>
          <p className="lh-copy pa3 center f6 hover-washed-blue">
          ******add image******  
          The Immutable Gallery is a simple application display computational/generative design,
          in an attempt to explore the relationship between technology and art.
          </p>
        </article>
        <article className="mw6 center bg-near-white br3 pa2 mv3 ba b--moon-gray bw2 bg-animate grow animate hover-bg-near-black hover-washed-blue" >
          <h1 className="f4 hover-washed-green tc"> Maybe Black Sheep</h1>
          <p className="lh-copy pa3 center f6 hover-washed-blue">
          ******add image******
          Personal micro-blog for tech-related/miscellaneous things I find interesting, particularly chronicling my experience and
          growth with the FP paradigm/as a clojurist/lisp hacker.
          </p>
        </article>
      </div>
    );
  }
}

export default AppsContent;