import { useNavigate } from "react-router-dom";
import "../../styles/fileCard.css";

function FileCard({
  fileName,
  fileType,
  fileSize,
  uploadedBy,
  uploadDate,
  status
}) {

  const navigate = useNavigate();

  const getFileIcon = () => {
    switch (fileType) {
      case "PDF":
        return "📄";
      case "DOC":
        return "📝";
      case "PPT":
        return "📊";
      case "IMAGE":
        return "🖼️";
      default:
        return "📁";
    }
  };

  return (
    <div className="file-card">

      <div className="file-header">

        <div className="file-icon">
          {getFileIcon()}
        </div>

        <div className="file-title">

          <h3>{fileName}</h3>

          <span className="file-type">
            {fileType}
          </span>

        </div>

      </div>

      <div className="file-info">

        <p>
          <strong>👤 Uploaded By:</strong>
          {uploadedBy}
        </p>

        <p>
          <strong>📅 Date:</strong>
          {uploadDate}
        </p>

        <p>
          <strong>📦 Size:</strong>
          {fileSize}
        </p>

      </div>

      <div className="status-section">

        <span
          className={
            status === "Verified"
              ? "status verified"
              : "status pending"
          }
        >
          {status}
        </span>

      </div>

      <div className="file-actions">

        <button
          className="preview-btn"
          onClick={() => navigate("/file-preview")}
        >
          👁 Preview
        </button>

        <button className="download-btn">
          ⬇ Download
        </button>

      </div>

    </div>
  );
}

export default FileCard;