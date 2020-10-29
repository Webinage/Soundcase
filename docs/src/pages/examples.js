import Layout from '@theme/Layout';
import React from 'react';
import DelayExample from './examples/Delay.js';
import DistortionExample from './examples/Distortion.js';
import FilterExample from './examples/Filter.js';
import PanExample from './examples/Pan.js';
import ReverbExample from './examples/Reverb.js';
import _3BandEqExample from './examples/_3BandEq.js';


class Examples extends React.Component {

  constructor(props) {
    super(props);

  }

  Soundcase() {
    // this.engine = new Soundcase.default.AudioEngine();
  }

  render() {
    return (
      <Layout
        title={`Hello from ${this.props.config.title}`}
        description="Description will go into a meta tag in <head />">
          <h1>Examples</h1>
          <p>Here are some examples</p>
          <_3BandEqExample />
          <DelayExample />
          <DistortionExample />
          <FilterExample />
          <PanExample />
          <ReverbExample />
      </Layout>
    );
  }
}

export default Examples;
