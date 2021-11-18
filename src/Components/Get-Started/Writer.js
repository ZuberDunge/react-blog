
import React from "react";
import NavBar from '../Nav/Nav';
import Footer from '../Footer/Footer';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { useParams, Link } from "react-router-dom";
import LatestArticlesArray from "../Home Section/Latest Articles/LatestArticlesArray";
import { useEffect, useState } from "react";


function componentDidMount() {
    window.scrollTo(0, 0);
}
componentDidMount()

function relatedCards(data) {
    return <div key={data.id} className="home-latest-post-writer">

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
    const [follow, setfollow] = useState(false)

    useEffect(() => {
        let blog = LatestArticlesArray.find(blog => blog.author === author)
        if (blog) {
            setblog(blog)
        }
    }, [author])

    return (
        <>
            <NavBar />
            {
                blog ? <>
                    <div className="user-profile">
                        <div className="user-flex">
                            <div>
                                <Stack direction="row" spacing={2}>

                                    <Avatar sx={{ bgcolor: deepOrange[500], width: 90, height: 90, fontSize: 65 }}>{blog.author.charAt(0)}</Avatar>

                                </Stack>
                            </div>
                            <div className="user-details">
                                <div>  <h2 className="border-btm"> {blog.author} </h2>
                                    <button
                                        onClick={() => setfollow(!follow)} className="login-btn">
                                        {follow ? "Followed" : "Follow"}</button>
                                </div>

                            </div>

                        </div>

                        <div className="more-from">
                            More from {blog.author}
                        </div>
                        <div className="flex">


                            {LatestArticlesArray.filter(function (creature) {
                                return creature.author === blog.author
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
