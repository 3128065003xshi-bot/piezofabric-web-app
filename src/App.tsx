import React, { useState } from "react";
import Login from "./components/Login";
import Summary from "./components/Summary"; // ← New import

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState<"summary" | "monitoring" | "settings">("summary");

  if (!isLoggedIn) {
    return <Login onLoginSuccess={() => setIsLoggedIn(true)} />;
  }

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <header style={{ background: "#0066cc", color: "white", padding: "16px", textAlign: "center" }}>
        <h1 style={{ margin: 0, fontSize: "1.6rem" }}>Smart BP Socks</h1>
      </header>

      {/* Main Content */}
      <main style={{ flex: 1, overflowY: "auto" }}>
        {activeTab === "summary" && <Summary />}
        {activeTab === "monitoring" && (
          <div style={{ padding: "40px", textAlign: "center" }}>
            <h2>Monitoring</h2>
            <p>Live reading screen coming next!</p>
          </div>
        )}
        {activeTab === "settings" && (
          <div style={{ padding: "40px", textAlign: "center" }}>
            <h2>Settings</h2>
            <p>Profile & preferences</p>
          </div>
        )}
      </main>

      {/* Bottom Tab Bar */}
      <nav
        style={{
          display: "flex",
          background: "white",
          borderTop: "1px solid #e0eaff",
          position: "fixed",
          bottom: 0,
          width: "100%",
        }}
      >
        <button
          onClick={() => setActiveTab("summary")}
          style={{
            flex: 1,
            padding: "16px",
            background: "none",
            border: "none",
            color: activeTab === "summary" ? "#0066cc" : "#666",
            fontWeight: activeTab === "summary" ? "bold" : "normal",
          }}
        >
          Summary
        </button>
        <button
          onClick={() => setActiveTab("monitoring")}
          style={{
            flex: 1,
            padding: "16px",
            background: "none",
            border: "none",
            color: activeTab === "monitoring" ? "#0066cc" : "#666",
            fontWeight: activeTab === "monitoring" ? "bold" : "normal",
          }}
        >
          Monitor
        </button>
        <button
          onClick={() => setActiveTab("settings")}
          style={{
            flex: 1,
            padding: "16px",
            background: "none",
            border: "none",
            color: activeTab === "settings" ? "#0066cc" : "#666",
            fontWeight: activeTab === "settings" ? "bold" : "normal",
          }}
        >
          Settings
        </button>
      </nav>
    </div>
  );
};

export default App;