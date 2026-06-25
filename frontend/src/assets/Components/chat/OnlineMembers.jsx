import React from 'react';
import '../../styles/OnlineMembers.css';

const OnlineMembers = ({ members, onClose, onInvite }) => {
  const getInitials = (name) => {
    return name?.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  return (
    <div className="online-members-overlay">
      <div className="online-members-container">
        <div className="members-header">
          <h2 className="members-title">Online Members</h2>
          <button className="close-btn" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="members-list">
          {members.map((member, index) => (
            <div key={index} className="member-item">
              <div className="member-avatar">
                {member.avatar ? (
                  <img src={member.avatar} alt={member.name} />
                ) : (
                  <span className="avatar-initials">{getInitials(member.name)}</span>
                )}
                <div className={`online-dot ${member.isOnline ? 'online' : 'offline'}`}></div>
              </div>
              <div className="member-info">
                <div className="member-name">{member.name}</div>
                <div className="member-role">{member.role}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="members-footer">
          <button className="invite-btn" onClick={onInvite}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="16" />
              <line x1="8" y1="12" x2="16" y2="12" />
            </svg>
            Invite Members
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnlineMembers;
