import './Latest.css';
import React, { useState } from "react";
import LatestImage1 from "../../../Images/sub-latest.PNG"


function Latest() {

    return (
        <div className="latest-Container">
            <div className="latest">

                <div className="heading-home-latest">The Latest</div>

                <div className="home-latest-flex">
                    <div className="home-latest-post">

                        <img src={LatestImage1} alt="latest post" />
                        <div className="latest-post-title-1">
                            Joshua Tree Overnight Adventure      </div>
                        <p>Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known
                            as a tourist destination. It has a plethora of temples and palaces</p>
                        <div>
                            <span className="latest-home-type">Travel</span> <span className="latest-home-date">/ August 21 2017</span>
                        </div>
                    </div>
                    <div className="home-latest-post">

                        <img src={LatestImage1} alt="latest post" />
                        <div className="latest-post-title-1">
                            Joshua Tree Overnight Adventure
                        </div>
                        <p>Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known
                            as a tourist destination.
                            It has a plethora of temples and palaces</p>
                        <div> <span className="latest-home-type">Travel</span> <span className="latest-home-date">/ August 21 2017</span>
                        </div>
                    </div>

                    <div className="home-latest-post">

                        <img src={LatestImage1} alt="latest post" />
                        <div className="latest-post-title-1">
                            Joshua Tree Overnight Adventure
                        </div>
                        <p>Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known
                            as a tourist destination.
                            It has a plethora of temples and palaces</p>
                        <div> <span className="latest-home-type">Travel</span> <span className="latest-home-date">/ August 21 2017</span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Latest;
