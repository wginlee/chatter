import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
  render() {
    console.log("Rendering <MessageList/>");
    return (
        <div id="message-list">
          {this.props.messages.map((message, index) => <Message key={index} username={message.username} type={message.type} content={message.content} /> )}
        </div>
    );
  }
}
export default MessageList;
