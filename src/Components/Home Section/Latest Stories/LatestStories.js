import './LatestStories.css';
import React, { useState } from "react";
import ArrayOfBlogs from '../../ArrayOfBlogs/ArrayOfBlogs';
import { Link } from 'react-router-dom';

function createCards(data) {
    return <div key={data.id} className="home-latest-post-btm">
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
    const [postNumber, setpostNumber] = useState(4)
    return (
        <div className="latest-stories-Container">
            <div className="latest">

                <div className="heading-home-latest border-btm">Latest Stories</div>

                <div className="home-latest-stories-flex">
                    {ArrayOfBlogs.slice(1, postNumber).map(createCards)}
                </div>
                <div onClick={() => setpostNumber(postNumber + 1)} className="load-more"> <i class="fas fa-arrow-down"></i> Load More</div>
            </div>
        </div >
    );
}

export default LatestStories;
