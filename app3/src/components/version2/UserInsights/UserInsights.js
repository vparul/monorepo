import React from 'react';
import './UserInsights.css';

const UserInsights = ({ setMessage }) => {
    React.useEffect(() => {
        setMessage();
    }, [setMessage]);

    const insights = [
        { id: 1, user: "Charlie", engagement: "High" },
        { id: 2, user: "Diana", engagement: "Low" }
    ];

    return (
        <div className="user-insights">
            <h2>User Insights V2</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>User</th>
                        <th>Engagement Level</th>
                    </tr>
                </thead>
                <tbody>
                    {insights.map(insight => (
                        <tr key={insight.id}>
                            <td>{insight.id}</td>
                            <td>{insight.user}</td>
                            <td>{insight.engagement}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserInsights;
