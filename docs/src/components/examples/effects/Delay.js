import React from 'react';
import AE from '../../../../static/lib';

class DelayExample extends React.Component {


  constructor(props) {
    super(props);

    const audioEngine = new AE.AudioEngine()
    const soundPlayer = audioEngine.createSoundPlayer('soundPlayer', {
      timba: {
        path: '../../static/sounds/timba.mp3',
        type: 'loop',
        volume: 1,
      }
    })

    const effect = audioEngine.createEffect('Delay')

    const effectsChannel = audioEngine.createChannelStrip('effects', [
      effect
    ])

    soundPlayer.connect(effectsChannel)

    this.state = {
      audioEngine,
      soundPlayer,
      effect,
      muted: 'off',
      delayTime: 3,
      feedback: 2,
      reverse: 'off',
      dryWetRatio: 0.5,
      effectsChannel,
    };

  }

  stop() {
    this.state.soundPlayer.stopSound('timba')
  }

  play() {
    this.state.soundPlayer.playSound('timba')
  }

  updateState(property, value) {
    this.setState(state => ({ [property]: value }))
  }

  handleDelayTimeInputChange(event) {
    this.updateState('delayTime', event.target.value)
    this.state.effect.setDelayTime(event.target.value)
  }

  handleFeedbackInputChange(event) {
    this.updateState('feedback', event.target.value)
    this.state.effect.setFeedback(event.target.value)
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
        <h2>Delay</h2>
        <pre>
          <code>
            {`
            const audioEngine = new AE.AudioEngine()
            const soundPlayer = audioEngine.createSoundPlayer('soundPlayer', {
              timba: {
                path: '../../static/sounds/timba.mp3',
                type: 'loop',
                volume: 1,
              }
            })

            const effectsChannel = audioEngine.createChannelStrip('effects', [
              audioEngine.createEffect('Delay')
            ])

            soundPlayer.connect(effectsChannel)

            this.state.soundPlayer.playSound('timba')
            `}
          </code>
        </pre>
        <button onClick={() => this.stop()}>Stop</button>
        <button onClick={() => this.play()}>Play</button>
        <div>
          <label htmlFor="delayTime">Delay time : {this.state.delayTime}</label><br/>
          <input name="delayTime" type='range' min="0" max="5" step="0.01" value={this.state.delayTime} onChange={(event) => this.handleDelayTimeInputChange(event)}/>
        </div>
        <div>
          <label htmlFor="feedback">Feedback : {this.state.feedback}</label><br/>
          <input name="feedback" type='range' min="0" max="1" step="0.01" value={this.state.feedback} onChange={(event) => this.handleFeedbackInputChange(event)}/>
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

export default DelayExample;
