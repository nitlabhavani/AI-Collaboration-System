import React from 'react';
import './MessageBubble.css';

const MessageBubble = ({ message, isOwn, senderName, senderAvatar, timestamp, onReply, onDelete }) => {
  const getInitials = (name) => {
    return name?.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  return (
    <div className={`message-bubble ${isOwn ? 'own' : 'other'}`}>
      {!isOwn && (
        <div className="message-avatar">
          {senderAvatar ? (
            <img src={senderAvatar} alt={senderName} />
          ) : (
            <span className="avatar-initials">{getInitials(senderName)}</span>
          )}
        </div>
      )}

      <div className="message-content">
        {!isOwn && <div className="sender-name">{senderName}</div>}
        <div className="message-text">{message}</div>
        <div className="message-footer">
          <span className="timestamp">{timestamp}</span>
          <div className="message-actions">
            <button className="action-btn" onClick={onReply} title="Reply">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 10h10a8 8 0 0 1 8 8v2M3 10l6 6M3 10l6-6" />
              </svg>
            </button>
            <button className="action-btn" onClick={onDelete} title="Delete">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
