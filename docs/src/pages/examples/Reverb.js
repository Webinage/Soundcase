const React = require('react');
const { container } = require('webpack');
// const { Container, GridBlock } = require('../../core/CompLibrary.js');
const _3BandEqExample = require(process.cwd() + '/static/lib/index.js');

class ReverbExample extends React.Component {
  state = {
    blbl: 'lol'
  };

  constructor(props) {
    super(props);

    // this.stop = this.stop.bind(this);
    // this.play = this.play.bind(this);
  }

  componentDidMount() {
    console.log('HEYAA')
  }

  stop() {
    console.log('stop');
  }

  play() {
    console.log('play');
    this.setState({ blbl: 'blbl' });
    // this.doStateStuff('blbl','blbl');
  }

  doStateStuff(property, value) {
    console.log("this.state before",this.state)
    this.setState(state => ({[property]: value}))
    console.log("this.state after",this.state)
  }

  render() {
    return (
      <container>
        {/* <Container> */}
        <h1>Reverb</h1>
        {this.state.blbl}
        <pre>
          <code></code>
        </pre>
        <button onClick={() => this.stop()}>Stop</button>
        <button onClick={() => this.play()}>Play</button>
        {/* </Container> */}
      </container>
    );
  }
}

module.exports = ReverbExample;
