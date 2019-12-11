import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleChange = event => {
    this.setState({
      message: event.target.value
    })
    console.log(this.state.message)
  }

  charsLeft = () => {
    return (this.props.maxChars) - (this.state.message.length)
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleChange} type="text" name="message" id="message" value={this.state.message}/>
        <p>Characters Remaining: </p>
        <p>{this.charsLeft()}</p>
      </div>
    );
  }
}

export default TwitterMessage;
