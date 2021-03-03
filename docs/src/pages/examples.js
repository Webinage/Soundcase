import Layout from '@theme/Layout';
import React from 'react';
import DelayExample from './examples/effects/Delay';
import DistortionExample from './examples/effects/Distortion';
import FilterExample from './examples/effects/Filter';
import PanExample from './examples/effects/Pan';
import ReverbExample from './examples/effects/Reverb';
import _3BandEqExample from './examples/effects/_3BandEq';
import SimpleMultiPlayer from './examples/SimpleMultiPlayer';
import SimplePlayer from './examples/SimplePlayer';


class Examples extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout
        title={`Hello from ${this.props.config.title}`}
        description="Description will go into a meta tag in <head />">
          <h1>Examples</h1>
          <p>Here are some examples</p>
          <SimplePlayer />
          <SimpleMultiPlayer />
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
