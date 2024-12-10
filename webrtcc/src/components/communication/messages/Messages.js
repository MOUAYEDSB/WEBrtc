import React, { useState, useEffect } from "react";
import "./Messages.css";
import {
  getFirestore,
  onSnapshot,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { app, auth } from "../../../FirebaseConfig";
import Videos from "../video/VideoChat";

const db = getFirestore(app);

function Messages() {
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [showConversation, setShowConversation] = useState(true);

  useEffect(() => {
    const q = collection(db, "messages");
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    return unsubscribe;
  }, [db]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const sendMessage = async () => {
    if (user && user.email && newMessage.trim() !== "") {
      await addDoc(collection(db, "messages"), {
        text: newMessage,
        senderEmail: user.email,
        sendTime: serverTimestamp(),
      });

      setNewMessage("");
    } else {
      console.log("User not logged in or message is empty");
    }
  };

  const toggleConversation = () => {
    setShowConversation(!showConversation);
  };

  return (
    <div>
      <div className="container">
        <div className="content-wrapper">
          <div className="video-chat">
            <Videos />
          </div>
          <div className="message-chat">
            <input
              type="checkbox"
              checked={showConversation}
              onChange={toggleConversation}
              id="showConversationCheckbox"
            />
            <label htmlFor="showConversationCheckbox">Show Conversation</label>
            {showConversation && (
              <div className="conversation-box">
                <div className="messages">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`message ${
                        message.data.senderEmail === user?.email
                          ? "sent-by-user"
                          : "sent-by-others"
                      }`}
                    >
                      <p>{message.data.text}</p>
                      <p className="sender-email">
                        From: {message.data.senderEmail?.split("@")[0]}
                      </p>
                      <p className="message-date">
                        Sent:{" "}
                        {new Date(
                          message.data.sendTime?.seconds * 1000
                        ).toLocaleString()}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {user && (
              <div className="input-group">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message here..."
                />
                <button className="send-button" onClick={sendMessage}>
                  Send Message
                </button>
              </div>
            )}
            {!showConversation && (
              <div>
                <p>Conversation hidden.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messages;
