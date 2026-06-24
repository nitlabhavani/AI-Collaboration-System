import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaUserCircle
} from "react-icons/fa";

import "../../assets/styles/studentDashboard.css";

function StudentDashboard() {

  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const activities = [
    "Uploaded Project Report",
    "Completed UI Module",
    "Joined Team Discussion",
    "Submitted Weekly Progress"
  ];

  const deadlines = [
    "AI Module Submission - 2 Days",
    "Project Review - 5 Days",
    "Final Documentation - 7 Days"
  ];

  return (
    <div className="student-dashboard">
        <div className="top-navbar">

  <div className="left-section">

    <button
      className="menu-icon"
      onClick={() => setShowMenu(!showMenu)}
    >
      {showMenu ? <FaTimes /> : <FaBars />}
    </button>

    <h2>🎓 Student Dashboard</h2>

  </div>

  <div className="right-section">

    <FaUserCircle className="profile-icon" />

    <button className="logout-btn">
      Logout
    </button>

  </div>

</div>

{showMenu && (

  <div className="sidebar-menu">

    <h3>Quick Navigation</h3>

    <ul>

      <li onClick={() => navigate("/")}>
        🏠 Dashboard
      </li>

      <li onClick={() => navigate("/groups")}>
        👥 My Groups
      </li>

      <li onClick={() => navigate("/group-details")}>
        📋 Group Details
      </li>

      <li onClick={() => navigate("/performance")}>
        📊 Performance
      </li>

      <li onClick={() => navigate("/notifications")}>
        🔔 Notifications
      </li>

      <li onClick={() => navigate("/profile")}>
        👤 Profile
      </li>

      <li onClick={() => navigate("/settings")}>
        ⚙️ Settings
      </li>

    </ul>

  </div>

)}

      {/* Hero Section */}
      <div className="student-hero">
        <h1>🎓 Student Dashboard</h1>
        <p>
          Track your progress, manage groups,
          complete tasks and get AI-powered insights.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">

        <div className="stats-card">
          <h3>👥 Groups</h3>
          <h1>3</h1>
        </div>

        <div className="stats-card">
          <h3>✅ Tasks Completed</h3>
          <h1>24</h1>
        </div>

        <div className="stats-card">
          <h3>🤖 AI Score</h3>
          <h1>91%</h1>
        </div>

        <div className="stats-card">
          <h3>📅 Attendance</h3>
          <h1>95%</h1>
        </div>

      </div>

      {/* Progress Section */}
      <div className="progress-section">

        <div className="glass-card">

          <h2>📊 Project Progress</h2>

          <div className="progress-item">
            <span>Frontend Development</span>
            <span>85%</span>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: "85%" }}
            ></div>
          </div>

          <div className="progress-item">
            <span>Backend Development</span>
            <span>70%</span>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: "70%" }}
            ></div>
          </div>

          <div className="progress-item">
            <span>Documentation</span>
            <span>55%</span>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill warning"
              style={{ width: "55%" }}
            ></div>
          </div>

        </div>

      </div>

      {/* Quick Actions */}
     <button onClick={() => navigate("/groups")}>
  👥 My Groups
</button>

<button onClick={() => navigate("/upload-file")}>
  📁 Files
</button>

<button onClick={() => navigate("/group-chat")}>
  💬 Group Chat
</button>

<button onClick={() => navigate("/performance")}>
  📊 Analytics
</button>

      {/* Bottom Grid */}
      <div className="dashboard-grid">

        <div className="glass-card">

          <h2>⚡ Recent Activities</h2>

          <ul>
            {activities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

        </div>

        <div className="glass-card">

          <h2>⏰ Upcoming Deadlines</h2>

          <ul>
            {deadlines.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

        </div>

      </div>

      {/* AI Recommendations */}
      <div className="glass-card recommendation-card">

        <h2>🧠 AI Recommendations</h2>

        <div className="recommendation">
          ✅ Continue current contribution level.
        </div>

        <div className="recommendation">
          📌 Focus on Documentation module.
        </div>

        <div className="recommendation">
          🚀 Your project completion rate is above average.
        </div>

      </div>

    </div>
  );
}

export default StudentDashboard;