import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  const handleMenuItemClick = (index) => {
    setSelected(index);
  };

  return (
    <div className="Sidebar">
      <div className="logo">
        <h2>DashApp</h2>
      </div>

      {/* Menu div */}
      <div className="menu">
        <div
          className={selected === 0 ? "menuItem active" : "menuItem"}
          onClick={() => handleMenuItemClick(0)}
        >
          Dashboard
        </div>
        <div
          className={selected === 1 ? "menuItem active" : "menuItem"}
          onClick={() => handleMenuItemClick(1)}
        >
          Pie Chart
        </div>
        <div
          className={selected === 2 ? "menuItem active" : "menuItem"}
          onClick={() => handleMenuItemClick(2)}
        >
          Line Chart
        </div>
        <div
          className={selected === 3 ? "menuItem active" : "menuItem"}
          onClick={() => handleMenuItemClick(3)}
        >
          Map Pointer
        </div>
        <div
          className={selected === 4 ? "menuItem active" : "menuItem"}
          onClick={() => handleMenuItemClick(4)}
        >
          Analytics
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
