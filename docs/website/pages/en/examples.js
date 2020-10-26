const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class Examples extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='docMainWrapper wrapper'>
        <Container className='mainContainer documentContainer postContainer'>
          <h1>Examples</h1>
          <p>Here are some examples</p>
        </Container>
      </div>
    );
  }
}

module.exports = Examples;
