import React from "react";

const Header = () => {
  const getCurrentDateTime = () => {
    const currentDate = new Date().toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const currentTime = new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    return `${currentDate} ${currentTime}`;
  };

  return (
    <header>
      <div className="hamburger-menu">
        <span>&#9776;</span>
      </div>
      <h1>AccuKnox Assignment</h1>
      <div className="date-time">
        <span>{getCurrentDateTime()}</span>
      </div>
    </header>
  );
};

export default Header;
