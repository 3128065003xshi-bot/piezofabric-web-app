import React from "react";

interface MonitoringProps {
  isConnected: boolean;
  setIsConnected: (connected: boolean) => void;
}

const Monitoring: React.FC<MonitoringProps> = ({ isConnected, setIsConnected }) => {
  return (
    <div style={{ padding: "40px 20px", textAlign: "center" }}>
      <h2>Monitoring</h2>
      <p>Live BP reading will appear here when connected.</p>
      <button
        style={{
          padding: "18px 40px",
          background: isConnected ? "#28a745" : "#0066cc",
          color: "white",
          border: "none",
          borderRadius: "12px",
          fontSize: "1.3rem",
          margin: "20px 0",
        }}
        onClick={() => setIsConnected(!isConnected)}
      >
        {isConnected ? "Disconnect Socks" : "Connect Socks"}
      </button>
      {isConnected && <p style={{ color: "#28a745", fontWeight: "bold" }}>Connected! Data loading...</p>}
    </div>
  );
};

export default Monitoring;