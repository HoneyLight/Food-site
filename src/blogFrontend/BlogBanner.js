import { Link } from "react-router-dom";

function BlogBanner() {
  return (
    <div className="blog-banner">
      <h2>Welcome to my Blog</h2>
      <div className="create-blog">
        <Link to= "/admin" className="create-blog-link">Create Blog</Link>
      </div>
    </div>
  );
}
export default BlogBanner;
