import './LatestArticles.css';
import React, { useState } from "react";
import HomeArticlesImage1 from "../../../Images/articles-image.PNG"
import CoverImgSLide from "../../../Images/cover2.jpg"

function LatestArticles() {

    return (
        <div className="LatestArticles-Container">
            <div className="heading-home-latest">Latest Articles</div>
            <div className="LatestArticles">

                <div className="articles-left-home">
                    <div className="articles-thumbnail">
                        <img src={HomeArticlesImage1} alt="kuchbhi" />
                        <div className="article-heading-home-flex">
                            <div>
                                <div className="latest-post-title-1">
                                    Joshua Tree Overnight Adventure      </div>
                                <p>Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known
                                    as a tourist destination. It has a plethora of temples and palaces</p>
                            </div>
                            <div> <span className="latest-home-type">Travel</span> <span className="latest-home-date">/ August 21 2017</span>
                            </div>
                        </div>

                    </div>

                    <div className="articles-thumbnail">
                        <img src={HomeArticlesImage1} alt="kuchbhi" />
                        <div className="article-heading-home-flex">
                            <div>
                                <div className="latest-post-title-1">
                                    Joshua Tree Overnight Adventure      </div>
                                <p>Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known
                                    as a tourist destination. It has a plethora of temples and palaces</p>
                            </div>
                            <div> <span className="latest-home-type">Travel</span> <span className="latest-home-date">/ August 21 2017</span>
                            </div>
                        </div>
                    </div>

                    <div className="articles-thumbnail">
                        <img src={HomeArticlesImage1} alt="kuchbhi" />
                        <div className="article-heading-home-flex">
                            <div>
                                <div className="latest-post-title-1">
                                    Joshua Tree Overnight Adventure      </div>
                                <p>Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known
                                    as a tourist destination. It has a plethora of temples and palaces</p>
                            </div>
                            <div> <span className="latest-home-type">Travel</span> <span className="latest-home-date">/ August 21 2017</span>
                            </div>
                        </div>
                    </div>

                    <div className="articles-thumbnail">
                        <img src={HomeArticlesImage1} alt="kuchbhi" />
                        <div className="article-heading-home-flex">
                            <div>
                                <div className="latest-post-title-1">
                                    Joshua Tree Overnight Adventure      </div>
                                <p>Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known
                                    as a tourist destination. It has a plethora of temples and palaces</p>
                            </div>
                            <div> <span className="latest-home-type">Travel</span> <span className="latest-home-date">/ August 21 2017</span>
                            </div>
                        </div>

                    </div>
                    <div className="articles-thumbnail">
                        <img src={HomeArticlesImage1} alt="kuchbhi" />
                        <div className="article-heading-home-flex">
                            <div>
                                <div className="latest-post-title-1">
                                    Joshua Tree Overnight Adventure      </div>
                                <p>Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known
                                    as a tourist destination. It has a plethora of temples and palaces</p>
                            </div>
                            <div> <span className="latest-home-type">Travel</span> <span className="latest-home-date">/ August 21 2017</span>
                            </div>
                        </div>

                    </div>
                    <div className="load-more"> <i className="fas fa-arrow-down"></i> Load More</div>


                    {/* <div className="latest-cover-slide">
                        <div className="latest-cover-slide-title">
                            <div>Title of vertical gallery  </div>
                            <div className="home-hero-title-date">  Travel / August 21 2017  </div>
                        </div>
                    </div> */}
                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={CoverImgSLide} className="d-block w-100" alt="alt" />
                                <div className="carousel-caption d-md-block">
                                    <h5>Title of vertical gallery</h5>
                                    <p>Travel / August 21 2017</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={CoverImgSLide} className="d-block w-100" alt="alt" />
                                <div className="carousel-caption d-md-block">
                                    <h5>Title of vertical gallery</h5>
                                    <p>Travel / August 21 2017</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={CoverImgSLide} className="d-block w-100" alt="alt" />
                                <div className="carousel-caption d-md-block">
                                    <h5>Title of vertical gallery</h5>
                                    <p>Travel / August 21 2017</p>
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

                    <div className="advertisement-box">Advertisement</div>

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
