import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
} from "recharts";

// Mock data (replace with API fetch later)
const todayAverage = { systolic: 118, diastolic: 76, hr: 71 };
const goalProgress = 85; // Percentage under target
const quickStats = {
  avgToday: "118/76",
  highest: "130/82",
  measurements: 5,
};

const weeklyData = [
  { day: "Mon", systolic: 120, diastolic: 80, hr: 72 },
  { day: "Tue", systolic: 122, diastolic: 78, hr: 74 },
  { day: "Wed", systolic: 115, diastolic: 74, hr: 70 },
  { day: "Thu", systolic: 130, diastolic: 82, hr: 78 },
  { day: "Fri", systolic: 119, diastolic: 77, hr: 72 },
  { day: "Sat", systolic: 124, diastolic: 79, hr: 75 },
  { day: "Sun", systolic: 121, diastolic: 75, hr: 74 },
];

const Summary: React.FC = () => {
  const radialData = [{ name: "Progress", value: goalProgress, fill: "#28a745" }];

  return (
    <div style={{ padding: "20px 20px 100px", background: "#f0f8ff" }}>
      {/* Greeting */}
      <div style={{ textAlign: "center", marginBottom: "24px" }}>
        <h2 style={{ color: "#0066cc", margin: "0" }}>Good morning!</h2>
        <p style={{ color: "#28a745", fontWeight: "bold" }}>Socks Connected</p>
      </div>

      {/* Today's Average Card */}
      <div
        style={{
          background: "white",
          borderRadius: "16px",
          padding: "24px",
          textAlign: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          marginBottom: "24px",
        }}
      >
        <p style={{ fontSize: "1.2rem", color: "#555" }}>Today's Average</p>
        <div style={{ fontSize: "4rem", fontWeight: "bold", margin: "16px 0" }}>
          <span style={{ color: "#dc3545" }}>{todayAverage.systolic}</span>/
          <span style={{ color: "#0066cc" }}>{todayAverage.diastolic}</span>
        </div>
        <p style={{ fontSize: "1.4rem", margin: "8px 0" }}>
          Heart Rate: <span style={{ color: "#28a745" }}>{todayAverage.hr} bpm</span>
        </p>
        <p style={{ color: "#28a745", fontWeight: "bold" }}>Normal range • Improved from yesterday</p>
      </div>

      {/* Goal Progress */}
      <div
        style={{
          background: "white",
          borderRadius: "16px",
          padding: "24px",
          textAlign: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          marginBottom: "24px",
        }}
      >
        <h3 style={{ margin: "0 0 16px" }}>Goal Progress</h3>
        <ResponsiveContainer width="100%" height={220}>
          <RadialBarChart cx="50%" cy="50%" innerRadius="60%" outerRadius="90%" data={radialData}>
            <RadialBar dataKey="value" cornerRadius={10} fill="#28a745" background={{ fill: "#eee" }} />
          </RadialBarChart>
        </ResponsiveContainer>
        <p style={{ fontSize: "1.3rem", fontWeight: "bold", color: "#28a745", marginTop: "16px" }}>
          On track – {goalProgress}% under 130/85
        </p>
      </div>

      {/* Quick Stats */}
      <div style={{ display: "flex", gap: "12px", marginBottom: "24px" }}>
        <div style={{ flex: 1, background: "white", borderRadius: "12px", padding: "16px", textAlign: "center", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
          <p style={{ margin: "0", color: "#555" }}>Avg Today</p>
          <p style={{ fontSize: "1.6rem", fontWeight: "bold", margin: "8px 0" }}>{quickStats.avgToday}</p>
        </div>
        <div style={{ flex: 1, background: "white", borderRadius: "12px", padding: "16px", textAlign: "center", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
          <p style={{ margin: "0", color: "#555" }}>Highest</p>
          <p style={{ fontSize: "1.6rem", fontWeight: "bold", margin: "8px 0" }}>{quickStats.highest}</p>
        </div>
        <div style={{ flex: 1, background: "white", borderRadius: "12px", padding: "16px", textAlign: "center", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
          <p style={{ margin: "0", color: "#555" }}>Measurements</p>
          <p style={{ fontSize: "1.6rem", fontWeight: "bold", margin: "8px 0" }}>{quickStats.measurements}</p>
        </div>
      </div>

      {/* Weekly Trend Chart */}
      <div
        style={{
          background: "white",
          borderRadius: "16px",
          padding: "24px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <h3 style={{ margin: "0 0 16px" }}>Weekly Trend</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={weeklyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="systolic" stroke="#dc3545" strokeWidth={3} dot={{ r: 5 }} />
            <Line type="monotone" dataKey="diastolic" stroke="#0066cc" strokeWidth={3} dot={{ r: 5 }} />
            <Line type="monotone" dataKey="hr" stroke="#28a745" strokeWidth={3} dot={{ r: 5 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* CTA Buttons */}
      <div style={{ margin: "32px 0", textAlign: "center" }}>
        <button
          style={{
            width: "100%",
            padding: "18px",
            background: "#0066cc",
            color: "white",
            border: "none",
            borderRadius: "12px",
            fontSize: "1.3rem",
            fontWeight: "bold",
            marginBottom: "12px",
          }}
          onClick={() => alert("Navigate to Monitoring tab (coming next!)")}
        >
          Start New Measurement
        </button>
        <button
          style={{
            width: "100%",
            padding: "18px",
            background: "transparent",
            color: "#0066cc",
            border: "2px solid #0066cc",
            borderRadius: "12px",
            fontSize: "1.2rem",
          }}
          onClick={() => alert("Full history view (coming soon)")}
        >
          View Full History
        </button>
      </div>
    </div>
  );
};

export default Summary;