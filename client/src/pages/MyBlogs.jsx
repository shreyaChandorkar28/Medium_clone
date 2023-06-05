// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Cookies from "js-cookie";
// import {Link} from "react-router-dom";
// import Navbar from "../components/Navbar";
// function MyBlogs() {
//   const [username, setUsername] = useState("");
//   const [blogs, setBlogs] = useState([]);

//   useEffect(() => {
//     const storedUsername = Cookies.get("username");
//     if (storedUsername) {
//       setUsername(storedUsername);
//       fetchUserBlogs(storedUsername);
//     }
//   }, []);

//   // Fetch blogs associated with the logged-in user
//   const fetchUserBlogs = async (username) => {
//     try {
//       const response = await axios.get(`http://localhost:3001/myblogs?username=${username}`);
//       setBlogs(response.data);
//     } catch (error) {
//       console.error("Error fetching user blogs:", error);
//     }
//   };

//   // Delete a blog post
//   const deleteBlog = async (blogId) => {
//     try {
//       await axios.delete(`http://localhost:3001/blogs/${blogId}`);
//       // Refresh blogs after deletion
//       fetchUserBlogs(username);
//     } catch (error) {
//       console.error("Error deleting blog post:", error);
//     }
//   };

//   return (
//     <>
//     <Navbar/>
//     <br/><br/>
//       <h1>My Blogs</h1>
//       {blogs.map((blog) => (
//         <div key={blog.id}>
//           <h2>{blog.title}</h2>
//           {/* <img src= {`http://localhost:3001/uploads/${blog.img}`} alt={blog.title} /> */}
//           <img src={blog.img ? `http://localhost:3001/uploads/${blog.img}` : null} alt="Blog Image" height="100px" width="100px" />
//           <p>{blog.subtitle}</p>
//           <p>{blog.body}</p>
//           <p>Category: {blog.category}</p>
//           <p>Author: {blog.createdUser}</p>
//           <p>Time: {blog.timeCreated}</p>

//           {/* Edit button */}
//           <Link to={`/blogs/${blog.id}/edit`}>
//             <button className="editbtn">Edit</button>
//           </Link>

//           {/* Delete button */}
//           <button onClick={() => deleteBlog(blog.id)}>Delete</button>

//           {/* Read button/link */}
//           <a href={`/blogs/${blog.id}`}>Read</a>
//         </div>
//       ))}
//     </>
//   );
// }

// export default MyBlogs;



import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import moment from 'moment';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer/Footer.js';
import "./MyBlogs.css"; // Import the CSS file for styling

function MyBlogs() {
  const [username, setUsername] = useState("");
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const storedUsername = Cookies.get("username");
    if (storedUsername) {
      setUsername(storedUsername);
      fetchUserBlogs(storedUsername);
    }
  }, []);

  // Fetch blogs associated with the logged-in user
  const fetchUserBlogs = async (username) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/myblogs?username=${username}`
      );
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching user blogs:", error);
    }
  };

  // Delete a blog post
  const deleteBlog = async (blogId) => {
    try {
      await axios.delete(`http://localhost:3001/blogs/${blogId}`);
      // Refresh blogs after deletion
      fetchUserBlogs(username);
    } catch (error) {
      console.error("Error deleting blog post:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="heading">My Blogs</h1>
        <div className="blogs-container">
          {blogs.map((blog) => (
            <div key={blog.id} className="blog-card">
              <h2 className="blog-title">{blog.title}</h2>
              <img
                src={blog.img ? `http://localhost:3001/uploads/${blog.img}` : null}
                alt="Blog Image"
                className="blog-image"
              />
              <p className="blog-subtitle">{blog.subtitle}</p>
              {/* <p className="blog-body">{blog.body}</p> */}
              <p className="blog-category">Category: {blog.category}</p>
              <p className="blog-author">Author: {blog.createdUser}</p>
              <p className="blog-time">Time: {moment(blog.timeCreated).format('MMMM Do YYYY, h:mm:ss a')}</p>

              {/* Edit button */}
              <Link to={`/blogs/${blog.id}/edit`}>
                <button className="editbtn">Edit</button>
              </Link>

              {/* Delete button */}
              <button onClick={() => deleteBlog(blog.id)} className="deletebtn">
                Delete
              </button>

              {/* Read button/link */}
              <Link to={`/blogs/${blog.id}`} className="read-link">
                Read
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default MyBlogs;
