import React, { useState } from "react";

const Tab = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div>
      <div className="tabs">
        <button
          className={activeTab === 1 ? "active" : ""}
          onClick={() => handleClick(1)}
        >
          Option 1
        </button>
        <button
          className={activeTab === 2 ? "active" : ""}
          onClick={() => handleClick(2)}
        >
          Option 2
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 1 && <p>Option 1 content goes here</p>}
        {activeTab === 2 && <p>Option 2 content goes here</p>}
      </div>
    </div>
  );
};

export default Tab;
