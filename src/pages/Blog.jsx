import React from 'react';
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";

const Blog = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=50')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, []);

  return (
    <ul>
      <h1 className={'header-title'}>
        Our news:
      </h1>

      <div className={'posts-list'}>
        {
          posts.map(post => (
            <Link key={post.id} to={`/blog/${post.id}`}>
              <li className={'posts-list__item'}>{post.title}</li>
            </Link>
          ))
        }
      </div>
    </ul>
  );
};

export default Blog;