const React = require('react');

class Keypad extends React.Component {
  constructor() {
    super();
    this.voice = this.voice.bind(this);
  }
  voice() {
    console.log('Entering password...');
  }
  render() {
    return (
      <input type="password" onKeyUp={this.voice} />
    )
  }
}

module.exports = Keypad;
