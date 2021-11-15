import './Intro.css';
import React from "react";
import coverHero from "../../../Images/cover2.jpg"
import { Link } from 'react-router-dom';
import LatestArticlesArray from '../Latest Articles/LatestArticlesArray';



function createHeroCover(Data) {
    return <div className="home-hero-title">
        <Link to={`/Travel/${Data.id}`}> <div>{Data.title} </div></Link>
        <div className="home-hero-title-date">{Data.time}</div>
    </div>

}

function Intro() {
    return (
        <div className="Intro-Container">
            <div className="intro">

                <div className="hero-cover">
                    {LatestArticlesArray.filter(function (creature) {
                        return creature.category == "Bollywood"
                    }).map(createHeroCover)}
                    {/* <div className="home-hero-title">
                        <Link to={`/Travel/${LatestArticlesArray[0].id}`}> <div>{LatestArticlesArray[0].title} </div></Link>
                        <div className="home-hero-title-date">{LatestArticlesArray[0].time}</div>
                    </div> */}

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
