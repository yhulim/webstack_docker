import { useState } from "react";
import "./AddPost.css";

const AddPost = (props) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const onPostAdd = props.onPostAdd;

    const addPost = (e) => {
        e.preventDefault();
        const post = {
            title: title,
            content: content
        }
        onPostAdd(post);
        setTitle('');
        setContent('');
    }

    return (
        <form className="Form" onSubmit={addPost}>
            <div>
                <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)}/>
            </div>
            <div>
                <input type="text" placeholder="Content" value={content} onChange={e => setContent(e.target.value)} />
            </div>
            <button type="submit">Add</button>
        </form>
    );
};

export default AddPost;