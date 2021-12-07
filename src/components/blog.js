import React from 'react';
import { Link } from 'react-router-dom'

const Blog = ({ blog }) => {
  
  // ///////////////////////////
  // // Style Objects
  // ///////////////////////////
  // const div = {
  //   textAlign: "center",
  //   border: "3px solid",
  //   margin: "10px auto",
  //   width: "80%"
  // };

  return (
    <div className="blogs">
      <Link to={`/blog/${blog.id}`}>
        <h1>{blog.title}</h1>
        <h2>{blog.body}</h2> 
      </Link>
    </div>
  );
};

export default Blog;
