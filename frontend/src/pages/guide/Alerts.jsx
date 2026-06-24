import { useState } from "react";
import "../../assets/styles/alerts.css";

function Alerts() {
  const [alerts] = useState([
    {
      id: 1,
      team: "Team Phoenix",
      severity: "High",
      message: "Low collaboration detected",
      time: "10 mins ago",
    },
    {
      id: 2,
      team: "Team Alpha",
      severity: "Medium",
      message: "Project deadline approaching",
      time: "30 mins ago",
    },
    {
      id: 3,
      team: "Team Vision",
      severity: "Low",
      message: "Inactive member detected",
      time: "1 hour ago",
    },
  ]);

  return (
    <div className="alerts-container">

      <div className="alerts-header">
        <h1>🚨 AI Alert Monitoring Center</h1>
        <p>
          Monitor critical team activities, AI-generated warnings,
          collaboration risks and project issues in real-time.
        </p>
      </div>

      <div className="alert-stats">

        <div className="stat-card">
          <h3>Total Alerts</h3>
          <h2>18</h2>
        </div>

        <div className="stat-card">
          <h3>Critical Alerts</h3>
          <h2>5</h2>
        </div>

        <div className="stat-card">
          <h3>Resolved</h3>
          <h2>10</h2>
        </div>

        <div className="stat-card">
          <h3>Pending</h3>
          <h2>8</h2>
        </div>

      </div>

      <div className="alerts-grid">

        {alerts.map((alert) => (
          <div className="alert-card" key={alert.id}>

            <div className="alert-top">
              <h3>{alert.team}</h3>

              <span
                className={`severity ${alert.severity.toLowerCase()}`}
              >
                {alert.severity}
              </span>
            </div>

            <p>{alert.message}</p>

            <small>{alert.time}</small>

            <div className="alert-buttons">
              <button className="view-btn">
                View Details
              </button>

              <button className="resolve-btn">
                Resolve
              </button>
            </div>

          </div>
        ))}

      </div>

      <div className="ai-recommendation">

        <h2>🧠 AI Recommendations</h2>

        <ul>
          <li>Team Phoenix requires immediate mentor attention.</li>
          <li>Team Alpha is likely to complete before deadline.</li>
          <li>Team Vision collaboration score dropped by 12%.</li>
          <li>2 teams have inactive members for more than 3 days.</li>
        </ul>

      </div>

    </div>
  );
}

export default Alerts;