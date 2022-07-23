import React from 'react';
import "./Warning.css"

const Warning = () => {
    return (
        <div className="text-center fw-bold mt-24 text-3xl background">
            <p>Your session have been expired.Please log out And then log in again to Load the page.</p>
        </div>
    );
};

export default Warning;