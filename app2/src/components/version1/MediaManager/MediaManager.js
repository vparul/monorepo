import React from 'react';
import './MediaManager.css';

const MediaManager = ({ setMessage }) => {

    const handleSetMessage = () => {
        setMessage('Media Manager V1 selected')
     };

    const media = [
        { id: 1, title: "Summer Vacation Photos", type: "Image" },
        { id: 2, title: "Company Annual Report", type: "Document" }
    ];

    return (
        <div className="media-manager">
            <h2>Media Manager V1</h2>
            <button onClick={handleSetMessage} className="set-message-button">Set Message</button>
            <ul>
                {media.map(item => (
                    <li key={item.id}>
                        <strong>{item.title}</strong> - Type: {item.type}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MediaManager;
