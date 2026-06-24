import { Link, useNavigate } from "react-router-dom";
import "../../assets/styles/Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">

      {/* Navbar */}

      <nav className="navbar">

        <div className="logo">
          TeamSync AI
        </div>

        <div className="nav-links">

          <Link to="/features">
            Features
          </Link>

          <Link to="/about">
            About
          </Link>

          <button
            className="login-btn"
            onClick={() => navigate("/login")}
          >
            Login
          </button>

        </div>

      </nav>

      {/* Hero Section */}

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

            <button
              className="secondary-btn"
              onClick={() =>
                document
                  .getElementById("project-info")
                  ?.scrollIntoView({
                    behavior: "smooth"
                  })
              }
            >
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

      {/* Platform Highlights */}

      <section className="features-preview">

        <h2>Platform Highlights</h2>

        <div className="feature-grid">

          <div className="feature-card">
            <h3>💬 Team Collaboration</h3>
            <p>
              Real-time communication between team members.
            </p>
          </div>

          <div className="feature-card">
            <h3>📁 Secure File Sharing</h3>
            <p>
              Upload, manage and share project resources.
            </p>
          </div>

          <div className="feature-card">
            <h3>🤖 AI Analytics</h3>
            <p>
              Track performance and receive AI insights.
            </p>
          </div>

        </div>

      </section>

      {/* Learn More Section */}

      <section
        className="project-info"
        id="project-info"
      >

        <h2>🚀 How TeamSync AI Works</h2>

        <p className="project-desc">
          TeamSync AI is an AI-powered collaboration
          platform developed to improve teamwork,
          communication and project management among
          students and guides.

          The platform combines intelligent monitoring,
          secure file sharing and real-time communication
          to create an efficient project ecosystem.
        </p>

        <div className="project-grid">

          <div className="project-card">
            <h3>👥 Team Creation</h3>
            <p>
              Students can create project teams and
              invite members into a common workspace.
            </p>
          </div>

          <div className="project-card">
            <h3>💬 Real-Time Communication</h3>
            <p>
              Members collaborate through group chats
              and private messaging.
            </p>
          </div>

          <div className="project-card">
            <h3>📁 Smart File Sharing</h3>
            <p>
              Securely upload, manage and access
              project documents from anywhere.
            </p>
          </div>

          <div className="project-card">
            <h3>🤖 AI Monitoring</h3>
            <p>
              AI analyzes participation levels,
              activity and contribution scores.
            </p>
          </div>

          <div className="project-card">
            <h3>📊 Guide Dashboard</h3>
            <p>
              Guides can monitor project progress,
              risks and team performance.
            </p>
          </div>

          <div className="project-card">
            <h3>🎯 Smart Recommendations</h3>
            <p>
              AI generates alerts, suggestions and
              project completion predictions.
            </p>
          </div>

        </div>

      </section>

      {/* Footer */}

      <footer className="footer">

        <p>
          © 2026 TeamSync AI.
          All Rights Reserved.
        </p>

      </footer>

    </div>
  );
}

export default Home;