import React from 'react';
import Post from './Post';
import './App.css';

function App() {
  return (
    <div>
      <Post author="Erin Kwon" body="Okay werrrrk!" />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default App;
