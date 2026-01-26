import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadialBarChart, RadialBar } from "recharts";

interface SummaryProps {
  isConnected: boolean;
}

// Mock data - only shown when connected
const mockWeeklyData = [ /* same as before */ ];
const mockGoalProgress = 85;
const mockTodayAverage = { systolic: 118, diastolic: 76, hr: 71 };

const Summary: React.FC<SummaryProps> = ({ isConnected }) => {
  if (!isConnected) {
    return (
      <div style={{ padding: "40px 20px", textAlign: "center", height: "100%" }}>
        <div style={{ fontSize: "4rem", marginBottom: "20px" }}>📴</div> {/* Simple icon */}
        <h2>No Data Yet</h2>
        <p style={{ fontSize: "1.2rem", color: "#555" }}>
          Connect your Smart BP Socks to see your summary, trends, and health insights.
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
          onClick={() => alert("Switch to Monitoring tab to connect!")}
        >
          Go to Monitoring
        </button>
      </div>
    );
  }

  // Connected state - show full summary with mock data
  const radialData = [{ name: "Progress", value: mockGoalProgress, fill: "#28a745" }];

  return (
    <div style={{ padding: "20px 20px 100px", background: "#f0f8ff" }}>
      {/* Greeting */}
      <div style={{ textAlign: "center", marginBottom: "24px" }}>
        <h2 style={{ color: "#0066cc", margin: "0" }}>Good morning!</h2>
      </div>

      {/* Today's Average Card */}
      <div style={{ background: "white", borderRadius: "16px", padding: "24px", textAlign: "center", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", marginBottom: "24px" }}>
        <p style={{ fontSize: "1.2rem", color: "#555" }}>Today's Average</p>
        <div style={{ fontSize: "4rem", fontWeight: "bold", margin: "16px 0" }}>
          <span style={{ color: "#dc3545" }}>{mockTodayAverage.systolic}</span>/
          <span style={{ color: "#0066cc" }}>{mockTodayAverage.diastolic}</span>
        </div>
        <p style={{ fontSize: "1.4rem" }}>Heart Rate: <span style={{ color: "#28a745" }}>{mockTodayAverage.hr} bpm</span></p>
      </div>

      {/* Goal Progress, Quick Stats, Chart - same as previous design */}
      {/* Paste the rest from my earlier Summary code here - goal ring, stats, weekly chart, CTAs */}
    </div>
  );
};

export default Summary;