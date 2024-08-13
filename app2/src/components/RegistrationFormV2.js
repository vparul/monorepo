import React from 'react';

const RegistrationFormV2 = ({ setMessage }) => {
    const handleClick = () => {
        setMessage();
    };

    return (
        <div>
            <h2>Registration Version 2</h2>
            <button onClick={handleClick}>Send Message to Main App</button>
        </div>
    );
};

export default RegistrationFormV2;
