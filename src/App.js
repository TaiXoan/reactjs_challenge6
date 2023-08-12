import React, { useState } from "react";
import './App.css'
import { BrowserRouter as Router } from "react-router-dom";
import ActiveComponent from "./Components/ActiveComponent";
import AllComponent from "./Components/AllComponent";
import CompletedComponent from "./Components/CompletedComponent";
import ContentComponent from "./Components/ContentComponent";

const App = () => {
  const [activeTab, setActiveTab] = useState("all");
  return (
    <Router>
      <div className="container">
        <div className="maincontent">
          <div className="todo">#todo</div>
          <div className="wrap-menu">
            <AllComponent
              setActiveTab={setActiveTab}
              activeTab={activeTab}
            ></AllComponent>
            <ActiveComponent
              setActiveTab={setActiveTab}
              activeTab={activeTab}
            ></ActiveComponent>
            <CompletedComponent
              setActiveTab={setActiveTab}
              activeTab={activeTab}
            ></CompletedComponent>
          </div>
          <ContentComponent activeTab={activeTab} />
        </div>
      </div>
    </Router>
  );
};

export default App;
