import { useNavigate } from "react-router-dom";
import "../../assets/styles/profile.css";

function Profile() {

  const navigate = useNavigate();

  return (
    <div className="profile-container">

      <div className="profile-header">

        <h1>👤 Student Profile</h1>

        <button
          className="dashboard-btn"
          onClick={() => navigate("/student-dashboard")}
        >
          Dashboard
        </button>

      </div>

      <div className="profile-card">

        <div className="avatar-section">

          <div className="avatar">
            B
          </div>

          <h2>Bhavani</h2>

          <p>AI Collaboration System Member</p>

        </div>

        <div className="profile-info">

          <div className="info-box">
            <h3>Roll Number</h3>
            <p>22A91A0501</p>
          </div>

          <div className="info-box">
            <h3>Email</h3>
            <p>bhavani@gmail.com</p>
          </div>

          <div className="info-box">
            <h3>Department</h3>
            <p>CSE</p>
          </div>

          <div className="info-box">
            <h3>Year</h3>
            <p>4th Year</p>
          </div>

          <div className="info-box">
            <h3>Team</h3>
            <p>Team Alpha</p>
          </div>

          <div className="info-box">
            <h3>Role</h3>
            <p>Frontend Developer</p>
          </div>

        </div>

      </div>

      <div className="stats-grid">

        <div className="stat-card">
          <h3>📊 Contribution Score</h3>
          <h1>95%</h1>
        </div>

        <div className="stat-card">
          <h3>📅 Attendance</h3>
          <h1>96%</h1>
        </div>

        <div className="stat-card">
          <h3>✅ Tasks Completed</h3>
          <h1>28</h1>
        </div>

        <div className="stat-card">
          <h3>🏆 Rank</h3>
          <h1>#1</h1>
        </div>

      </div>

      <div className="glass-card">

        <h2>💡 Skills</h2>

        <div className="skills">

          <span>React JS</span>
          <span>Java</span>
          <span>Python</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>GitHub</span>

        </div>

      </div>

      <div className="glass-card">

        <h2>📝 About Me</h2>

        <p>
          Passionate Computer Science student interested
          in Full Stack Development, Artificial Intelligence
          and Software Engineering. Active contributor in
          team projects and collaborative development.
        </p>

      </div>

      <div className="button-section">

        <button className="edit-btn">
          Edit Profile
        </button>

        <button
          className="dashboard-btn"
          onClick={() => navigate("/student-dashboard")}
        >
          Go To Dashboard
        </button>

      </div>

    </div>
  );
}

export default Profile;