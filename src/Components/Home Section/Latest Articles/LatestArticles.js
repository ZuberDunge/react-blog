import './LatestArticles.css';
import React from "react";
import LatestArticlesArray from './LatestArticlesArray';
import CoverImgSLide from "../../../Images/cover2.jpg"
import HomeArticlesImage1 from "../../../Images/articles-image.PNG"
import { useParams, useNavigate, Link } from "react-router-dom";






function CreateLatestArticles(data) {
    return <div className="articles-thumbnail">
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


function showMore() {
    LatestArticlesArray.slice(2, 4).map(CreateLatestArticles)
}

function LatestArticles() {

    return (
        <div className="LatestArticles-Container">
            <div className="heading-home-latest">Latest Articles</div>
            <div className="LatestArticles">

                <div className="articles-left-home">
                    {LatestArticlesArray.slice(1, 6).map(CreateLatestArticles)}


                    <div onClick={showMore} className="load-more"> <i className="fas fa-arrow-down"></i> Load More</div>



                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="low-brigtness" src={LatestArticlesArray[0].imgURL} className="d-block w-100" alt="alt" />
                                <div className="carousel-caption d-md-block">
                                    <Link to={`/${LatestArticlesArray[0].category}/${LatestArticlesArray[0].id}`}> <h5>{LatestArticlesArray[0].title}</h5></Link>
                                    <p>{LatestArticlesArray[0].category} {LatestArticlesArray[0].time}</p>
                                </div>
                            </div>
                            <div className="carousel-item ">
                                <img className="low-brigtness" src={LatestArticlesArray[1].imgURL} className="d-block w-100" alt="alt" />
                                <div className="carousel-caption d-md-block">
                                    <Link to={`/${LatestArticlesArray[1].category}/${LatestArticlesArray[1].id}`}> <h5>{LatestArticlesArray[1].title}</h5></Link>
                                    <p>{LatestArticlesArray[1].category} {LatestArticlesArray[1].time}</p>
                                </div>
                            </div>
                            <div className="carousel-item ">
                                <img className="low-brigtness" src={LatestArticlesArray[2].imgURL} className="d-block w-100" alt="alt" />
                                <div className="carousel-caption d-md-block">
                                    <Link to={`/${LatestArticlesArray[2].category}/${LatestArticlesArray[2].id}`}> <h5>{LatestArticlesArray[2].title}</h5></Link>
                                    <p>{LatestArticlesArray[2].category} {LatestArticlesArray[2].time}</p>
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
                    <div className="heading-home-latest" >Top Posts</div>

                    <div className="top-post-home margtb2rem">
                        <img src={HomeArticlesImage1} alt="kuch bhi" />

                        <div className="latest-post-title-1 margtop1rem">
                            Joshua Tree Overnight Adventure
                        </div>

                        <div className="margtop1rem">
                            <span className="latest-home-type ">Travel</span>
                            <span className="latest-home-date">/ August 21 2017</span>
                        </div>

                        <div className="top-post-section">
                            <img src={HomeArticlesImage1} alt="kuchbhi" />
                            <div className="top-post-section-home-flex">
                                <div>
                                    <div className="latest-top-post-section-title-1">
                                        Joshua Tree Overnight Adventure
                                    </div>
                                </div>
                                <div>
                                    <span className="latest-home-type">Travel</span>
                                    <span className="latest-home-date">/ August 21 2017</span>
                                </div>
                            </div>
                        </div>

                        <div className="top-post-section">
                            <img src={HomeArticlesImage1} alt="kuchbhi" />
                            <div className="top-post-section-home-flex">
                                <div>
                                    <div className="latest-top-post-section-title-1">
                                        Joshua Tree Overnight Adventure
                                    </div>
                                </div>
                                <div>
                                    <span className="latest-home-type">Travel</span>
                                    <span className="latest-home-date">/ August 21 2017</span>
                                </div>
                            </div>
                        </div>

                        <div className="top-post-section">
                            <img src={HomeArticlesImage1} alt="kuchbhi" />
                            <div className="top-post-section-home-flex">
                                <div>
                                    <div className="latest-top-post-section-title-1">
                                        Joshua Tree Overnight Adventure
                                    </div>
                                </div>
                                <div>
                                    <span className="latest-home-type">Travel</span>
                                    <span className="latest-home-date">/ August 21 2017</span>
                                </div>
                            </div>
                        </div>




                    </div>
                </div>
            </div >
        </div >
    );
}

export default LatestArticles;
