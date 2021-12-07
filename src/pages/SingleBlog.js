import React from 'react'
import { Link, useParams } from 'react-router-dom';

const SingleBlog = ({ blogs, edit, deleteBlog }) => {
  // get the params from the url
  const params = useParams()
  const id = parseInt(params.id)

  // find the particular blog the user wants to see based on the param
  const blog = blogs.find((p) => p.id === id)
  // console.log(blog)

  ////////////////////
  // Style Object
  /////////////////////
  const div = {
    textAlign: "center",
    border: "3px solid green",
    width: "80%",
    margin: "30px auto"
  }

  return <div style={div}>
    <h1>{blog?.title}</h1>
    <h2>{blog?.body}</h2>
    <button onClick={() => deleteBlog(blog)}>Delete</button>
    <button onClick={() => edit(blog)}>Edit</button>
    <Link to="/">
      <button>Go back</button>
    </Link>
  </div>
}

export default SingleBlog;
