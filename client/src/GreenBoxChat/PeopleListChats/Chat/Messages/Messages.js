import React, { useEffect, useRef } from 'react';
import './Messages.css';
import MyMessage from './MyMessage/MyMessage'


export default function Messages({ messageList,username }) {
  const chatScreenRef = useRef(null);

  useEffect(() => {
    if (chatScreenRef.current) {
      chatScreenRef.current.scrollTop = chatScreenRef.current.scrollHeight;
    }
  }, [messageList]);

  // Renders the messages of a contact
  const messages = messageList.map((message, key) => {
    return <MyMessage message={message} username={username} key={key} />;
  });

  return (
    <div ref={chatScreenRef} className="messages">
      {messages}
    </div>)
}
