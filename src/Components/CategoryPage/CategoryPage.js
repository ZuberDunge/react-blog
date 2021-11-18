
import React from "react";
import NavBar from '../Nav/Nav';
import Footer from '../Footer/Footer';
import { useParams, Link } from "react-router-dom";
import ArrayOfBlogs from "../ArrayOfBlogs/ArrayOfBlogs";
import { useEffect, useState } from "react";


function componentDidMount() {
    window.scrollTo(0, 0);
}
componentDidMount()

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


function MultiUse() {
    const [postNumber, setpostNumber] = useState(2)
    const { category } = useParams();
    const [blog, setblog] = useState(null)

    useEffect(() => {
        let blog = ArrayOfBlogs.find(blog => blog.category === category)
        if (blog) {
            setblog(blog)
        }
    }, [category])

    return (
        <>
            <NavBar />
            {
                blog ? <>

                    <div className="LatestArticles-Container margtop2rem">
                        <div className="LatestArticles">
                            <div className="articles-left-home">
                                <div className="heading-home-latest border-btm">{blog.category}</div>

                                {ArrayOfBlogs.filter((item) => item.category === blog.category
                                ).slice(0, postNumber).map(CreateLatestArticles)}

                                <div onClick={() => setpostNumber(postNumber + 2)} className="load-more"> <i class="fas fa-arrow-down"></i> Load More</div>

                            </div>
                            <div className="articles-right-home">
                                <div className="advertisement-box">Advertisement</div>
                            </div>
                        </div >
                    </div >
                </> : null
            }

            <Footer />
        </>
    );
}

export default MultiUse;
