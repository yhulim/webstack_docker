import Post from "./Post";
import "./Posts.css";

const Posts = (props) => {
    const posts = props.posts;
    return (
        <div className="Posts">
            {posts.map((post, i) => <Post key={i} post={post}/>)}
        </div>
    );
};

export default Posts;