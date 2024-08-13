import React from 'react';

const Menu = ({ applications, onMenuClick }) => {
    return (
        <nav>
            <h2>Menu</h2>
            <ul>
                {applications.map(app => (
                    <li key={app.name}>
                        <button onClick={() => onMenuClick(app)}>{app.menuItem.label}</button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Menu;
