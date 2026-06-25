import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/sharedFiles.css";

function SharedFiles() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const files = [
    {
      id: 1,
      name: "Project Proposal.pdf",
      type: "PDF",
      size: "2.4 MB",
      uploadedBy: "Bhavani",
      date: "22 Jun 2026"
    },
    {
      id: 2,
      name: "UI Design.fig",
      type: "Design",
      size: "5.1 MB",
      uploadedBy: "Pujitha",
      date: "21 Jun 2026"
    },
    {
      id: 3,
      name: "Database Schema.docx",
      type: "Document",
      size: "1.2 MB",
      uploadedBy: "Harika",
      date: "20 Jun 2026"
    },
    {
      id: 4,
      name: "Sprint Report.xlsx",
      type: "Excel",
      size: "3.8 MB",
      uploadedBy: "Rahul",
      date: "19 Jun 2026"
    }
  ];

  const filteredFiles = files.filter((file) =>
    file.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="shared-files-container">

      <div className="shared-header">
        <div>
          <h1>📁 Shared Files</h1>
          <p>Access and manage files shared by your team.</p>
        </div>

        <button
          className="back-btn"
          onClick={() => navigate("/student-dashboard")}
        >
          Dashboard
        </button>
      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search files..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="files-grid">

        {filteredFiles.map((file) => (

          <div className="file-card" key={file.id}>

            <div className="file-icon">
              📄
            </div>

            <h3>{file.name}</h3>

            <p>
              <strong>Type:</strong> {file.type}
            </p>

            <p>
              <strong>Size:</strong> {file.size}
            </p>

            <p>
              <strong>Uploaded By:</strong> {file.uploadedBy}
            </p>

            <p>
              <strong>Date:</strong> {file.date}
            </p>

            <div className="file-actions">

              <button className="view-btn">
                View
              </button>

              <button className="download-btn">
                Download
              </button>

            </div>

          </div>

        ))}

      </div>

      <div className="storage-card">

        <h2>☁ Storage Usage</h2>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: "68%" }}
          ></div>
        </div>

        <p>6.8 GB of 10 GB used</p>

      </div>

    </div>
  );
}

export default SharedFiles;