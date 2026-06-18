import { useState } from "react";
import "../../assets/styles/groupManagement.css";

function GroupManagement() {

  const [search, setSearch] = useState("");

  const groups = [
    {
      id: 1,
      name: "Team Alpha",
      members: 6,
      progress: 82,
      tasks: 2,
      status: "Active"
    },
    {
      id: 2,
      name: "Team Vision",
      members: 5,
      progress: 67,
      tasks: 4,
      status: "Active"
    },
    {
      id: 3,
      name: "Team Phoenix",
      members: 6,
      progress: 35,
      tasks: 8,
      status: "Critical"
    },
    {
      id: 4,
      name: "Team Innovators",
      members: 7,
      progress: 91,
      tasks: 1,
      status: "Excellent"
    }
  ];

  const filteredGroups = groups.filter((group) =>
    group.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="group-management">

      <div className="group-header">

        <h1>👥 Group Management Center</h1>

        <p>
          Manage teams, monitor performance,
          track progress and collaboration.
        </p>

      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search Team..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="group-stats">

        <div className="stat-card">
          <h3>Total Teams</h3>
          <h2>08</h2>
        </div>

        <div className="stat-card">
          <h3>Students</h3>
          <h2>42</h2>
        </div>

        <div className="stat-card">
          <h3>Active Teams</h3>
          <h2>06</h2>
        </div>

        <div className="stat-card">
          <h3>Critical Teams</h3>
          <h2>02</h2>
        </div>

      </div>

      <div className="groups-grid">

        {filteredGroups.map((group) => (

          <div className="group-card" key={group.id}>

            <div className="group-top">

              <h2>{group.name}</h2>

              <span
                className={`status ${group.status.toLowerCase()}`}
              >
                {group.status}
              </span>

            </div>

            <p>👥 Members : {group.members}</p>

            <p>📌 Pending Tasks : {group.tasks}</p>

            <p>📊 Progress : {group.progress}%</p>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: `${group.progress}%`
                }}
              ></div>
            </div>

            <div className="group-buttons">

              <button className="view-btn">
                Open Team
              </button>

              <button className="manage-btn">
                Manage
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default GroupManagement;