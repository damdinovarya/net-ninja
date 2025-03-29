import React, { useState } from "react";
import { useNavigate } from "react-router-dom"

const BlogCreate = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const blog = { title, body, author };

        fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("blog added");
            setIsPending(false);
            navigate("/");
        });
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                type="text" required 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />

                <label>Blog body:</label>
                <textarea 
                required 
                value={body}
                onChange={(e) => setBody(e.target.value)}
                />

                <label>Blog author:</label>
                <input 
                type="text" required 
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                />

                { !isPending && <button>Add Blog</button> }
                { isPending && <button disabled>Adding Blog...</button> }
            </form>
            <p>{ title }</p>
            <p>{ body }</p>
            <p>{ author }</p>
        </div>
    )
}

export default BlogCreate;