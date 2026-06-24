import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/styles/groups.css";

function Groups() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const groups = [
    {
      id: 1,
      name: "Team Alpha",
      project: "AI Collaboration System",
      members: 6,
      progress: 82,
      status: "Active"
    },
    {
      id: 2,
      name: "Team Vision",
      project: "Smart Attendance System",
      members: 5,
      progress: 67,
      status: "Active"
    },
    {
      id: 3,
      name: "Team Phoenix",
      project: "Online Learning Platform",
      members: 4,
      progress: 45,
      status: "At Risk"
    },
    {
      id: 4,
      name: "Team Innovators",
      project: "Healthcare AI",
      members: 7,
      progress: 91,
      status: "Completed"
    }
  ];

  const filteredGroups = groups.filter((group) =>
    group.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="groups-container">

      {/* Header */}
      <div className="groups-header">

        <div>
          <h1>👥 My Groups</h1>
          <p>
            Manage your teams, projects and collaboration activities.
          </p>
        </div>

        <button
          className="back-btn"
          onClick={() => navigate("/student-dashboard")}
        >
          ← Dashboard
        </button>

      </div>

      {/* Search */}
      <div className="search-section">

        <input
          type="text"
          placeholder="Search Groups..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      {/* Stats */}
      <div className="group-stats">

        <div className="stat-card">
          <h3>Total Groups</h3>
          <h1>4</h1>
        </div>

        <div className="stat-card">
          <h3>Projects</h3>
          <h1>4</h1>
        </div>

        <div className="stat-card">
          <h3>Members</h3>
          <h1>22</h1>
        </div>

        <div className="stat-card">
          <h3>Avg Progress</h3>
          <h1>71%</h1>
        </div>

      </div>

      {/* Groups Grid */}
      <div className="groups-grid">

        {filteredGroups.map((group) => (

          <div
            className="group-card"
            key={group.id}
          >

            <div className="group-top">

              <h2>{group.name}</h2>

              <span className={`status ${group.status.toLowerCase().replace(" ", "-")}`}>
                {group.status}
              </span>

            </div>

            <p>
              <strong>Project:</strong> {group.project}
            </p>

            <p>
              <strong>Members:</strong> {group.members}
            </p>

            <p>
              <strong>Progress:</strong> {group.progress}%
            </p>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: `${group.progress}%`
                }}
              ></div>
            </div>

            <div className="group-actions">

              <button
                className="details-btn"
                onClick={() =>
                  navigate("/group-details")
                }
              >
                View Details
              </button>

              <button className="chat-btn">
                Open Chat
              </button>

            </div>

          </div>

        ))}

      </div>

      {/* Recent Activity */}

      <div className="activity-section">

        <h2>⚡ Recent Group Activities</h2>

        <div className="activity-card">
          Team Alpha uploaded Project Report.
        </div>

        <div className="activity-card">
          Team Vision completed Module 2.
        </div>

        <div className="activity-card">
          Team Phoenix scheduled mentor meeting.
        </div>

      </div>

    </div>
  );
}

export default Groups;