import './Latest.css';
import React from "react";

import LatestArray from './LatestArray';

function createCards(card) {
    return <div className="home-latest-post">
        <img src={card.imgUrl} alt="latest post" />
        <div className="latest-post-title-1">
            {card.title}    </div>
        <p> {card.desc.substring(0, 150)}</p>
        <div>
            <span className="latest-home-type"> {card.catagery}</span> <span className="latest-home-date"> {card.date}</span>
        </div>
    </div>
}
function Latest() {

    return (
        <div className="latest-Container">
            <div className="latest">

                <div className="heading-home-latest">The Latest</div>

                <div className="home-latest-flex">
                    {LatestArray.map(createCards)}
                </div>
            </div>
        </div >
    );
}

export default Latest;
