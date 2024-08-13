import React from 'react';

const LoginFormV1 = ({ setMessage }) => {
    const handleClick = () => {
        setMessage();
    };

    return (
        <div>
            <h2>Login Form Version 1 from App 2</h2>
            <button onClick={handleClick}>Send Message to Main App</button>
        </div>
    );
};

export default LoginFormV1;
