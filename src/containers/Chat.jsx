import React from "react";

const Chat = () => {
    return (
        <div class="chat-container">
        <div class="chat-header">
            <div>
                <img src="./assets/ladybug.png" alt="" />
            </div>
            <p id="other-user-name"></p>
        </div>
        <div class="chat-messages">
            <div class="message-container send">
                <div class="message-content">
                    Hola, ¿cómo estás?
                </div>
                <div class="message-time">
                    12:30 PM
                </div>
            </div>
            <div class="message-container received">
                <div class="message-content">
                    Hola, estoy bien ¿y tú?
                </div>
                <div class="message-time">
                    12:31 PM
                </div>
            </div>
        </div>
        
        <div class="input-section">
            <input class="text-input" type="text" placeholder="Escribe tu mensaje..."></input>
            <input id="img-input" type="file" />
            <label class="img-input-label" for="img-input">📷</label>
            <button class="send-button" type="Button">Send</button>
        </div>
    </div>
    );
};

export default Chat;