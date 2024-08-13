import React from 'react';
import './MediaManager.css';

const MediaManager = ({ setMessage }) => {
    React.useEffect(() => {
        setMessage();
    }, [setMessage]);

    const media = [
        { id: 1, title: "Project Presentation", type: "Video" },
        { id: 2, title: "HR Policy Document", type: "Document" }
    ];

    return (
        <div className="media-manager">
            <h2>Media Manager V2</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {media.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.type}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MediaManager;
