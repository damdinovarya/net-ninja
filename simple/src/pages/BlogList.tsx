import { Link } from "react-router-dom"
import { Blog } from "../helpers/types"

const BlogList = ({ blogs }: {blogs: Blog[]}) => {
    return (
      <div className="blog-list">
        {
            blogs.map((blog) => 
                <div className="blog-preview" key={blog.id}>
                  <Link to={`/blogs/${blog.id}`}>
                    <h2>{blog.title}</h2> 
                    <p>Written by {blog.author}</p>                
                  </Link>
                </div>
            )
        }
      </div>
    )
  }

export default BlogList