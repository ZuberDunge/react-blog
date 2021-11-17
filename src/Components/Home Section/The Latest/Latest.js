import './Latest.css';
import React from "react";

import { Link } from "react-router-dom";

import LatestArticlesArray from '../Latest Articles/LatestArticlesArray';

function createCards(card) {
    return <div key={card.id} className="home-latest-post">
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

                <div className="heading-home-latest border-btm">The Latest</div>

                <div className="home-latest-flex">
                    {LatestArticlesArray.slice(6, 10).map(createCards)}
                </div>
            </div>
        </div >
    );
}

export default Latest;
