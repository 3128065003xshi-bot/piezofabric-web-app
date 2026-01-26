import React, { useState } from "react";
import Login from "./components/Login";
import "./index.css"; // Keep your global styles

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState("summary");

  if (!isLoggedIn) {
    return <Login onLoginSuccess={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="app">
      {/* Main app content - Summary tab as example (expand later) */}
      <header>
        <h1>Smart BP Socks</h1>
      </header>

      <main>
        {activeTab === "summary" && (
          <div>
            <h2>Summary</h2>
            <p>Welcome! Your BP history will appear here.</p>
            {/* Add charts, averages later */}
          </div>
        )}
        {activeTab === "monitoring" && <div><h2>Monitoring</h2><p>Live reading screen coming soon</p></div>}
        {activeTab === "settings" && <div><h2>Settings</h2><p>User profile & preferences</p></div>}
      </main>

      {/* Bottom Tab Bar */}
      <nav className="bottom-tab-bar">
        <button onClick={() => setActiveTab("summary")} className={activeTab === "summary" ? "active" : ""}>
          Summary
        </button>
        <button onClick={() => setActiveTab("monitoring")} className={activeTab === "monitoring" ? "active" : ""}>
          Monitor
        </button>
        <button onClick={() => setActiveTab("settings")} className={activeTab === "settings" ? "active" : ""}>
          Settings
        </button>
      </nav>
    </div>
  );
};

export default App;