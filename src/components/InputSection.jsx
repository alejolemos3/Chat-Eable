import React, { useState } from "react";
import "@styles/InputSection.scss";

const InputSection = ({ setMessage, userId }) => {
  const insertSendedMessage = () => {
    const messageInput = document.querySelector(".text-input");
    const message = messageInput.value;

    if (message.trim().length > 0) {
      const messageData = {
        content: message,
        date: `${new Date()}`,
        type: "send",
      };
      sendMessage(message);
      setMessage((messages) => [...messages, messageData]);
      messageInput.value = "";
    }
  };
  const handleKeyDown = (event) => {
    event.key === "Enter" ? insertSendedMessage() : null;
  };
  const sendMessage = (msg) => {
    fetch(`http://192.168.0.161:3000/message/${userId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: msg
      }),
    });
  };
  return (
    <div className="InputSection" onKeyDown={handleKeyDown}>
      <input
        className="text-input"
        type="text"
        placeholder="Escribe tu mensaje..."
      ></input>
      <input id="img-input" type="file" />
      <label className="img-input-label" for="img-input">
        📷
      </label>
      <button
        className="send-button"
        type="Button"
        onClick={insertSendedMessage}
      >
        Send
      </button>
    </div>
  );
};

export default InputSection;
