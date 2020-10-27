const React = require('react');
const { Container, GridBlock } = require('../../core/CompLibrary.js');
// const Soundcase = require('../../static/lib/index.js');

const _3BandEqExample = require(process.cwd() + '/core/examples/_3BandEq.js');
const DelayExample = require(process.cwd() + '/core/examples/Delay.js');
const DistortionExample = require(process.cwd() +
  '/core/examples/Distortion.js');
const FilterExample = require(process.cwd() + '/core/examples/Filter.js');
const PanExample = require(process.cwd() + '/core/examples/Pan.js');
const ReverbExample = require(process.cwd() + '/core/examples/Reverb.js');

class Examples extends React.Component {
  engine;

  constructor(props) {
    super(props);
  }

  Soundcase() {
    // this.engine = new Soundcase.default.AudioEngine();
  }

  render() {
    return (
      <div className='docMainWrapper wrapper'>
        <Container className='mainContainer documentContainer postContainer'>
          <h1>Examples</h1>
          <p>Here are some examples</p>
          <_3BandEqExample />
          <DelayExample />
          <DistortionExample />
          <FilterExample />
          <PanExample />
          <ReverbExample />
        </Container>
      </div>
    );
  }
}

module.exports = Examples;
