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
                    <div className="card-block">
                        <h3 className="card-title">Your personal library</h3>
                        <p>Welcome</p>
                    </div>
                </div>
            </div>
        </section>
    );
};



export default Section;
