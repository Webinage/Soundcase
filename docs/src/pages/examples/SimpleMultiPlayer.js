import React from 'react';
import AE from '../../../static/lib';

class SimpleMultiPlayerExample extends React.Component {

  constructor(props) {
    super(props);

    const audioEngine = new AE.AudioEngine()
    const soundPlayer = audioEngine.createSoundPlayer('soundPlayer', {
      drums: {
        path: '../../static/sounds/drums-group.mp3',
        type: 'loop',
        volume: 1,
      },
      bass: {
        path: '../../static/sounds/bass-group.mp3',
        type: 'loop',
        volume: 0.5,
      },
      guitar: {
        path: '../../static/sounds/guitar-group.mp3',
        type: 'loop',
        volume: 0.5,
      }
    })

    this.state = {
      audioEngine,
      soundPlayer,
      drumsVolume: 1,
      bassVolume: 0.5,
      guitarVolume: 0.5
    };

  }

  stop() {
    this.state.soundPlayer.stopSound('drums')
    this.state.soundPlayer.stopSound('bass')
    this.state.soundPlayer.stopSound('guitar')
  }

  play() {
    this.state.soundPlayer.playSound('drums')
    this.state.soundPlayer.playSound('bass')
    this.state.soundPlayer.playSound('guitar')
  }

  updateState(property, value) {
    this.setState(state => ({ [property]: value }))
  }

  handleDrumsVolumeChange(event) {
    this.updateState('drumsVolume', event.target.value)
    this.state.soundPlayer.setSoundVolume('drums', event.target.value)
  }

  handleBassVolumeChange(event) {
    this.updateState('bassVolume', event.target.value / 2)
    this.state.soundPlayer.setSoundVolume('bass', event.target.value / 2)
  }

  handleGuitarVolumeChange(event) {
    this.updateState('guitarVolume', event.target.value / 2)
    this.state.soundPlayer.setSoundVolume('guitar', event.target.value / 2)
  }

  render() {
    return (
      <div>
        <h2>Simple multi player</h2>
        <pre>
          <code>
            {`
            const audioEngine = new AE.AudioEngine()
            const soundPlayer = audioEngine.createSoundPlayer('soundPlayer', {
              drums: {
                path: '../../static/sounds/drums-group.mp3',
                type: 'loop',
                volume: 1,
              },
              bass: {
                path: '../../static/sounds/bass-group.mp3',
                type: 'loop',
                volume: 0.5,
              },
              guitar: {
                path: '../../static/sounds/guitar-group.mp3',
                type: 'loop',
                volume: 0.5,
              }
            })

            this.state.soundPlayer.playSound('drums')
            this.state.soundPlayer.playSound('bass')
            this.state.soundPlayer.playSound('guitar')
            `}
          </code>
        </pre>
        <button onClick={() => this.stop()}>Stop</button>
        <button onClick={() => this.play()}>Play</button>
        <label htmlFor="drumsVolume">Drums volume : {this.state.drumsVolume}</label>
        <input name="drumsVolume" type='range' min="0" max="1" step="0.01" value={this.state.drumsVolume} onChange={(event) => this.handleDrumsVolumeChange(event)}/>
        <label htmlFor="bassVolume">Bass volume : {this.state.bassVolume}</label>
        <input name="bassVolume" type='range' min="0" max="1" step="0.01" value={this.state.bassVolume} onChange={(event) => this.handleBassVolumeChange(event)}/>
        <label htmlFor="guitarVolume">Guitar volume : {this.state.guitarVolume}</label>
        <input name="guitarVolume" type='range' min="0" max="1" step="0.01" value={this.state.guitarVolume} onChange={(event) => this.handleGuitarVolumeChange(event)}/>
      </div>
    );
  }
}
export default SimpleMultiPlayerExample;
