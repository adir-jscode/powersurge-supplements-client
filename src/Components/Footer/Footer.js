import React from 'react';

const Footer = () => {
    const today = new Date();
    return (
        <div>
            <div className="text-center text-black mt-5 fw-bold">
        <p><small>Copyright &copy; {today.getFullYear()} Powersurge Supplements. All Rights Reserved</small></p>
      </div>
        </div>
    );
};

export default Footer;