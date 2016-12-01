import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: "Bob"},
      messages: [] // messages coming from the server will be stored here as they arrive
    };
    this.socket = new WebSocket("ws://localhost:4000");
    this.createChatMessage = this.createChatMessage.bind(this);
    this.sendChatMessage = this.sendChatMessage.bind(this);

  }

  componentDidMount() {
    console.log("componentDidMount <App />");

    this.socket.onopen = function open() {
      console.log('Connected to server');
    };

    // setTimeout(() => {
    //   console.log("Simulating incoming message");
    //   // Add a new message to the list of messages in the data store
    //   const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
    //   const messages = this.state.messages.concat(newMessage)
    //   // Update the state of the app component.
    //   // Calling setState will trigger a call to render() in App and all child components.
    //   this.setState({messages: messages})
    // }, 3000);
  }

  createChatMessage(text){
    const newMessage = {id: this.state.messages.length +1, username: "Bob", content: text};
    const messages = this.state.messages.concat(newMessage);
    this.setState({messages: messages});


  }

  sendChatMessage(message){
    this.socket.send(JSON.stringify(message));
  }

  render() {
    console.log("Rendering <App/>");
    return (
      <div className="wrapper">
        <nav>
          <h1>Chatty</h1>
        </nav>
        <MessageList messages={this.state.messages}/>
        <ChatBar currentUser={this.state.currentUser} createChatMessage={this.createChatMessage} sendChatMessage={this.sendChatMessage} />
      </div>
    );
  }
}
export default App;