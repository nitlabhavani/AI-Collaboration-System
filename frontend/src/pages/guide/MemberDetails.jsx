import "../../assets/styles/memberDetails.css";

function MemberDetails() {
  const skills = [
    "React",
    "Node.js",
    "Python",
    "MongoDB",
    "UI/UX"
  ];

  const activities = [
    "Uploaded Final Report",
    "Completed Module 3",
    "Attended Team Meeting",
    "Updated Project Documentation"
  ];

  return (
    <div className="member-details">

      <h1 className="page-title">
        👤 Member Details
      </h1>

      <div className="profile-card">

        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="profile"
          className="profile-image"
        />

        <h2>Bhavani</h2>

        <p>Frontend Developer</p>

        <p>Email: bhavani@gmail.com</p>

        <p>Team: Team Alpha</p>

      </div>

      <div className="stats-grid">

        <div className="stat-card">
          <h3>Progress</h3>
          <h2>82%</h2>
        </div>

        <div className="stat-card">
          <h3>Attendance</h3>
          <h2>95%</h2>
        </div>

        <div className="stat-card">
          <h3>Tasks Done</h3>
          <h2>18</h2>
        </div>

        <div className="stat-card">
          <h3>Performance</h3>
          <h2>91%</h2>
        </div>

      </div>

      <div className="section-card">

        <h2>🚀 Skills</h2>

        <div className="skills-container">

          {skills.map((skill, index) => (
            <span key={index} className="skill-badge">
              {skill}
            </span>
          ))}

        </div>

      </div>

      <div className="section-card">

        <h2>📊 Project Progress</h2>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: "82%" }}
          ></div>
        </div>

      </div>

      <div className="section-card">

        <h2>⚡ Recent Activities</h2>

        <ul className="activity-list">

          {activities.map((item, index) => (
            <li key={index}>
              ✅ {item}
            </li>
          ))}

        </ul>

      </div>

      <div className="section-card">

        <h2>🤖 AI Performance Summary</h2>

        <p>
          Member is performing consistently
          with strong contribution in frontend
          development and collaboration.
        </p>

      </div>

    </div>
  );
}

export default MemberDetails;