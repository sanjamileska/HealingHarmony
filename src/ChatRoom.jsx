
import React from 'react';
import './ChatRoom.css';

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [], 
      newMessage: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSendMessage = this.handleSendMessage.bind(this);
    this.handleOpenChat = this.handleOpenChat.bind(this);
  }

  
  handleInputChange(event) {
    this.setState({ newMessage: event.target.value });
  }


  handleSendMessage(event) {
    event.preventDefault();
    const { newMessage, messages } = this.state;

    if (newMessage.trim() !== '') {
     
      this.setState({
        messages: [...messages, newMessage],
        newMessage: '', 
      });
    }
  }


  handleOpenChat() {
 
    const chatUrl = 'https://example.com/chat'; 
    window.open(chatUrl, '_blank');
  }

  render() {
    const { messages, newMessage } = this.state;

    return (
      <div className="chat-room">
        <h2>Anonymous Support Chat Room</h2>
        <div className="message-container">
          {/* Display the chat messages */}
          {messages.map((message, index) => (
            <div key={index} className="message">
              {message}
            </div>
          ))}
        </div>
        <form onSubmit={this.handleSendMessage}>
          <input
            type="text"
            value={newMessage}
            onChange={this.handleInputChange}
            placeholder="Type your message..."
          />
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}

export default ChatRoom;
