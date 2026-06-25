import React, { useState } from 'react';
import ChatHeader from './ChatHeader';
import MessageBubble from './MessageBubble';
import ChatInput from './ChatInput';
import TypingIndicator from './TypingIndicator';
import OnlineMembers from './OnlineMembers';
import './SingleChat.css';

const SingleChat = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hey! How are you?', sender: 'John Doe', isOwn: false, timestamp: '10:30 AM' },
    { id: 2, text: 'I\'m doing great! Thanks for asking. How about you?', sender: 'You', isOwn: true, timestamp: '10:31 AM' },
    { id: 3, text: 'Pretty good! Working on a new project.', sender: 'John Doe', isOwn: false, timestamp: '10:32 AM' },
  ]);
  const [typingUsers, setTypingUsers] = useState([]);
  const [showMembers, setShowMembers] = useState(false);

  const members = [
    { name: 'John Doe', role: 'Admin', isOnline: true },
    { name: 'Jane Smith', role: 'Member', isOnline: true },
    { name: 'Bob Johnson', role: 'Member', isOnline: false },
  ];

  const handleSendMessage = (message) => {
    const newMessage = {
      id: messages.length + 1,
      text: message,
      sender: 'You',
      isOwn: true,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages([...messages, newMessage]);
  };

  const handleTyping = () => {
    setTypingUsers(['John Doe']);
    setTimeout(() => setTypingUsers([]), 2000);
  };

  const handleReply = (messageId) => {
    console.log('Reply to message:', messageId);
  };

  const handleDelete = (messageId) => {
    setMessages(messages.filter(msg => msg.id !== messageId));
  };

  const handleBack = () => {
    console.log('Go back');
  };

  const handleInvite = () => {
    console.log('Invite members');
  };

  return (
    <div className="single-chat-container">
      <div className="chat-background">
        <div className="bg-gradient gradient-1"></div>
        <div className="bg-gradient gradient-2"></div>
        <div className="bg-gradient gradient-3"></div>
      </div>

      <ChatHeader
        chatName="John Doe"
        isOnline={true}
        memberCount={3}
        onBack={handleBack}
        onMenuClick={() => setShowMembers(true)}
      />

      <div className="chat-messages">
        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            message={message.text}
            isOwn={message.isOwn}
            senderName={message.sender}
            timestamp={message.timestamp}
            onReply={() => handleReply(message.id)}
            onDelete={() => handleDelete(message.id)}
          />
        ))}
        {typingUsers.length > 0 && <TypingIndicator users={typingUsers} />}
      </div>

      <ChatInput onSendMessage={handleSendMessage} onTyping={handleTyping} />

      {showMembers && (
        <OnlineMembers
          members={members}
          onClose={() => setShowMembers(false)}
          onInvite={handleInvite}
        />
      )}
    </div>
  );
};

export default SingleChat;
