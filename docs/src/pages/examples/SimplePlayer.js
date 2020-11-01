import React from 'react';
// import { SoundPlayer} from '../../../static/lib/core/instruments'
import AE from '../../../static/lib';

class SimplePlayerExample extends React.Component {

  constructor(props) {
    super(props);

    const audioEngine = new AE.AudioEngine()
    const soundPlayer = audioEngine.createSoundPlayer('soundPlayer', {
      drums: {
        path: '../../static/sounds/drums.mp3',
        type: 'loop',
        volume: 1,
      }
    })

    this.state = {
      audioEngine,
      soundPlayer,
    };

  }

  stop() {
    this.state.soundPlayer.stopSound('drums')
  }

  play() {
    this.state.soundPlayer.playSound('drums')
  }

  updateState(property, value) {
    this.setState(state => ({ [property]: value }))
  }

  render() {
    return (
      <div>
        <h2>Simple player</h2>
        <pre>
          <code>
            {`
            const audioEngine = new AE.AudioEngine()
            const soundPlayer = audioEngine.createSoundPlayer('soundPlayer', {
              drums: {
                path: '../../static/sounds/drums.mp3',
                type: 'loop',
                volume: 1,
              }
            })

            this.state.soundPlayer.playSound('drums')
            `}
          </code>
        </pre>
        <button onClick={() => this.stop()}>Stop</button>
        <button onClick={() => this.play()}>Play</button>
      </div>
    );
  }
}
export default SimplePlayerExample;
