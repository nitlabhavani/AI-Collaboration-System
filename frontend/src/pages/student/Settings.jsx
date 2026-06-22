import { useNavigate } from "react-router-dom";
import "../../assets/styles/settings.css";

function Settings() {

  const navigate = useNavigate();

  return (
    <div className="settings-container">

      <div className="settings-header">

        <h1>⚙️ Settings</h1>

        <button
          className="dashboard-btn"
          onClick={() => navigate("/student-dashboard")}
        >
          Dashboard
        </button>

      </div>

      <div className="settings-grid">

        <div className="setting-card">

          <h2>👤 Account Settings</h2>

          <div className="setting-item">
            <label>Full Name</label>
            <input
              type="text"
              value="Bhavani"
              readOnly
            />
          </div>

          <div className="setting-item">
            <label>Email</label>
            <input
              type="email"
              value="bhavani@gmail.com"
              readOnly
            />
          </div>

          <button className="save-btn">
            Update Profile
          </button>

        </div>

        <div className="setting-card">

          <h2>🔒 Security</h2>

          <div className="setting-item">
            <label>Current Password</label>
            <input
              type="password"
              placeholder="********"
            />
          </div>

          <div className="setting-item">
            <label>New Password</label>
            <input
              type="password"
              placeholder="Enter New Password"
            />
          </div>

          <button className="save-btn">
            Change Password
          </button>

        </div>

        <div className="setting-card">

          <h2>🔔 Notifications</h2>

          <div className="toggle-row">
            <span>Email Notifications</span>
            <input type="checkbox" defaultChecked />
          </div>

          <div className="toggle-row">
            <span>Project Updates</span>
            <input type="checkbox" defaultChecked />
          </div>

          <div className="toggle-row">
            <span>AI Alerts</span>
            <input type="checkbox" defaultChecked />
          </div>

        </div>

        <div className="setting-card">

          <h2>🎨 Appearance</h2>

          <div className="toggle-row">
            <span>Dark Mode</span>
            <input type="checkbox" defaultChecked />
          </div>

          <div className="toggle-row">
            <span>Compact Layout</span>
            <input type="checkbox" />
          </div>

        </div>

      </div>

      <div className="danger-zone">

        <h2>⚠️ Danger Zone</h2>

        <p>
          Logout from your account.
        </p>

        <button className="logout-btn">
          Logout
        </button>

      </div>

    </div>
  );
}

export default Settings;