
import React from "react";
import HomeArticlesImage1 from "../../Images/articles-image.PNG"
import NavBar from '../Nav/Nav';
import Footer from '../Footer/Footer';
import LatestArticlesArray from "../Home Section/Latest Articles/LatestArticlesArray";
import { Link } from "react-router-dom";


function CreateLatestArticles(data) {
    return <div className="articles-thumbnail">
        <img src={data.imgURL} alt="kuchbhi" />
        <div className="article-heading-home-flex">
            <div>
                <Link to={`/Bollywood/${data.id}`}> <div className="latest-post-title-1">
                    {data.title}     </div></Link>
                <p>{data.desc.substring(0, 150)}</p>
            </div>
            <div> <span className="latest-home-type">{data.category}</span>
                <span className="latest-home-date">{data.time}</span>
            </div>
        </div>

    </div>

}


function Technology() {

    return (
        <>
            <NavBar />
            <div className="LatestArticles-Container margtop2rem">

                <div className="LatestArticles">

                    <div className="articles-left-home">
                        <div className="heading-home-latest border-btm">Technology</div>

                        {LatestArticlesArray.filter(function (creature) {
                            return creature.category == "Technology"
                        }).map(CreateLatestArticles)}





                        {/* <div className="load-more"> <i class="fas fa-arrow-down"></i> Load More</div> */}




                    </div>
                    <div className="articles-right-home">



                        {/* 
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




                        </div> */}
                        <div className="advertisement-box">Advertisement</div>
                    </div>
                </div >
            </div >
            <Footer />
        </>
    );
}

export default Technology;
