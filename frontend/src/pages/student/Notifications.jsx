import { useNavigate } from "react-router-dom";
import "../../assets/styles/notifications.css";

function Notifications() {
  const navigate = useNavigate();

  const notifications = [
    {
      title: "Project Review Scheduled",
      message: "Guide scheduled project review on Monday.",
      type: "info",
      time: "10 mins ago"
    },
    {
      title: "AI Alert",
      message: "Documentation progress is below expected level.",
      type: "warning",
      time: "30 mins ago"
    },
    {
      title: "Task Completed",
      message: "Frontend UI Module marked as completed.",
      type: "success",
      time: "1 hour ago"
    },
    {
      title: "New File Shared",
      message: "Project Requirement Document uploaded.",
      type: "info",
      time: "2 hours ago"
    },
    {
      title: "Deadline Reminder",
      message: "AI Module submission due in 2 days.",
      type: "danger",
      time: "Today"
    }
  ];

  return (
    <div className="notifications-container">

      <div className="notifications-header">

        <div>
          <h1>🔔 Notifications Center</h1>
          <p>
            Stay updated with project alerts,
            deadlines and team activities.
          </p>
        </div>

        <button
          className="dashboard-btn"
          onClick={() => navigate("/student-dashboard")}
        >
          🏠 Dashboard
        </button>

      </div>

      <div className="summary-grid">

        <div className="summary-card">
          <h3>Total Notifications</h3>
          <h1>18</h1>
        </div>

        <div className="summary-card">
          <h3>Unread</h3>
          <h1>5</h1>
        </div>

        <div className="summary-card">
          <h3>AI Alerts</h3>
          <h1>3</h1>
        </div>

        <div className="summary-card">
          <h3>Deadlines</h3>
          <h1>2</h1>
        </div>

      </div>

      <div className="notifications-list">

        {notifications.map((item, index) => (

          <div
            key={index}
            className={`notification-card ${item.type}`}
          >

            <div className="notification-content">

              <h3>{item.title}</h3>

              <p>{item.message}</p>

              <span>{item.time}</span>

            </div>

            <button className="read-btn">
              Mark Read
            </button>

          </div>

        ))}

      </div>

      <div className="ai-alerts">

        <h2>🤖 AI Recommendations</h2>

        <div className="alert-box">
          📌 Focus more on Documentation Module.
        </div>

        <div className="alert-box">
          🚀 Your contribution score increased by 12%.
        </div>

        <div className="alert-box">
          ⚠ Complete pending tasks before review.
        </div>

      </div>

    </div>
  );
}

export default Notifications;