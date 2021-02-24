import Layout from '@theme/Layout';
import React from 'react';
import AE from '../../static/lib';

class Midi extends React.Component {

  constructor(props) {
    super(props);

    const audioContext = new AudioContext()
    const instrument = new AE.instruments.Monark(audioContext)
    // const instrument = new AE.instruments.SimplePolySynth(audioContext)

    this.state = {
      audioContext,
      instrument,
    }
  }
    
  componentDidMount() {
    this.state.instrument.connect(this.state.audioContext.destination)
  }

  updateState(property, value) {
    this.setState(state => ({ [property]: value }))
    // this.setState(({ [property]: value }))
  }

  render() {
    return (
    <Layout
        title={`Hello from ${this.props.config.title}`}
        description="Description will go into a meta tag in <head />">
        <h1>Midi</h1>
        <p>Here are some examples</p>
            
    </Layout>
    );
  }
}

export default Midi;
