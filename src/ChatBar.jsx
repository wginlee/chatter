import React, {Component} from 'react';

class ChatBar extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  handleSubmit(event){
    if (event.key == 'Enter' || event.which === 13 || event.keyCode === 13){
      // this.props.createChatMessage(this.state.value);
      let message = {username: this.props.currentUser.name, content: this.state.value}
      this.props.sendChatMessage(message);

      this.setState({value: ''});
    }
  }

  render() {
    console.log("Rendering <ChatBar/>");
    return (
        <footer>
          <input id="username" type="text" placeholder="Your Name (Optional)" value={this.props.currentUser.name} />
          <input id="new-message" type="text" placeholder="Type a message and hit ENTER" value={this.state.value} onChange={this.handleChange} onKeyPress={this.handleSubmit} />
        </footer>
    );
  }
}
export default ChatBar;
