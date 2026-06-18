import "../../assets/styles/aiSummary.css";

function AISummary() {
  const insights = [
    {
      title: "Project Completion Prediction",
      value: "84%",
      description:
        "AI predicts the project will be completed before the deadline."
    },
    {
      title: "Team Collaboration Score",
      value: "91%",
      description:
        "Excellent communication and teamwork observed."
    },
    {
      title: "Risk Analysis",
      value: "Low Risk",
      description:
        "No major delays expected based on current activity."
    }
  ];

  return (
    <div className="ai-summary-container">

      <div className="ai-hero">

        <h1>🤖 AI Project Intelligence Center</h1>

        <p>
          AI-powered insights, project forecasting,
          collaboration analysis and team performance recommendations.
        </p>

      </div>

      <div className="summary-grid">

        {insights.map((item, index) => (

          <div className="summary-card" key={index}>

            <h3>{item.title}</h3>

            <h1>{item.value}</h1>

            <p>{item.description}</p>

          </div>

        ))}

      </div>

      <div className="prediction-section">

        <div className="glass-card">

          <h2>📈 Project Completion Forecast</h2>

          <div className="forecast-box">

            <div className="forecast-item">
              <span>Team Alpha</span>
              <span>95%</span>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: "95%" }}
              ></div>
            </div>

            <div className="forecast-item">
              <span>Team Vision</span>
              <span>78%</span>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: "78%" }}
              ></div>
            </div>

            <div className="forecast-item">
              <span>Team Phoenix</span>
              <span>42%</span>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill danger"
                style={{ width: "42%" }}
              ></div>
            </div>

          </div>

        </div>

      </div>

      <div className="recommendation-section">

        <div className="glass-card">

          <h2>🧠 AI Recommendations</h2>

          <div className="recommendation">
            ✅ Team Alpha can take advanced modules.
          </div>

          <div className="recommendation">
            ⚠ Team Vision needs better task distribution.
          </div>

          <div className="recommendation">
            🚨 Team Phoenix requires mentor intervention.
          </div>

        </div>

      </div>

      <div className="analytics-grid">

        <div className="glass-card">

          <h2>🏆 Top Contributors</h2>

          <ul>
            <li>🥇 Bhavani - 96%</li>
            <li>🥈 Pujitha - 92%</li>
            <li>🥉 Harika - 88%</li>
          </ul>

        </div>

        <div className="glass-card">

          <h2>⚡ Recent AI Observations</h2>

          <ul>
            <li>Project productivity increased by 15%</li>
            <li>Communication improved by 20%</li>
            <li>Task completion rate is stable</li>
            <li>3 risk alerts generated this week</li>
          </ul>

        </div>

      </div>

      <div className="final-report">

        <div className="glass-card">

          <h2>📄 AI Executive Summary</h2>

          <p>
            Based on team activities, contribution levels,
            collaboration patterns and project timelines,
            the overall project health score is
            <strong> 87%</strong>.
            Most teams are progressing well, while Team Phoenix
            requires additional support to avoid delays.
          </p>

        </div>

      </div>

    </div>
  );
}

export default AISummary;