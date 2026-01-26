import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import Summary from "./components/Summary";
import Monitoring from "./components/Monitoring"; 
import Settings from "./components/Settings";

interface Profile {
  age: number;
  weight: number;
  height: number;
}

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState<"summary" | "monitoring" | "settings">("summary");
  const [isConnected, setIsConnected] = useState(false);

  // Profile state with localStorage persistence
  const [profile, setProfile] = useState<Profile>({
    age: 45,
    weight: 70,
    height: 175,
  });


  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("piezofabric-profile");
    if (saved) {
      setProfile(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem("piezofabric-profile", JSON.stringify(profile));
  }, [profile]);

  if (!isLoggedIn) {
    return <Login onLoginSuccess={() => setIsLoggedIn(true)} />;
  }

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <header style={{ background: "#0066cc", color: "white", padding: "16px", textAlign: "center" }}>
        <h1 style={{ margin: 0, fontSize: "1.6rem" }}>Smart BP Socks</h1>
        <p style={{ margin: "8px 0 0", fontSize: "0.9rem" }}>
          Socks: <span style={{ fontWeight: "bold", color: isConnected ? "#28a745" : "#dc3545" }}>
            {isConnected ? "Connected" : "Disconnected"}
          </span>
        </p>
      </header>

      <main style={{ flex: 1, overflowY: "auto" }}>
        {activeTab === "summary" && <Summary isConnected={isConnected} />}
        {activeTab === "monitoring" && <Monitoring isConnected={isConnected} setIsConnected={setIsConnected} />}
        {activeTab === "settings" && (
          <Settings
            profile={profile}
            setProfile={setProfile}
            onLogout={() => setIsLoggedIn(false)}
          />
        )}
      </main>

      {/* Bottom Tab Bar */}
      <nav style={{ display: "flex", background: "white", borderTop: "1px solid #e0eaff", position: "fixed", bottom: 0, width: "100%" }}>
        <button onClick={() => setActiveTab("summary")} style={{ flex: 1, padding: "16px", background: "none", border: "none", color: activeTab === "summary" ? "#0066cc" : "#666", fontWeight: activeTab === "summary" ? "bold" : "normal" }}>
          Summary
        </button>
        <button onClick={() => setActiveTab("monitoring")} style={{ flex: 1, padding: "16px", background: "none", border: "none", color: activeTab === "monitoring" ? "#0066cc" : "#666", fontWeight: activeTab === "monitoring" ? "bold" : "normal" }}>
          Monitor
        </button>
        <button onClick={() => setActiveTab("settings")} style={{ flex: 1, padding: "16px", background: "none", border: "none", color: activeTab === "settings" ? "#0066cc" : "#666", fontWeight: activeTab === "settings" ? "bold" : "normal" }}>
          Settings
        </button>
      </nav>
    </div>
  );
};

export default App;