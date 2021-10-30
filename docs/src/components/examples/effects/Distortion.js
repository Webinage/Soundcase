import React from 'react';
import AE from '../../../../static/lib';

class DistortionExample extends React.Component {

  constructor(props) {
    super(props);

    const audioEngine = new AE.AudioEngine()
    const effect = audioEngine.createEffect('Distortion')
    const effectsChannel = audioEngine.createChannelStrip('effects', [
      effect
    ])

    const soundPlayer = audioEngine.createSoundPlayer('soundPlayer', {
      guitar: {
        path: '../../static/sounds/guitar.mp3',
        type: 'loop',
        volume: 1,
      }
    })
    soundPlayer.connect(effectsChannel)

    this.state = {
      audioEngine,
      soundPlayer,
      effect,
      curve: 100,
      oversample: '2x'
    };

  }

  stop() {
    this.state.soundPlayer.stopSound('guitar')
  }

  play() {
    this.state.soundPlayer.playSound('guitar')
  }

  updateState(property, value) {
    this.setState(state => ({ [property]: value }))
  }

  handleSetCurve(event) {
    this.updateState('curve', Number(event.target.value))
    this.state.effect.setCurve(Number(event.target.value))
  }

  handleSetOversample(event) {
    this.updateState('oversample', event.target.value)
    this.state.effect.setOversample(event.target.value)
  }

  render() {
    return (
      <div>
        <h2>Distortion</h2>
        <pre>
          <code>
            {`
            const audioEngine = new AE.AudioEngine()
            const effect = audioEngine.createEffect('Distortion')
            const effectsChannel = audioEngine.createChannelStrip('effects', [
              effect
            ])
        
            const soundPlayer = audioEngine.createSoundPlayer('soundPlayer', {
              guitar: {
                path: '../../static/sounds/guitar.mp3',
                type: 'loop',
                volume: 1,
              }
            })

            soundPlayer.connect(effectsChannel)

            this.state.soundPlayer.playSound('guitar')
            `}
          </code>
        </pre>
        <button onClick={() => this.stop()}>Stop</button>
        <button onClick={() => this.play()}>Play</button>
        <div>
          <label htmlFor="curve">Distortion curve : {this.state.curve}</label><br/>
          <input name="curve" type='range' min="0" max="1000" step="10" value={this.state.curve} onChange={(event) => this.handleSetCurve(event)}/>
        </div>
        <div>
          <label htmlFor="oversample">Oversample : {this.state.oversample}</label>
          <select name="oversample" value={this.state.oversample} onChange={(event) => this.handleSetOversample(event)}>
            <option value="none">None</option>
            <option value="2x">2x</option>
            <option value="4x">4x</option>
          </select>
        </div>
      </div>
    );
  }
}

export default DistortionExample;
