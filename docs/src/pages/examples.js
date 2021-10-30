import BrowserOnly from '@docusaurus/BrowserOnly';
import Layout from '@theme/Layout';
import React, { Fragment } from 'react';
import DelayExample from '../components/examples/effects/Delay';
import DistortionExample from '../components/examples/effects/Distortion';
import FilterExample from '../components/examples/effects/Filter';
import PanExample from '../components/examples/effects/Pan';
import SimpleMultiPlayer from '../components/examples/SimpleMultiPlayer';
import SimplePlayer from '../components/examples/SimplePlayer';

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
        <BrowserOnly fallback={<div>Loading...</div>}>
          {() => {
            return <Fragment>
              <SimplePlayer />
              <SimpleMultiPlayer />
              {/* <_3BandEqExample /> */}
              <DelayExample />
              <DistortionExample />
              <FilterExample />
              <PanExample />
              {/* <ReverbExample /> */}
            </Fragment>
          }}
        </BrowserOnly>
      </Layout>
    );
  }
}

export default Examples;
