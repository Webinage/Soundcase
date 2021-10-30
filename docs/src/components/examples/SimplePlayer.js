import React from 'react';
import AE from '../../../static/lib';

class SimplePlayerExample extends React.Component {

  constructor(props) {
    super(props);
    
    const audioEngine = new AE.AudioEngine()
    const soundPlayer = audioEngine.createSoundPlayer('soundPlayer', {
      guitargroup: {
        path: '../../static/sounds/guitar-group.mp3',
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
    this.state.soundPlayer.stopSound('guitargroup')
  }

  play() {
    this.state.soundPlayer.playSound('guitargroup')
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
              guitargroup: {
                path: '../../static/sounds/guitargroup.mp3',
                type: 'loop',
                volume: 1,
              }
            })

            this.state.soundPlayer.playSound('guitargroup')
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
