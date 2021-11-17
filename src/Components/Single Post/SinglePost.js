
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


function componentDidMount() {
    window.scrollTo(0, 0);
}
componentDidMount()

function relatedCards(data) {
    return <div key={data.id} className="home-latest-post">
        <div className="related-tags-post">
        </div>
        <img className="thumbanil-img" src={data.imgURL} alt="latest post" />
        <Link onClick={componentDidMount} to={`/${data.category}/${data.id}`}>
            <div className="latest-post-title-1">
                {data.title}
            </div>
        </Link>

        <div className="author-details-flex">
            <div className="author-avatar">
                <img src={AuthorAvatar} alt="avatar" />
            </div>
            <div className="author-details">
                <div className="author-name">
                    {data.author}
                </div>
                <div className="author-time">
                    {data.time} · {data.readtime}
                </div>
            </div>
        </div>
    </div>
}



function SinglePost() {
    const { id } = useParams();
    const [blog, setblog] = useState(null)
    const [clicked, setclicked] = useState(false);
    var [counter, setcounter] = useState(85)

    const counterHandler = () => {
        setclicked(!clicked)
        console.log(clicked);

        if (clicked) {
            setcounter(counter - 1)
        } else {
            setcounter(counter + 1)
        }

    }

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
                    <div key={blog.id} className="single-post">
                        <div className="single-post-title">
                            {blog.title}
                            <div className="author-flex">
                                <div className="author-details-flex">
                                    <div className="author-avatar">
                                        <img src={AuthorAvatar} alt="avatar" />
                                    </div>
                                    <div className="author-details">
                                        <Link to={`/${blog.category}/${blog.id}/${blog.author}`}>

                                            <div className="author-name">
                                                {blog.author}
                                            </div>
                                        </Link>

                                        <div className="author-time">
                                            {blog.category} · {blog.time} · {blog.readtime}
                                        </div>
                                    </div>
                                </div>
                                <div className="share-btns">

                                    <a target="_blank" rel="noopener" href="https://www.linkedin.com/shareArticle?mini=true&url=Check%20out%20the%20blog%20&title=&summary=&source="><i className="fab fa-linkedin"></i></a>
                                    <a target="_blank" rel="noopener" href="https://www.facebook.com/sharer/sharer.php?u=Check%20out%20the%20blog%20"> <i className="fab fa-facebook-square"></i></a>
                                    <a target="_blank" rel="noopener" href="https://twitter.com/intent/tweet?text=Check%20out%20the%20blog"> <i className="fab fa-twitter-square"></i></a>
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
                                <img onClick={counterHandler} src={ClapImage} alt="likes" />
                                <span>{counter} Claps</span>
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
                                        {blog.time} · {blog.readtime}
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

                        {LatestArticlesArray.slice(1, 4).map(relatedCards)}

                    </div>

                </> : null
            }
            <Footer />
        </>
    );
}

export default SinglePost;
