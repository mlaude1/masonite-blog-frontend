import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'

const SingleBlog = ({ blogs, edit, deleteBlog }) => {
  // get the params from the url
  const params = useParams()
  const id = parseInt(params.id)

  // find the particular blog the user wants to see based on the param
  const blog = blogs.find((p) => p.id === id)
  // console.log(blog)


  return <div className="single-blog">
    <h1>On this day: <span className="date">{blog?.title}</span></h1>
    <h2>{blog?.body}</h2>
    <Link to="/">
      <button class="back-btn"><FaArrowLeft className="arrow-icon" /></button>
    </Link>
    <button class="edit=btn" onClick={() => edit(blog)}>Edit</button>
    <button class="delete-btn" onClick={() => deleteBlog(blog)}>Delete</button>
  </div>
}

export default SingleBlog;
