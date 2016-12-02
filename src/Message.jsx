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

      var imgRegex = /https?:\/\/.*\.(?:png|jpg)/ig;
      var imgLinks = this.props.content.match(imgRegex);
      var content = this.props.content.replace(imgRegex, "");

      var images = (imgLinks)? <img src={imgLinks} className='images' /> : "";

      console.log(content);
      messageToRender =
        <div className="message">
          <div >
            <span className="username" style={{color: this.props.userColor}}>{this.props.username}</span>
          </div>
          <div>
            <div className="content">{content}</div>
            <div className="content">{images}</div>
          </div>
        </div>
    } else {
      messageToRender = <div></div>;
    }
    return messageToRender;
  }
}
export default Message;
