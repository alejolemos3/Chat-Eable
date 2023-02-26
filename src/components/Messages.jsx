import React, { useState, useEffect } from "react";
import "@styles/Messages.scss";
import useInterval from "@use-it/interval";
// import useGetOtherUserId from "@hooks/useGetOtherUserId";
// import useReceiveMessage from "@hooks/useReceiveMessage";

const Messages = ({ messages }) => {
  const orderedMessages = messages.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
  const getTime = (message) => {
    const date = new Date(message.date);
    return `${date.getHours() % 12 || 12}:${
      date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes()
    } ${date.getHours() < 12 ? "AM" : "PM"}`;
  };

  return (
    <div className="Messages">
      {orderedMessages.map((message, index) => (
        <div key={index} className={`message-container ${message.type}`}>
          <div className="message-content">{message.content}</div>
          <div className="message-time">{getTime(message)}</div>
        </div>
      ))}
    </div>
  );
};

export default Messages;
