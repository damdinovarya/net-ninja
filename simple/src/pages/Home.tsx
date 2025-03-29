import BlogList from "./BlogList"
import useFetch from "../helpers/useFetch"
import { Blog } from "../helpers/types"

const Home = () => {
    const { data: blogs, isPending, error }= useFetch<Blog[]>("http://localhost:8000/blogs")

    return (
        <div className='home'>
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { blogs && <BlogList blogs={blogs} /> }
        </div>
    )
}

export default Home;