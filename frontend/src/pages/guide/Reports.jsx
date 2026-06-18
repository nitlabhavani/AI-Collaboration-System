import "../../assets/styles/reports.css";

function Reports() {
  const reports = [
    {
      team: "Team Alpha",
      completion: "92%",
      status: "Completed",
      date: "15 Jun 2026"
    },
    {
      team: "Team Vision",
      completion: "78%",
      status: "In Progress",
      date: "18 Jun 2026"
    },
    {
      team: "Team Phoenix",
      completion: "42%",
      status: "Delayed",
      date: "22 Jun 2026"
    }
  ];

  return (
    <div className="reports-container">

      <div className="reports-header">
        <h1>📑 Project Reports Dashboard</h1>
        <p>
          View project reports, AI-generated summaries,
          completion statistics and team performance.
        </p>
      </div>

      <div className="report-stats">

        <div className="report-card">
          <h3>Total Projects</h3>
          <h2>12</h2>
        </div>

        <div className="report-card">
          <h3>Completed</h3>
          <h2>08</h2>
        </div>

        <div className="report-card">
          <h3>In Progress</h3>
          <h2>03</h2>
        </div>

        <div className="report-card">
          <h3>Delayed</h3>
          <h2>01</h2>
        </div>

      </div>

      <div className="summary-section">

        <h2>🤖 AI Project Summary</h2>

        <div className="summary-box">
          <p>
            Overall project completion rate increased
            by 18% this month. Team Alpha is performing
            exceptionally well while Team Phoenix
            requires additional guidance.
          </p>
        </div>

      </div>

      <div className="reports-table-card">

        <h2>📊 Team Reports</h2>

        <div className="table-wrapper">

          <table>

            <thead>
              <tr>
                <th>Team</th>
                <th>Completion</th>
                <th>Status</th>
                <th>Report Date</th>
              </tr>
            </thead>

            <tbody>

              {reports.map((report, index) => (

                <tr key={index}>
                  <td>{report.team}</td>
                  <td>{report.completion}</td>
                  <td>
                    <span
                      className={`status ${
                        report.status === "Completed"
                          ? "completed"
                          : report.status === "Delayed"
                          ? "delayed"
                          : "progress"
                      }`}
                    >
                      {report.status}
                    </span>
                  </td>
                  <td>{report.date}</td>
                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

      <div className="analytics-grid">

        <div className="analytics-card">
          <h2>🏆 Best Performing Team</h2>
          <h3>Team Alpha</h3>
          <p>92% Completion Rate</p>
        </div>

        <div className="analytics-card">
          <h2>⚠ Needs Attention</h2>
          <h3>Team Phoenix</h3>
          <p>High Delay Risk Detected</p>
        </div>

      </div>

      <div className="download-section">

        <h2>📥 Report Actions</h2>

        <div className="action-buttons">

          <button className="download-btn">
            Download PDF
          </button>

          <button className="export-btn">
            Export Excel
          </button>

          <button className="generate-btn">
            Generate AI Report
          </button>

        </div>

      </div>

    </div>
  );
}

export default Reports;