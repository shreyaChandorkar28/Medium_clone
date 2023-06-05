import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from 'moment';
import { useParams } from "react-router-dom";
import Navbar from '../components/Navbar.js';
import './BlogDetails.css';
function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetchBlogData();
  }, []);

  // Fetch the blog data
  const fetchBlogData = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/blogs/${id}`);
      setBlog(response.data);
    } catch (error) {
      console.error("Error fetching blog data:", error);
    }
  };

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar/>
      <br/>
      <div className="blogdet">
      <h1 className="bh">{blog.title}</h1>
      <br/>
      <span>Published By: {blog.createdUser}</span> &nbsp;&nbsp;&nbsp;
      <span className="pi">Published In : {blog.category}</span> &nbsp;&nbsp;&nbsp;
      <span className="tc">Time Created: {moment(blog.timeCreated).format('MMMM Do YYYY, h:mm:ss a')}</span>
      <br/><br/>
      <img src= {`http://localhost:3001/uploads/${blog.img}`} alt={blog.title} height="400px" width="800px" className="bi"/>
      <br/><br/>
      <p className="bb">{blog.body}</p>
      </div>
    </div>
  );
}

export default BlogDetails;
