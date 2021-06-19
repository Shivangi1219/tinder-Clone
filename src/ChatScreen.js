import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import "./ChatScreen.css";

function ChatScreen() {
  const[input,setInput] = useState('');  
  const [messages, setMessages] = useState([
    {
      name: "Ellen",
      image:
        "https://clearsightcommunications.com/wp-content/uploads/2017/08/Ellen_DeGeneres-Wikimedia-commons-300x281.jpg",
      message: "Hey!",
    },
    {
      name: "Ellen",
      image:
        "https://clearsightcommunications.com/wp-content/uploads/2017/08/Ellen_DeGeneres-Wikimedia-commons-300x281.jpg",
      message: "Hows it going!",
    },
    {
      message: "Hello, How are you ?",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();

    setMessages([...messages,{message : input}]);
    setInput("");
  }

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH ELLEN ON 10/6/2021
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            ></Avatar>
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}
      <form className="chatScreen__input">
        <input 
            className="chatScreen__inputField" 
            onChange = {e => setInput(e.target.value)}
            type="text"
            placeholder = "Type a message..." />
        <button type="submit" onClick={handleSend} className="chatScreen__inputButton"> SEND</button>
      </form>
    </div>
  );
}

export default ChatScreen;
