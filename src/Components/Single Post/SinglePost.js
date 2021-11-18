
import React from "react";
import NavBar from '../Nav/Nav';
import Footer from '../Footer/Footer';
import "./SinglePost.css"
import AuthorAvatar from "../../Images/avatar.png"
import ClapImage from "../../Images/clap.png"
import { useParams, Link } from "react-router-dom";
import ArrayOfBlogs from "../ArrayOfBlogs/ArrayOfBlogs";
import { useEffect, useState } from "react";
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';

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
    var [counter, setcounter] = useState(0)
    const [open, setOpen] = useState(false);
    const [alert, setalert] = useState(false)


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const counterHandler = () => {
        if (localStorage.getItem("user") !== null) {
            setclicked(!clicked)
            if (clicked) {
                setcounter(counter - 1)
            } else {
                setcounter(counter + 1)
            }
        } else {
            setalert(true)
            setOpen(true);
            setTimeout(function () {
                return setOpen(false)
            }, 2000);

        }
    }

    useEffect(() => {


        let blog = ArrayOfBlogs.find(blog => blog.id === parseInt(id))
        if (blog) {
            setblog(blog)

        }


    }, [id])

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
                                        <Stack direction="row" spacing={2}>

                                            <Avatar sx={{ bgcolor: deepPurple[500], width: 90, height: 90, fontSize: 65 }}>{blog.author.charAt(0)}</Avatar>

                                        </Stack>

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

                                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/shareArticle?mini=true&url=Check%20out%20the%20blog%20&title=&summary=&source="><i className="fab fa-linkedin"></i></a>
                                    <a target="_blank" rel="noreferrer" href="https://www.facebook.com/sharer/sharer.php?u=Check%20out%20the%20blog%20"> <i className="fab fa-facebook-square"></i></a>
                                    <a target="_blank" rel="noreferrer" href="https://twitter.com/intent/tweet?text=Check%20out%20the%20blog"> <i className="fab fa-twitter-square"></i></a>
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
                            {alert ? <div className="Snackbar">
                                <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                                    <Alert onClose={handleClose} severity="error" sx={{ width: '300px' }}>
                                        LogIn to Hit Like
                                    </Alert>
                                </Snackbar></div>
                                : null}
                            <div className="claps-flex">
                                <img onClick={counterHandler} src={ClapImage} alt="likes" />
                                <span>{counter} Claps</span>
                            </div>


                            <div className="author-details-flex">
                                <div className="author-avatar">
                                    <Stack direction="row" spacing={2}>

                                        <Avatar sx={{ bgcolor: deepPurple[500], width: 90, height: 90, fontSize: 65 }}>{blog.author.charAt(0)}</Avatar>

                                    </Stack>
                                </div>
                                <div className="author-details">
                                    <div className="author-time">
                                        Writtn by
                                    </div>
                                    <Link to={`/${blog.category}/${blog.id}/${blog.author}`}>
                                        <div className="author-name">
                                            {blog.author}
                                        </div></Link>
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

                        {ArrayOfBlogs.slice(1, 4).map(relatedCards)}

                    </div>

                </> : null
            }

            <Footer />
        </>
    );
}

export default SinglePost;
