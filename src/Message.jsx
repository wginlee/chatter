import React, {Component} from 'react';

class Message extends Component {
  render() {
    console.log("Rendering <Message/>");

    var messageToRender;

    if (this.props.type == "postNotification"){
      messageToRender =
        <div className="message system">
          <span className="content">{this.props.content}</span>
        </div>;
    } else if (this.props.type == "postMessage"){
      messageToRender =
        <div className="message">
          <span className="username">{this.props.username}</span>
          <span className="content">{this.props.content}</span>
        </div>;
    } else {
      messageToRender = <div></div>;
    }
    return messageToRender;
  }
}
export default Message;
