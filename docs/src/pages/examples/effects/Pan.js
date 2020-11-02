import React from 'react';
import AE from '../../../../static/lib';

class PanExample extends React.Component {

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

    const effect = audioEngine.createEffect('Pan')

    const effectsChannel = audioEngine.createChannelStrip('effects', [
      effect
    ])

    soundPlayer.connect(effectsChannel)

    this.state = {
      audioEngine,
      soundPlayer,
      effect,
      panValue: 0
    };

  }

  stop() {
    this.state.soundPlayer.stopSound('guitargroup')
  }

  play() {
    this.state.soundPlayer.playSound('guitargroup')
  }

  handleSetPan(event) {
    this.updateState('panValue', Number(event.target.value))
    this.state.effect.setPan(Number(event.target.value))
  }

  updateState(property, value) {
    this.setState(state => ({ [property]: value }))
  }

  render() {
    return (
      <div>
        <h2>Panner</h2>
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

            const effect = audioEngine.createEffect('Pan')
        
            const effectsChannel = audioEngine.createChannelStrip('effects', [
              effect
            ])
        
            soundPlayer.connect(effectsChannel)

            this.state.soundPlayer.playSound('guitargroup')
            `}
          </code>
        </pre>
        <button onClick={() => this.stop()}>Stop</button>
        <button onClick={() => this.play()}>Play</button>
        <label htmlFor="panValue">Pan : {this.state.panValue}</label>
        <input name="panValue" type='range' min="-1" max="1" step="0.01" value={this.state.panValue} onChange={(event) => this.handleSetPan(event)}/>
      </div>
    );
  }
}
export default PanExample;
