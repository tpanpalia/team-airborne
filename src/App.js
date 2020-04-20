import React from "react";
import "./App.css";
import TopBar from "./Components/TopBar";
import SideBar from "./Components/SideBar";
import MainContent from "./Components/MainContent";

function App() {
  return (
    <div>
      <SideBar />
      <TopBar />
      <MainContent />
    </div>
  );
}

export default App;
