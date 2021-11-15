
import React from "react";

import NavBar from '../Nav/Nav';
import Footer from '../Footer/Footer';
import "./SinglePost.css"
import AuthorAvatar from "../../Images/avatar.png"
import PostHero from "../../Images/post-hero-img.png"
import PostSSImage from "../../Images/code-ss-post.png"
import ClapImage from "../../Images/clap.png"
import LatestImage1 from "../../Images/sub-latest-single.PNG"
import { useParams, useNavigate, Link } from "react-router-dom";
import LatestArticlesArray from "../Home Section/Latest Articles/LatestArticlesArray";
import { useEffect, useState } from "react";


function SinglePost() {
    const { id } = useParams();
    const [blog, setblog] = useState(null)

    useEffect(() => {
        let blog = LatestArticlesArray.find(blog => blog.id === parseInt(id))
        if (blog) {
            setblog(blog)
        }
    })

    return (
        <>
            <NavBar />
            {
                blog ? <>
                    <div className="single-post">
                        <div className="single-post-title">
                            {blog.title}
                            <div className="author-flex">
                                <div className="author-details-flex">
                                    <div className="author-avatar">
                                        <img src={AuthorAvatar} alt="avatar" />
                                    </div>
                                    <div className="author-details">
                                        <div className="author-name">
                                            {blog.author}
                                        </div>
                                        <div className="author-time">
                                            {blog.category} · {blog.time} · {blog.readtime}
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


                            <img className="hero-img-single-post" src={blog.imgURL} alt="hero" />
                            <div className="post-para-single">
                                {blog.desc}
                            </div>

                            <div className="post-tags-flex">
                                <span>
                                    {blog.tags[0]}
                                </span>
                                <span>
                                    {blog.tags[1]}
                                </span>

                            </div>

                            <div className="claps-flex">
                                <img src={ClapImage} alt="likes" />
                                <span>0 Claps</span>
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
                                        {blog.author}
                                    </div>
                                    <div className="author-time">
                                        {blog.time} · 10 min read
                                    </div>
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

                </> : null
            }
            <Footer />
        </>
    );
}

export default SinglePost;
