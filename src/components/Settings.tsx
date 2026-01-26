// src/components/Settings.tsx
import React, { useState } from "react";

interface Profile {
  age: number;
  weight: number;
  height: number;
}

interface SettingsProps {
  profile: Profile;
  setProfile: React.Dispatch<React.SetStateAction<Profile>>;
  onLogout: () => void;
}

// Mock readings for CSV export
const mockReadings = [
  { date: "2026-01-25", time: "10:30", systolic: 118, diastolic: 76, hr: 71 },
  { date: "2026-01-25", time: "14:15", systolic: 122, diastolic: 78, hr: 74 },
  { date: "2026-01-24", time: "09:45", systolic: 115, diastolic: 74, hr: 70 },
  { date: "2026-01-24", time: "11:20", systolic: 128, diastolic: 82, hr: 76 },
  { date: "2026-01-23", time: "08:55", systolic: 120, diastolic: 78, hr: 73 },
];

const Settings: React.FC<SettingsProps> = ({ profile, setProfile, onLogout }) => {
  const [highSystolic, setHighSystolic] = useState(140);
  const [highDiastolic, setHighDiastolic] = useState(90);
  const [enableAlerts, setEnableAlerts] = useState(true);

  const handleSaveProfile = () => {
    alert(`Profile updated!\nAge: ${profile.age}\nWeight: ${profile.weight} kg\nHeight: ${profile.height} cm`);
    // Later: send to backend
  };

  const handleExportCSV = () => {
    if (mockReadings.length === 0) {
      alert("No data to export yet.");
      return;
    }

    const headers = ["Date", "Time", "Systolic", "Diastolic", "Heart Rate"];
    const rows = mockReadings.map(r => [r.date, r.time, r.systolic, r.diastolic, r.hr]);
    const csvContent = [headers, ...rows].map(row => row.join(",")).join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "piezofabric-bp-readings.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div style={{ padding: "20px 20px 100px", background: "#f0f8ff" }}>
      {/* Profile Section */}
      <div style={{ background: "white", borderRadius: "16px", padding: "24px", textAlign: "center", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", marginBottom: "24px" }}>
        {/* Profile Picture */}
        <div
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            background: "#0066cc",
            color: "white",
            fontSize: "3rem",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 16px",
          }}
        >
          T {/* Initial for "test" user */}
        </div>

        {/* User Name */}
        <h2 style={{ margin: "0 0 8px", fontSize: "1.8rem" }}>test</h2>
        <p style={{ color: "#555", marginBottom: "20px" }}>test@test.com</p>

        {/* Editable Profile Fields */}
        <div style={{ textAlign: "left", maxWidth: "300px", margin: "0 auto" }}>
          <label style={{ display: "block", margin: "12px 0" }}>
            Age:
            <input
              type="number"
              value={profile.age}
              onChange={(e) => setProfile({ ...profile, age: Number(e.target.value) || 0 })}
              style={{ width: "100%", padding: "10px", marginTop: "4px", borderRadius: "8px", border: "1px solid #b3d4ff" }}
            />
          </label>
          <label style={{ display: "block", margin: "12px 0" }}>
            Weight (kg):
            <input
              type="number"
              value={profile.weight}
              onChange={(e) => setProfile({ ...profile, weight: Number(e.target.value) || 0 })}
              style={{ width: "100%", padding: "10px", marginTop: "4px", borderRadius: "8px", border: "1px solid #b3d4ff" }}
            />
          </label>
          <label style={{ display: "block", margin: "12px 0" }}>
            Height (cm):
            <input
              type="number"
              value={profile.height}
              onChange={(e) => setProfile({ ...profile, height: Number(e.target.value) || 0 })}
              style={{ width: "100%", padding: "10px", marginTop: "4px", borderRadius: "8px", border: "1px solid #b3d4ff" }}
            />
          </label>
        </div>

        <button
          onClick={handleSaveProfile}
          style={{
            marginTop: "24px",
            padding: "14px 32px",
            background: "#0066cc",
            color: "white",
            border: "none",
            borderRadius: "12px",
            fontSize: "1.1rem",
            cursor: "pointer",
          }}
        >
          Save Changes
        </button>
      </div>

      {/* Thresholds & Alerts */}
      <div style={{ background: "white", borderRadius: "16px", padding: "24px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", marginBottom: "24px" }}>
        <h3 style={{ margin: "0 0 16px" }}>Thresholds & Alerts</h3>
        <label style={{ display: "block", margin: "16px 0" }}>
          High BP Alert Threshold:
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "8px" }}>
            <input
              type="number"
              value={highSystolic}
              onChange={(e) => setHighSystolic(Number(e.target.value) || 140)}
              style={{ width: "80px", padding: "8px", borderRadius: "8px", border: "1px solid #b3d4ff" }}
            />
            /
            <input
              type="number"
              value={highDiastolic}
              onChange={(e) => setHighDiastolic(Number(e.target.value) || 90)}
              style={{ width: "80px", padding: "8px", borderRadius: "8px", border: "1px solid #b3d4ff" }}
            />
            mmHg
          </div>
        </label>
        <label style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "20px" }}>
          <input type="checkbox" checked={enableAlerts} onChange={(e) => setEnableAlerts(e.target.checked)} />
          Enable push/email alerts for high readings
        </label>
      </div>

      {/* Data Management */}
      <div style={{ background: "white", borderRadius: "16px", padding: "24px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", marginBottom: "24px" }}>
        <h3 style={{ margin: "0 0 16px" }}>Data Management</h3>
        <button
          onClick={handleExportCSV}
          style={{
            width: "100%",
            padding: "16px",
            background: "#0066cc",
            color: "white",
            border: "none",
            borderRadius: "12px",
            fontSize: "1.1rem",
            cursor: "pointer",
          }}
        >
          Export Readings as CSV
        </button>
      </div>

      {/* App Info */}
      <div style={{ background: "white", borderRadius: "16px", padding: "24px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", marginBottom: "24px" }}>
        <h3 style={{ margin: "0 0 16px" }}>App Info</h3>
        <p style={{ margin: "8px 0" }}><strong>Version:</strong> 1.0.0</p>
        <p style={{ margin: "8px 0" }}>PiezoFabric Smart BP Socks</p>
        <p style={{ margin: "8px 0", color: "#555" }}>© 2026 PiezoFabric. All rights reserved.</p>
      </div>

      {/* Logout */}
      <button
        onClick={onLogout}
        style={{
          width: "100%",
          padding: "18px",
          background: "#dc3545",
          color: "white",
          border: "none",
          borderRadius: "12px",
          fontSize: "1.2rem",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Settings;