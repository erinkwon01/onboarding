import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import Post from './Post';

const dummyPosts = [
  {
    author: 'Erin Kwon',
    body: 'Good morning!',
  },
  {
    author: 'LA Blueprint',
    body: 'New onboarding project released :)',
  },
  {
    author: 'University of California Los Angeles',
    body: 'Happy Winter Break!',
  },
];

export default function PostsDisplay() {
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    //   mapping the posts into local storage so you can get the posts later
    dummyPosts.map((post) => (
      localStorage.setItem(post.author, post.body)
    ));
    console.log(localStorage);

    //   accessing the local storage items and setting posts to it
    const prepPosts = [];
    dummyPosts.map((post) => (
      prepPosts.push(localStorage.getItem(post.author))
    ));
    console.log(prepPosts);
    setPosts(prepPosts);
    console.log(posts);
  };

  useEffect(getPosts, []);

  return posts.map((post) => (
    <Post
      key={post.id}
      author={post.author}
      body={post.body}
    />
  ));
}
