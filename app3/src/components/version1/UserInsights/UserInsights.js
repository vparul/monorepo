import React from 'react';
import './UserInsights.css';

const UserInsights = ({ setMessage }) => {
    
    const handleSetMessage = () => {
        setMessage('User Insights V1 selected')
     };


    const insights = [
        { id: 1, user: "Alice", activity: "High" },
        { id: 2, user: "Bob", activity: "Medium" }
    ];

    return (
        <div className="user-insights">
            <h2>User Insights V1</h2>
            <button onClick={handleSetMessage} className="set-message-button">Set Message</button>
            <ul>
                {insights.map(insight => (
                    <li key={insight.id}>
                        <strong>{insight.user}</strong> - Activity Level: {insight.activity}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserInsights;
