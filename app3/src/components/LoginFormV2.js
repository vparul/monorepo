import React from 'react';

const LoginFormV2 = ({ setMessage }) => {
    const handleClick = () => {
        setMessage();
    };

    return (
        <div>
            <h2>Version 2</h2>
            <button onClick={handleClick}>Send Message to Main App</button>
        </div>
    );
};

export default LoginFormV2;
