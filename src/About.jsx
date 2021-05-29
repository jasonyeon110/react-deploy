import React from 'react';
import selfie from './images/IMG_1692.JPG';

export default function About() {
    return (
        <section className="container-fluid" id="sec-two">
            <div className="row align-items-center h-100">

                <div className="col-lg-1"></div>
                <div className="col-lg-7">
                    <div id="headingGroup" className="text-center d-lg-block mt-5">
                        <h2 id="about-h1">I am a <strong> science/tech nerd </strong>who is currently working <br /> as a Research scientist at a biotech company. <br />
                        But preparing to become a
                        <strong className="underLine"> <br /> Software Engineer. </strong></h2>
                    </div>
                </div>
                <div className="col-lg-4" id="selfie-container">
                    <img className="img-fluid" src={selfie} alt="selfie picture" id="selfie" />
                </div>
            </div>
        </section>
    )
}
