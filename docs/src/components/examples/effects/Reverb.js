import React from 'react';
// import { SoundPlayer} from '../../../static/lib/core/instruments'
import AE from '../../../../static/lib';

class ReverbExample extends React.Component {

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

    const effect = audioEngine.createEffect('Reverb')

    const effectsChannel = audioEngine.createChannelStrip('effects', [
      effect
    ])

    soundPlayer.connect(effectsChannel)
      // .connect(audioEngine.masterChannel)

    this.state = {
      audioEngine,
      soundPlayer,
      effect,
      muted: 'off',
      seconds: 3,
      decay: 2,
      reverse: 'off',
      dryWetRatio: 0.5,
      effectsChannel,
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

  handleSecondsInputChange(event) {
    this.updateState('seconds', event.target.value)
    this.state.effect.setSeconds(event.target.value)
  }

  handleDecayInputChange(event) {
    this.updateState('decay', event.target.value)
    this.state.effect.setDecay(event.target.value)
  }

  handleReverseInputChange(event) {
    this.updateState('reverse', event.target.value)
    this.state.effect.setReverse(event.target.value === 'on' ? true : false)
  }

  handleDryWetRatioInputChange(event) {
    this.updateState('dryWetRatio', event.target.value)
    this.state.effect.setDryWetRatio(event.target.value)
  }

  handleMutedInputChange(event) {
    this.updateState('muted', event.target.value)
    this.state.effect.muted = event.target.value === 'on' ? true : false
  }

  render() {
    return (
      <div>
        <h2>Reverb</h2>
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

            const effectsChannel = audioEngine.createChannelStrip('effects', [
              audioEngine.createEffect('Reverb')
            ])

            soundPlayer.connect(effectsChannel)

            this.state.soundPlayer.playSound('drums')
            `}
          </code>
        </pre>
        <button onClick={() => this.stop()}>Stop</button>
        <button onClick={() => this.play()}>Play</button>
        <div>
          <label htmlFor="seconds">Seconds : {this.state.seconds}</label><br/>
          <input name="seconds" type='range' min="0" max="10" value={this.state.seconds} onChange={(event) => this.handleSecondsInputChange(event)}/>
        </div>
        <div>
          <label htmlFor="decay">Decay : {this.state.decay}</label><br/>
          <input name="decay" type='range' min="0" max="10" value={this.state.decay} onChange={(event) => this.handleDecayInputChange(event)}/>
        </div>
        <div>
          <label htmlFor="reverse">Reverse : {this.state.reverse}</label>
          <input name="reverse" type='checkbox' value={this.state.reverse} onChange={(event) => this.handleReverseInputChange(event)} />
        </div>
        <div>
          <label htmlFor="dryWetRatio">Dry/Wet ratio : {this.state.dryWetRatio}</label><br/>
          <input name="dryWetRatio" type='range' min="0" max="1" step="0.01" value={this.state.dryWetRatio} onChange={(event) => this.handleDryWetRatioInputChange(event)}/>
        </div>
        <div>
          <label htmlFor="muted">Muted : {this.state.muted}</label>
          <input name="muted" type='checkbox' value={this.state.muted} onChange={(event) => this.handleReverseInputChange(event)} />
        </div>
      </div>
    );
  }
}
export default ReverbExample;
