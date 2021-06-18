import React from 'react';
import './Chats.css';
import Chat from './Chat';

function Chats() {
    return (
        <div className = "chats">
            <Chat
                name = "Sarah"
                message = "Hey, How are you ?"
                timestamp = "35 mins ago"
                profilePic = "https://uploads-ssl.webflow.com/5f9c37590be5d21d4b47f392/5f9c37590be5d2922c47f522_Sarah%20Vance.jpg"
            />

            <Chat
                name = "Ellen"
                message = "Ola!"
                timestamp = "1 min ago"
                profilePic = "https://clearsightcommunications.com/wp-content/uploads/2017/08/Ellen_DeGeneres-Wikimedia-commons-300x281.jpg"
            />

            <Chat
                name = "Katie"
                message = "Whats up ?"
                timestamp = "2 mins ago"
                profilePic = "https://heebsgrocery.com/wp-content/uploads/2018/08/katie-profile-photo.jpg"
            />
        </div>
    )
}

export default Chats
