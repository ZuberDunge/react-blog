
import React from "react";

import NavBar from '../Nav/Nav';
import Footer from '../Footer/Footer';
import "./SinglePost.css"
import AuthorAvatar from "../../Images/avatar.png"
import PostHero from "../../Images/post-hero-img.png"
import PostSSImage from "../../Images/code-ss-post.png"
import ClapImage from "../../Images/clap.png"
import LatestImage1 from "../../Images/sub-latest-single.PNG"
function SinglePost() {

    return (
        <>
            <NavBar />
            <div className="single-post">
                <div className="single-post-title">
                    5 Ways to animate a React app.
                </div>
                <div className="author-flex">
                    <div className="author-details-flex">
                        <div className="author-avatar">
                            <img src={AuthorAvatar} alt="avatar" />
                        </div>
                        <div className="author-details">
                            <div className="author-name">
                                Jake Peralta
                            </div>
                            <div className="author-time">
                                Jan 28, 2019 · 10 min read
                            </div>
                        </div>
                    </div>
                    <div className="share-btns">
                        <i className="fab fa-instagram-square"></i>
                        <i className="fab fa-linkedin"></i>
                        <i className="fab fa-facebook-square"></i>
                        <i className="fab fa-twitter-square"></i>
                    </div>
                </div>


                <img className="hero-img-single-post" src={PostHero} alt="hero" />
                <div className="post-para-single">
                    Animation in ReactJs app is a popular topic and there are many ways to create different types
                    of animations.Many developers create animation exclusively using css and adding classes to HTML tags.
                    This is a great way and you should use it. If you want to create complex animations you can pay attention to GreenSock. GreenSock is the most powerful animation platform.
                    There are also a lot of libraries, components for creating animation in React.
                    <br />Let’s talk about them
                </div>
                <img className="hero-img-single-post" src={PostSSImage} alt="hero" />
                <div className="post-tags-flex">
                    <span>
                        ReactJS
                    </span>
                    <span>
                        JavaScript
                    </span>
                    <span>
                        Animation
                    </span>
                </div>

                <div className="claps-flex">
                    <img src={ClapImage} alt="likes" />
                    <span>9.3k Claps</span>
                </div>


                <div className="author-details-flex">
                    <div className="author-avatar">
                        <img src={AuthorAvatar} alt="avatar" />
                    </div>
                    <div className="author-details">
                        <div className="author-time">
                            Writtn by
                        </div>
                        <div className="author-name">
                            Jake Peralta
                        </div>
                        <div className="author-time">
                            Jan 28, 2019 · 10 min read
                        </div>
                    </div>


                </div>
            </div>
            <div className="related-post-title">
                More From The Siren
            </div>
            <hr />
            <div className="single-post-more-flex">

                <div className="home-latest-post">
                    <div className="related-tags-post">
                        Also tagged Reactjs
                    </div>
                    <img className="thumbanil-img" src={LatestImage1} alt="latest post" />
                    <div className="latest-post-title-1">
                        Joshua Tree Overnight Adventure      </div>

                    <div className="author-details-flex">
                        <div className="author-avatar">
                            <img src={AuthorAvatar} alt="avatar" />
                        </div>
                        <div className="author-details">
                            <div className="author-name">
                                Jake Peralta
                            </div>
                            <div className="author-time">
                                Jan 28, 2019 · 10 min read
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-latest-post">
                    <div className="related-tags-post">
                        Related reads
                    </div>
                    <img className="thumbanil-img" src={LatestImage1} alt="latest post" />
                    <div className="latest-post-title-1">
                        Joshua Tree Overnight Adventure
                    </div>
                    <div className="author-details-flex">
                        <div className="author-avatar">
                            <img src={AuthorAvatar} alt="avatar" />
                        </div>
                        <div className="author-details">
                            <div className="author-name">
                                Jake Peralta
                            </div>
                            <div className="author-time">
                                Jan 28, 2019 · 10 min read
                            </div>
                        </div>
                    </div>

                </div>

                <div className="home-latest-post">
                    <div className="related-tags-post">
                        Related reads
                    </div>
                    <img className="thumbanil-img" src={LatestImage1} alt="latest post" />
                    <div className="latest-post-title-1">
                        Joshua Tree Overnight Adventure
                    </div>
                    <div className="author-details-flex">
                        <div className="author-avatar">
                            <img src={AuthorAvatar} alt="avatar" />
                        </div>
                        <div className="author-details">
                            <div className="author-name">
                                Jake Peralta
                            </div>
                            <div className="author-time">
                                Jan 28, 2019 · 10 min read
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
}

export default SinglePost;
