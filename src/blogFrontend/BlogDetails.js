import { useState } from "react";
import { useEffect } from "react";
import BlogNav from "./BlogNav";
import { useParams } from "react-router-dom";
import { IoSend, IoPricetagOutline } from "react-icons/io5";

// import { MdLoyalty } from "react-icons/md";


function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const [comments, setcomments] = useState([]);
  const [comment, setcomment] = useState("");
  const [commentErr, setcommentEff] = useState(false);

  const getBlog = () => {
    fetch(`https://64903af71e6aa71680cad9bc.mockapi.io/Blog/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setBlog(data);
        console.log(data);
      });
  };

  const getComments = () => {
    fetch("https://64903af71e6aa71680cad9bc.mockapi.io/comments")
      .then((resp) => resp.json())
      .then((data) => {
        const myComments = data.filter((comment) => comment.blog_id === id);
        setcomments(myComments);
      });
  };

  const handleComment = () => {
    if (comment == "") {
      setcommentEff(true);
      alert(" field required");
      return;
    }

    let commentDetail = {
      body: comment,
      date: new Date().toLocaleString(),
      blog_id: id,
    };

    fetch("https://64903af71e6aa71680cad9bc.mockapi.io/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(commentDetail),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
          alert("comment made");
          setcomments((preComments) => [...preComments, data])
      })
      .catch((err) => {
          console.log(err);
          
      });
      setcomment('');
  };

  useEffect(() => {
    getBlog();
    getComments();
  }, []);

  return (
    <div >
        <BlogNav />
        <div className="header">
            <h2 className="blog-title">{blog.title}</h2>
        </div>
        <div className="blog-card blog-details">
            <img src={blog.img} alt=""/>
            <h3 className="blog-cat"><IoPricetagOutline className="blog-cat-icon" />{blog.category}</h3>
            <p className="blog-desc">{blog.desc}</p>
            <p className="bf-date">{blog.date}</p>
        <div className="blog-comment">
          <form action="" className="blogcomment-form">
            <textarea cols="80" rows="5" value={comment} onChange={(e) => setcomment(e.target.value)} placeholder="Leave a comment..." className="comment-txt"></textarea>
            <button type="button" className="sendBtn" onClick={handleComment}>
              {<IoSend className="send-icon" />}
            </button>
          </form>
        </div>
        <div className="singleblog-comment">
          <h3>Comment(s): {comments.length}</h3>
          {comments.length !== 0 ? (
            comments.map((commt) => (
              <div key={commt.id} className="comments">
                <p className="blog-desc blog-comment">{commt.body}</p>
                <p className="bf-date">{commt.date}</p>
              </div>
            ))
          ) : (
            <p> Be the first to comment </p>
          )}
        </div>
      </div>
    </div>
  );
}
export default BlogDetails;




// NOTE THAT EVERYTHING DONE DOWN HERE IS CORRECT. WE ARE JUST WORKING ON THE COMMENTS, LIKE AND DISLIKE ICON TO WORK!!! 

// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import BlogNav from "./BlogNav";
// import { IoPricetagOutline, IoTimeOutline, IoChatbubbleOutline, IoThumbsUpOutline, IoThumbsDownOutline } from "react-icons/io5";


// function BlogDetails() {
//     const { id } = useParams();
//     const [blog, setBlog] = useState({});
//     const [like, setLike] = useState();
//     const [dislike, setDislike] = useState()

//     const increaseLike = () =>{
//         setLike(like + 1)
//     };
//     const increaseDislike = () =>{
//         setDislike(dislike + 1)
//     };
    

//     const getBlog = () => {
//         fetch(`https://64903af71e6aa71680cad9bc.mockapi.io/Blog/${id}`)
//             .then((resp) => resp.json())
//             .then((data) => {
//                 setBlog(data);
//                 console.log(data)
//             });
//     };

//     useEffect(() => {
//         getBlog();
//     }, []);

//     return (
//         <div>
//             <BlogNav />
//             <div className="header">
//                 <h2>{blog.title}</h2>
//             </div>
//             <div className="blog-card">
//                 <img src={blog.img} alt="Food" />
//                 <div className="blog-cat">
//                     <IoPricetagOutline className="blog-cat-icon" />
//                     <span>{blog.category}</span>
//                 </div>
//                 <h3 className="blog-title">{blog.title}</h3>
//                 <p className="blog-desc">{blog.desc}</p>
//                 <div className="blog-footer">
//                     <p className="bf-date">
//                         <IoTimeOutline className="blog-footer-icon" /> {blog.date}
//                     </p>
//                     <p>
//                         <IoChatbubbleOutline className="blog-footer-icon" /> 0
//                     </p>
//                     {/* <p>
//                         <IoThumbsUpOutline className="blog-footer-icon" onClick={increaseLike} /> {like}
//                     </p>
//                     <p>
//                         <IoThumbsDownOutline className="blog-footer-icon" onClick={increaseDislike}/> {dislike}
//                     </p> */}
//                     <p>
//                         <IoThumbsUpOutline className="blog-footer-icon" onClick={increaseLike} /> {like}
//                     </p>
//                     <p>
//                         <IoThumbsDownOutline className="blog-footer-icon" onClick={increaseDislike} /> {blog.dislike}
//                     </p>
//                 </div>
//                 </div>
//         </div>
//     )
// }

// export default BlogDetails;