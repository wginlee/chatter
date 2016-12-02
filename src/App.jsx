import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: ""},
      onlineUsers: 1,
      messages: [] // messages coming from the server will be stored here as they arrive
    };
    this.socket = new WebSocket("ws://localhost:4000");
    this.sendChatMessage = this.sendChatMessage.bind(this);
    // this.changeUserName = this.changeUserName.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount <App />");

    this.socket.onopen = function open() {
      console.log('Connected to server');
    };

    this.socket.onmessage = (event) => {
      let message = JSON.parse(event.data);
      console.log(message);
      if (message.type == "updateOnlineUsers"){
        this.setState({onlineUsers: message.onlineUsers});
      } else {
        const messages = this.state.messages.concat(message);
        this.setState({messages: messages});
      }

    }
  }

  changeUserName = (message) => {
    this.setState({currentUser: {name: message.username}});
    this.socket.send(JSON.stringify(message));
  }

  sendChatMessage(message){
    this.socket.send(JSON.stringify(message));
  }

  render() {
    console.log("Rendering <App/>");
    //debugger;
    return (
      <div className="wrapper">
        <nav>
          <h1>Chatty</h1>
          <span className="users-online">{this.state.onlineUsers} users online</span>
        </nav>
        <MessageList messages={this.state.messages}/>
        <ChatBar currentUser={this.state.currentUser} createChatMessage={this.createChatMessage} sendChatMessage={this.sendChatMessage} changeUserName={this.changeUserName} />
      </div>
    );
  }
}
export default App;