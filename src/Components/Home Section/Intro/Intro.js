import './Intro.css';
import React from "react";

const heroCoverArray = [
    {
        title: "Title of vertical gallery",
        time: "Travel / August 21 2017 "
    }
]

function createHeroCover(Data) {
    return <div className="home-hero-title">
        <div>{Data.title} </div>
        <div className="home-hero-title-date">{Data.time}</div>
    </div>

}

function Intro() {
    return (
        <div className="Intro-Container">
            <div className="intro">

                <div className="hero-cover">
                    {heroCoverArray.map(createHeroCover)}
                </div>
                <div className="secondary-covers">
                    <div className="second-cover-2">
                        <div className="home-second-title">
                            <div>Title of vertical gallery Title of vertical gallery </div>
                            <div className="home-hero-title-date">  Travel / August 21 2017  </div>
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
