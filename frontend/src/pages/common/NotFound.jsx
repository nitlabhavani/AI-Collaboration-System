import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>404</h1>
      <h2>Page Not Found</h2>

      <p>
        The page you are looking for does not exist.
      </p>

      <Link to="/">
        <button
          style={{
            padding: "10px 20px",
            marginTop: "20px",
            cursor: "pointer",
          }}
        >
          Go Home
        </button>
      </Link>
    </div>
  );
}

export default NotFound;