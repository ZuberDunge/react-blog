
import React from "react";
import NavBar from '../Nav/Nav';
import Footer from '../Footer/Footer';

import AuthorAvatar from "../../Images/avatar.png"
import { useParams, useNavigate, Link } from "react-router-dom";
import LatestArticlesArray from "../Home Section/Latest Articles/LatestArticlesArray";
import { useEffect, useState } from "react";


function componentDidMount() {
    window.scrollTo(0, 0);
}
componentDidMount()

function relatedCards(data) {
    return <div className="home-latest-post-writer">

        <img src={data.imgURL} alt="latest post" />

        <Link to={`/${data.category}/${data.id}`}> <div className="latest-post-title-1">{data.title} </div></Link>
        <p>{data.desc.substring(0, 150)}   </p>
        <div>
            <span className="latest-home-type">{data.category}
            </span> <span className="latest-home-date">{data.time}   </span>
        </div>
    </div>
}



function WriterProfile() {
    const { author } = useParams();
    const [blog, setblog] = useState(null)




    useEffect(() => {
        let blog = LatestArticlesArray.find(blog => blog.author === author)
        if (blog) {
            setblog(blog)
        }
    })

    return (
        <>
            <NavBar />
            {
                blog ? <>
                    <div className="user-profile">
                        <div className="user-flex">
                            <div>
                                <img className="author-profile" src={AuthorAvatar} alt="Jake Peralta" />
                            </div>
                            <div className="user-details">
                                <div>  <h2 className="border-btm"> {blog.author} </h2>
                                    <button className="login-btn">Follow</button>
                                </div>

                            </div>

                        </div>

                        <div className="more-from">
                            More from {blog.author}
                        </div>
                        <div className="flex">


                            {LatestArticlesArray.filter(function (creature) {
                                return creature.author == blog.author
                            }).map(relatedCards)}
                        </div>
                    </div>

                </> : null
            }
            <Footer />
        </>
    );
}

export default WriterProfile;
