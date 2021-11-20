import './Intro.css';
import React from "react";
import { Link } from 'react-router-dom';
import ArrayOfBlogs from '../../ArrayOfBlogs/ArrayOfBlogs';



function createHeroCover(Data) {
    return <div key={Data.id} style={{ backgroundImage: `url(${Data.imgURL})` }} className="hero-cover">
        <div className="home-hero-title">

            <Link to={`/${Data.category}/${Data.id}`}>
                <div>
                    {Data.title}
                </div>
            </Link>
            <div className="home-hero-title-date">{Data.category}{Data.time}</div>
        </div>
    </div>
}

function createSecondaryHeroCover(Data) {
    return <div key={Data.id} className="second-cover">
        <img className="second-cover-gird-img" src={Data.imgURL} alt="cover=2" />
        <div className="home-second-title">
            <Link to={`/${Data.category}/${Data.id}`}>
                <div>
                    {Data.title}
                </div>
            </Link>
            <div className="home-hero-title-date">  {Data.category} {Data.time} </div>
        </div>
    </div>

}

function Intro() {
    return (
        <div className="Intro-Container">
            <div className="intro">


                {ArrayOfBlogs.filter(function (item) {
                    return item.id === 1
                }).map(createHeroCover)}



                {ArrayOfBlogs.slice(2, 4).map(createSecondaryHeroCover)}



            </div>
        </div >
    );
}

export default Intro;
