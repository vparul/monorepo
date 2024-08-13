import React from "react";

import "./TrafficReports.css";

const TrafficReports = ({ setMessage }) => {
    const reports = [
      { id: 1, type: "Daily", views: 300 },
      { id: 2, type: "Yearly", views: 10000 },
    ];

  const handleSetMessage = () => {
    setMessage("Traffic Reports V2 selected");
  };

  return (
    <div className="traffic-reports">
      <h2>Traffic Reports </h2>
      <button onClick={handleSetMessage} className="set-message-button">
        Set Message
      </button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Views</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report.id}>
              <td>{report.id}</td>
              <td>{report.type}</td>
              <td>{report.views}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrafficReports;
