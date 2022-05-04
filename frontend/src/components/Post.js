import "./Post.css";

const Post = (props) => {
    const post = props.post;
    return (
        <div className="Post">
          <div><b>{post.title}</b></div>
          <div>{post.content}</div>
        </div>
    );
};

export default Post;