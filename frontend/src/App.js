import { useEffect, useState } from 'react';
import './App.css';
import AddPost from './components/AddPost';
import Posts from './components/Posts';

const App = () => {
  const [posts, setPosts] = useState([]);

  const addPostHandler = (post) => {
    fetch(`/post`, {
      method: 'POST',
      body: JSON.stringify(post),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      listPosts();
    });
  };

  const listPosts = () => {
    fetch(`/post`)
      .then(res => res.json())
      .then(posts => setPosts(posts));
  }

  useEffect(() => {
    listPosts();
  }, []);

  return (
    <div className="App">
      <AddPost onPostAdd={addPostHandler}/>
      <Posts posts={posts}/>
    </div>
  );
}

export default App;
