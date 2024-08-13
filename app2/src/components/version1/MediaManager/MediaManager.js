import React from 'react';
import './MediaManager.css';

const MediaManager = ({ setMessage }) => {
    React.useEffect(() => {
        setMessage();
    }, [setMessage]);

    const media = [
        { id: 1, title: "Summer Vacation Photos", type: "Image" },
        { id: 2, title: "Company Annual Report", type: "Document" }
    ];

    return (
        <div className="media-manager">
            <h2>Media Manager V1</h2>
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
