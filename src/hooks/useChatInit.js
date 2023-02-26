import { useState, useEffect } from "react";

const useChatInit = (userName) => {
  const [userId, setUserId] = useState("");
  useEffect(() => {
    fetch(`http://192.168.0.161:3000/join`).then(function (res) {
      if (res.ok) {
        res.text().then((response) => {
          setUserId(response);
        });
      };
    });
  }, [setUserId]);
  return userId;
};

export default useChatInit;
