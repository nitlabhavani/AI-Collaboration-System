import { useNavigate } from "react-router-dom";
import "../../assets/styles/Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="logo">TeamSync AI</div>

        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">About</a>
          <button className="login-btn">Login</button>
        </div>
      </nav>

      <section className="hero-section">
        <div className="hero-content">
          <h1>
            AI-Based Real-Time Group Collaboration &
            Intelligent File Sharing
          </h1>

          <p>
            Collaborate with your team, share files instantly,
            track performance using AI and improve project
            productivity through smart insights.
          </p>

          <div className="hero-buttons">
            <button
  className="primary-btn"
  onClick={() => navigate("/login")}
>
  Get Started
</button>

            <button className="secondary-btn">
              Learn More
            </button>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Team Collaboration"
          />
        </div>
      </section>

      <section className="features">
        <h2>Key Features</h2>

        <div className="feature-grid">

          <div className="feature-card">
            <h3>Group Collaboration</h3>
            <p>
              Real-time team communication and project discussion.
            </p>
          </div>

          <div className="feature-card">
            <h3>Single & Group Chat</h3>
            <p>
              Communicate privately or collaborate in teams.
            </p>
          </div>

          <div className="feature-card">
            <h3>File Sharing</h3>
            <p>
              Upload, download and manage project files securely.
            </p>
          </div>

          <div className="feature-card">
            <h3>AI Performance Tracking</h3>
            <p>
              Monitor member activity and contribution levels.
            </p>
          </div>

          <div className="feature-card">
            <h3>Guide Dashboard</h3>
            <p>
              Guides can track team progress and send alerts.
            </p>
          </div>

          <div className="feature-card">
            <h3>Project Completion Prediction</h3>
            <p>
              AI predicts project completion percentage and status.
            </p>
          </div>

        </div>
      </section>

      <footer className="footer">
        <p>© 2026 TeamSync AI. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Home;