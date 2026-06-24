import "../../assets/styles/performance.css";
import { useNavigate } from "react-router-dom";

function Performance() {
  const navigate = useNavigate();

  const completedTasks = [
    "Frontend UI Design",
    "Login Authentication",
    "Dashboard Development",
    "Project Documentation"
  ];

  const pendingTasks = [
    "AI Integration",
    "Testing & Debugging",
    "Final Presentation"
  ];

  return (
    <div className="performance-container">

      <div className="performance-header">

        <div>
          <h1>📊 Performance Analytics</h1>
          <p>
            Monitor your contribution, progress and AI insights.
          </p>
        </div>

        <button
          className="back-btn"
          onClick={() => navigate("/student-dashboard")}
        >
          ← Dashboard
        </button>

      </div>

      {/* Stats */}

      <div className="stats-grid">

        <div className="stats-card">
          <h3>🏆 Overall Score</h3>
          <h1>91%</h1>
        </div>

        <div className="stats-card">
          <h3>📅 Attendance</h3>
          <h1>95%</h1>
        </div>

        <div className="stats-card">
          <h3>✅ Completed Tasks</h3>
          <h1>24</h1>
        </div>

        <div className="stats-card">
          <h3>🤖 AI Rating</h3>
          <h1>Excellent</h1>
        </div>

      </div>

      {/* Progress */}

      <div className="glass-card">

        <h2>📈 Project Contribution</h2>

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
          <span>60%</span>
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill warning"
            style={{ width: "60%" }}
          ></div>
        </div>

      </div>

      {/* Task Sections */}

      <div className="task-grid">

        <div className="glass-card">

          <h2>✅ Completed Tasks</h2>

          <ul>
            {completedTasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>

        </div>

        <div className="glass-card">

          <h2>⏳ Pending Tasks</h2>

          <ul>
            {pendingTasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>

        </div>

      </div>

      {/* Ranking */}

      <div className="glass-card">

        <h2>🏅 Team Contribution Ranking</h2>

        <div className="rank-item">
          🥇 Bhavani - 95%
        </div>

        <div className="rank-item">
          🥈 Pujitha - 91%
        </div>

        <div className="rank-item">
          🥉 Harika - 88%
        </div>

      </div>

      {/* AI Insights */}

      <div className="glass-card">

        <h2>🧠 AI Insights</h2>

        <div className="insight success">
          ✅ Your contribution level is above average.
        </div>

        <div className="insight">
          📌 Focus more on documentation activities.
        </div>

        <div className="insight">
          🚀 Maintain current performance to stay in Top 3.
        </div>

      </div>

    </div>
  );
}

export default Performance;