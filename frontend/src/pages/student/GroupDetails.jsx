import { useNavigate } from "react-router-dom";
import "../../assets/styles/groupDetails.css";

function GroupDetails() {
  const navigate = useNavigate();

  const members = [
    {
      name: "Bhavani",
      role: "Frontend Developer",
      contribution: 95
    },
    {
      name: "Pujitha",
      role: "Backend Developer",
      contribution: 91
    },
    {
      name: "Harika",
      role: "Documentation",
      contribution: 88
    },
    {
      name: "Rahul",
      role: "Testing",
      contribution: 84
    }
  ];

  const files = [
    "Project Proposal.pdf",
    "UI Design.fig",
    "Database Schema.pdf",
    "Sprint Report.docx"
  ];

  return (
    <div className="group-details-container">

      {/* Header */}

      <div className="group-header">

        <div>
          <h1>👥 Team Alpha</h1>
          <p>
            AI-Based Real-Time Collaboration System
          </p>
        </div>

        <button
          className="back-btn"
          onClick={() => navigate("/student-dashboard")}
        >
          ← Dashboard
        </button>

      </div>

      {/* Overview */}

      <div className="overview-grid">

        <div className="overview-card">
          <h3>👨‍💻 Members</h3>
          <h1>4</h1>
        </div>

        <div className="overview-card">
          <h3>📅 Deadline</h3>
          <h1>12 Days</h1>
        </div>

        <div className="overview-card">
          <h3>📊 Progress</h3>
          <h1>82%</h1>
        </div>

        <div className="overview-card">
          <h3>🤖 AI Score</h3>
          <h1>91%</h1>
        </div>

      </div>

      {/* Progress */}

      <div className="glass-card">

        <h2>📈 Project Progress</h2>

        <div className="progress-item">
          <span>Frontend Development</span>
          <span>90%</span>
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: "90%" }}
          ></div>
        </div>

        <div className="progress-item">
          <span>Backend Development</span>
          <span>75%</span>
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: "75%" }}
          ></div>
        </div>

        <div className="progress-item">
          <span>Documentation</span>
          <span>65%</span>
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill warning"
            style={{ width: "65%" }}
          ></div>
        </div>

      </div>

      {/* Team Members */}

      <div className="section-title">
        👨‍👩‍👧‍👦 Team Members
      </div>

      <div className="members-grid">

        {members.map((member, index) => (

          <div
            className="member-card"
            key={index}
          >

            <div className="member-avatar">
              {member.name.charAt(0)}
            </div>

            <h3>{member.name}</h3>

            <p>{member.role}</p>

            <span>
              Contribution: {member.contribution}%
            </span>

          </div>

        ))}

      </div>

      {/* Shared Files */}

      <div className="glass-card">

        <h2>📁 Shared Files</h2>

        <div className="files-grid">

          {files.map((file, index) => (

            <div
              className="file-card"
              key={index}
            >
              📄 {file}
            </div>

          ))}

        </div>

      </div>

      {/* AI Insights */}

      <div className="glass-card">

        <h2>🧠 AI Insights</h2>

        <div className="insight success">
          ✅ Team collaboration is excellent.
        </div>

        <div className="insight">
          📈 Productivity increased by 14%.
        </div>

        <div className="insight">
          🚀 Project likely to finish before deadline.
        </div>

      </div>

      {/* Quick Actions */}

      <div className="actions-grid">

        <button className="action-btn">
          💬 Open Group Chat
        </button>

        <button className="action-btn">
          📁 Upload File
        </button>

        <button className="action-btn">
          📊 View Performance
        </button>

        <button className="action-btn">
          🤖 AI Analysis
        </button>

      </div>

    </div>
  );
}

export default GroupDetails;