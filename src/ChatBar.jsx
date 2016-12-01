import React, {Component} from 'react';

class ChatBar extends Component {
  constructor(props) {
    super(props);
    this.state = {name: this.props.currentUser.name, value: ''};

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleNameSubmit = this.handleNameSubmit.bind(this);

    this.handleChatChange = this.handleChatChange.bind(this);
    this.handleChatSubmit = this.handleChatSubmit.bind(this);

  }

  handleChatChange(event){
    this.setState({value: event.target.value});
  }

  handleNameChange(event){
    this.setState({name: event.target.value});
  }

  handleChatSubmit(event){
    if (event.key == 'Enter' || event.which === 13 || event.keyCode === 13){
      // this.props.createChatMessage(this.state.value);
      //debugger;
      let message = {username: this.props.currentUser.name, content: this.state.value}
      this.props.sendChatMessage(message);

      this.setState({value: ''});
    }
  }

  handleNameSubmit(event){
    if (event.key == 'Enter' || event.which === 13 || event.keyCode === 13 || event.key === 'Tab'){
      this.props.changeUserName(this.state.name);

    }
  }

  render() {
    console.log("Rendering <ChatBar/>");
    return (
        <footer>
          <input id="username" type="text" placeholder="Your Name (Optional)" value={this.state.name} onChange={this.handleNameChange} onKeyDown={this.handleNameSubmit}/>
          <input id="new-message" type="text" placeholder="Type a message and hit ENTER" value={this.state.value} onChange={this.handleChatChange} onKeyUp={this.handleChatSubmit} />
        </footer>
    );
  }
}
export default ChatBar;
