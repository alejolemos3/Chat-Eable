import { useState } from "react";

const useReceiveMessage = (userId) => {
    const [otherUserMessage, setOtherUserMessage] = useState(null);
    fetch(`http://192.168.0.161:3000/message/:${userId}`).then((res) => {
      if (res.ok) {
        res.text().then((message) => {
            setOtherUserMessage(message);
        });
      }
    });
    return otherUserMessage;
};

export default useReceiveMessage;
