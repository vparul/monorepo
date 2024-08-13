import React from 'react';

const RegistrationFormV2 = ({ setMessage }) => {
    const handleClick = () => {
        setMessage();
    };

    return (
        <div>
            <h2>Registration Form Version 2 from App 2</h2>
            <button onClick={handleClick}>Send Message to Main App</button>
        </div>
    );
};

export default RegistrationFormV2;
