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

                <div className="tab-pane" id="es2015">
                    <h3>ES2015</h3>
                    <p>aka ES6</p>
                </div>

                <div className="tab-pane" id="unitTesting">
                    <h3>Unit Testing</h3>
                    <ul>
                        <li>Jest</li>
                        <li>Enzyme</li>
                        <li>Nock</li>
                        <li>Expect assertion</li>
                        <li>Code coverage</li>
                    </ul>
                </div>

                <div className="tab-pane" id="others">
                    <h3>Others</h3>
                    <ul>
                        <li>Redux</li>
                        <li>Redux Form</li>
                        <li>Lodash</li>
                        <li>React Bootstrap Table</li>
                        <li>Font Awesome (for icons)</li>
                        <li>Hot Module Replacement (HMR)</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};



export default Footer;
