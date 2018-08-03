import React from 'react';
import oldLibrary from '../images/oldLibrary.jpg';

const Section = () => {
    return (
        <section className="row">
            <div className="col-md-1 col-lg-3">
                <div className="card">
                    <a>
                        <img src={oldLibrary} className="center" alt="Library"/>
                    </a>
                    <div className="card">
                        <h3>Welcome</h3>
                        <p>Enter, review and track your favorite reads.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};



export default Section;
