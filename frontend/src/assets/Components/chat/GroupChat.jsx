import React, { useState } from 'react';
import ChatHeader from '../chat/ChatHeader';
import MessageBubble from '../chat/MessageBubble';
import ChatInput from '../chat/ChatInput';
import TypingIndicator from '../chat/TypingIndicator';
import OnlineMembers from '../chat/OnlineMembers';
import '../../styles/GroupChat.css';

const GroupChat = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Welcome to the group chat!', sender: 'Admin', isOwn: false, timestamp: '9:00 AM' },
    { id: 2, text: 'Thanks for having us!', sender: 'Jane Smith', isOwn: false, timestamp: '9:05 AM' },
    { id: 3, text: 'Excited to be here!', sender: 'You', isOwn: true, timestamp: '9:10 AM' },
    { id: 4, text: 'Let\'s discuss the project timeline.', sender: 'Bob Johnson', isOwn: false, timestamp: '9:15 AM' },
  ]);
  const [typingUsers, setTypingUsers] = useState([]);
  const [showMembers, setShowMembers] = useState(false);

  const members = [
    { name: 'Admin', role: 'Group Owner', isOnline: true },
    { name: 'Jane Smith', role: 'Moderator', isOnline: true },
    { name: 'Bob Johnson', role: 'Member', isOnline: true },
    { name: 'Alice Brown', role: 'Member', isOnline: false },
    { name: 'Charlie Wilson', role: 'Member', isOnline: false },
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
    setTypingUsers(['Jane Smith', 'Bob Johnson']);
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
    <div className="group-chat-container">
      <div className="chat-background">
        <div className="bg-gradient gradient-1"></div>
        <div className="bg-gradient gradient-2"></div>
        <div className="bg-gradient gradient-3"></div>
      </div>

      <ChatHeader
        chatName="Project Team"
        isOnline={true}
        memberCount={5}
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

export default GroupChat;
