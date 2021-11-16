import './Latest.css';
import React from "react";

import { Link } from "react-router-dom";
import LatestArray from './LatestArray';
import LatestArticlesArray from '../Latest Articles/LatestArticlesArray';

function createCards(card) {
    return <div className="home-latest-post">
        <img src={card.imgURL} alt="latest post" />

        <Link to={`/${card.category}/${card.id}`}> <div className="latest-post-title-1">
            {card.title}     </div></Link>

        <p> {card.desc.substring(0, 150)}</p>
        <div>
            <span className="latest-home-type"> {card.category}</span> <span className="latest-home-date"> {card.time}</span>
        </div>
    </div>
}
function Latest() {

    return (
        <div className="latest-Container">
            <div className="latest">

                <div className="heading-home-latest">The Latest</div>

                <div className="home-latest-flex">
                    {LatestArticlesArray.slice(1, 4).map(createCards)}
                </div>
            </div>
        </div >
    );
}

export default Latest;
