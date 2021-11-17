import './LatestStories.css';
import React from "react";
import LatestArticlesArray from '../Latest Articles/LatestArticlesArray';
import { Link } from 'react-router-dom';

function createCards(data) {
    return <div key={data.id} className="home-latest-post">
        <img src={data.imgURL} alt="latest post" />

        <Link to={`/${data.category}/${data.id}`}>
            <div className="latest-post-title-1">
                {data.title}
            </div>
        </Link>
        <p>{data.desc.substring(0, 150)}</p>
        <div>
            <span className="latest-home-type">
                {data.category}
            </span>
            <span className="latest-home-date">
                {data.time}   </span>
        </div>
    </div>
}




function LatestStories() {

    return (
        <div className="latest-stories-Container">
            <div className="latest">

                <div className="heading-home-latest border-btm">Latest Stories</div>

                <div className="home-latest-stories-flex">
                    {LatestArticlesArray.slice(1, 4).map(createCards)}
                </div>
            </div>
        </div >
    );
}

export default LatestStories;
