import React from 'react';
import {useParams, Link} from "react-router-dom";
import {useEffect, useState} from "react";

const Singlepage = () => {
  const {id} = useParams()

  const [post, setPost] = useState(null)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => setPost(data))
  }, [id]);

  return (
    <div className={'singlepage'}>

      <Link to='/blog'>Go to Blog</Link>

      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <Link to={`/blog/${id}/edit`}>Edit post</Link>

        </>
      )
      }

    </div>
  );
};

export default Singlepage;