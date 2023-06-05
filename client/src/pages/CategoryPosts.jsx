// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import moment from 'moment';
// import { useLocation } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import './CategoryPosts.css';
// const CategoryPosts = () => {
//   const [posts, setPosts] = useState([]);
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const category = queryParams.get("cat");

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3001/posts?cat=${category}`);
//         setPosts(response.data);
//       } catch (error) {
//         console.error("Error fetching posts: ", error);
//       }
//     };

//     fetchPosts();
//   }, [category]);

//   return (
//     <div>
//       <Navbar />
//       <br />
//       <div className="home2">
//         <h2>{category.toUpperCase()} Posts</h2>
//         <div className="posts2">
//           {posts.map((post) => (
//             <div key={post.id} className="post2">
//               <img src={`http://localhost:3001/uploads/${post.img}`} alt={post.title} className="img2" style={{ width: '300px', height: '300px' }} />
//               <div className="content21">
//                 <h3>{post.title}</h3>
//                 <p>{post.subtitle}</p>
//                 <p>Author: {post.createdUser}</p>
//                 <p>Time: {moment(post.timeCreated).format('MMMM Do YYYY, h:mm:ss a')}</p>
//                 <a href={`/posts/${post.id}`} className="link2">
//                   <button className="btnlink2">Read</button>
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CategoryPosts;




import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from 'moment';
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer/Footer.js';
import './CategoryPosts.css';
const CategoryPosts = () => {
  const [blogs, setBlogs] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("cat");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/posts?cat=${category}`);
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching posts: ", error);
      }
    };

    fetchPosts();
  }, [category]);

  return (
    <div>
      <Navbar />
      <br />
      <div className="home2">
        <h2>{category.toUpperCase()} Posts</h2>
        <div className="posts2">
          {blogs.map((blog) => (
            <div key={blog.id} className="post2">
              <img src={`http://localhost:3001/uploads/${blog.img}`} alt={blog.title} className="img2" style={{ width: '300px', height: '300px' }} />
              <div className="content21">
                <h3>{blog.title}</h3>
                <p>{blog.subtitle}</p>
                <p>Author: {blog.createdUser}</p>
                <p>Time: {moment(blog.timeCreated).format('MMMM Do YYYY, h:mm:ss a')}</p>
                <a href={`/blogs/${blog.id}`} className="link2">
                  <button className="btnlink2">Read</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <br/><br/>
      <Footer/>
    </div>
  );
};

export default CategoryPosts;
