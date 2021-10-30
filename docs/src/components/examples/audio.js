import React, { Fragment } from 'react';
import AE from '../../../static/lib';

class AudioInputExample extends React.Component {

  constructor(props) {
    super(props);

    const audioEngine = new AE.AudioEngine()
    const audioInput = audioEngine.createAudioInput('audioInput')
    AE.utils.audioWorklets.clippingSample(audioEngine.masterContext, audioInput)

    this.state = {
      audioEngine,
      audioInput
    }
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
    <pre>
      <code>
        {`
          const audioEngine = new AE.AudioEngine()
          const audioInput = audioEngine.createAudioInput('audioInput')
          AE.utils.audioWorklets.clippingSample(audioEngine.masterContext, audioInput)
        `}
      </code>
    </pre>
    </Fragment>
    );
  }
}

export default AudioInputExample;
