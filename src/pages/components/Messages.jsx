import { doc, onSnapshot } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { ChatContext } from "../../context/ChatContext";
import { db } from "../../firebase";
import Message from './Message'

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    if (!data.chatId) return; // ✅ don't run if no chat selected

    const unSub = onSnapshot(doc(db, "chats", data.chatId), (docSnap) => {
      if (docSnap.exists()) {
        setMessages(docSnap.data().messages || []);
      } else {
        setMessages([]); // ✅ no chat document yet
      }
    });

    return () => unSub();
  }, [data.chatId]);

  console.log(messages);

  return (
    <div className="messages">
      {messages.map((m, index) => (
        <Message message={m} key={index} />
      ))}
    </div>
  );
};


export default Messages;