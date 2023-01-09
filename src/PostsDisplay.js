import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import Post from './Post';

// const dummyPosts = [
//   {
//     author: 'Erin Kwon',
//     body: 'Good morning!',
//   },
//   {
//     author: 'LA Blueprint',
//     body: 'New onboarding project released :)',
//   },
//   {
//     author: 'University of California Los Angeles',
//     body: 'Happy Winter Break!',
//   },
// ];

export default function PostsDisplay() {
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    //   mapping the posts into local storage so you can get the posts later
    const saved = localStorage.getItem('posts');
    const currentPosts = JSON.parse(saved);

    setPosts(currentPosts || []);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <div>Posts:</div>
      {posts.map((post, index) => (
        <Post key={index} author={post.author} body={post.body} />
      ))}
    </div>
  );
}
