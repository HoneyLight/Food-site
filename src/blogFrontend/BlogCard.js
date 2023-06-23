import { useEffect, useState } from "react";
import { IoPricetagOutline, IoTimeOutline, IoChatbubbleOutline, IoThumbsUpOutline, IoThumbsDownOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
// import img from "../components/images/food2.jpg";
// import { MdLoyalty } from "react-icons/md";

function BlogCard() {
    const [blogs, setBlogs] = useState([]);
    // const [like, setLike] = useState(0);
    // const [dislike, setDislike] = useState(0)

    // const increaseLike = () =>{
    //     setLike(like + 1)
    // };
    // const increaseDislike = () =>{
    //     setDislike(dislike + 1)
    // };

    const getBlogs = () => {
        fetch("https://64903af71e6aa71680cad9bc.mockapi.io/Blog")
            .then((resp) => resp.json())
            .then((data) => {
                setBlogs(data);
            })
    };
    useEffect(() => {
        getBlogs()
    }, []);

    return (
        <div className="blogCard-container">
            {blogs.map((blog) => (
                <div className="blog-card" key={blog.id}>
                    <Link to={`/blog/${blog.id}`}>
                        <img src={blog.img} alt="Food" />
                    </Link>
                    <div className="blog-cat">
                        <IoPricetagOutline className="blog-cat-icon" />
                        <span>{blog.category}</span>
                    </div>
                        <h3 className="blog-title">{blog.title}</h3>
                        <p className="blog-desc">{blog.desc}</p>
                        <div className="blog-footer">
                            <p className="bf-date">
                                <IoTimeOutline className="blog-footer-icon" /> {blog.date}
                            </p>
                            <p>
                                <IoChatbubbleOutline className="blog-footer-icon" /> 0
                            </p>
                            <p>
                                <IoThumbsUpOutline className="blog-footer-icon" /> {blog.like}
                            </p>
                            <p>
                                <IoThumbsDownOutline className="blog-footer-icon" /> {blog.dislike}
                            </p>
                        </div>
                </div>

            ))}

        </div>
    )
}

export default BlogCard;