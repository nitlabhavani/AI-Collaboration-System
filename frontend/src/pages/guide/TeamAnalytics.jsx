import "../../assets/styles/teamAnalytics.css";

function TeamAnalytics() {
  const teams = [
    {
      name: "Team Alpha",
      progress: 88,
      performance: 92,
      active: 6,
      tasks: 24
    },
    {
      name: "Team Vision",
      progress: 72,
      performance: 85,
      active: 5,
      tasks: 19
    },
    {
      name: "Team Phoenix",
      progress: 42,
      performance: 58,
      active: 3,
      tasks: 11
    }
  ];

  return (
    <div className="analytics-container">

      <div className="analytics-hero">
        <h1>📊 Team Analytics Dashboard</h1>
        <p>
          AI Powered Team Performance &
          Collaboration Insights
        </p>
      </div>

      <div className="stats-grid">

        <div className="stat-card">
          <h3>Total Teams</h3>
          <h2>08</h2>
        </div>

        <div className="stat-card">
          <h3>Students</h3>
          <h2>42</h2>
        </div>

        <div className="stat-card">
          <h3>Avg Performance</h3>
          <h2>87%</h2>
        </div>

        <div className="stat-card">
          <h3>Completion</h3>
          <h2>74%</h2>
        </div>

      </div>

      <div className="performance-section">

        <h2>🚀 Team Performance</h2>

        {teams.map((team, index) => (
          <div className="team-card" key={index}>

            <div className="team-header">
              <h3>{team.name}</h3>
              <span>{team.performance}%</span>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: `${team.performance}%`
                }}
              ></div>
            </div>

            <div className="team-info">
              <p>📊 Progress: {team.progress}%</p>
              <p>👥 Active Members: {team.active}</p>
              <p>📌 Tasks Completed: {team.tasks}</p>
            </div>

          </div>
        ))}

      </div>

      <div className="analytics-grid">

        <div className="glass-card">
          <h2>🏆 Top Team</h2>
          <h3>Team Alpha</h3>
          <p>
            Highest collaboration and
            project completion rate.
          </p>
        </div>

        <div className="glass-card">
          <h2>⚠ Risk Analysis</h2>
          <h3>Team Phoenix</h3>
          <p>
            AI detected low activity and
            delayed task completion.
          </p>
        </div>

      </div>

      <div className="recommendation-card">

        <h2>🤖 AI Recommendations</h2>

        <ul>
          <li>
            Team Phoenix requires mentor
            intervention.
          </li>

          <li>
            Team Alpha can be assigned
            advanced tasks.
          </li>

          <li>
            Team Vision should improve
            communication frequency.
          </li>
        </ul>

      </div>

      <div className="activity-card">

        <h2>⚡ Recent Team Activities</h2>

        <ul>
          <li>Team Alpha completed Module 4</li>
          <li>Team Vision uploaded report</li>
          <li>Team Phoenix missed deadline</li>
          <li>AI generated 3 alerts</li>
        </ul>

      </div>

    </div>
  );
}

export default TeamAnalytics;