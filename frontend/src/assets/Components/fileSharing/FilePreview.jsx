import { useNavigate } from "react-router-dom";
import "../../styles/filepreview.css";

function FilePreview() {

  const navigate = useNavigate();

  return (
    <div className="file-preview-container">

      {/* Header */}

      <div className="preview-header">

        <div>
          <h1>📄 File Preview</h1>
          <p>
            View file information and preview before downloading.
          </p>
        </div>

        <button
          className="back-btn"
          onClick={() => navigate("/shared-files")}
        >
          ← Back
        </button>

      </div>

      {/* File Card */}

      <div className="preview-card">

        <div className="file-banner">
          📄
        </div>

        <h2>Project_Report.pdf</h2>

        <div className="file-details">

          <div className="detail-box">
            <span>📂 Type</span>
            <h3>PDF</h3>
          </div>

          <div className="detail-box">
            <span>📦 Size</span>
            <h3>2.5 MB</h3>
          </div>

          <div className="detail-box">
            <span>👤 Uploaded By</span>
            <h3>Bhavani</h3>
          </div>

          <div className="detail-box">
            <span>📅 Date</span>
            <h3>24 Jun 2026</h3>
          </div>

        </div>

      </div>

      {/* Preview Section */}

      <div className="preview-viewer">

        <h2>👁 Preview Window</h2>

        <div className="preview-placeholder">

          <div className="preview-icon">
            📑
          </div>

          <h3>Project_Report.pdf</h3>

          <p>
            PDF preview will appear here after backend integration.
          </p>

        </div>

      </div>

      {/* Actions */}

      <div className="action-section">

        <button className="download-btn">
          ⬇ Download File
        </button>

        <button className="share-btn">
          🔗 Share File
        </button>

      </div>

    </div>
  );
}

export default FilePreview;