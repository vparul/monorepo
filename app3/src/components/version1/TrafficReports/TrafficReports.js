import React from 'react';
import './TrafficReports.css';

const TrafficReports = ({ setMessage }) => {
    React.useEffect(() => {
        setMessage();
    }, [setMessage]);

    const reports = [
        { id: 1, type: "Monthly", views: 2000 },
        { id: 2, type: "Weekly", views: 500 }
    ];

    return (
        <div className="traffic-reports">
            <h2>Traffic Reports V1</h2>
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
