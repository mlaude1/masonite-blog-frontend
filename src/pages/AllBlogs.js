import React from 'react'
import Blog from "../components/blog"

const AllBlogs = (props) => {
  // for each blog in the array, render a blog component
  
  return props.blogs.map((blog) => {
    return <Blog key={blog.id} blog={blog}/>
  })
}

export default AllBlogs;
