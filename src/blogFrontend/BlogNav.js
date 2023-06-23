import { Link } from "react-router-dom";
import "../components/Navigation.css";

function BlogNav() {
  return (
    <header className="navigation">
      <nav className="nav">
        <Link to="/" className="logo-blog">
          My Blog
        </Link>
        <ul>
          <li className="list">
            <Link className="nav-link">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default BlogNav;
