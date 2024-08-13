import React from 'react';
import './TrafficReports.css';

const TrafficReports = ({ setMessage }) => {
   
    const handleSetMessage = () => {
        setMessage('Traffic Reports V1 selected')
     };


    const reports = [
        { id: 1, type: "Monthly", views: 2000 },
        { id: 2, type: "Weekly", views: 500 }
    ];

    return (
        <div className="traffic-reports">
            <h2>Traffic Reports V1</h2>
            <button onClick={handleSetMessage} className="set-message-button">Set Message</button>
            <ul>
                {reports.map(report => (
                    <li key={report.id}>
                        <strong>{report.type}</strong> - Views: {report.views}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TrafficReports;
