import BrowserOnly from '@docusaurus/BrowserOnly';
import Layout from '@theme/Layout';
import React, { Fragment } from 'react';
import AudioInputExample from '../components/examples/audio';

class Audio extends React.Component {

  constructor(props) {
    super(props);
  }
    
  render() {
    return (
    <Layout
       title={`Hello from ${this.props.config.title}`}
       description="Description will go into a meta tag in <head />">
        <h1>Audio</h1>
        <p>Here are some examples</p>
        <BrowserOnly fallback={<div>Loading...</div>}>
          {() => {
            return <Fragment>
              <AudioInputExample />
            </Fragment>
          }}
        </BrowserOnly>
    </Layout>
    );
  }
}

export default Audio;
