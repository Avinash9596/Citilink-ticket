import "./App.css";
import { useState, useEffect } from "react";
import image from "./logo-org.png";

function App() {
  const date = new Date();
  const [hour, setHour] = useState(date.getHours() % 12 || 12);
  const [min, setMinutes] = useState(date.getMinutes());
  const [sec, setSec] = useState(date.getSeconds());
  const [day, setDay] = useState(date.getHours() >= 12 ? "PM" : "AM");

  useEffect(() => {
    setInterval(() => {
      let date = new Date();
      setHour(date.getHours() % 12 || 12);
      setMinutes(date.getMinutes());
      setSec(date.getSeconds());
      setDay(date.getHours() >= 12 ? "PM" : "AM");
    }, 1000);
  });

  return (
    <div className="ticket">
      <div className="header">
        <div>
          <h2 style={{ position: "relative", color: "#3e3e3e" }}>
            <b>Citilink</b>
          </h2>
          <p style={{ position: "absolute", top: "4%" }}>
            Show operator your ticket
          </p>
        </div>
        <span className="close">X</span>
      </div>
      <div className="body">
        <div style={{ height: "250px" }}>
          <div className="logo">
            <img src={image} width="100" alt="CitiLink-Logo" />
          </div>
        </div>

        <h1 className="time">
          {hour}:{min < 9 ? "0" + min : min}:{sec < 9 ? "0" + sec : sec} {day}
        </h1>
        <div className="card">
          <h2 className="ticketType">Regular Ticket-to-Ride</h2>
          <span
            style={{ fontWeight: "500", fontSize: "11.5px", color: "dimgray" }}
          >
            Fort Wayne, IN
          </span>
          <p className="expiry">
            Expires {new Date().toString().slice(4, 10)}, {date.getFullYear()},{" "}
            {hour}:{min + 10} {day}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
