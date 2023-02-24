import React from "react";
import "@styles/ChatHeader.scss";
import ladyBugImg from '@assets/ladybug.png';

const ChatHeader = () => {
  return (
      <div className="chat-header">
        <div>
          <img src={ladyBugImg} alt="ladybug-image" />
        </div>
        <p id="other-user-name"></p>
      </div>
  );
};

export default ChatHeader;
