import React from "react";

interface SummaryProps {
  isConnected: boolean;
}

const Summary: React.FC<SummaryProps> = ({ isConnected }) => {
  if (!isConnected) {
    return (
      <div style={{ padding: "40px 20px", textAlign: "center" }}>
        <div style={{ fontSize: "4rem", marginBottom: "20px" }}>📴</div>
        <h2>No Data Yet</h2>
        <p style={{ fontSize: "1.2rem", color: "#555" }}>
          Connect your Smart BP Socks to see your summary.
        </p>
        <button
          style={{
            marginTop: "30px",
            padding: "16px 32px",
            background: "#0066cc",
            color: "white",
            border: "none",
            borderRadius: "12px",
            fontSize: "1.2rem",
          }}
        >
          Go to Monitoring
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px 20px 100px", background: "#f0f8ff" }}>
      <div style={{ textAlign: "center", marginBottom: "24px" }}>
        <h2 style={{ color: "#0066cc" }}>Good morning!</h2>
      </div>

      {/* Placeholder for when connected - add charts later */}
      <div style={{ background: "white", borderRadius: "16px", padding: "24px", textAlign: "center", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
        <p>Connected! Your summary data will appear here.</p>
      </div>
    </div>
  );
};

export default Summary;