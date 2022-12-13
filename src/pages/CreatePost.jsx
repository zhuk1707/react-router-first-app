import React from 'react';
import {Link} from "react-router-dom";

const CreatePost = () => {
  return (
    <div className={''}>
      <Link to='/blog'>Go to Blog</Link>


      <h2>Post creating</h2>

      <form action="" style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
        <input type="text"/>
        <input type="text"/>
        <button>Create</button>
      </form>
    </div>
  );
};

export default CreatePost;