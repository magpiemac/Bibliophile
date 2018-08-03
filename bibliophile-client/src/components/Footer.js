import React from 'react';

const Footer = () => {
    return (
        <footer>
            <h2 className="display-4 text-center py-5 my-4">Features</h2>

            <div className="tab-content py-5">
                <div className="tab-pane active" id="rest">
                    <h3>Book Tracking</h3>
                    <p>Enter, review and track your favorite reads.</p>
                </div>
            </div>
        </footer>
    );
};



export default Footer;
