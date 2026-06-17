import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBell,
  FaUserCircle,
  FaComments,
  FaExclamationTriangle
} from "react-icons/fa";

import "../../assets/styles/guideDashboard.css";

function GuideDashboard() {
    const navigate = useNavigate();

const [showProfile, setShowProfile] = useState(false);
const [showModal, setShowModal] = useState(false);
const [selectedTeam, setSelectedTeam] = useState("");
const [alertHistory, setAlertHistory] = useState([]);

const handleChat = (teamName) => {
  navigate(`/group-chat/${teamName}`);
};

const openWarningModal = (teamName) => {
  setSelectedTeam(teamName);
  setShowModal(true);
};

const sendWarning = () => {
  setAlertHistory([
    ...alertHistory,
    `Warning sent to ${selectedTeam}`
  ]);

  setShowModal(false);
};

  const [warningSent, setWarningSent] = useState("");

  const handleWarning = (teamName) => {
    setWarningSent(`Warning sent to ${teamName}`);
  };

  const teams = [
    {
      name: "Team Alpha",
      progress: 82,
      risk: 12,
      active: "5/6",
      tasks: 2,
      status: "Healthy"
    },
    {
      name: "Team Vision",
      progress: 67,
      risk: 24,
      active: "5/6",
      tasks: 3,
      status: "Healthy"
    },
    {
      name: "Team Phoenix",
      progress: 35,
      risk: 78,
      active: "2/6",
      tasks: 8,
      status: "Critical"
    }
  ];

  return (
    <div className="guide-dashboard">
        <div className="top-navbar">

  <div className="dashboard-title">
    Guide Dashboard
  </div>

  <div className="top-actions">

    <div className="notification-wrapper">
      <FaBell className="icon-btn" />
      <span className="notification-count">3</span>
    </div>

    <div className="profile-wrapper">

      <FaUserCircle
        className="profile-icon"
        onClick={() =>
          setShowProfile(!showProfile)
        }
      />

      {showProfile && (
        <div className="profile-dropdown">
          <p>Guide Name</p>
          <p>Settings</p>
          <p>Logout</p>
        </div>
      )}

    </div>

  </div>

</div>

      {/* HERO */}
      <div className="hero-section">

        <h1>🤖 AI Command Center</h1>

        <p>
          Monitor project progress, team performance,
          AI insights and collaboration activities.
        </p>

        <div className="hero-stats">

          <div className="hero-card">
            <h3>Teams</h3>
            <h2>08</h2>
          </div>

          <div className="hero-card">
            <h3>Students</h3>
            <h2>42</h2>
          </div>

          <div className="hero-card">
            <h3>AI Alerts</h3>
            <h2>03</h2>
          </div>

          <div className="hero-card">
            <h3>Completion</h3>
            <h2>74%</h2>
          </div>

        </div>

      </div>

      {/* TEAM MONITORING */}

      <h2 className="section-title">
        👥 Team Monitoring
      </h2>

      <div className="team-grid">

        {teams.map((team, index) => (

          <div
            className={`team-card ${
              team.status === "Critical"
                ? "critical"
                : ""
            }`}
            key={index}
          >

            <div className="team-header">

              <h3>{team.name}</h3>

              <span
                className={
                  team.status === "Critical"
                    ? "critical-status"
                    : "healthy-status"
                }
              >
                {team.status}
              </span>

            </div>

            <p>📊 Progress : {team.progress}%</p>
            <p>🤖 AI Risk : {team.risk}%</p>
            <p>👥 Active Members : {team.active}</p>
            <p>📌 Pending Tasks : {team.tasks}</p>

            <div className="progress-bar">
              <div
                className={
                  team.status === "Critical"
                    ? "progress-fill danger"
                    : "progress-fill"
                }
                style={{
                  width: `${team.progress}%`
                }}
              ></div>
            </div>

            <div className="team-actions">

  <button
    className="chat-btn"
    onClick={() =>
      handleChat(team.name)
    }
  >
    <FaComments />
    Open Team Chat
  </button>

  <button
    className="warning-btn"
    onClick={() =>
      openWarningModal(team.name)
    }
  >
    <FaExclamationTriangle />
    Send Warning
  </button>

</div>

          </div>

        ))}

      </div>

      {warningSent && (
        <div className="success-message">
          ✅ {warningSent}
        </div>
      )}

      {/* AI RECOMMENDATIONS */}

      <div className="recommendation-card">

        <h2>🧠 AI Recommendations</h2>

        <div className="recommendation-item">
          Team Phoenix needs mentor intervention.
        </div>

        <div className="recommendation-item">
          Team Alpha may complete before deadline.
        </div>

        <div className="recommendation-item">
          Team Vision collaboration increased by 15%.
        </div>

      </div>
      <div className="graph-card">

  <h2>📊 Team Progress Overview</h2>

  <div className="graph-row">

    <div className="graph-item">
      <span>Team Alpha</span>
      <div className="graph-bar">
        <div
          className="graph-fill"
          style={{ width: "82%" }}
        ></div>
      </div>
    </div>

    <div className="graph-item">
      <span>Team Vision</span>
      <div className="graph-bar">
        <div
          className="graph-fill"
          style={{ width: "67%" }}
        ></div>
      </div>
    </div>

    <div className="graph-item">
      <span>Team Phoenix</span>
      <div className="graph-bar">
        <div
          className="graph-fill danger"
          style={{ width: "35%" }}
        ></div>
      </div>
    </div>

  </div>

</div>

      {/* OVERALL ANALYTICS */}

      <div className="analytics-section">

        <h2>📈 Overall Project Analytics</h2>

        <div className="analytics-grid">

          <div className="analytics-card">
            <h3>Project Completion</h3>
            <h1>74%</h1>
          </div>

          <div className="analytics-card">
            <h3>AI Health Score</h3>
            <h1>87%</h1>
          </div>

          <div className="analytics-card">
            <h3>Active Members</h3>
            <h1>38</h1>
          </div>

          <div className="analytics-card">
            <h3>Collaboration Score</h3>
            <h1>91%</h1>
          </div>

        </div>

      </div>

      {/* RECENT ACTIVITY */}

      <div className="bottom-grid">

        <div className="glass-card">

          <h2>⚡ Recent Activities</h2>

          <ul>
            <li>Bhavani uploaded report</li>
            <li>Team Alpha completed module 3</li>
            <li>Pujitha shared UI design</li>
            <li>AI generated 3 alerts</li>
          </ul>

        </div>
        <div className="glass-card">

  <h2>🚨 Alert History</h2>

  {alertHistory.length === 0 ? (
    <p>No warnings sent yet</p>
  ) : (
    <ul>
      {alertHistory.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )}

</div>

        <div className="glass-card">

          <h2>🏆 Top Contributors</h2>

          <ul>
            <li>🥇 Bhavani - 95%</li>
            <li>🥈 Pujitha - 91%</li>
            <li>🥉 Harika - 88%</li>
          </ul>

        </div>
        {showModal && (
  <div className="modal-overlay">
    <div className="modal-box">
      <h2>Send Warning</h2>

      <p>
        Send warning to
        <strong> {selectedTeam}</strong> ?
      </p>

      <div className="modal-buttons">

        <button
          className="confirm-btn"
          onClick={sendWarning}
        >
          Confirm
        </button>

        <button
          className="cancel-btn"
          onClick={() =>
            setShowModal(false)
          }
        >
          Cancel
        </button>

      </div>
    </div>
  </div>
)}

      </div>

    </div>
  );
}


export default GuideDashboard;