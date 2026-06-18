import "../../assets/styles/about.css";

function About() {
  const features = [
    "Real-Time Group Collaboration",
    "Single & Group Chat",
    "Secure File Sharing",
    "AI Performance Tracking",
    "Project Completion Prediction",
    "Guide Monitoring Dashboard"
  ];

  const technologies = [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Socket.IO",
    "Artificial Intelligence"
  ];

  const teamMembers = [
    "Bhavani",
    "Pujitha",
    "Harika",
    "Team Member 4"
  ];

  return (
    <div className="about-container">

     <div className="about-hero">

 <button
  className="back-btn"
  onClick={() => window.location.href = "/"}
>
  ← Back to Home
</button>

  <h1>
    🚀 About TeamSync AI
  </h1>

  <p>
    AI-Based Real-Time Group Collaboration &
    Intelligent File Sharing Platform designed
    to improve teamwork, productivity and
    project success through smart insights.
  </p>

</div>

      <div className="about-grid">

        <div className="glass-card">

          <h2>🎯 Our Mission</h2>

          <p>
            To simplify student collaboration,
            enhance project management and provide
            AI-powered guidance for better team
            performance and project outcomes.
          </p>

        </div>

        <div className="glass-card">

          <h2>🌟 Vision</h2>

          <p>
            Build an intelligent collaboration
            ecosystem where teams can communicate,
            share resources and complete projects
            efficiently with AI assistance.
          </p>

        </div>

      </div>

      <div className="section-card">

        <h2>✨ Key Features</h2>

        <div className="feature-grid">

          {features.map((feature, index) => (
            <div
              className="feature-card"
              key={index}
            >
              {feature}
            </div>
          ))}

        </div>

      </div>

      <div className="section-card">

        <h2>⚙️ Technologies Used</h2>

        <div className="tech-grid">

          {technologies.map((tech, index) => (
            <div
              className="tech-card"
              key={index}
            >
              {tech}
            </div>
          ))}

        </div>

      </div>

      <div className="section-card">

        <h2>👨‍💻 Project Team</h2>

        <div className="team-grid">

          {teamMembers.map((member, index) => (
            <div
              className="team-card"
              key={index}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="member"
              />

              <h3>{member}</h3>

              <p>Project Contributor</p>

            </div>
          ))}

        </div>

      </div>

      <div className="section-card">

        <h2>📈 Project Benefits</h2>

        <div className="benefits-grid">

          <div className="benefit-card">
            Better Team Communication
          </div>

          <div className="benefit-card">
            AI-Based Performance Insights
          </div>

          <div className="benefit-card">
            Faster Project Completion
          </div>

          <div className="benefit-card">
            Secure File Sharing
          </div>

          <div className="benefit-card">
            Smart Team Monitoring
          </div>

          <div className="benefit-card">
            Intelligent Recommendations
          </div>

        </div>

      </div>

      <div className="footer-card">

        <h2>🤖 TeamSync AI</h2>

        <p>
          Empowering collaboration through
          Artificial Intelligence.
        </p>

      </div>

    </div>
  );
}

export default About;