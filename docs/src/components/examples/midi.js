import React, { Fragment } from 'react';
// import AE from '../../static/lib';

class MidiExample extends React.Component {

  constructor(props) {
    super(props);

    // const audioContext = new AudioContext()
    // const instrument = new AE.instruments.Monark(audioContext)
    // // const instrument = new AE.instruments.SimplePolySynth(audioContext)

    // this.state = {
    //   audioContext,
    //   instrument,
    // }
  }
    
  componentDidMount() {
    // this.state.instrument.connect(this.state.audioContext.destination)
  }

  updateState(property, value) {
    this.setState(state => ({ [property]: value }))
    // this.setState(({ [property]: value }))
  }

  render() {
    return (
      <Fragment>
          <p>blbl</p>
      </Fragment>
    );
  }
}

export default MidiExample;
