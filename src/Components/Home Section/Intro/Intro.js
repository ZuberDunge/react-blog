import './Intro.css';
import React, { useState } from "react";


function Intro() {

    return (
        <div className="Intro-Container">
            <div className="intro">

                <div className="hero-cover">
                    <div className="home-hero-title">

                        <div>Title of vertical gallery  </div>
                        <div className="home-hero-title-date">  Travel / August 21 2017  </div>
                    </div>
                </div>
                <div className="secondary-covers">
                    <div className="second-cover-2">
                        <div className="home-second-title-2">
                            <div>Title of vertical gallery Title of vertical gallery </div>
                            <div className="home-hero-title-date-2">  Travel / August 21 2017  </div>
                        </div>
                    </div>
                    <div className="second-cover">
                        <div className="home-second-title">
                            <div>Title of vertical gallery  </div>
                            <div className="home-hero-title-date">  Travel / August 21 2017  </div>
                        </div>
                    </div>
                </div>



            </div>
        </div >
    );
}

export default Intro;
