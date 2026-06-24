import { useNavigate } from "react-router-dom";
import "../../assets/styles/features.css";

function Features() {
  const navigate = useNavigate();

  return (
    <div className="features-page">

      <button
        className="back-btn"
        onClick={() => navigate("/")}
      >
        ← Back to Home
      </button>

      <div className="features-hero">
        <h1>🤖 AI Collaboration Platform</h1>

        <p>
          TeamSync AI is an intelligent collaboration platform
          designed to help students, project teams and guides
          work together efficiently through AI-powered insights,
          real-time communication and smart project monitoring.
        </p>
      </div>

      <div className="feature-section">

        <div className="feature-box">
          <h2>💬 Real-Time Collaboration</h2>
          <p>
            Team members can collaborate instantly through
            group discussions, private messaging and
            real-time project updates.
          </p>
        </div>

        <div className="feature-box">
          <h2>📁 Intelligent File Sharing</h2>
          <p>
            Upload, manage and share project files securely.
            All resources are organized in one centralized
            workspace for easy access.
          </p>
        </div>

        <div className="feature-box">
          <h2>🤖 AI Performance Tracking</h2>
          <p>
            Artificial Intelligence monitors contribution,
            participation and activity levels of every
            team member automatically.
          </p>
        </div>

        <div className="feature-box">
          <h2>📊 Team Analytics Dashboard</h2>
          <p>
            Guides can monitor team performance, project
            progress, active members and collaboration
            statistics through interactive dashboards.
          </p>
        </div>

        <div className="feature-box">
          <h2>⚠️ Smart Alert System</h2>
          <p>
            AI identifies inactive teams, delayed tasks
            and project risks, then generates warnings
            and recommendations automatically.
          </p>
        </div>

        <div className="feature-box">
          <h2>🚀 Project Completion Prediction</h2>
          <p>
            AI predicts project completion timelines
            using team activity, progress data and
            pending task analysis.
          </p>
        </div>

      </div>

      <div className="info-section">

        <div className="info-card">
          <h2>🎯 Why TeamSync AI?</h2>

          <p>
            Traditional project collaboration tools only
            provide communication and file sharing.
            TeamSync AI goes beyond that by providing
            intelligent recommendations, performance
            monitoring and project forecasting.
          </p>
        </div>

        <div className="info-card">
          <h2>🌟 Benefits</h2>

          <ul>
            <li>✔ Better Team Communication</li>
            <li>✔ Increased Productivity</li>
            <li>✔ AI-Based Decision Support</li>
            <li>✔ Faster Project Completion</li>
            <li>✔ Improved Team Accountability</li>
            <li>✔ Smart Guide Monitoring</li>
          </ul>
        </div>

      </div>

      <div className="future-section">

        <h2>🔮 Future Enhancements</h2>

        <p>
          Future versions of TeamSync AI will include
          AI Chat Assistants, Automated Task Assignment,
          Voice Collaboration, Advanced Analytics and
          Intelligent Project Recommendations.
        </p>

      </div>

    </div>
  );
}

export default Features;