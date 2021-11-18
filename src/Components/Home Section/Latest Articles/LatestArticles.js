import './LatestArticles.css';
import React, { useState } from "react";
import ArrayOfBlogs from '../../ArrayOfBlogs/ArrayOfBlogs';
import { Link } from "react-router-dom";

function createTopPOst(data) {
    return <div key={data.id} className="top-post-section">
        <img src={data.imgURL} alt="kuchbhi" />
        <div className="top-post-section-home-flex">
            <div>
                <Link to={`/${data.category}/${data.id}`}> <div className="latest-top-post-section-title-1">
                    {data.title.substring(0, 42)}
                </div> </Link>
            </div>
            <div>
                <span className="latest-home-type">{data.category}</span>
                <span className="latest-home-date">{data.time}</span>
            </div>
        </div>
    </div>
}


function CreateLatestArticles(data) {
    return <div key={data.id} className="articles-thumbnail">
        <img src={data.imgURL} alt="kuchbhi" />
        <div className="article-heading-home-flex">
            <div>
                <Link to={`/${data.category}/${data.id}`}> <div className="latest-post-title-1">
                    {data.title}     </div></Link>
                <p>{data.desc.substring(0, 150)}</p>
            </div>
            <div> <span className="latest-home-type">{data.category}</span>
                <span className="latest-home-date">{data.time}</span>
            </div>
        </div>

    </div>
}


function LatestArticles() {
    const [postNumber, setpostNumber] = useState(6);
    return (
        <div className="LatestArticles-Container">
            <div className="heading-home-latest border-btm">Latest Articles</div>
            <div className="LatestArticles">
                <div className="articles-left-home">
                    {ArrayOfBlogs.slice(3, postNumber).map(CreateLatestArticles)}
                    <div onClick={() => setpostNumber(postNumber + 2)} className="load-more">
                        <i className="fas fa-arrow-down"></i> Load More

                    </div>



                    <div id="carouselExampleCaptions" className="carousel slide margtb2rem" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="low-brigtness radnom5gh415f" src={ArrayOfBlogs[0].imgURL} className="d-block w-100" alt="cover" />
                                <div className="carousel-caption d-md-block">
                                    <Link to={`/${ArrayOfBlogs[0].category}/${ArrayOfBlogs[0].id}`}> <h5>{ArrayOfBlogs[0].title}</h5></Link>
                                    <p>{ArrayOfBlogs[0].category} {ArrayOfBlogs[0].time}</p>
                                </div>
                            </div>
                            <div className="carousel-item ">
                                <img className="low-brigtness radnom54fgh15f" src={ArrayOfBlogs[1].imgURL} className="d-block w-100" alt="sec" />
                                <div className="carousel-caption d-md-block">
                                    <Link to={`/${ArrayOfBlogs[1].category}/${ArrayOfBlogs[1].id}`}> <h5>{ArrayOfBlogs[1].title}</h5></Link>
                                    <p>{ArrayOfBlogs[1].category} {ArrayOfBlogs[1].time}</p>
                                </div>
                            </div>
                            <div className="carousel-item ">
                                <img className="low-brigtness radnom541nhjk5f" src={ArrayOfBlogs[2].imgURL} className="d-block w-100" alt="s" />
                                <div className="carousel-caption d-md-block">
                                    <Link to={`/${ArrayOfBlogs[2].category}/${ArrayOfBlogs[2].id}`}> <h5>{ArrayOfBlogs[2].title}</h5></Link>
                                    <p>{ArrayOfBlogs[2].category} {ArrayOfBlogs[2].time}</p>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                </div>
                <div className="articles-right-home">

                    <div className="advertisement-box-blog">Advertisement</div>

                    <br />
                    <div className="heading-home-latest border-btm" >Top Posts</div>

                    <div className="top-post-home margtb2rem">
                        <img src={ArrayOfBlogs[0].imgURL} alt="kuch bhi" />

                        <Link to={`/${ArrayOfBlogs[0].category}/${ArrayOfBlogs[0].id}`}>    <div className="latest-post-title-1 margtop1rem">
                            {ArrayOfBlogs[0].title}
                        </div></Link>

                        <div className="margtop1rem">
                            <span className="latest-home-type ">{ArrayOfBlogs[0].category}</span>
                            <span className="latest-home-date">{ArrayOfBlogs[0].time}</span>
                        </div>


                        {ArrayOfBlogs.slice(6, 9).map(createTopPOst)}





                    </div>
                </div>
            </div >
        </div >
    );
}

export default LatestArticles;
