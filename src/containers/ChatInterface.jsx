import React, { useState } from "react";
import "@styles/ChatInterface.scss";
import ChatHeader from "@components/ChatHeader";
import Messages from "@components/Messages";
import InputSection from "@components/InputSection";
import useChatInit from "@hooks/useChatInit";
import useInterval from "@use-it/interval";

const ChatInterface = () => {
  const [selfMessages, setMessage] = useState([]);
  const [otherUserId, setOtherUserId] = useState(null);
  const [otherUserMessages, setOtherUserMessage] = useState([]);
  const userId = useChatInit();
  const messages = [...selfMessages, ...otherUserMessages];
  const getOtherUserId = () => {
    fetch(`http://192.168.0.161:3000/join/users/${userId}`).then(function (
      res
    ) {
      if (res.ok) {
        res.json().then((response) => {
          setOtherUserId(`${response.id}`);
        });
      }
    });
  };
  useInterval(
    () => {
      console.log("Interval id run");
      getOtherUserId();
    },
    otherUserId === null ? 50 : null
  );
  const receiveMessage = () => {
    fetch(`http://192.168.0.161:3000/message/${userId}`).then((res) => {
      if (res.ok) {
        res.text().then((message) => {
          if (message.trim().length > 0) {
            const messageData = {
              content: message,
              date: `${new Date()}`,
              secondsTime: `hola`,
              type: "received",
            };
            setOtherUserMessage((otherUserMessages) => [
              ...otherUserMessages,
              messageData,
            ]);
          }
        });
      }
    });
  };
  useInterval(
    () => {
      console.log("Interval message run");
      receiveMessage();
    },
    otherUserId !== null ? 50 : null
  );
  return (
    <>
      <div className="ChatInterface">
        <ChatHeader />
        <Messages messages={messages} />
        <InputSection setMessage={setMessage} userId={userId} />
      </div>
    </>
  );
};

export default ChatInterface;
