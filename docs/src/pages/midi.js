import BrowserOnly from '@docusaurus/BrowserOnly';
import Layout from '@theme/Layout';
import React, { Fragment } from 'react';
import MidiExample from '../components/examples/midi';

class Midi extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
    <Layout
       title={`Hello from ${this.props.config.title}`}
       description="Description will go into a meta tag in <head />">
        <h1>Midi</h1>
        <p>Here are some examples</p>
        <BrowserOnly fallback={<div>Loading...</div>}>
          {() => {
            return <Fragment>
              <MidiExample />
            </Fragment>
          }}
        </BrowserOnly>
    </Layout>
    );
  }
}

export default Midi;
