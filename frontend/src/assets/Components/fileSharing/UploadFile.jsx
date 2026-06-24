import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/uploadFile.css";

function UploadFile() {

  const navigate = useNavigate();

  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setUploadSuccess(false);
    setUploadProgress(0);
  };

  const handleUpload = () => {

    if (!selectedFile) {
      alert("Please select a file");
      return;
    }

    let progress = 0;

    const interval = setInterval(() => {

      progress += 10;
      setUploadProgress(progress);

      if (progress >= 100) {
        clearInterval(interval);
        setUploadSuccess(true);
      }

    }, 200);
  };

  return (
    <div className="upload-container">

      <div className="upload-header">

        <div>
          <h1>📁 File Sharing Center</h1>
          <p>
            Upload project documents, reports,
            images and resources securely.
          </p>
        </div>

        <button
          className="dashboard-btn"
          onClick={() => navigate("/student-dashboard")}
        >
          🏠 Dashboard
        </button>

      </div>

      <div className="upload-card">

        <h2>🚀 Upload Project Files</h2>

        <div className="drop-zone">

          <div className="upload-icon">
            ☁️
          </div>

          <h3>Drag & Drop Files Here</h3>

          <p>
            Supported: PDF, DOCX, PPT, JPG, PNG, ZIP
          </p>

          <input
            type="file"
            id="fileInput"
            hidden
            onChange={handleFileChange}
          />

          <label
            htmlFor="fileInput"
            className="browse-btn"
          >
            Browse Files
          </label>

        </div>

        {selectedFile && (

          <div className="file-info">

            <h3>📄 Selected File</h3>

            <p>
              <strong>Name:</strong>{" "}
              {selectedFile.name}
            </p>

            <p>
              <strong>Size:</strong>{" "}
              {(selectedFile.size / 1024).toFixed(2)}
              {" "}KB
            </p>

          </div>

        )}

        {uploadProgress > 0 && (

          <div className="progress-section">

            <div className="progress-text">
              Uploading... {uploadProgress}%
            </div>

            <div className="progress-bar">

              <div
                className="progress-fill"
                style={{
                  width: `${uploadProgress}%`
                }}
              ></div>

            </div>

          </div>

        )}

        <button
          className="upload-btn"
          onClick={handleUpload}
        >
          Upload File
        </button>

        {uploadSuccess && (

          <div className="success-message">
            ✅ File Uploaded Successfully!
          </div>

        )}

      </div>

      <div className="features-grid">

        <div className="feature-card">
          <h3>🔒 Secure Storage</h3>
          <p>
            Files are stored securely with
            controlled access.
          </p>
        </div>

        <div className="feature-card">
          <h3>⚡ Fast Sharing</h3>
          <p>
            Instantly share project resources
            with teammates.
          </p>
        </div>

        <div className="feature-card">
          <h3>📊 Version Tracking</h3>
          <p>
            Maintain organized project
            documentation and files.
          </p>
        </div>

      </div>

    </div>
  );
}

export default UploadFile;