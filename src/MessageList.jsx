import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
  render() {
    console.log("Rendering <MessageList/>");
    return (
        <div id="message-list">
          {this.props.messages.map((message, index) => <Message key={index} username={message.username} content={message.content} /> )}
          <div className="message system">
            Annonymous 1 changed their name to nomnom.
          </div>
        </div>
    );
  }
}
export default MessageList;
