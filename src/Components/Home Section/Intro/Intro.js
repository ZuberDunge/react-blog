import './Intro.css';
import React from "react";
import coverHero from "../../../Images/cover2.jpg"
import { Link } from 'react-router-dom';
import LatestArticlesArray from '../Latest Articles/LatestArticlesArray';



function createHeroCover(Data) {
    return <div className="home-hero-title">
        <Link to={`/${Data.category}/${Data.id}`}> <div>{Data.title} </div></Link>
        <div className="home-hero-title-date">{Data.time}</div>
    </div>
}

function createSecondaryHeroCover(Data) {
    return <div className="second-cover">
        <img className="second-cover-gird-img" src={Data.imgURL} alt="cover=2" />
        <div className="home-second-title">
            <Link to={`/${Data.category}/${Data.id}`}> <div>{Data.title} </div></Link>
            <div className="home-hero-title-date">  {Data.category} {Data.time} </div>
        </div>
    </div>

}

function Intro() {
    return (
        <div className="Intro-Container">
            <div className="intro">

                <div className="hero-cover">
                    {LatestArticlesArray.filter(function (creature) {
                        return creature.id == 0
                    }).map(createHeroCover)}
                    {/* <div className="home-hero-title">
                        <Link to={`/Travel/${LatestArticlesArray[0].id}`}> <div>{LatestArticlesArray[0].title} </div></Link>
                        <div className="home-hero-title-date">{LatestArticlesArray[0].time}</div>
                    </div> */}

                </div>


                {LatestArticlesArray.slice(1, 3).map(createSecondaryHeroCover)}



            </div>
        </div >
    );
}

export default Intro;
