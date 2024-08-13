import React from 'react';

const Menu = ({ applications, onMenuClick }) => {
    return (
        <div>
            <h2>Menu</h2>
            <ul>
                {applications.map((app) => (
                    <li key={app.name}>
                        <a href="#" onClick={() => onMenuClick(app)}>
                            {app.menuItem.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Menu;
