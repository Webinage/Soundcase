import React from 'react';
import AE from '../../../../static/lib';

class FilterExample extends React.Component {

  constructor(props) {
    super(props);

    const audioEngine = new AE.AudioEngine()
    const soundPlayer = audioEngine.createSoundPlayer('soundPlayer', {
      synth: {
        path: '../../static/sounds/synth.mp3',
        type: 'loop',
        volume: 1,
      }
    })

    const effect = audioEngine.createEffect('Filter')

    const effectsChannel = audioEngine.createChannelStrip('effects', [
      effect
    ])

    soundPlayer.connect(effectsChannel)

    this.state = {
      audioEngine,
      soundPlayer,
      effect,
      frequency: 400,
      Q: 10,
      filterGain: 1,
      filterType: 'lowpass'
    };

  }

  stop() {
    this.state.soundPlayer.stopSound('synth')
  }

  play() {
    this.state.soundPlayer.playSound('synth')
  }

  updateState(property, value) {
    this.setState(state => ({ [property]: value }))
  }

  handleSetFrequency(event) {
    this.updateState('frequency', Number(event.target.value))
    this.state.effect.setFrequency(Number(event.target.value))
  }

  handleSetQ(event) {
    this.updateState('Q', Number(event.target.value))
    this.state.effect.setQ(Number(event.target.value))
  }

  handleSetfilterGain(event) {
    this.updateState('filterGain', Number(event.target.value))
    this.state.effect.setFilterGain(Number(event.target.value))
  }

  handleSetFilterType(event) {
    this.updateState('filterType', event.target.value)
    this.state.effect.setFilterType(event.target.value)
  }

  render() {
    return (
      <div>
        <h2>Filter</h2>
        <pre>
          <code>
            {`
            const audioEngine = new AE.AudioEngine()
            const soundPlayer = audioEngine.createSoundPlayer('soundPlayer', {
              synth: {
                path: '../../static/sounds/synth.mp3',
                type: 'loop',
                volume: 1,
              }
            })

            this.state.soundPlayer.playSound('synth')
            `}
          </code>
        </pre>
        <button onClick={() => this.stop()}>Stop</button>
        <button onClick={() => this.play()}>Play</button>
        <label htmlFor="frequency">Frequency : {this.state.frequency}</label>
        <input name="frequency" type='range' min="0" max="20000" step="10" value={this.state.frequency} onChange={(event) => this.handleSetFrequency(event)}/>
        <label htmlFor="Q">Q : {this.state.Q}</label>
        <input name="Q" type='range' min="0" max="50" value={this.state.Q} onChange={(event) => this.handleSetQ(event)} />
        <label htmlFor="filterGain">Gain : {this.state.filterGain}</label>
        <input name="filterGain" type='range' min="0" max="1" step="0.01" value={this.state.filterGain} onChange={(event) => this.handleSetfilterGain(event)} />
        <label htmlFor="filterType">Filter type : {this.state.filterType}</label>
        <select name="filterType" value={this.state.filterType} onChange={(event) => this.handleSetFilterType(event)}>
          <option value="bandpass">Bandpass</option>
          <option value="highpass">Highpass</option>
          <option value="highshelf">Highshelf</option>
          <option value="lowpass">Lowpass</option>
          <option value="lowshelf">Lowshelf</option>
          <option value="notch">Notch</option>
          <option value="peaking">Peaking</option>
        </select>
      </div>
    );
  }
}
export default FilterExample;
